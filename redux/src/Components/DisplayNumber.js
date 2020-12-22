import React,{useState} from 'react';
import {useSelector} from 'react-redux';

function DisplayNumber(props) {

    const selectNumber = useSelector(state => state.number);

    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" value={selectNumber} readOnly/>
        </div>
    )
}

export default DisplayNumber
