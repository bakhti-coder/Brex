import React from 'react'
import Brands from '../Brands/Brands'
import BrexBenefit from '../BrexBenefit/BrexBenefit'
import Doordash from '../Doordash/Doordash'
import Flexible from '../Flexible/Flexible'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import Companies from '../PowerCompanies/Companies'
import Solutions from '../Solutions/Solutions'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Brands />
      <Solutions />
      <Flexible />
      <Doordash />
      <Companies />
      <BrexBenefit />
      <Footer />
    </>
  )
}

export default Layout