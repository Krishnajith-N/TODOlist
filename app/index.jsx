
"use client"
import React, { useState } from 'react'
const page = () => {
    useState
  let marks = 40
  let groom = "vicky"
  const bride = "kat"
  groom = "salman"
  const changeMark = () => {
    console.log(marks)
    marks = 45
    console .log(marks)
  }
  return (
    <>
    
    <h1 className='font-bold text-xl text-yellow-100'>my total mark = {marks}</h1>
    <button onClick={() => {
      changeMark()
    }} className='bg-gray-100 px-5 py-3 rounded mt-5 font-bold'>update</button>
    </>
  )
}
export default page