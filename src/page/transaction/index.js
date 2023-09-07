import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHistory } from '../../actions/historyAction'
import { Layout, Saldo } from '../../components'
import BoxTransaction from '../../components/BoxTransaction'
import { isoDate, rupiah } from '../../helper'



function Transaction() {

  const [limitShow, setLimitShow] = useState(0)
  const {getHistoryResult, getHistoryLoading, getHistoryError} = useSelector((state)=>
  state.historyReducer)
  
  const dispatch = useDispatch()

  const handleShowMore=()=>{
    setLimitShow((prev)=>prev + 5)
  }
  
  useEffect(()=>{
    dispatch(getHistory({gelimit: 5 + limitShow, offset: 0}))
  }, [dispatch, limitShow])
  
  
  // console.log(limitShow);

  return (
    <div>
      <Layout>
        <div>
          <Saldo/>
        </div>
        <div className='py-20'>
          <h3 className='text-sm font-semibold'>Semua Transaksi</h3>
          {getHistoryResult?(
            getHistoryResult?.data?.records?.map((data, i)=>{
              return(
                <BoxTransaction key={i}
                  nominal={rupiah(data.total_amount)}
                  date={isoDate(data.created_on)}
                  status={data.transaction_type}
                />
              )
            })
          ):getHistoryLoading?(
            <p className='text-lg font-semibold text-center my-8'>Loading ...</p>
          ):(
            <p>{getHistoryError ? getHistoryError : 'Data transaction kosong'}</p>
          )}
          {!getHistoryLoading && getHistoryResult?.data?.records?.lenght &&(
            <button onClick={handleShowMore} className='flex mx-auto justify-center font-semibold capitalize text-red-500'>show more</button>
          )}
        </div>
      </Layout>
    </div>
  )
}

export default Transaction