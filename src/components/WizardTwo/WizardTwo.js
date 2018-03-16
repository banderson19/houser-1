import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import { updateAddress, updateCity, updateState, updateZip} from './../../redux/reducers/reducer';

class WizardTwo extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    const {address, city, zip} = state;
    return {
        address, 
        city, 
        zip
    }
}

// add another word rather than state

export default connect(mapStateToProps)