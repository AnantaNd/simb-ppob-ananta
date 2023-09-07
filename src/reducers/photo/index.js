import { UPDATE_PHOTO } from "../../actions/photoAction";


const intialState = {
  updatePhotoResult: false,
  updatePhotoLoading: false,
  updatePhotoError: false
}

const updatePhoto = (state = intialState, action)=>{
  switch(action.type){
    case UPDATE_PHOTO:
      return{
        ...state,
        updatePhotoResult: action.payload.data,
        updatePhotoLoading: action.payload.loading,
        updatePhotoError: action.payload.errorMessage
      }
      default:
        return state
  }
}
export default updatePhoto