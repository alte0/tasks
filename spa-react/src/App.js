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
import {getCookie} from  "./helpers/helpers";

import 'normalize.css';

require('./Common.scss');

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.initialState = {
            activePage: this._getUserSingIn() ? 4 : 1,
        };

        this.state = this.initialState;

        this._changeActivePage = this._changeActivePage.bind(this);
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

    _getPage(page) {
        switch (page) {
            case 1:
                return <PageSingIn changeActivePage={this._changeActivePage}/>;
            case 2:
                return <FormSingUp changeActivePage={this._changeActivePage}/>;
            case 3:
                return <FormAddTask changeActivePage={this._changeActivePage}/>;
            case 4:
                return <Tasks changeActivePage={this._changeActivePage}/>;
            case 5:
                return <Task changeActivePage={this._changeActivePage}/>;
            default:
                return null;
        }
    };

}

export default App;
