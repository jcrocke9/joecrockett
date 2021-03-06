import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <div >
                <div className="bs-docs-featurette" id="content" tabIndex="-1">
                    <div className="container">
                    <p className="lead">Office 365 Developer in the Eastern US</p>    
                    <h2 className="bs-docs-featurette-title">SharePoint</h2>
                        <hr className="half-rule" />

                        <p className="lead">The SharePoint Framework is an exciting new opportunity for modern web development. </p>
                        <p className="lead">Some <a href="https://github.com/jcrocke9/">web part</a> examples.</p>
                    </div>
                    <div className="container">
                        <h2 className="bs-docs-featurette-title">Exchange</h2>
                        <hr className="half-rule" />

                        <p className="lead">I've written <a href="https://www.powershellgallery.com/profiles/jcrocke9/">a few PowerShell modules for Exchange Online</a>: <a href="mailto:joseph.crockett@outlook.com">let me know</a> if you like them!</p>
                    </div>                    
                </div>
            </div>
        );
    }
}