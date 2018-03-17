import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import { updateLoanAmount, updateMonthlyMortgage} from './../../redux/reducers/reducer';

class WizardFour extends Component {
    render() {
        const { updateLoanAmount, updateMonthlyMortgage } = this.props;
        return (
            <div>
                <div>
                    <span>Step 4</span>
                </div>
                <div>
                    <span>Loan Amount</span>
                    <input type="text" placeholder="" onChange={ (e) => updateLoanAmount(e.target.value)} />
                </div>
                <div>
                    <span>Monthly Mortgage</span>
                    <input type="text" placeholder="" onChange={ (e) => updateMonthlyMortgage(e.target.value)} />
                </div>

                <Link to="wizardthree"><button>Previous Step</button></Link>
                <Link to="wizardfive"><button>Next Step</button></Link>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { loanAmount, monthlyMortgage} = state;
    return {
        loanAmount,
        monthlyMortgage
    }
}

export default connect(mapStateToProps, {updateLoanAmount, updateMonthlyMortgage})(WizardFour)