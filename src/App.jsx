import React from 'react'
import Home from './app/page/Home'
import Navbar from './components/navbar'
import Footer from './components/Footer'

function App() {
  return (
   <>
   <Navbar/>
   <main className="pt-0">
     <Home/>
   </main>
   <Footer/>
   </>
  )
}

export default App