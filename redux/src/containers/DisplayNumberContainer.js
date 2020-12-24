import DisplayNumber from '../Components/DisplayNumber'
import {connect} from 'react-redux';

export default connect()(DisplayNumber);


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
