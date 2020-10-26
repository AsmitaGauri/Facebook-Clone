export const initialState={
    user:null,
    erorr:null,
    loading:false
}

export const actionTypes={
    SET_USER:"SET_USER",
   
    ERROR:'ERROR'
}


const reducer=(state,action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
            console.log(action.user)
            return {...state,user:action.user,loading:false,error:null}

        case actionTypes.ERROR:
            return{...state,error:action.payload,loading:false}
    
        default:
            return state;
    }
}

export default reducer;