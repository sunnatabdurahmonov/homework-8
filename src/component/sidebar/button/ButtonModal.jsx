import React from 'react'
import './button.scss'

export const ButtonModal = ({children,type,htmltype}) => {
  return (
    <div>
      <button className={`button ${type}`}>
        {children}
      </button>
    </div>
  )
}

export default ButtonModal
