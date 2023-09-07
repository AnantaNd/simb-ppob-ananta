import { GET_BALLANCE } from "../../actions/ballanceAction";

const initialState ={
  getBallanceResult: false,
  getBallanceLoading: false,
  getBallanceError: false,
}

const ballance = (state = initialState, action) =>{
  switch(action.type){
    case GET_BALLANCE:
      return {
        ...state,
        getBallanceResult: action.payload.data,
        getBallanceLoading: action.payload.loading,
        getBallanceError: action.payload.errorMessage
      }
      default:
        return state
  }
}
export default ballance