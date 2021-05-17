// import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from '../Actions/actionTypes'

 const fetchData = ({pincode ,date}) => {
    //  console.log("action creator ",pincode);
    return dispatch => {
      dispatch(fetchDataStart());
      return fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchDataSuccess(json.centers));
          return json.centers;
        })
        .catch(error => dispatch(fetchDataError(error)));
    };
  }

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }


export const fetchDataStart  = () =>{
    return{
        type: "FETCH_DATA_START"
    }
}


export const fetchDataSuccess  = (data) =>{
    console.log("fetch data in action scueese", data);
    return{
        type: "FETCH_DATA_SUCCESS",
        payload : data
    }
}

export const fetchDataError  = (error) =>{
    return{
        type: "FETCH_DATA_ERROR",
        payload: error
    }
}

export default fetchData;