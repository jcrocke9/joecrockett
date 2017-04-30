import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Home } from './components/Home';
import { Resume } from './components/Resume';
import { About } from './components/About';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">Joe</a>
                            </div>


                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/resume">Resume</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/resume" component={Resume} />
                </div>
            </Router>

        );
    }
}

export default App;