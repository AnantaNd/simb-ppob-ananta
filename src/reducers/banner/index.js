import { GET_BANNER } from "../../actions/bannerAction";

const initialState ={
  getBannerResult: false,
  getBannerLoading: false,
  getBannerError: false,
}

const banner = (state = initialState, action) =>{
  switch(action.type){
    case GET_BANNER:
      return{
        ...state,
        getBannerResult: action.payload.data,
        getBannerLoading: action.payload.loading,
        getBannerError: action.payload.errorMessage
      }
      default:
        return state
  }
}
export default banner