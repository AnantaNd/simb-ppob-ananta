import React from 'react'
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
      </Layout>
    </>
  )
}

export default payment