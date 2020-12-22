import React, {useState} from 'react'
import store from '../store'
import {useDispatch} from 'react-redux';
function AddNumber(props) {

    const [size, setsize] = useState(1)

    const {dispatch} = useDispatch();

    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value = "+" onClick={function(){
                dispatch({type : 'INCREMENT', size:size})
            }}/>
            <input type="text" value = {size} onChange={function(e){
                setsize(Number(e.target.value))
            }}/>
        </div>
    )
}

export default AddNumber
