

const addUser = ({title ,body, userId}) => {
    //  console.log("action creator ",title);
    return dispatch => {
      dispatch(addUserStart());
      return fetch(`https://jsonplaceholder.typicode.com/users`
      , {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
      )

        .then(res => res.json())
        .then(json => {
            console.log(json)
          dispatch(addUserSuccess(json));
          return json;
        })
        .catch(error => dispatch(addUserError(error)));
    };
  }

// const addUser = ({title, body, userId}) =>{

//     console.log(title);
   
//         // return dispatch => {
//         //     dispatch(addUserStart());
//         //     return fetch(`https://jsonplaceholder.typicode.com/users`, 
//         //     {
//         //         method: 'POST',
//         //         body: JSON.stringify({
//         //             title: title,
//         //             body: body,
//         //             userId: userId
//         //         }),
//         //         headers: {
//         //             'Content-type': 'application/json; charset=UTF-8',
//         //         },
//         //     }
//         //     )
//         //     .then((response) => response.json())
//         //     .then((json) => {
//         //         dispatch(addUserSuccess(json));
//         //         return json;
//         //       })
//         //       .catch(error => dispatch(addUserError(error)));
//         //   };
// }


const addUserStart = () =>{
    return{
        type : "ADD_USER_START",
        
    }
}

const addUserSuccess = (data) =>{
    // console.log("action vala data", data);
    return{
        type : "ADD_USER_SUCCESS",
        payload : data
    }
}

const addUserError = (error) =>{
    return{
        type : "ADD_USER_ERROR",
        payload : error
    }
}

export default addUser;