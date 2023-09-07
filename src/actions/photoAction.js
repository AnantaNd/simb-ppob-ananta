import axios from "axios"
import Cookies from "js-cookie"

export const UPDATE_PHOTO = "UPDATE_PHOTO"

const token = Cookies.get('jwtToken')

export const updatePhoto=(data)=>{
  return async(dispatch)=>{
    dispatch({
      type: UPDATE_PHOTO,
      payload:{
        loading: true,
        data: false,
        errorMessage: false
      }
    })
    await axios({
      method: 'PUT',
      url:'https://take-home-test-api.nutech-integrasi.app/profile/image',
      timeout: 12000,
      data: data,
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=>{
      console.log(response)
      dispatch({
        type: UPDATE_PHOTO,
        payload:{
          loading:false ,
          data: response.data,
          errorMessage: false
        }
      })
    })
    .catch((error)=>{
      console.log(error)
      dispatch({
        type: UPDATE_PHOTO,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.response.data.message
        }
      })
    })
  }
}