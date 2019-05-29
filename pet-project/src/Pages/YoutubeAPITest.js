import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const API_KEY = "AIzaSyDFyK14g41ldTRl8sKTWf4l4i2dkiDf-_k";
const CLIENT_ID =
    "302303575258-uv6ba1lmhtubbqarrtojgmn06iu4iqcr.apps.googleusercontent.com";
var resultNum = 10;
var query = "";



class YoutubeAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoResults: [],
            queryyt:"",
            isLoading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        var finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&q=${this.state.queryyt}&key=${API_KEY}&maxResults=${resultNum}`;

        this.setState({ isLoading: true }, () => {
            fetch(finalURL)
                .then(res => res.json()) //convert to json
                .then(resJson => {
                    const vids = resJson.items
                        .map(object => "https://youtube.com/embed/" + object.id.videoId);
                    this.setState({ videoResults: vids });//maps video links to state
                    console.log(this.state.videoResults);
                })
                .catch(err => {
                    console.error(err);
                });
        });
    }

    handleInputChange = event => {
        this.setState({queryyt : event.target.value})
    }

    render() {
        //console.log(finalURL);

        return (
            <div>
                <h1>Youtube API page</h1>
                <hr />
                <InputGroup>
                    <Form.Control
                        value={this.state.query}
                        placeholder="search for keywords here..."
                        onChange={this.handleInputChange}
                    />

                    <InputGroup.Append>
                        <Button
                            variant="outline-success"
                            onClick={this.handleClick}
                        >Search</Button>
                    </InputGroup.Append>
                </InputGroup>

                <div>
                    {
                        this.state.videoResults.map((links, i) => {
                            var frame = <div key={i}><iframe width="640" height="360" src={links} frameBorder="0" allowFullScreen></iframe></div>
                            return frame;
                        })
                    }
                    {this.frame}
                </div>
                <hr/>
            </div>
        );
    }
}

export default YoutubeAPI;
