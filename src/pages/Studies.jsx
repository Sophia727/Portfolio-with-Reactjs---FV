import React from 'react'
import Title2 from '../components/Title2'
import Study from '../components/Study'

export default function Studies() {
  return (
    <div>
        <div className='flex flex-col align-middle md:p-20 mb-5'>
                <Title2 title2Name="Studies" class=" lg:text-left lg:ml-5 md:ml-5 lg:pt-[20px] text-center md:text-left"/>
            <div className=' mt-16 gap-5 flex lg:flex-row flex-col justify-around '>
                <Study date="2022" school="3W Academy" diploma="Full Stack Developper" description="Front end: ReactJS - Back-end: Laravel "/>
                <Study date="2019" school="HTL School of Tourism" diploma="Master degree in Luxury and Vip Management in Tourism" description="Luxury Marketing - VIP Management"/>
                <Study date="2015-2018" school="International University Of Casablanca" diploma="Hospitality Management" description="General Management - Finance - Marketing (...)"/>
            </div>
        </div>
        
    </div>
  )
}
