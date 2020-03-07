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
import { getCookie, getTask } from  "./helpers/helpers";
import { getMyTasks, getMyTasksDone, getDesignatedTasks, getDesignatedTasksDone } from "./data/data";

import 'normalize.css';

require('./Common.scss');

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.initialState = {
            activeScreen: this._getUserSingIn() ? "screen-tasks" : "screen-sing-in",
            ActiveMenuLinks: [],
            itemsTasks: 3,
            pagesCount: 0,
            pageCurrentPagination: 1,
            loading: false,
            user: {
                name: '',
                surname: '',
                patronymic: ''
            },
            tasks: [],
            task: {}
        };

        this.state = this.initialState;

        this._changeActiveScreen = this._changeActiveScreen.bind(this);
        this._getDataForApp = this._getDataForApp.bind(this);
        this._handleClickMore = this._handleClickMore.bind(this);
        this._handleClickUserOtherLinks = this._handleClickUserOtherLinks.bind(this);
        this._handleClickExit = this._handleClickExit.bind(this);
        this._handleClickChangePagePagination = this._handleClickChangePagePagination.bind(this);
    }

    componentDidMount() {
        this._getDataForApp();
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

    _getData(fn) {
        this.setState({ loading: true });

        fn()
            .then(tasks => {
                if (tasks.msgsType === 'error') {
                    this.setState({
                        tasks: []
                    })
                    return true
                }

                const lengthTasks = tasks.length;

                this.setState((state) => {
                    const { itemsTasks } = state;

                    return {
                        tasks: tasks,
                        pagesCount: Math.ceil((lengthTasks / itemsTasks))
                    }
                })
            })
            .catch(e => {
                console.error(e);
                showMessage(TypeMessage.ERROR, e, 'Ошибка получения данных.');
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    _getDataForApp(){
        if (getCookie("userInfo")){
            const userInfo = getCookie("userInfo").split(",");
            this._changeActiveMenuLinks(this.state.activeScreen);

            this.setState({
                user: {
                    name: userInfo[0],
                    surname: userInfo[1],
                    patronymic: userInfo[2]
                },
                loading: true
            });

            this._getData(getMyTasks);
        }
    }

    _handleClickChangePagePagination(evt) {
        evt.preventDefault();
        this.setState({
            pageCurrentPagination: +evt.target.dataset.pageIdPag
        });
    }

    _getUserSingIn() {
        return getCookie("userInfo") && getCookie("FakePhpSession");
    }

    _changeActiveScreen(screen) {
        this._changeActiveTasks(screen);
        this._changeActiveMenuLinks(screen);
        this.setState({
            activeScreen: screen
        })
    }

    _changeActiveMenuLinks(screen) {
        switch (screen) {
            case "screen-tasks":
                this.setState({
                    ActiveMenuLinks: [
                        { textLink: "Выполненые задачи мною", href: "/my-tasks-done", dataScreen: "screen-my-tasks-done" },
                        { textLink: "Я назначил задачи", href: "/designated-task", dataScreen: "screen-designated-tasks" },
                    ]
                })
                break;
            case "screen-my-tasks-done":
                this.setState({
                    ActiveMenuLinks: [
                        { textLink: "Мои задачи", href: "/my-tasks", dataScreen: "screen-tasks" },
                        { textLink: "Я назначил задачи", href: "/designated-task", dataScreen: "screen-designated-tasks" },
                    ]
                })
                break;
            case "screen-designated-tasks":
                this.setState({
                    ActiveMenuLinks: [
                        { textLink: "Выполненые задачи другими", href: "/designated-task-done", dataScreen: "screen-designated-tasks-done" },
                        { textLink: "Мои задачи", href: "/my-tasks", dataScreen: "screen-tasks" },
                    ]
                })
                break;
            case "screen-designated-tasks-done":
                this.setState({
                    ActiveMenuLinks: [
                        { textLink: "Выполненые задачи другими", href: "/designated-task-done", dataScreen: "screen-designated-tasks-done" },
                        { textLink: "Мои задачи", href: "/my-tasks", dataScreen: "screen-tasks" },
                    ]
                })
                break;
            case "screen-task":
                this.setState({
                    ActiveMenuLinks: [
                        { textLink: "Мои задачи", href: "/my-tasks", dataScreen: "screen-tasks" },
                        { textLink: "Я назначил задачи", href: "/designated-task", dataScreen: "screen-designated-tasks" },
                    ]
                })
                break;
            default:
                this.setState({
                    ActiveMenuLinks: [
                        { textLink: "Мои задачи", href: "/my-tasks", dataScreen: "screen-tasks" },
                        { textLink: "Я назначил задачи", href: "/designated-task", dataScreen: "screen-designated-tasks" },
                    ]
                })
        };
    }

    _changeActiveTasks(screen) {
        switch (screen) {
            case "screen-tasks":
                this._getData(getMyTasks);
                break;
            case "screen-my-tasks-done":
                this._getData(getMyTasksDone);
                break;
            case "screen-designated-tasks":
                this._getData(getDesignatedTasks);
                break;
            case "screen-designated-tasks-done":
                this._getData(getDesignatedTasksDone);
                break;
            default:
                break;
        };
    }

    _handleClickMore(evt) {
        evt.preventDefault();
        const id = evt.target.dataset.id;

        this.setState((state) => ({
                task: getTask(state.tasks, id)
            }))

        this._changeActiveScreen("screen-task");
    }

    _handleClickUserOtherLinks(evt) {
        evt.preventDefault();
        const dataScreen = evt.target.dataset.screen;
        
        this._changeActiveScreen(dataScreen);
    }

    _handleClickExit(evt) {
        evt.preventDefault();
        const isQuestion = window.confirm(`Вы действительно хотите выйти?`);
        if (isQuestion) {
            document.cookie = "userInfo=; path=/; max-age=-1";
            document.cookie = "FakePhpSession=; path=/; max-age=-1";
            this._changeActiveScreen("screen-sing-in");
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
                return <ScreenTasks
                    changeActivePage={this._changeActiveScreen}
                    tasks={tasks}
                    itemsTasks={itemsTasks}
                    pagesCount={pagesCount}
                    pageCurrentPagination={pageCurrentPagination}
                    user={user}
                    menuLinks={ActiveMenuLinks}
                    activeScreen={activeScreen}
                    handleClickMore={this._handleClickMore}
                    handleClickUserOtherLinks={this._handleClickUserOtherLinks}
                    handleClickExit={this._handleClickExit}
                    handleClickChangePagePagination={this._handleClickChangePagePagination}
                    />;
            case "screen-task":
                return <ScreenTask
                    changeActivePage={this._changeActiveScreen}
                    handleClickUserOtherLinks={this._handleClickUserOtherLinks}
                    handleClickExit={this._handleClickExit}
                    user={user}
                    task={task}
                    menuLinks={ActiveMenuLinks}
                />;
            default:
                return null;
        }
    };
}

export default App;
