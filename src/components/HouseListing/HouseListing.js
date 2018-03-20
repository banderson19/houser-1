import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class HouseListing extends Component {
    constructor() {
        super()
        this.state = {
            listings: []
        }
    }

    componentDidMount = () => {
        axios({
            method: 'GET',
            url: `http://localhost:3001/api/listings`
        }).then(response => {
            console.log(response.data) 
            this.setState({listings: response.data})
        })
    }

    render() {
        return (
            <div className="App">
            <h1>Hello</h1>
            <Link to="wizardone"><button>Add new property</button></Link>
                {this.state.listings.map (listing => {
                    return (
                        <div>
                            <div>{listing.property_name}</div>
                            <div>{listing.property_description}</div>
                            <div>{listing.address}</div>
                            <div>{listing.city}</div>
                            <div>{listing.location}</div>
                            <div>{listing.zip}</div>
                            <div>{listing.loan_amount}</div>
                            <div>{listing.monthly_mortgage}</div>
                            <div>{listing.desired_rent}</div>
                        </div>
                    )
                })}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        propertyName: state.propertyName,
        propertyDescription: state.propertyDescription,
        address: state.address,
        city: state.city,
        location: state.location,
        zip: state.zip,
        url: state.url,
        loanAmount: state.loanAmount,
        monthlyMortgage: state.monthlyMortgage,
        desiredRent: state.desiredRent
    }
} 

export default connect(mapStateToProps)(HouseListing)