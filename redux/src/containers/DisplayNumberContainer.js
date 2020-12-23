import React, {useState} from 'react'
import DisplayNumber from '../Components/DisplayNumber';
import {useSelector} from 'react-redux';

function DisplayNumberContainer() {

    const selectNumber = useSelector(state => state.number);

    return (
        <DisplayNumber selectNumber={selectNumber}/>
    )
}

export default DisplayNumberContainer
