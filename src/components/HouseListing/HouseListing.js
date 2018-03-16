import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

export default class HouseListing extends Component {
    constructor() {
        super()
        this.state = {
            listings: []
        }
    }

    // componentDidMount = () => {
    //     axios({
    //         method: 'GET',
    //         url: `http://localhost:3001/api/listings`
    //     }).then(response => {
    //         console.log(response.data) 
    //         this.setState({listings: response.data})
    //     })
    // }

    render() {
        return (
            <div className="App">
            <h1>Hello</h1>
                {this.state.listings.map( (listing, i) => {
                    return (
                        <div key={i}>{listing.house_name}</div>
                    )
                })}

            </div>
        )
    }
}

