import React from 'react'

const InputUI = ({ inputId, inputName, inputType, inputAutoComplete }) => {
  return (
    <>
      <input id={ inputId } name={ inputName } type={ inputType } autoComplete={ inputAutoComplete } required className="block no-outline w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"/>
    </>
  )
}

export default InputUI