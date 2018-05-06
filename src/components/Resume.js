import React, { Component } from 'react';

export class Resume extends Component {

    linkedIn() { window.location.href = "https://www.linkedin.com/in/josephpcrockett/"; }
    github() { window.location.href = "https://github.com/jcrocke9/"; }
    powershellGallery() { window.location.href = "https://www.powershellgallery.com/profiles/jcrocke9/"; }
    render() {
        return (
            <div>
                <div className="bs-docs-header" id="content" tabIndex="-1">
                    <div className="container">
                        <h1>Resume</h1>
                    </div>
                </div>
                <div className="container bs-docs-container">
                </div>
            </div>
        );
    }
}

