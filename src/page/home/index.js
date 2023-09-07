import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getBanner } from '../../actions/bannerAction'
import { Layout, Menu, Saldo } from '../../components'

import Cookies from 'js-cookie'
import 'swiper/css'

function Home() {

  const {getBannerResult, getBannerLoading, getBannerError} = useSelector((state)=>
    state.bannerReducer)
  const token = Cookies.get('jwtToken')


  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getBanner())
    // window.location.reload()
  }, [dispatch])

  return (
    <div>
      <Layout>
        <div>
          <Saldo/>
        </div>
        <div>
          <Menu/>
        </div>
        <div className='w-full py-8'>
          <h3 className='text-sm font-semibold'>Temukan Promo Menarik</h3>
          <div className='py-5'>
            <Swiper
              breakpoints={{
                320:{
                  slidesPerView: 1,
                  spaceBetween: 7,
                },
                768:{
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                1280:{
                  slidesPerView: 4,
                  spaceBetween: 24
                },
              }}
            >
              {getBannerResult?.data?.map((data, i)=>{
                return (
                  <SwiperSlide key={i}>
                    <img className='w-full h-full' src={data?.banner_image} alt='img'/>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home