import React, { Component } from 'react';
import 'whatwg-fetch';
import WorldMap from './WorldMap';


let p1 = new Promise((resolve, reject) => {
    const url = 'https://public-api.wordpress.com/rest/v1.1/sites/jcrocke9.wordpress.com/posts/19?context=display';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
}).then((response) => {
    console.log(response.content);
    let fromWP = response.content;
    return fromWP;
});

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Joe'
        }
    }

    
    render() {
        const content = this.state.content;
        return (
            <div >
                <div className="bs-docs-featurette" id="content" tabIndex="-1">
                    <div className="container">
                        <h2 className="bs-docs-featurette-title">Joe Crockett</h2>
                        <hr className="half-rule" />

                        <p className="lead">The SharePoint Framework is an exciting new opportunity for modern web development. I see tremendous opportunities for React to engage audiences with elegant and interactive user interfaces.</p>
                    </div>
                    <div >
                        <WorldMap />
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}
//