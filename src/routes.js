import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom'
import HouseListings from './components/HouseListing/HouseListing'
import WizardOne from './components/WizardOne/WizardOne'
import WizardTwo from './components/WizardTwo/WizardTwo'


export default (
    <Router>
        <div>
            {/* <Route component = {Login} exact path="/"/> */}
            <Route component = {HouseListings} path="/listings"/>
            <Route component = {WizardOne} path="/wizardone"/>
            <Route component = {WizardTwo} path="/wizardtwo"/>
        </div>
    </Router>
)