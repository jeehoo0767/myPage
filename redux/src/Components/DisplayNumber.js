import React,{useState,useEffect} from 'react';
import {useSelector } from 'react-redux';

function DisplayNumber(props) {

    const [number, setnumber] = useState()
    const selectNumber = useSelector(state => state.number);

    useEffect(() => {
        setnumber(selectNumber);
    }, [])

    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" value={selectNumber} readOnly/>
        </div>
    )
}

export default DisplayNumber
