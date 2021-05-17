

const calculateLove = (firstName, secondName) =>{
    return (dispatch)=> {
        dispatch(loveCalculateStart())
        return fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}` , {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b52fa900b3msh930b51a9c1b6c85p18db88jsn86663d77e9e5",
                "x-rapidapi-host": "love-calculator.p.rapidapi.com"
            }
        }
            )
        .then((res)=> res.json())
        .then((result)=> {
            dispatch(loveCalculateSuccess(result))
            return result;
        })
        .catch(error => dispatch(loveCalculateError(error)));
    }
}

const loveCalculateStart = () =>{
    return {
        type : "CALCULATE_START"
    }
}

const loveCalculateSuccess = (data) =>{
    return {
        type : "CALCULATE_SUCCESS",
        payload : data
    }
}

const loveCalculateError = (error) =>{
    return {
        type : "CALCULATE_ERROR",
        payload : error 
    }
}

export default calculateLove
