const iState = {
    search_value:"",
    search_by:"",
    date:"",
    type:""
}

const reducer =(state=iState,action)=>{
    if(action.type==='import'){
        return {
            search_value:action.searchvalue,
            search_by:action.search_by,
            date:action.year,
            type:action.type_
        }
    }
    return state
}

export default reducer