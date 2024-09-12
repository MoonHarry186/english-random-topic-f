import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router } from 'react-router-dom'
const Container = ({ children }) => {
  return (
    <Router>
      <Header />
      <Toaster />
      {children}
      <Footer />
    </Router>
  )
}

export default Container
