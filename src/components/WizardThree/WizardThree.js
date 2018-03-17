import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import { updateUrl } from './../../redux/reducers/reducer';

class WizardThree extends Component {
    render() {
        const {updateUrl} = this.props
        return (
            <div>
                <div>
                    <span>Step 3</span>
                </div>
                <div>
                    <img src=""/>
                </div>
                <div>
                    <span>Image URL</span>
                    <input type="text" placeholder="" onChange={ (e) => updateUrl(e.target.value)}/>
                </div>

                <Link to="wizardtwo"><button>Previous Step</button></Link>
                <Link to="wizardfour"><button>Next Step</button></Link>
            </div>
        )
    }
        
}

const mapStateToProps = (state) => {
    const { url } = state
    return {
        url
    }
}

export default connect(mapStateToProps, {updateUrl})(WizardThree)