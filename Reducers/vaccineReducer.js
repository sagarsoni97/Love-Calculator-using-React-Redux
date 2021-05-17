import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from '../Actions/actionTypes'

const initialState ={
    data : [],
    loading : false,
    error : null
}

const vaccineReducer = (state= initialState, action) =>  {

    if(action.type=== FETCH_DATA_START){
          return{
            ...state,
            loading:true,
            error: null
          }
    }

    if(action.type=== FETCH_DATA_SUCCESS){
        return{
            ...state,
            data: action.payload,
            loading: false
        }
  }

  if(action.type=== FETCH_DATA_ERROR){
    return{
      ...state,
      loading:true,
      error: null
    }
}

   return state;

}

export default vaccineReducer;