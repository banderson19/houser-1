import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './WizardOne.css';

import {connect} from 'react-redux';
import { updatePropertyName, updatePropertyDescription } from './../../redux/reducers/reducer';

class WizardOne extends Component {
    render() {
        const { updatePropertyName, updatePropertyDescription } = this.props;
        return (
            <div>
                <div>
                    <span>Step 1</span>
                </div>
                <div>
                    <span>Property Name</span>
                    <input type="text" placeholder="" onChange={ (e) => updatePropertyName(e.target.value)}/>
                </div>
                <div>
                    <span>Property Description</span>
                    <input type="text" placeholder="" onChange={ (e) => updatePropertyDescription(e.target.value) }/>
                </div>

                <Link to="/wizardtwo"><button>Next Step</button></Link>
            </div>
        )

    }
}


// export default WizardOne;
const mapStateToProps = (state) => {
    const {propertyName, propertyDescription } = state;
    return {
      propertyName,
      propertyDescription
    }
}

export default connect(mapStateToProps, { updatePropertyName, updatePropertyDescription })(WizardOne);