import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HouseListings from './components/HouseListing/HouseListing'

export default (
    <Switch>
        {/* <Route component = {Login} exact path="/"/> */}
        <Route component = {HouseListings} path="/listings"/>
        {/* <Route component = {Item} path="/api/shelfs/:shelf_id/:bin_id"/> */}
    </Switch>
)