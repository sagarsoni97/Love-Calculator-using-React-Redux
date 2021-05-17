import {CALCULATE_START, CALCULATE_SUCCESS, CALCULATE_ERROR} from "../Actions/actionTypes"

const initialState = {
    data : [],
    loading : false,
    error : false
}

const calculateLoveReducer = (state=initialState, action) =>{

if(action.type===CALCULATE_START){
    return {
        ...state,
        loading : true,
        error : false
    }
}

if(action.type===CALCULATE_SUCCESS){
    return {
        ...state,
        loading : false,
        data : action.payload,
        error : false
    }
}

if(action.type===CALCULATE_ERROR){
    return {
        ...state,
        loading : false,
        error : true
    }
}

return state;


}

export default calculateLoveReducer;