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
                            <PrivatePage path="/" exact>
                                <PageTasks/>
                            </PrivatePage>
                            <PrivatePage path="/search">
                                <PageTasks/>
                            </PrivatePage>
                            <PrivatePage path="/my-tasks-done">
                                <PageTasks/>
                            </PrivatePage>
                            <PrivatePage path="/designated-tasks">
                                <PageTasks/>
                            </PrivatePage>
                            <PrivatePage path="/designated-tasks-done">
                                <PageTasks/>
                            </PrivatePage>
                            <ProtectPage path="/sing-up">
                                <PageSingUp />
                            </ProtectPage>
                            <ProtectPage path="/sing-in">
                                <PageSingIn />
                            </ProtectPage>
                            <PrivatePage path="/add-task">
                                <PageAddTask />
                            </PrivatePage>
                            <PrivatePage path="/task/:id">
                                <PageTask/>
                            </PrivatePage>
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
