import React, {useState} from 'react'

function AddNumber(props) {

    const [size, setsize] = useState(1)

    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value = "+" onClick={function(){
                props.onClick(size);
            }}/>
            <input type="text" value = {size} onChange={function(e){
                setsize(Number(e.target.value))
            }}/>
        </div>
    )
}

export default AddNumber
