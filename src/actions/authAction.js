import axios from "axios";
import Cookies from "js-cookie";

export const LOGIN_AUTH = 'LOGIN_AUTH'

export const loginAuth = (data) => {
  // console.log('2. masuk action');
  return async (dsipatch) => {
    dsipatch({
      type: LOGIN_AUTH,
      payload:{
        loading: true,
        data: false,
        errorMessage: false
      }
    })  
    await axios({
      method: 'POST',
      url:'https://take-home-test-api.nutech-integrasi.app/login',
      timeout: 12000,
      data: data
    })
      .then((response)=>{
        //post berhasil
        // console.log('3. berhasil masuk', response);
        dsipatch({
          type: LOGIN_AUTH,
          payload:{
            loading: false,
            data: response.data,
            errorMessage: false
          }
        })
        Cookies.set('jwtToken', response.data.data.token)
      })
      .catch((error)=>{
        //post error
        // console.log('3. gagal masuk', error);
        dsipatch({
          type: LOGIN_AUTH,
          payload:{
            loading: false,
            data: false,
            errorMessage: error.response.data.message
          }
        })  
      })
  }
}