import productReducer from './productReducer';
import vaccineReducer from './vaccineReducer';
import calculateLoveReducer from './calculateLoveReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    productReducer,
    vaccineReducer,
    calculateLoveReducer
})

export default rootReducer;