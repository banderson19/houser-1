import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Login from './components/Login/Login';
import HouseListings from './components/HouseListing/HouseListing';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';


export default (
    <Router>
        <div>
            <Route component = {Login} exact path="/"/>
            <Route component = {HouseListings} path="/listings"/>
            <Route component = {WizardOne} path="/wizardone"/>
            <Route component = {WizardTwo} path="/wizardtwo"/>
            <Route component = {WizardThree} path="/wizardthree"/>
            <Route component = {WizardFour} path="/wizardfour"/>
            <Route component = {WizardFive} path="/wizardfive"/>
        </div>
    </Router>
)