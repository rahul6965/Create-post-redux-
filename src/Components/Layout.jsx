import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='px-0'>
        <Header/>
           <main style={{ padding: "20px", minHeight: "80vh" }}>
            <Outlet/>
           </main>
        <Footer/>
    </div>
  )
}
