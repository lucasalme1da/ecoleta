import React from 'react'
import './style.css';
import { FiCheckCircle } from 'react-icons/fi'

interface Pop {
  message: string,
  type: string
}

const PopUp = ({ message, type }: Pop) => {

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <FiCheckCircle className="check" color="#2FB86E" />
        <h1>{message}</h1>
      </div>
    </div>
  )

}

export default PopUp