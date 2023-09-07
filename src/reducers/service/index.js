import { GET_SERVICE } from "../../actions/serviceAction";

const initialState ={
  getServiceResult: false,
  getServiceLoading: false,
  getServiceError: false,
}
const service = (state = initialState, action) =>{
  switch(action.type){
    case GET_SERVICE:
      return {
        ...state,
        getServiceResult: action.payload.data,
        getServiceLoading: action.payload.loading,
        getServiceError: action.payload.errorMessage
      }
      default:
        return state
  }
}
export default service