import { UPDATE_USER } from "../../actions/updateAction";

const intialState = {
  updateUserResult: false,
  updateUserLoading: false,
  updateUserError: false
}

const update = (state = intialState, action)=>{
  switch(action.type){
    case UPDATE_USER:
      return{
        ...state,
        updateUserResult: action.payload.data,
        updateUserLoading: action.payload.loading,
        updateUserError: action.payload.errorMessage
      }
      default:
        return state
  }
}
export default update