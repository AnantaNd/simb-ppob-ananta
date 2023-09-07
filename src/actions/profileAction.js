import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('jwtToken')

export const GET_PROFILE = "GET_PROFILE"

export const getProfile =()=>{
  return (dispatch) =>{
    dispatch({
      type: GET_PROFILE,
      payload:{
        loading: true,
        data: false,
        errorMessage: false
      }
    })
    axios({
      method: 'GET',
      url: 'https://take-home-test-api.nutech-integrasi.app/profile',
      timeout: 1200,
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=>{
      // console.log(response);
      dispatch({
        type: GET_PROFILE,
        payload:{
          loading: false,
          data: response.data,
          errorMessage: false
        }
      })
    })
    .catch((error)=>{
      dispatch({
        type: GET_PROFILE,
        payload:{
          loading: false,
          data: false,
          errorMessage: error.response.data.message
        }
      })
    })
  }
}