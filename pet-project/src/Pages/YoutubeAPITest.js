import React, { Component } from "react";
import Button from "react-bootstrap/Button";

const API_KEY = "AIzaSyDFyK14g41ldTRl8sKTWf4l4i2dkiDf-_k";
const CLIENT_ID =
    "302303575258-uv6ba1lmhtubbqarrtojgmn06iu4iqcr.apps.googleusercontent.com";
var resultNum = 8;
var query = "johnwick3";
const finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${query}&key=${API_KEY}&maxResults=${resultNum}`;

//?&maxResults=25&q=surfing&key=

class YoutubeAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //  TODO
            videoResults: [],
            isLoading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ isLoading: true }, () => {
            fetch(finalURL)
                .then(res => res.json())
                .then(resJson => {
                    const vids = resJson.items
                        .map(object => "https://youtube.com/embed/"+object.id.videoId)
                        .filter(e => {
                            return e;
                        });

                    this.setState({ videoResults: vids });
                    //console.log(this.state.videoResults);
                })
                .catch(err => {
                    console.error(err);
                });
        });
    }

    render() {
        console.log(finalURL);

        return (
            <div>
                <h1>Youtube API page</h1>
                <hr />
                <Button
                    variant="success"
                    size="lg"
                    block
                    onClick={this.handleClick}
                >
                    Load vids
                </Button>

                <div>
                    {
                        this.state.videoResults.map((links, i) => {
                            var frame = <div key = {i}><iframe width = "640" height = "360" src = {links} frameBorder="0" allowFullScreen></iframe></div>
                            return frame;
                        })
                    }
                    {this.frame}
                </div>
            </div>
        );
    }
}

export default YoutubeAPI;
