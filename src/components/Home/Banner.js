import React from 'react'


function Banner() {
  return (
    <div className='banner relative'>
      <div className='banner-info bg-black text-white px-4 flex flex-col justify-end pb-4 leading-relaxed'>
        <h2 className='font-bold text-2xl'>Get out and stretch your imagination</h2>
        <h5 className=''>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
        <button class="bg-blue-900 hover:bg-black text-white font-medium py-1 px-3 rounded font-normal">
          Explore Nearby
        </button>
      </div>
    </div>
  )
}

export default Banner