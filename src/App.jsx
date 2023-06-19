import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Omgdeals from './components/Omgdeals'
import Mostloved from './components/Mostloved'
import Trendiest from './components/Trendiest'
import Topbrands from './components/Topbrands'
import Shopby from './components/Shopby'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Men from './components/Men'
import Women from './components/Women'
import Homeandliving from './components/Homeandliving'
import Kids from './components/Kids'

const App = () => {
  return (
    <BrowserRouter basename="/Myntra/">
      <Navbar />
      <Routes >
        <Route exact path='/' element={[
          <Banner />,
          <Omgdeals />,
          <Mostloved />,
          <Trendiest />,
          <Topbrands />,
          <Shopby />
        ]} />
        <Route exact path='/men' element={<Men/>} />
        <Route exact path='/women' element={<Women/>} />
        <Route exact path='/kids' element={<Kids/>} />
        <Route exact path='/homeandliving' element={<Homeandliving />} />

      </Routes>



    </BrowserRouter>
  )
}

export default App