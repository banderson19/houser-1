import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import { updateAddress, updateCity, updateLocation, updateZip} from './../../redux/reducers/reducer';

class WizardTwo extends Component {
    render() {
        const { updateAddress, updateCity, updateLocation, updateZip } = this.props;
        return (
            <div>
                <div>
                    <span>Step 2</span>
                </div>
                <div>
                    <span>Address</span>
                    <input type="text" placeholder="" onChange={ (e) => updateAddress(e.target.value)}/>
                </div>
                <div>
                    <span>City</span>
                    <input type="text" placeholder="" onChange={ (e) => updateCity(e.target.value)}/>
                </div> 
                <div>
                    <span>Location</span>
                    <input type="text" placeholder="" onChange={ (e) => updateLocation(e.target.value)}/>
                </div>
                <div>
                    <span>Zip</span>
                    <input type="text" placeholder="" onChange={ (e) => updateZip(e.target.value)}/>
                </div>
                
                <Link to="wizardone"><button>Previous Step</button></Link>
                <Link to="wizardthree"><button>Next Step</button></Link>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {address, city, location, zip} = state;
    return {
        address, 
        city, 
        location,
        zip
    }
}

// add another word rather than state

export default connect(mapStateToProps, { updateAddress, updateCity, updateLocation, updateZip })(WizardTwo);