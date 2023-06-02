import React from 'react'
import * as AiIcons from 'react-icons/ai'

const AlertUI = ({ alertType, alertMessage, onClick }) => {
  return (
    <>
      <div className={`py-3 px-2 rounded-md flex gap-2 items-center ${alertType} mb-2 text-sm`}>
        { alertMessage }

        <button onClick={onClick} className='bg-transparent ml-auto text-xl outline-none'>
          <AiIcons.AiOutlineCloseCircle />
        </button>
      </div>
    </>
  )
}

export default AlertUI