const initialState = {
    propertyName: '',
    propertyDescription: '',
    address: '',
    city: '',
    location: '',
    zip: 0,
    url: '',
    loanAmount: 0,
    monthlyMortgage: 0,
    desiredRent: 0
}

const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME';
const UPDATE_PROPERTY_DESCRIPTION = 'UPDATE_PROPERTY_DESCRIPTION';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_LOCATION = 'UPDATE_LOCATION';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_URL = 'UPDATE_URL';
const UPDATE_LOAN_AMOUNT = 'UPDATE_LOAN_AMOUNT';
const UPDATE_MONTHLY_MORTGAGE = 'UPDATE_MONTHLY_MORTGAGE';
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT';


function reducer(state = initialState, action) {
    switch( action.type ) {
        case UPDATE_PROPERTY_NAME: 
            return Object.assign( {}, state, {propertyName: action.payload});

        case UPDATE_PROPERTY_DESCRIPTION: 
            return Object.assign( {}, state, {propertyDescription: action.payload})
            
        case UPDATE_ADDRESS: 
            return Object.assign( {}, state, {address: action.payload});

        case UPDATE_CITY:
            return Object.assign( {}, state, {city: action.payload});
        
        case UPDATE_LOCATION:
            return Object.assign( {}, state, {location: action.payload});
        
        case UPDATE_ZIP: 
            return Object.assign( {}, state, {zip: action.payload});

        case UPDATE_URL:
            return Object.assign( {}, state, {url: action.payload});
        
        case UPDATE_LOAN_AMOUNT: 
            return Object.assign( {}, state, {loanAmount: action.payload});

        case UPDATE_MONTHLY_MORTGAGE:
            return Object.assign( {}, state, {monthlyMortgage: action.payload});

        case UPDATE_DESIRED_RENT:
            return Object.assign( {}, state, {desiredRent: action.payload});

        default: return state
    }
};

export function updatePropertyName(propertyName) {
    console.log('prop-->', propertyName)
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: propertyName
    }
}

export function updatePropertyDescription(propertyDescription) {
    console.log('prop-->', propertyDescription)
    return {
        type: UPDATE_PROPERTY_DESCRIPTION,
        payload: propertyDescription
    }
}

export function updateAddress(address) {
    console.log('prop-->', address)
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    console.log('prop-->', city)
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateLocation(location) {
    console.log('prop-->', location)
    return {
        type: UPDATE_LOCATION,
        payload: location
    }
}

export function updateZip(zip) {
    console.log('prop-->', zip)
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateUrl(url) {
    console.log('prop-->', url)
    return {
        type: UPDATE_URL,
        payload: url
    }
}

export function updateLoanAmount(loanAmount) {
    console.log('prop-->', loanAmount)
    return {
        type: UPDATE_LOAN_AMOUNT,
        payload: loanAmount
    }
}

export function updateMonthlyMortgage(monthlyMortgage){
    console.log('prop-->', monthlyMortgage)
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: monthlyMortgage
    }
}

export function updateDesiredRent(desiredRent) {
    console.log('prop-->', desiredRent)
    return {
        type: UPDATE_DESIRED_RENT,
        payload: desiredRent
    }
}

export default reducer;