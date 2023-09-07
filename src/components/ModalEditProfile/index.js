import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../actions/profileAction';
import { updateUser } from '../../actions/updateAction';


function ModalEditProfile({onClose, onOpen}) {

  const [showModal, setShowModal] = useState(false);
  const [namaDepan, setNamaDepan] = useState('')
  const [namaBlk, setNamaBlk] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { updateUserResult, updateUserLoading, updateUserError } = useSelector((state)=>state.loginReducers)
  const {getProfileResult, getProfileLoading, getProfileError} = useSelector((state)=>state.profileReducer)


  const handleUpdate =()=>{
    // event.preventDefault()
    dispatch(updateUser({email: email, first_name: namaDepan, last_name: namaBlk}))
    dispatch(getProfile())
    setShowModal(!showModal)
    window.location.reload()
  }
  // useEffect(()=>{
  //   if(updateUserResult){
  //     dispatch(updateUser())
  //   }
  // }, [updateUserResult, dispatch])


  

  // console.log(updateUserResult?.data)

  return (
    <>
      <button
        className="w-96 bg-red-500 text-white font-semibold py-2 rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit Profile
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between py-3 px-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Edit Profile
                  </h3>
                </div>
                {/*body*/}
                {getProfileResult?(
                  <div className="relative p-6 flex-auto">
                    <form>
                      <div className='flex flex-col w-96'>
                        <label className='py-2'>Email</label>
                        <input 
                          className='p-2 border border-gray-400 rounded-md' 
                          name='email' 
                          defaultValue={getProfileResult?.data?.email}
                          onChange={(e)=>setEmail(e.target.value)}
                          disabled/>
                      </div>
                      <div className='flex flex-col w-96'>
                        <label className='py-2'>Nama Depan</label>
                        <input 
                          className='p-2 border border-gray-400 rounded-md'
                          name='name' 
                          defaultValue={getProfileResult?.data?.first_name}
                          onChange={(e)=>setNamaDepan(e.target.value)}/>
                      </div>
                      <div className='flex flex-col w-96'>
                        <label className='py-2'>Nama Belakang</label>
                        <input 
                        className='p-2 border border-gray-400 rounded-md' 
                        name='name' 
                        defaultValue={getProfileResult?.data?.last_name}
                        onChange={(e)=>setNamaBlk(e.target.value)}/>
                      </div>
                    </form>
                  </div>
                ):getProfileLoading?(
                  <p className='text-lg font-semibold text-center my-8'>Loading ...</p>
                ):(
                  <p>{getProfileError ? getProfileError : 'Data profile kosong'}</p>
                )}
                {/*footer*/}
                <div className="flex items-center justify-end py-3 px-4 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 font-semibold px-4 mx-10 py-2 rounded-md"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className=" bg-red-500 text-white font-semibold px-4 py-2 rounded-md"
                    type="button"
                    onClick={handleUpdate}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>

  )
}

export default ModalEditProfile