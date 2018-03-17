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
            <Link to="wizardone"><button>Add new property</button></Link>
                {this.state.propertyName}

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