import React, { useState } from 'react';

function ModalAlert({nominal, message}) {

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
          <div className="relative w-auto my-6 mx-auto max-w-xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex flex-col items-center py-5 px-4 rounded-t">
                <img src='/Logo.png' alt='img'/>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto text-center">
                <p className='py-2'>Anda Yakin Untuk Top Up Sebesar</p>
                <h1 className='py-2 text-xl font-bold'>{nominal}</h1>
                <p>{message}</p>
              </div>
              {/*footer*/}
              <div className="flex flex-col items-center  py-3 px-4 rounded-b">
                <button
                  className="text-gray-400 font-semibold px-4 mx-10 py-2 rounded-md"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Kembali Ke Beranda
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

export default ModalAlert