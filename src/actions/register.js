import axios from "axios"

export const REGIST_USER = 'REGIST_USER'

export const regist=(data)=>{
  return async(dispatch)=>{
    dispatch({
      type: REGIST_USER,
      payload:{
        loading: true,
        data: false,
        errorMessage: false
      }
    })
    await axios({
      method: 'POST',
      url:'https://take-home-test-api.nutech-integrasi.app/registration',
      timeout: 12000,
      data: data
    })
    .then((response)=>{
      console.log(response);
      dispatch({
        type: REGIST_USER,
        payload:{
          loading: false,
          data: response.data,
          errorMessage: false
        }
      })
    })
    .catch((error)=>{
      console.log(error);
      dispatch({
        type: REGIST_USER,
        payload:{
          loading: false,
          data: false,
          errorMessage: error.response.data.message
        }
      })
    })
  }
}