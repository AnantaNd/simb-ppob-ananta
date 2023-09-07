import axios from "axios"
import Cookies from "js-cookie"

export const UPDATE_USER = 'UPDATE_USER'

const token = Cookies.get("jwtToken")

export const updateUser = (data) => {
  // console.log('2. masuk action');
  return (dsipacth) => {
    dsipacth({
      type: UPDATE_USER,
      payload:{
        loading: true,
        data: false,
        errorMessage: false,
      }
    })  
    axios({
      method: 'PUT',
      url:'https://take-home-test-api.nutech-integrasi.app/profile/update',
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
        type: UPDATE_USER,
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
          type: UPDATE_USER,
          payload:{
            loading: false,
            data: false,
            errorMessage: error.response.data.message
          }
        })  
      })
  }
}