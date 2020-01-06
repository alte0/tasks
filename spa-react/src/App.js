import React, {PureComponent} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Container from "./components/container/container";
import ScreenSingIn from "./screens/screen-sign-in";
import ScreenSingUp from "./screens/screen-sign-up";
import ScreenAddTask from "./screens/screen-add-task";
import ScreenTask from "./screens/screen-task";
import ScreenTasks from "./screens/screen-tasks";
import Footer from './components/footer/footer';
import {getCookie, getTask} from  "./helpers/helpers";
import {getTasks} from "./data/data";

import 'normalize.css';

require('./Common.scss');

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.initialState = {
            activeScreen: this._getUserSingIn() ? "screen-tasks" : "screen-sing-in",
            itemsTasks: 3,
            pagesCount: 0,
            pageCurrent: 1,
            user: {
                name: '',
                surname: '',
                patronymic: ''
            },
            tasks: [],
            showTasks: [],
            task: {}
        };

        this.state = this.initialState;

        this._changeActiveScreen = this._changeActiveScreen.bind(this);
        this._getDataForApp = this._getDataForApp.bind(this);
        this._handleClickMore = this._handleClickMore.bind(this);
        this._handleAddTaskClick = this._handleAddTaskClick.bind(this);
        this._handleClickExit = this._handleClickExit.bind(this);
        this._handleClickChangePagePagination = this._handleClickChangePagePagination.bind(this);
    }

    componentDidMount() {
        this._getDataForApp();
    }

    render() {
        return (
            <React.Fragment>
                <main className="bg">
                    <Container>
                        {this._getPage(this.state.activeScreen)}
                    </Container>
                </main>
                <Footer />
            </React.Fragment>
        );
    }

    _getDataForApp(){
        if (getCookie("userInfo")){
            const userInfo = getCookie("userInfo").split(",");
            const tasks = getTasks();

            const length = tasks.length;
            let showTasks;

            if (length) {
                showTasks = tasks.slice((this.state.pageCurrent - 1) * this.state.itemsTasks, this.state.pageCurrent * this.state.itemsTasks)
            }

            this.setState((state) => ({
                user: {
                    name: userInfo[0],
                    surname: userInfo[1],
                    patronymic: userInfo[2]
                },
                tasks: tasks,
                showTasks: showTasks,
                pagesCount: Math.ceil((length / state.itemsTasks))
            }))
        }
    }

    _handleClickChangePagePagination(evt) {
        evt.preventDefault();
        const pageIdPag = +evt.target.dataset.pageIdPag;

        this.setState((state) => ({
            showTasks: state.tasks.slice((pageIdPag - 1) * state.itemsTasks, pageIdPag * state.itemsTasks),
            pageCurrent: pageIdPag
        }));
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

    _handleAddTaskClick(evt) {
        evt.preventDefault();
        this._changeActiveScreen("screen-add-task");
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

    _getPage(page) {
        switch (page) {
            case "screen-sing-in":
                return <ScreenSingIn
                    changeActivePage={this._changeActiveScreen}
                    getData={this._getDataForApp}
                />;
            case "screen-sing-up":
                return <ScreenSingUp changeActivePage={this._changeActiveScreen}/>;
            case "screen-add-task":
                return <ScreenAddTask changeActivePage={this._changeActiveScreen}/>;
            case "screen-tasks":
                return <ScreenTasks
                    changeActivePage={this._changeActiveScreen}
                    tasks={this.state.tasks}
                    showTasks={this.state.showTasks}
                    itemsTasks={this.state.itemsTasks}
                    pages={this.state.pagesCount}
                    pageCurrent={this.state.pageCurrent}
                    user={this.state.user}
                    handleClickMore={this._handleClickMore}
                    handleAddTaskClick={this._handleAddTaskClick}
                    handleClickExit={this._handleClickExit}
                    handleClickChangePagePagination={this._handleClickChangePagePagination}
                    />;
            case "screen-task":
                return <ScreenTask
                    changeActivePage={this._changeActiveScreen}
                    handleAddTaskClick={this._handleAddTaskClick}
                    handleClickExit={this._handleClickExit}
                    user={this.state.user}
                    task={this.state.task}
                />;
            default:
                return null;
        }
    };

}

export default App;
