import React from 'react'

const PostJobStep = () => {
  return (
    <div className='hidden lg:flex items-center w-full space-x-3 my-10 px-10 2xl:px-0 overflow-hidden '>
      <div className='grid grid-cols-6 items-center w-full gap-2'>
        <div className='flex bg-orange-600 w-8 h-8 rounded-full text-white items-center justify-center text-sm font-semibold'>
          01
        </div>
        <p className='font-bold text-sm '>Basic</p>
        <hr className='col-span-4 border border-gray-200 '/>
      </div>

      <div className='grid grid-cols-6 items-center w-full gap-2'>
        <div className='flex bg-orange-600 w-8 h-8 rounded-full text-white items-center justify-center text-sm font-semibold'>
          02
        </div>
        <p className='font-bold text-sm col-span-2 '>Description</p>
        <hr className='col-span-3 border border-gray-200 '/>
      </div>

      <div className='grid grid-cols-6 items-center w-full gap-2'>
        <div className='flex bg-orange-600 w-8 h-8 rounded-full text-white items-center justify-center text-sm font-semibold'>
          03
        </div>
        <p className='font-bold text-sm '>Detail</p>
        <hr className='col-span-4 border border-gray-200 '/>
      </div>

      <div className='grid grid-cols-6 items-center w-full gap-2'>
        <div className='flex bg-orange-600 w-8 h-8 rounded-full text-white items-center justify-center text-sm font-semibold'>
          04
        </div>
        <p className='font-bold text-sm '>Media</p>
        <hr className='col-span-4 border border-gray-200 '/>
      </div>

    </div>
  )
}

export default PostJobStep
