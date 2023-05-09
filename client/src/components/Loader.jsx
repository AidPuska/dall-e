import React from 'react'
import loading from "../assets/loading.png"

const Loader = () => {
  return (
    <div>
      <img width={50} className='animate-spin' src={loading} alt="" />
    </div>
  )
}

export default Loader