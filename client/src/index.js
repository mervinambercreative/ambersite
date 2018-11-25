import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import 'gestalt/dist/gestalt.css';

import App from './components/App';
import Home from './components/Home';

import registerServiceWorker from './registerServiceWorker'; 

const Root = () => (
    <Router>
        <Switch>
            <Route component={App} exact path="/"  />
            <Route component={Home} path="/home"  />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();