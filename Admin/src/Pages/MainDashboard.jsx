import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Main from '../Components/Main'

const MainDashboard = () => {
  
  const [isSidebarOpen ,  setIsSidebarOpen] = useState(false);

  const toggleSidebar = ()=>{
     setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen}/>
      <Main toggleSidebar={toggleSidebar}/>
    </div>
  )
}

export default MainDashboard
