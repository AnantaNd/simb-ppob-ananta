import { LOGIN_AUTH } from "../../actions/authAction";

const intialState = {

  loginAuthResult: false,
  loginAuthLoading: false,
  loginAuthError: false

}
const login = (state = intialState, action) => {
  switch(action.type){
    case LOGIN_AUTH:
      // console.log('4. masuk reducer', action);
      return{
        ...state,
        loginAuthResult: action.payload.data,
        loginAuthLoading: action.payload.loading,
        loginAuthError: action.payload.errorMessage
      }
    default:
      return state
  }
}
export default login