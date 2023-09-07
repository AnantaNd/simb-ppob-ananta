import axios from "axios"
import Cookies from "js-cookie"

const token = Cookies.get('jwtToken')

export const GET_HISTORY = "GET_HISTORY"

export const getHistory = () =>{
  return async(dispatch)=>{
    dispatch({
      type: GET_HISTORY,
      payload:{
        loading: true,
        data: false,
        errorMessage: false
      }
    })
    await axios({
      method: 'GET',
      url: 'https://take-home-test-api.nutech-integrasi.app/transaction/history',
      timeout: 1200,
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=>{
      // console.log(response)
      dispatch({
        type: GET_HISTORY,
        payload:{
          loading: false,
          data: response.data,
          errorMessage: false
        }
      })
    })
    .catch((error)=>{
      dispatch({
        type: GET_HISTORY,
        payload:{
          loading: false,
          data: false,
          errorMessage: error.response.data.message
        }
      })
    })
  }
}