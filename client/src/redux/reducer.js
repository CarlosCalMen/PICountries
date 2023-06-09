import { GET_COUNTRIES } from './actions.js';

const initialState = {
    countries:[],
};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES: 
              return {...state, countries: action.payload};
        default: 
            return {...state};
    }
};

export default rootReducer;