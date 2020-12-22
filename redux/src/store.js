

const reducer = (state, action) => {
    if(state === undefined){
        return { number : 0}
    } else if(action.type === 'INCREMENT'){
        return {...state, number : state.number+ action.size}
    }
}

export default reducer