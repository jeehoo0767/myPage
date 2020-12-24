import AddNumber from '../Components/AddNumber'
import {connect} from 'react-redux';

export default connect()(AddNumber)

// function AddNumberContainer() {
//     const dispatch = useDispatch();
//     const [size, setsize] = useState(1);
//     const handleClick = (size) => {
//         dispatch({type : 'INCREMENT', size:size})
//     }

//     return (
//         <AddNumber onClick={handleClick}/>
//     )
// }

// export default AddNumberContainer
