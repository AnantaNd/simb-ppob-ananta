import { REGIST_USER } from "../../actions/register";

const initialState = {
  registUserResult: false,
  registUserLoading: false,
  registUserError: false,
}

const regist =(state = initialState, action)=>{
  switch(action.type){
    case REGIST_USER:
      return{
        ...state,
        registUserResult: action.payload.data,
        registUserLoading: action.payload.loading,
        registUserError: action.payload.errorMessage,
      }
      default:
        return state
  }
}
export default regist