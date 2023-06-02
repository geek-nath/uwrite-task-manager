import React from 'react'

const ButtonUI = ({ text }) => {
  return (
    <>
      <button className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
        {text}
      </button>
    </>
  )
}

export default ButtonUI