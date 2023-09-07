import { GET_HISTORY } from "../../actions/historyAction";

const initialState ={
  getHistoryResult: false,
  getHistoryLoading: false,
  getHistoryError: false
}

const history =(state = initialState, action)=>{
  switch(action.type){
    case GET_HISTORY:
      return{
        ...state,
        getHistoryResult: action.payload.data,
        getHistoryLoading: action.payload.loading,
        getHistoryError: action.payload.errorMessage
      }
      default:
        return state
  }
}
export default history