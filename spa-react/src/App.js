import React, {PureComponent} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Container from "./components/container/container";
import ScreenSingIn from "./screens/screen-sign-in";
import ScreenSingUp from "./screens/screen-sign-up";
import ScreenAddTask from "./screens/screen-add-task";
import ScreenTask from "./screens/screen-task";
import ScreenTasks from "./screens/screen-tasks";
import ScreenDesignatedTasks from "./screens/designated-tasks";
import Footer from './components/footer/footer';
import {getCookie, getTask} from  "./helpers/helpers";
import {getMyTasks, getDesignatedTasksTasks} from "./data/data";

import 'normalize.css';

require('./Common.scss');

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.initialState = {
            activeScreen: this._getUserSingIn() ? "screen-tasks" : "screen-sing-in",
            itemsTasks: 3,
            pagesCount: 0,
            pageCurrentPagination: 1,
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
                <main className="bg">
                    <Container>
                        { screen }
                    </Container>
                </main>
                <Footer />
            </React.Fragment>
        );
    }

    _getDataForApp(){
        if (getCookie("userInfo")){
            const userInfo = getCookie("userInfo").split(",");
            const tasks = getMyTasks();
            const lengthTasks = tasks.length;

            this.setState((state) => {
                const {itemsTasks} = state;

                return {
                    user: {
                        name: userInfo[0],
                        surname: userInfo[1],
                        patronymic: userInfo[2]
                    },
                    tasks: tasks,
                    pagesCount: Math.ceil((lengthTasks / itemsTasks))
                }
            })
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
        this.setState({
            activeScreen: screen
        })
    }

    _handleClickMore(evt) {
        evt.preventDefault();
        const id = evt.target.dataset.id;

        this.setState((state) => ({
                task: getTask(state.tasks, id),
                activeScreen: "screen-task"
            }))
    }

    _handleClickUserOtherLinks(evt) {
        evt.preventDefault();
        const dataScreen = evt.target.dataset.screen;
        const tasks = dataScreen === "screen-designated-tasks" ? getDesignatedTasksTasks() : getMyTasks();
        const lengthTasks = tasks.length;

        this.setState((state) => {
            const {itemsTasks} = state;

            return {
                tasks: tasks,
                pagesCount: Math.ceil((lengthTasks / itemsTasks)),
                pageCurrentPagination: 1
            }
        });
        this._changeActiveScreen(evt.target.dataset.screen);
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
        } = state;

        switch (activeScreen) {
            case "screen-sing-in":
                return <ScreenSingIn
                    changeActivePage={this._changeActiveScreen}
                    getData={this._getDataForApp}
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
                return <ScreenTasks
                    changeActivePage={this._changeActiveScreen}
                    tasks={tasks}
                    itemsTasks={itemsTasks}
                    pagesCount={pagesCount}
                    pageCurrentPagination={pageCurrentPagination}
                    user={user}
                    handleClickMore={this._handleClickMore}
                    handleClickUserOtherLinks={this._handleClickUserOtherLinks}
                    handleClickExit={this._handleClickExit}
                    handleClickChangePagePagination={this._handleClickChangePagePagination}
                    />;
            case "screen-designated-tasks":
                return <ScreenDesignatedTasks
                    changeActivePage={this._changeActiveScreen}
                    tasks={tasks}
                    itemsTasks={itemsTasks}
                    pagesCount={pagesCount}
                    pageCurrentPagination={pageCurrentPagination}
                    user={user}
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
                />;
            default:
                return null;
        }
    };
}

export default App;
