import React from 'react'
import Landing from '../component/Landing'
import CustomerOpinion from '../component/CustomerOpinion'
import Feature from '../component/Feature'
import Howitwork from '../component/Howitwork'
import Header from '../component/Header'


export default function Home() {
  return (
    <>
    <Landing />
    <>
  {/* Container for demo purpose */}
  <div className="container bg-sky-50 py-8 px-6 mx-auto">
    {/* Section: Design Block */}
    <section className="mb-8 text-gray-800 text-center">
      <div className="flex justify-center">
        <div className="max-w-[800px]">
          <h2 className="text-5xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-3 text-blue-600">
            Are you ready <br />
            <span className=' text-gray-800'>To achieve your dream?</span>
          </h2>
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </div>
  {/* Container for demo purpose */}
</>

    <Feature />
    <Howitwork />
    <Header />
    <CustomerOpinion />
    </>
  )
}