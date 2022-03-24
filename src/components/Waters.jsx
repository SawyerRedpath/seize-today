import React from 'react'
import { useSelector } from 'react-redux'
import Water from './Water'

const Waters = () => {
  const waters = useSelector((state) => state.waters)
  return (
    <ul>
      {waters.map((water) => (
        <Water water={water} key={water.id} />
      ))}
    </ul>
  )
}

export default Waters
