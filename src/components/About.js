import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <div>
                <div className="bs-docs-header" id="content" tabIndex="-1">
                    <div className="container">
                        <h1>About Joe</h1>
                    </div>
                </div>
                <div className="container bs-docs-container">
                    <div className="Row">
                        <div className="col-md-9">
                            <ul className="list-group">
                                <li className="list-group-item">I'm an expert SharePoint Administrator with more than a decade of industry experience.</li>
                                <li className="list-group-item">I live and work in the Washington, DC metro area.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bs-docs-header" id="content" tabIndex="-1">
                    <div className="container">
                        <h1>About this site</h1>
                    </div>
                </div>
                <div className="container bs-docs-container">
                    <div className="Row">
                        <div className="col-md-9">
                            <ul className="list-group">
                                <li className="list-group-item">This website is an ongoing portfolio of front-end development projects and prototypes.</li>
                                <li className="list-group-item">It's designed exclusively using Bootstrap.</li>
                                <li className="list-group-item">Its toolchain includes Node.js, NPM, Webpack, and built using React.</li>
                                <li className="list-group-item">It's run from Amazon.</li>
                                <li className="list-group-item">This website will evolve with my further work.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
