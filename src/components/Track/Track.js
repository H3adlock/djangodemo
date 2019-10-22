import React, { Component } from 'react';
import './Track.css';
import axios from 'axios';

class Track extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        };
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const tracks = res.data.slice(0, 10);
                this.setState({ tracks });
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <section className="section">
                        <h1 className="title">Tracks</h1>
                        <h2 className="subtitle is-4">Lorum ipsum and all of that jazz.</h2>


                        <div className="columns">
                            {this.state.tracks.map(track =>
                                <div className="column is-one-third">
                                    <div className="card">
                                        <div className="card-content">
                                            <p className="title">{track.title}</p>
                                            <p className="answer">{track.body}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Track;