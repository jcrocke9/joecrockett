import React, { Component } from 'react';

export class Resume extends Component {

    linkedIn() {window.location.href="https://www.linkedin.com/in/josephpcrockett/"}

    render() {
        return (
            <div>
                <div className="bs-docs-header" id="content" tabIndex="-1">
                    <div className="container">
                        <h1>Joe Crockett</h1>
                    </div>
                </div>
                <div className="container bs-docs-container">
                    <div className="Row">
                        <input onClick={this.linkedIn} type="button" className="btn btn-default" value="View my LinkedIn profile" />
                    </div>
                </div>
            </div>
        );
    }
}

