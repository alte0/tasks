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
import { ProtectPage, PrivatePage} from "./shields/shields";

import 'normalize.css';
import './Common.scss';

export class App extends Component {
    componentDidMount() {
        if (checkLoggedUser()) {
            const userInfo = getCookie("userInfo").split(";");
            const user = getUserInfo({
                name: userInfo[0],
                surname: userInfo[1],
                patronymic: userInfo[2],
                userId: Number(userInfo[3])
            });

            this.props.getUserInfoDispatch(user);
        }
    }

    render() {
        return (
            <Router basename="/react/" >
                <main className={`bg main`}>
                    <Container>
                        <Switch>
                            <Route
                                path="/"
                                exact
                            >
                                <PrivatePage>
                                    <PageTasks/>
                                </PrivatePage>
                            </Route>
                            <Route
                                path="/search"
                            >
                                <PrivatePage>
                                    <PageTasks/>
                                </PrivatePage>
                            </Route>
                            <Route
                                path="/my-tasks-done"
                            >
                                <PrivatePage>
                                    <PageTasks/>
                                </PrivatePage>
                            </Route>
                            <Route
                                path="/designated-tasks"
                            >
                                <PrivatePage>
                                    <PageTasks/>
                                </PrivatePage>
                            </Route>
                            <Route
                                path="/designated-tasks-done"
                            >
                                <PrivatePage>
                                    <PageTasks/>
                                </PrivatePage>
                            </Route>
                            <Route
                                path="/sing-up" >
                                    <ProtectPage>
                                        <PageSingUp />
                                    </ProtectPage>
                            </Route>
                            <Route
                                path="/sing-in"
                                >
                                    <ProtectPage>
                                        <PageSingIn />
                                    </ProtectPage>
                            </Route>
                            <Route
                                path="/add-task"
                                >
                                <PrivatePage>
                                    <PageAddTask />
                                </PrivatePage>
                            </Route>
                            <Route
                                path="/task/:id"
                                render={({ match })=> {
                                    const { id } = match.params;

                                    return <PrivatePage>
                                        <PageTask url={match.url} idTask={id} />
                                    </PrivatePage>
                                    }
                                }
                                />
                            <Route>
                                <h1>Такой страницы нету!</h1>
                            </Route>
                        </Switch>
                    </Container>
                </main>
                <Footer />
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserInfoDispatch: (user) => {
        dispatch(user);
    }
})

export default connect(null, mapDispatchToProps)(App);
