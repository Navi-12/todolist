let initialState={
array:[]

}
const reducer=(state=initialState,action)=>{
    switch(action.type){
    case "UPDATINGARRAY":
       return{
           ...state,
           array:action.payload
    }
    default:
            return state
} 
}
export default reducer;