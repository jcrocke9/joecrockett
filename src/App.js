import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import { Home } from './components/Home';
import { Resume } from './components/Resume';
import { About } from './components/About';

export default class App extends Component {
    render() {
        return (
            <Router history={hashHistory} >
                <Route path='/' component={Container} >
                    <IndexRoute component={Home} />
                    <Route path='/resume' component={Resume} />
                    <Route path='/about' component={About} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        );
    }
}

const NotFound = () => (<h1>404.. The page is not found!</h1>);

const Nav = () => (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/about'>About</Link>
    </div>
)

const Container = (props) => (
    <div>
        <Nav />
        {props.children}
    </div>
)