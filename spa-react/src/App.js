import React, { Component } from 'react';
import Container from "./components/container/container";
import Footer from './components/footer/footer';
import { getCookie,  checkLoggedUser } from  "./helpers/helpers";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect} from "react-redux";
import { getUserInfo} from "./actions";

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
            textSearch: '',
        };

        this.state = this.initialState;
    }

    componentDidMount() {
        this.props.getUserInfoToProps();
    }

    render() {
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
                                    <PageSingIn />
                                )} />
                            <Route
                                path="/add-task"
                                render={()=>(
                                    <PageAddTask />
                                )}
                                />
                            <Route
                                path="/task/:id"
                                render={({ match })=> {
                                    const { id } = match.params;

                                    return <PageTask
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
            url={match.url}
            urlOrigin={`${window.location.origin}${location.search}`}
        />;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfoToProps: () => {
            if (checkLoggedUser()) {
                const userInfo = getCookie("userInfo").split(";");

                return dispatch(
                    getUserInfo({
                        name: userInfo[0],
                        surname: userInfo[1],
                        patronymic: userInfo[2],
                        userId: Number(userInfo[3])
                    })
                )
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
