import React, {PureComponent} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Container from "./components/container/container";
import PageSingIn from "./pages/sign-in";
import FormSingUp from "./pages/sign-up";
import FormAddTask from "./pages/add-task";
import Task from "./pages/task";
import Tasks from "./pages/tasks";
import Footer from './components/footer/footer';
import {getCookie, getTask} from  "./helpers/helpers";
import {getTasks} from "./data/data";

import 'normalize.css';

require('./Common.scss');

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.initialState = {
            activePage: this._getUserSingIn() ? 4 : 1,
            user: {
                name: '',
                surname: '',
                patronymic: ''
            },
            tasks: [],
            task: {}
        };

        this.state = this.initialState;

        this._changeActivePage = this._changeActivePage.bind(this);
        this._getUserData = this._getUserData.bind(this);
        this._getTasksData = this._getTasksData.bind(this);
        this._handleClickMore = this._handleClickMore.bind(this);
        this._handleAddTaskClick = this._handleAddTaskClick.bind(this);
        this._handleClickExit = this._handleClickExit.bind(this);
    }

    componentDidMount() {
        if (getCookie("userInfo")){
            const userInfo = getCookie("userInfo").split(",");
            this.setState({
                user: {
                    name: userInfo[0],
                    surname: userInfo[1],
                    patronymic: userInfo[2]
                },
                tasks: getTasks()
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <main className="bg">
                    <Container>
                        {this._getPage(this.state.activePage)}
                    </Container>
                </main>
                <Footer />
            </React.Fragment>
        );
    }

    _getUserSingIn() {
        return getCookie("userInfo") && getCookie("FakePhpSession");
    }

    _changeActivePage(page) {
        this.setState({
            activePage: page
        })
    }

    _getUserData(user) {
        this.setState({
            user
        })
    }

    _getTasksData() {
        this.setState({
            tasks: getTasks()
        })
    }

    _handleClickMore(evt) {
        evt.preventDefault();
        const id = evt.target.dataset.id;

        this.setState((state) => ({
                task: getTask(state.tasks, id),
                activePage: 5
            }))
    }

    _handleAddTaskClick(evt) {
        evt.preventDefault();
        const page = 3;
        this._changeActivePage(page);
    }

    _handleClickExit(evt) {
        evt.preventDefault();
        const isQuestion = window.confirm(`Вы действительно хотите выйти?`);
        if (isQuestion) {
            document.cookie = "userInfo=; path=/; max-age=-1";
            document.cookie = "FakePhpSession=; path=/; max-age=-1";
            const page = 1;
            this._changeActivePage(page);
        }
    }

    _getPage(page) {
        switch (page) {
            case 1:
                return <PageSingIn
                    changeActivePage={this._changeActivePage}
                    getUserData={this._getUserData}
                    getTasksData={this._getTasksData}
                />;
            case 2:
                return <FormSingUp changeActivePage={this._changeActivePage}/>;
            case 3:
                return <FormAddTask changeActivePage={this._changeActivePage}/>;
            case 4:
                return <Tasks
                    changeActivePage={this._changeActivePage}
                    tasks={this.state.tasks}
                    user={this.state.user}
                    handleClickMore={this._handleClickMore}
                    handleAddTaskClick={this._handleAddTaskClick}
                    handleClickExit={this._handleClickExit}
                    />;
            case 5:
                return <Task
                    changeActivePage={this._changeActivePage}
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
