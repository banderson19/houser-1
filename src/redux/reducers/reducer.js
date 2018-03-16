const initialState = {
    propertyName: '',
    propertyDescription: '',
    address: '',
    city: '',
    state: '',
    zip: 0
}

const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME';
const UPDATE_PROPERTY_DESCRIPTION = 'UPDATE_PROPERTY_DESCRIPTION';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';


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
        
        case UPDATE_STATE:
            return Object.assign( {}, state, {state: action.payload});
        
        case UPDATE_ZIP: 
            return Object.assign( {}, state, {zip: action.payload});
            

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

export function updateState(state) {
    console.log('prop-->', state)
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    console.log('prop-->', zip)
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export default reducer;