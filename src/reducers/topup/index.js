import { POST_TOPUP } from "../../actions/topupAction";

const initialState={
  getTopupResult: false,
  getTopupLoading: false,
  getTopupError: false, 
}
const topup = (state = initialState, action)=>{
  switch(action.type){
    case POST_TOPUP:
      return{
        ...state,
        getTopupResult: action.payload.data,
        getTopupLoading: action.payload.loading,
        getTopupError: action.payload.errorMessage
      }
      default:
        return state
  }
}
export default topup