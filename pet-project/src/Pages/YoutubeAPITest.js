import React, { Component } from 'react';
import { generateKeyPair } from 'crypto';

const API_KEY = "AIzaSyDFyK14g41ldTRl8sKTWf4l4i2dkiDf-_k";
const CLIENT_ID = "302303575258-uv6ba1lmhtubbqarrtojgmn06iu4iqcr.apps.googleusercontent.com";
var resultNum = 10;
const finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&order=date&key=${API_KEY}&maxResults=${resultNum}`;

//?&maxResults=25&q=surfing&key=

class YoutubeAPI extends Component {

constructor(props) {
    super(props);

    this.state = {
        //  TODO
    }
}

    render() {

        return (
            <div><p>Youtube API page</p></div>
        );
    }
};

export default YoutubeAPI;