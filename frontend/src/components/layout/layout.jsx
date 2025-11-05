import React from 'react'
import Header from "../header/header"
import Footer from "../footer/footer"
import Routes from "../../router/Routes"

const layout = () => {
  return (
   <>
   <Header/>
   <Routes/>
   <Footer/>
   </>
  )
}

export default layout