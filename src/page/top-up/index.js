import React, { useState } from "react";
import { BsCheckLg } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postTopup } from "../../actions/topupAction";
import { Layout, Saldo } from "../../components";
import ModalAct from "../../components/ModalAct";
import { rupiah } from "../../helper";

function TopUp() {
  const [nominal, setNominal] = useState(null);
  const [errorNominal, setErrorNominal] = useState();

  const { getTopupResult, getTopupLoading, getTopupError } = useSelector(
    (state) => state.topupReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTopup = (event) => {
    // event.preventDefault()
    dispatch(postTopup({ top_up_amount: nominal }));

  };
  const handleSuccessTopup=()=>{
    navigate('/')
    window.location.reload()
  }
  // console.log(getTopupResult);
  const onInputNominal =(e)=>{
    let newNominal = e.target.value
    setNominal(newNominal)
    console.log(nominal)
    if(nominal < 10000 ){
      setErrorNominal('minimal top up Rp 10.000')
    }else if(nominal >= 1000000){
      setErrorNominal('maksimal top up Rp 1.000.000')
    }else{
      setErrorNominal('')
    }
  }

  return (
    <div>
      <Layout>
        <div>
          <Saldo />
        </div>
        <div className="pt-20 pb-10">
          <p>Silahkan Masukan</p>
          <h1 className="text-3xl font-semibold">Nominal Top Up</h1>
        </div>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2">
          <div>
            <form className="flex flex-col gap-2">
              <div className="flex flex-row gap-6 p-0 items-center w-full h-full border">
                <div className="px-2">
                  <RiMoneyDollarBoxLine size={25} className="text-gray-400" />
                </div>
                <input
                  className="p-2 active:bg-none w-full"
                  placeholder="masukan nominal top up"
                  type="number"
                  min={10000}
                  max={1000000}
                  value={nominal}
                  onChange={onInputNominal}
                  />
              </div>
              <ModalAct
                nominal={rupiah(nominal)}
                onTopup={(e) => handleTopup(e)}
                btnDisable={nominal? false : true}/>
              {nominal &&
              <p className="text-sm font-semibold text-red-500">{errorNominal}</p>}
            </form>
          </div>
          {/* option topup */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <input
                type="radio"
                id="nominal1"
                name="nominal"
                value={10000}
                className="hidden peer"
                onChange={(e) => setNominal(e.target.value)}
              />
              <label
                htmlFor="nominal1"
                className="inline-flex items-center justify-between w-full px-5 py-2  bg-white border border-gray-500 rounded-sm cursor-pointer peer-checked:text-white peer-checked:bg-red-500"
              >
                Rp 10.000
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="nominal2"
                name="nominal"
                value={20000}
                className="hidden peer"
                onChange={(e) => setNominal(e.target.value)}
              />
              <label
                htmlFor="nominal2"
                className="inline-flex items-center justify-between w-full px-5 py-2  bg-white border border-gray-500 rounded-sm cursor-pointer peer-checked:text-white peer-checked:bg-red-500"
              >
                Rp 20.000
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="nominal3"
                name="nominal"
                value={50000}
                className="hidden peer"
                onChange={(e) => setNominal(e.target.value)}
              />
              <label
                htmlFor="nominal3"
                className="inline-flex items-center justify-between w-full px-5 py-2  bg-white border border-gray-500 rounded-sm cursor-pointer peer-checked:text-white peer-checked:bg-red-500"
              >
                Rp 50.000
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="nominal4"
                name="nominal"
                value={100000}
                className="hidden peer"
                onChange={(e) => setNominal(e.target.value)}
              />
              <label
                htmlFor="nominal4"
                className="inline-flex items-center justify-between w-full px-5 py-2  bg-white border border-gray-500 rounded-sm cursor-pointer peer-checked:text-white peer-checked:bg-red-500"
              >
                Rp 100.000
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="nominal5"
                name="nominal"
                value={250000}
                className="hidden peer"
                onChange={(e) => setNominal(e.target.value)}
              />
              <label
                htmlFor="nominal5"
                className="inline-flex items-center justify-between w-full px-5 py-2  bg-white border border-gray-500 rounded-sm cursor-pointer peer-checked:text-white peer-checked:bg-red-500"
              >
                Rp 250.000
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="nominal6"
                name="nominal"
                value={500000}
                className="hidden peer"
                onChange={(e) => setNominal(e.target.value)}
              />
              <label
                htmlFor="nominal6"
                className="inline-flex items-center justify-between w-full px-5 py-2  bg-white border border-gray-500 rounded-sm cursor-pointer peer-checked:text-white peer-checked:bg-red-500"
              >
                Rp 500.000
              </label>
            </div>
          </div>
        </div>
        {getTopupResult?.message && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex flex-col items-center py-5 px-4 rounded-t">
                    {getTopupResult?.message === 'Top Up Balance berhasil' ? (
                      <div className="bg-green-400 rounded-full p-3">
                        <BsCheckLg size={24} color="white" className="text-center"/>
                      </div>
                    ):
                    (
                      <div className="bg-red-400 rounded-full p-3">
                        <FaTimes size={24} color="white" className="text-center"/>
                      </div>
                    )
                    }
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto text-center">
                    <p className="py-2">Top Up Sebesar</p>
                    <h1 className="py-2 text-xl font-bold">{rupiah(nominal)}</h1>
                    <p>{getTopupResult?.message}</p>
                  </div>
                  {/*footer*/}
                  <div className="flex flex-col items-center  py-3 px-4 rounded-b">
                    <button
                      className="text-red-400 font-semibold px-4 mx-10 py-2 rounded-md"
                      type="button"
                      onClick={handleSuccessTopup}
                    >
                      Kembali Ke Beranda
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </div>
  );
}

export default TopUp;
