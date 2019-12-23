import React from 'react';
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

const showPage = (page) => {
    switch (page) {
        case 1:
            return <PageSingIn/>;
        case 2:
            return <FormSingUp/>;
        case 3:
            return <FormAddTask/>;
        case 4:
            return <Tasks/>;
        case 5:
            return <Task/>;
        default:
            return <PageSingIn/>;
    }
};

function App() {
    return (
        <React.Fragment>
            <main className="bg">
                <Container>
                    {showPage(1)}
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default App;
