import React from 'react'
import { Outlet } from 'react-router'

export default function Careerslayout() {
  return (
    <div className='careers-layout'>
        <h2>Careers</h2>
        <p>თქვენ მოიძიეთ:</p>

        <Outlet/>
    </div>
  )
}
