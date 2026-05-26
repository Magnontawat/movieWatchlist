import React from 'react'
import Section from '../components/Section'

const HomePage = () => {


  return (

    // Header
    <div className="px-4 pt-4">
      <div className='flex item-center gap-5 mb-4 mt-4'>
          <div className='bg-violet-600 w-8 h-8 rounded-lg flex item-center justify-center'>icon</div>
          <div className='text-xl font-semibold text-white'>WatchList</div>
      </div>

      {/* ช่อง search */}
      <div className='bg-[grey] rounded-lg h-10 flex items-center gap-2 px-2 '>
        <div className=''>icon</div>
        <form className='w-full'>
          <input className='w-full outline-none' type="text"placeholder='Search-movies & Tv shows'/>
        </form>
      </div>

      {/* trending movie */}
      <Section title='Trending Movies' />

       {/* trending Tv */}
       <Section titile='Trending Tv' />


      <div>
        trending Tv
      </div>
    </div>
  )
}

export default HomePage