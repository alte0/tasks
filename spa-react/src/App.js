import React, {PureComponent} from 'react';
import Container from "./components/container/container";
import Footer from './components/footer/footer';
import { TypeMessage, showMessage } from './plugins/show-message';
import { getCookie, deleteCookie } from  "./helpers/helpers";
import { logOut } from "./data/data";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageTasks from './pages/page-tasks';
import PageSingIn from './pages/page-sign-in';
import PageSingUp from './pages/page-sign-up';
import PageAddTask from "./pages/page-add-task";
import PageTask from "./pages/page-task";

import 'normalize.css';

require('./Common.scss');

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
            user
         } = this.state;

        return (
            <Router basename="/react/" >
                <main className={`bg main${this.state.loading ? ' flex' : ''}`}>
                    <Container>
                        <Switch>
                            <Route
                                path="/"
                                render={this.renderPageTasks}
                                exact />
                            <Route
                                path="/search"
                                render={this.renderPageTasks}
                                />
                            <Route
                                path="/my-tasks-done"
                                render={this.renderPageTasks}
                                 />
                            <Route
                                path="/designated-tasks"
                                render={this.renderPageTasks}
                                 />
                            <Route
                                path="/designated-tasks-done"
                                render={this.renderPageTasks}
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
                                        user={this.state.user}
                                        isLoggedIn={isLoggedIn}
                                        />
                                )}
                                />
                            <Route
                                path="/task/:id"
                                render={({ match })=> {
                                    const { id } = match.params;

                                    return <PageTask
                                        user={user}
                                        url={match.url}
                                        idTask={id}
                                        handleClickExit={this._handleClickExit}
                                        isLoggedIn={isLoggedIn}
                                    />
                                    }
                                }
                                />
                            <Route render={()=>(<h1>Такой страницы нету!</h1>)} />
                        </Switch>
                    </Container>
                </main>
                <Footer />
            </Router>
        )
    }

    renderPageTasks = ({ location, match }) => {
        return <PageTasks
            isLoggedIn={this.state.isLoggedIn}
            user={this.state.user}
            url={match.url}
            urlOrigin={`${window.location.origin}${location.search}`}
            handleClickExit={this._handleClickExit}
        />;
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
