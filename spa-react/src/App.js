import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Container from "./components/container/container";
import PageSingIn from "./pages/sign-in";
import FormSingUp from "./pages/sign-up";
import FormAddTask from "./pages/add-task";
import Task from "./pages/task";
import Tasks from "./pages/tasks";
import Footer from './components/footer/footer'

import 'normalize.css';

require('./Common.scss');

class App extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            activePage: this._getUserSingIn() ? 4 : 1,
            user: {
                name: '',
                surname: '',
                patronymic: '',
            }
        };

        this.state = this.initialState;
    }

    render() {
        return (
            <React.Fragment>
                <main className="bg">
                    <Container>
                        {/*{this._getPage(this.state.activePage)}*/}
                        {this._getPage(5)}
                    </Container>
                </main>
                <Footer />
            </React.Fragment>
        );
    }

    _getUserSingIn() {
        return true;
    }
    _getPage(page) {
        switch (page) {
            case 1:
                return <PageSingIn/>;
            case 2:
                return <FormSingUp/>;
            case 3:
                return <FormAddTask/>;
            case 4:
                return <Tasks user={this.state.user}/>;
            case 5:
                return <Task user={this.state.user}/>;
            default:
                return null;
        }
    };

}

export default App;
