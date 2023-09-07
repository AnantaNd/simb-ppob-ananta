import { GET_PROFILE } from "../../actions/profileAction";

const initialState ={
  getProfileResult: false,
  getProfileLoading: false,
  getProfileError: false,
}

const profile = (state = initialState, action) =>{
  switch(action.type){
    case GET_PROFILE:
      return {
        ...state,
        getProfileResult: action.payload.data,
        getProfileLoading: action.payload.loading,
        getProfileError: action.payload.errorMessage
      }
      default:
        return state
  }
}
export default profile