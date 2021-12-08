import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/user/:userId"
                       render={props => <App {...props} />}
                />
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'))