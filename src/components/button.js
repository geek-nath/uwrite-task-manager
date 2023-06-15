import React from 'react'

const ButtonComponentUI = ({ text }) => {
  return (
    <>
      <button type='button' className='py-2.5 ring-1 ring-indigo-500 text-white px-5 rounded-full bg-indigo-500 font-semibold hover:bg-gray-700 hover:ring-gray-700 duration-300 hover:scale-x-110'>
        { text }
      </button>
    </>
  )
}

export default ButtonComponentUI