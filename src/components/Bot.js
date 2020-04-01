import React, { Component } from 'react';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';

export class Bot extends Component {
    constructor(props) {
        super(props);
        this.directLine = new DirectLine({ token: '' });
    }

    render() {
        const store = window.WebChat.createStore({}, ({ dispatch }) => next => (action) => {
            let channelData1 = {
                oauthAccessToken: ""
            };
            if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
                dispatch({
                    type: 'WEB_CHAT/SEND_EVENT',
                    payload: {
                        name: 'webchat/join',
                        value: {
                            language: window.navigator.language,
                        },
                        from: "dl_000001",
                        channelData: channelData1,
                    }
                });
            }
            if (action.type === 'DIRECT_LINE/POST_ACTIVITY') {
                action.payload.activity.channelData = channelData1;
            }
            return next(action);
        });
        return (
            <div >
                <div className="bs-docs-header" id="content" tabIndex="-1">
                    <div className="container">
                        <h1>COVID-19 BOT</h1>
                    </div>
                </div>
                <div className="container bs-docs-container" style={{width: "320px"}}>
                    <hr className="half-rule" />
                    <p className="lead"></p>
                    <ReactWebChat directLine={this.directLine} store={store} userID='YOUR_USER_ID' styleOptions={{hideUploadButton: "true"}} />

                </div>
            </div>
        );
    }
}
