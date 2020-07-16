import React, { Component } from 'react';
import Container from "./components/container/container";
import Footer from './components/footer/footer';
// import { TypeMessage, showMessage } from './plugins/show-message';
// import { getCookie, deleteCookie, checkLoggedUser } from  "./helpers/helpers";
import { getCookie,  checkLoggedUser } from  "./helpers/helpers";
// import { logOut } from "./data/data";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageTasks from './pages/page-tasks';
import PageSingIn from './pages/page-sign-in';
import PageSingUp from './pages/page-sign-up';
import PageAddTask from "./pages/page-add-task";
import PageTask from "./pages/page-task";

import 'normalize.css';

require('./Common.scss');

export class App extends Component {
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
        };

        this.state = this.initialState;

        this._getFullName = this._getFullName.bind(this);
    }

    componentDidMount() {
        this._getFullName();
    }

    render() {
        const {
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
                                    />
                                )} />
                            <Route
                                path="/sing-in"
                                render={() => (
                                    <PageSingIn
                                        getFullName={this._getFullName}
                                    />
                                )} />
                            <Route
                                path="/add-task"
                                render={()=>(
                                    <PageAddTask
                                        user={this.state.user}
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
            user={this.state.user}
            url={match.url}
            urlOrigin={`${window.location.origin}${location.search}`}
        />;
    }

    _getFullName() {
        if (checkLoggedUser()) {
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
}

export default App;
