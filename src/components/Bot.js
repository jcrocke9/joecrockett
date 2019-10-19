import React, { Component } from 'react';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';

export class Bot extends Component {
    constructor(props) {
        super(props);
        this.directLine = new DirectLine({ token: 'Z2HABx-Lzug.HOJtEOo1GIr6aW0oDbE_ZMCPOVDSWynAX3JsTJH6_sA' });
    }

    render() {
        return (
            <div>
                <div className="bs-docs-header" id="content" tabIndex="-1">
                    <div className="container">
                        <h1>Bot</h1>
                    </div>
                </div>
                <div className="container bs-docs-container">
                    <ReactWebChat directLine={this.directLine} userID='YOUR_USER_ID' />
                    
                </div>
            </div>
        );
    }
}

