import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {connect} from 'react-redux';
import { updateDesiredRent} from './../../redux/reducers/reducer';

class WizardFive extends Component {
    constructor(props) {
        super(props);
    }



    // componentDidMount = () => {
    //     console.log(this.props)
    //     axios({
    //         method: 'GET',
    //         url: `http://localhost:3001/api/listings`
    //     }).then(response => {
    //         console.log(111, response.data)
    //     })
    // }


    addListing = () => {
        console.log(this.props)
        axios({
            method: 'POST',
            url: `http://localhost:3005/api/listings`,
            data: this.props.state
        })
        // .then(response => {
        //     console.log('this added a new listing', response)
        //     response: this.props.state
        // })
    }




    render() {
        const { updateDesiredRent } = this.props;
        return (
            <div>
                <div>
                    <span>Step 5</span>
                </div>
                <div>
                    <span>Desired Rent</span>
                    <input type="text" placeholder="" onChange={ (e) => updateDesiredRent(e.target.value)} />
                </div>

                <Link to="wizardfour"><button>Previous Step</button></Link>
                <Link to="listings"><button onClick={this.addListing}>Complete</button></Link>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, {updateDesiredRent})(WizardFive)