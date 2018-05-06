import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <div>
                <div className="bs-docs-header" id="content" tabIndex="-1">
                    <div className="container">
                        <h1>About Joe</h1>
                        <p className="lead">I have developed business process tools and applications on SharePoint since 2006. I've worked in the private sector, metropolitan city government, and federal government contracting.</p>
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
                                <li className="list-group-item">This website will evolve with my further work.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
