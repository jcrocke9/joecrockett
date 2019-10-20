import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Home } from './components/Home';
import { Work } from './components/Work';
import { Bot } from './components/Bot';

ReactGA.initialize('UA-116194261-1');
function fireTracking() {
    ReactGA.pageview(window.location.hash);
}

class App extends Component {
    render() {
        return (
            <div>
                <Router onUpdate={fireTracking}>
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
                                    <a className="navbar-brand" >Joe</a>
                                </div>


                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/work">Work</Link></li>
                                        <li><Link to="/bot">State Trees Bot</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <Route exact path="/" component={Home} />
                        <Route path="/work" component={Work} />
                        <Route path="/bot" component={Bot} />
                    </div>
                </Router>
            </div>
        );
    }
}


export default App;