import React from 'react'
import AddNumber from './AddNumber'
function AddNumberRoot(props) {
    return (
        <div>
            <h1>AddNumberRoot</h1>
            <AddNumber onClick={function(size){
                props.onClick(size)
            }}/>
        </div>
    )
}

export default AddNumberRoot
