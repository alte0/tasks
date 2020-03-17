import React, {PureComponent} from 'react';
import Container from "./components/container/container";
import ScreenSingIn from "./screens/screen-sign-in";
import ScreenSingUp from "./screens/screen-sign-up";
import ScreenAddTask from "./screens/screen-add-task";
import ScreenTask from "./screens/screen-task";
import ScreenTasks from "./screens/screen-tasks";
import Footer from './components/footer/footer';
import LoadingData from './components/loading-data/loading-data';
import { TypeMessage, showMessage } from './plugins/show-message';
import { getCookie, deleteCookie, getActiveTitleTasks } from  "./helpers/helpers";
import { logOut, searchText } from "./data/data";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageTasks from './pages/page-tasks';
import PageSingIn from './pages/page-sign-in';
import PageSingUp from './pages/page-sign-up';
import PageAddTask from "./pages/page-add-task";

import 'normalize.css';

require('./Common.scss');

class AppOld extends PureComponent {
    constructor(props) {
        super(props);

        this.initialState = {
            activeScreen: this._isAuthUser() ? "screen-tasks" : "screen-sing-in",
            ActiveMenuLinks: [],
            itemsTasks: 9,
            pagesCount: 0,
            pageCurrentPagination: 1,
            loading: false,
            user: {
                name: '',
                surname: '',
                patronymic: '',
                userId: null
            },
            tasks: [],
            task: {},
            textSearch: ''
        };

        this.state = this.initialState;

        this._handleClickChangePagePagination = this._handleClickChangePagePagination.bind(this);
        this._handleChangeTextSearch = this._handleChangeTextSearch.bind(this);
        this._handleSubmitFormSearch = this._handleSubmitFormSearch.bind(this);
    }

    render() {
        const screen = this._getScreen(this.state);

        return (
            <React.Fragment>
                <main className={`bg main${this.state.loading ? ' flex' : ''}`}>
                    {
                        this.state.loading ?
                            <LoadingData />
                            : <Container>
                                { screen }
                            </Container>
                    }
                </main>
                <Footer />
            </React.Fragment>
        );
    }

    changeTextSearch(value = ""){
        this.setState({ textSearch: value })
    }

    _handleChangeTextSearch(evt) {
        this.changeTextSearch(evt.target.value);
    }

    _handleClickChangePagePagination(evt) {
        evt.preventDefault();
        this.setState({
            pageCurrentPagination: +evt.target.dataset.pageIdPag
        });
    }

    _handleSubmitFormSearch(evt) {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        let isEmptyField = true;
        let textSearch = '';
        
        for (const item of formData.entries()) {
            console.log(item);
            console.log(formData.entries());
            
            if (item[0] === 'search-field' && item[1] !== '') {
                isEmptyField = false;
                textSearch = item[1];
            }
        }

        if (!isEmptyField) {
            this.setState({
                loading: true
            })
            
            searchText(textSearch)
                .then(response => {
                    this._changeActiveScreen("screen-search");
                    if (response.msgsType !== 'warning') {
                        
                        this.setState({
                            tasks: response,
                            titleForTasks: getActiveTitleTasks("screen-search", textSearch)
                        })
                    }
                    if (response.msgsType === 'warning') {
                        this.setState({
                            tasks: []
                        })
                        showMessage(response.msgsType, '', response.textMsgs);
                    }
                    return true;
                })
                .catch(e => {
                    console.error(e);
                    showMessage(TypeMessage.ERROR, e, 'Ошибка получения данных.');
                })
                .finally(()=> {
                    this.setState({
                        loading: false
                    })
                })
        } else {
            showMessage(TypeMessage.WARNING , '', 'Заполните поле поиска по задачам!');
        }
    }

    _getScreen(state) {
        const {
            activeScreen,
            tasks,
            task,
            itemsTasks,
            pagesCount,
            pageCurrentPagination,
            user,
            ActiveMenuLinks
        } = state;

        switch (activeScreen) {
            case "screen-sing-in":
                return <ScreenSingIn
                    changeActivePage={this._changeActiveScreen}
                    getFullName={this._getFullName}
                />;
            case "screen-sing-up":
                return <ScreenSingUp
                    changeActivePage={this._changeActiveScreen}
                />;
            case "screen-add-task":
                return <ScreenAddTask
                    changeActivePage={this._changeActiveScreen}
                />;

            case "screen-tasks":
            case "screen-my-tasks-done":
            case "screen-designated-tasks":
            case "screen-designated-tasks-done":
            case "screen-search":
                return <ScreenTasks
                    changeActivePage={this._changeActiveScreen}
                    tasks={tasks}
                    itemsTasks={itemsTasks}
                    pagesCount={pagesCount}
                    pageCurrentPagination={pageCurrentPagination}
                    user={user}
                    menuLinks={ActiveMenuLinks}
                    activeScreen={activeScreen}
                    textSearch={this.state.textSearch}
                    title={this.state.titleForTasks}
                    isShowLinkExecute={this.state.activeScreen !== "screen-tasks" ? false : true}
                    handleClickMore={this._handleClickMore}
                    handleClickUserOtherLinks={this._handleClickUserOtherLinks}
                    handleClickExit={this._handleClickExit}
                    handleClickChangePagePagination={this._handleClickChangePagePagination}
                    handleClickExecuteTask={this._handleClickExecuteTask}
                    handleChangeTextSearch={this._handleChangeTextSearch}
                    handleSubmitFormSearch={this._handleSubmitFormSearch}
                    />;
            case "screen-task":
                return <ScreenTask
                    changeActivePage={this._changeActiveScreen}
                    handleClickUserOtherLinks={this._handleClickUserOtherLinks}
                    handleClickExit={this._handleClickExit}
                    handleClickExecuteTask={this._handleClickExecuteTask}
                    user={user}
                    task={task}
                    menuLinks={ActiveMenuLinks}
                    isShowLinkExecute={this.state.activeScreen !== "screen-tasks" ? false : true}
                />;
            default:
                return null;
        }
    };
}



