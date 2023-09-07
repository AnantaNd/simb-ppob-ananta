import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('jwtToken')


export const GET_BANNER = "GET_BANNER"

export const getBanner =()=>{
  return async(dispatch) =>{
    dispatch({
      type: GET_BANNER,
      payload:{
        loading: true,
        data: false,
        errorMessage: false,
      }
    })
    await axios({
      method: 'GET',
      url: 'https://take-home-test-api.nutech-integrasi.app/banner',
      timeout: 1200,
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=>{
      // console.log(response);
      dispatch({
        type: GET_BANNER,
        payload:{
          loading: false,
          data: response.data,
          errorMessage: false,
        }
      })
    })
    .catch((error)=>{
      dispatch({
        type: GET_BANNER,
        payload:{
          loading: false,
          data: false,
          errorMessage: error.response.data.message
        }
      })
    })
  }
}