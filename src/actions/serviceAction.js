import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('jwtToken')

export const GET_SERVICE = "GET_SERVICE"

export const getService =()=> {
  return (dispatch) =>{
    dispatch({
      type: GET_SERVICE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      }
    })
    axios({
      method: 'GET',
      url: 'https://take-home-test-api.nutech-integrasi.app/services',
      timeout: 1200, 
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=>{
      // console.log(response);
      dispatch({
        type: GET_SERVICE,
        payload:{
          loading: false,
          data: response.data,
          errorMessage: false
        }
      })
    })
    .catch((error)=>{
      dispatch({
        type: GET_SERVICE,
        payload:{
          loading: false,
          data: false,
          errorMessage: error.response.data.message
        }
      })
    })
  }
}