"use client"
import React, { useState } from "react";
const page = () => {
    const [title, settitle]= useState("")
    const [mainTask, setmainTask]= useState([])
    const [desc, setdesc]= useState("")
    const submithandler = (e) => {
      e.preventDefault()
      // which help to privent from submitting
      setmainTask([...mainTask,{title ,desc}])
      settitle("")
      setdesc("")
    }
    const deletehandler = (i) => {
      let copyTask =[...mainTask]
      copyTask.splice(i,1)
      setmainTask(copyTask)
   }
    let renderTask =<h2 className="font-bold ">NO task available...🖋</h2>
    if(mainTask.length>0){
    renderTask = mainTask.map( (t, i) => {
      return(
       <div key={i} className="flex items-center justify-between m-1 bg-slate-500 text-white  px-3 py-4"> 
       {/* key give unique identification to every element  */}
         <div className="flex justify-between w-2/3">
          <h3 className="text-2xl font-bold">{t.title}</h3>
          <h4 className="text-2xl font-semibold">{t.desc}</h4>
        </div>
        <input className="w-5 h-5" type="checkbox"></input>
        <button
        onClick={() => {
          deletehandler(i)
        }}
         className="rounded bg-red-400 px-5 py-3">delete</button>
       </div>
      )
    })
  }
  return(
      <>
      <h1 className="bg-green-400 text-yellow-50 text-6xl p-5 font-bold text-center ">My todolist 📝</h1>
        
             <form onSubmit={submithandler}>
                 <input type="text" className="text-2xl border-zinc-800 border-b-2 m-5 px-3 py-2 border-0 mr-6"
                  placeholder="Enter title here 🖋" 
                   value={title}
                   onChange={(e) =>{
                       settitle(e.target.value)
                   }}/>
                 <input type="text" className="text-2xl border-zinc-800 border-b-2 m-5 px-3 py-2 border-0 mr-6"
                  placeholder="Enter description here 🖋"
                  value={desc}
                  onChange={(e) =>{
                    setdesc(e.target.value)
                  }}
                  />
                 <button
               
                  className="bg-green-400 text-yellow-50 rounded px-4 py-2.5 font-bold mr-5 ml-2">Add task</button>
             </form>
              <hr/> 
              <div className="bg-gray-200 p-8">
                <ul>{renderTask}</ul>
              </div>
        
      </>
  )
}
export default page  