export class App extends PureComponent {
    constructor(props) {
        super(props);

        this.initialState = {
            user: {
                name: '',
                surname: '',
                patronymic: '',
                userId: null
            },
            textSearch: '',
            isLoggedIn: Boolean(this._isAuthUser())
        };

        this.state = this.initialState;

        this._getFullName = this._getFullName.bind(this);
        this._setLoggedIn = this._setLoggedIn.bind(this);
        this._handleClickExit = this._handleClickExit.bind(this);
    }

    componentDidMount() {
        this._getFullName();
    }

    render() {
        const { 
            isLoggedIn,
            itemsTasks,
            pageCurrentPagination,
            pagesCount,
            user
         } = this.state;

        return (
            <Router>
                <main className={`bg main${this.state.loading ? ' flex' : ''}`}>
                    <Container>
                        <Switch>
                            <Route 
                                path="/"
                                render={({match}) => (
                                    <PageTasks
                                        isLoggedIn={isLoggedIn}
                                        itemsTasks={itemsTasks}
                                        pageCurrentPagination={pageCurrentPagination}
                                        pagesCount={pagesCount}
                                        user={user}
                                        url={match.url}
                                        handleClickExit={this._handleClickExit}
                                    />
                                    )
                                }
                                exact />
                            <Route 
                                path="/my-tasks-done"
                                render={({match}) => (
                                    <PageTasks
                                        isLoggedIn={isLoggedIn}
                                        itemsTasks={itemsTasks}
                                        pageCurrentPagination={pageCurrentPagination}
                                        pagesCount={pagesCount}
                                        user={user}
                                        url={match.url}
                                        handleClickExit={this._handleClickExit}
                                    />
                                    )
                                }
                                 />
                            <Route 
                                path="/designated-tasks"
                                render={({match}) => (
                                    <PageTasks
                                        isLoggedIn={isLoggedIn}
                                        itemsTasks={itemsTasks}
                                        pageCurrentPagination={pageCurrentPagination}
                                        pagesCount={pagesCount}
                                        user={user}
                                        url={match.url}
                                        handleClickExit={this._handleClickExit}
                                    />
                                    )
                                }
                                 />
                            <Route 
                                path="/designated-tasks-done"
                                render={({match}) => (
                                    <PageTasks
                                        isLoggedIn={isLoggedIn}
                                        itemsTasks={itemsTasks}
                                        pageCurrentPagination={pageCurrentPagination}
                                        pagesCount={pagesCount}
                                        user={user}
                                        url={match.url}
                                        handleClickExit={this._handleClickExit}
                                    />
                                    )
                                }
                                 />
                            <Route 
                                path="/sing-up"
                                render={()=>(
                                    <PageSingUp 
                                        isLoggedIn={isLoggedIn}
                                    />
                                )} />
                            <Route 
                                path="/sing-in"
                                render={() => (
                                    <PageSingIn
                                        isLoggedIn={isLoggedIn}
                                        getFullName={this._getFullName}
                                        setLoggedIn={this._setLoggedIn}
                                    />
                                )} />
                            <Route 
                                path="/add-task"
                                render={()=>(
                                    <PageAddTask 
                                        isLoggedIn={isLoggedIn}
                                        />
                                )}
                                />
                            <Route render={()=>(<h1>Такой страницы нету!</h1>)} />
                        </Switch>
                    </Container>
                </main>
                <Footer />
            </Router>
        )
    }

    _isAuthUser() {
        return getCookie("userInfo") && getCookie("PHPSESSID");
    }

    _getFullName() {
        if (this._isAuthUser()) {
            const userInfo = getCookie("userInfo").split(";");
            this.setState({
                user: {
                    name: userInfo[0],
                    surname: userInfo[1],
                    patronymic: userInfo[2],
                    userId: Number(userInfo[3])
                }
            });
        }
    }

    _setLoggedIn(value = false) {
        this.setState({ isLoggedIn: value })
    }

    _handleClickExit(evt) {
        evt.preventDefault();
        const isQuestion = window.confirm(`Вы действительно хотите выйти?`);
        if (isQuestion) {
            logOut()
                .then(response => {
                    showMessage(response.msgsType, '', response.textMsgs);
                    if (response.msgsType === 'success') {
                        deleteCookie('PHPSESSID');
                        deleteCookie('userInfo');
                        this._setLoggedIn(false);
                    }
                    return true;
                })
                .catch(e => {
                    console.error(e);
                    showMessage(TypeMessage.ERROR, e, );
                });
        }
    }
}

export default App;