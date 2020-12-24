import DisplayNumber from '../Components/DisplayNumber'
import {connect, useSelector} from 'react-redux';

const mapReduxStateToReactProps = (state) => {
    console.log(state.number)
    return {
        number : state.number
    }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);


// import React, {useState} from 'react'
// import DisplayNumber from '../Components/DisplayNumber';
// import {useSelector} from 'react-redux';



// function DisplayNumberContainer() {

//     const selectNumber = useSelector(state => state.number);

//     return (
//         <DisplayNumber selectNumber={selectNumber}/>
//     )
// }

// export default DisplayNumberContainer
