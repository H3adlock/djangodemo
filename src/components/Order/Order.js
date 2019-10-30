import React, { Component } from 'react';
import './Order.css';
import axios from 'axios';

class Order extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const orders = res.data.slice(0, 10);
                this.setState({ orders });
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <section className="section">
                        <h1 className="title">Orders</h1>
                        <h2 className="subtitle is-4">Order Lists</h2>


                        <div className="columns">
                            {this.state.orders.map(order =>
                                <div className="column is-one-third">
                                    <div className="card">
                                        <div className="card-content">
                                            <p className="title">{order.title}</p>
                                            <p className="answer">{order.body}</p>
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

export default Order;