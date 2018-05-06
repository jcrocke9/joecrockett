import React, { Component } from 'react';

export class Work extends Component {

    linkedIn() { window.location.href = "https://www.linkedin.com/in/josephpcrockett/"; }
    github() { window.location.href = "https://github.com/jcrocke9/"; }
    powershellGallery() { window.location.href = "https://www.powershellgallery.com/profiles/jcrocke9/"; }
    render() {
        return (
            <div>
                <div className="bs-docs-header" id="content" tabIndex="-1">
                    <div className="container">
                        <h1>Work</h1>
                    </div>
                </div>
                <div className="container bs-docs-container">
                    <div className="Row">
                        <h4><input onClick={this.linkedIn} type="button" className="btn btn-default" value="View my LinkedIn profile" /></h4>
                    </div>
                    <div className="Row">
                        <h4><input onClick={this.github} type="button" className="btn btn-default" value="View my Github repositories" /></h4>
                    </div>
                    <div className="Row">
                        <h4><input onClick={this.powershellGallery} type="button" className="btn btn-default" value="View my PowerShell modules" /></h4>
                    </div>
                </div>
            </div>
        );
    }
}

