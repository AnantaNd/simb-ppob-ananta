import React from 'react'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import { Layout, Saldo } from '../../components'

function payment() {
  return (
    <>
      <Layout>
        <div>
          <Saldo/>
        </div>
        <div className='pt-20 pb-10'>
          <p className="">Pembayaran</p>
          <h1 className="text-3xl font-semibold">Pembayaran</h1>
        </div>
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
                value={'nomina'}
                // onChange={onInputNominal}
                />
            </div>
            <button
              className={'w-full bg-red-500 text-white font-semibold py-2'}
              type="button"
            >
              Payment
            </button>
            {/* <p className="text-sm font-semibold text-red-500">{errorNominal}</p> */}
          </form>
        </div>
      </Layout>
    </>
  )
}

export default payment