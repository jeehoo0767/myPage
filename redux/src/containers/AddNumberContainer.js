import React, {useState} from 'react'
import AddNumber from '../Components/AddNumber'
import {useDispatch} from 'react-redux';

function AddNumberContainer() {
    const dispatch = useDispatch();
    const [size, setsize] = useState(1);
    const handleClick = (size) => {
        dispatch({type : 'INCREMENT', size:size})
    }

    return (
        <AddNumber onClick={handleClick}/>
    )
}

export default AddNumberContainer
