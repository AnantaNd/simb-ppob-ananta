import axios from "axios"
import Cookies from "js-cookie"

export const POST_TOPUP = "POST_TOPUP"

const token = Cookies.get('jwtToken')

export const postTopup = (data) => {
  // console.log('2. masuk action');
  return async(dsipacth) => {
    dsipacth({
      type: POST_TOPUP,
      payload:{
        loading: true,
        data: false,
        errorMessage: false
      }
    })  
    await axios({
      method: 'POST',
      url:'https://take-home-test-api.nutech-integrasi.app/topup',
      timeout: 12000,
      data: data,
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
      .then((response)=>{
        //post berhasil
        // console.log('3. berhasil masuk', response);
        dsipacth({
          type: POST_TOPUP,
          payload:{
            loading: false,
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch((error)=>{
        //post error
        console.log('3. gagal masuk', error);
        dsipacth({
          type: POST_TOPUP,
          payload:{
            loading: false,
            data: false,
            errorMessage: error.response.data.message
          }
        })  
      })
  }
}