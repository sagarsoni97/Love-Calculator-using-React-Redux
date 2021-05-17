import React, { useState, useEffect } from 'react'
import { NavItem } from 'react-bootstrap';
// import { Card , Form} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import calculateLove from './Actions/calculateLoveActions';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoveCalculator = () => {

    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [calculating, setCalculating] = useState(false)
    const [data, setData] = useState([])

    const value = useSelector(state => state.calculateLoveReducer.data);
    const loading = useSelector(state => state.calculateLoveReducer.loading);
    const error = useSelector(state => state.calculateLoveReducer.error);

    const dispatch = useDispatch()

    console.log("display file", data);

    const calculate = () => {
        dispatch(calculateLove(firstName, secondName))
    }

    useEffect(() => {
        setData(value)
    }, [value])

    return (
        <div className='parentDiv'>
            <div className="centerDiv">
                <h2 style={{ color: 'red' }}>Love Calculator</h2>
                <input className="InputField"
                    type="text"
                    value={firstName}
                    placeholder="enter first name"
                    onChange={({ target }) => setFirstName(target.value)}
                /><br></br>
                <input className="InputField"
                    type="text"
                    value={secondName}
                    placeholder="enter second name"
                    onChange={({ target }) => setSecondName(target.value)}
                /><br></br> <br></br>
                <button onClick={() => calculate()}>Login</button>

                { 

                loading ? ( <div> 
                    <Loader
                    type="ThreeDots"
                    color="red"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                  /></div> ) : 

                error ? ( <div>Error</div> ) :
               
                value.length == 0  ? 
            
                 (<div></div>) :  
                 
                 (
                    <div>
                        <div style={{display:"flex", justifyContent:'space-between'}}>
                        <h5>First Name :- {data.fname}</h5>
                        <h5>Love Percentage :-  {data.percentage}%</h5>
                        <h5>Second Name :- {data.sname}</h5>
                        
                        </div>
                        <h5 style={{color:"red"}}>Message :- {data.result}</h5>
                    </div>
                )
                }

            </div>
        </div>
     ) 
}

export default LoveCalculator
