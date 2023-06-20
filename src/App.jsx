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
import Apparels from './components/Apparels'
import Apparel from './components/Apparel'
import Bag from './components/Bag'

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
        <Route exact path='/apparels' element={<Apparels />} />
        <Route exact path='/apparel' element={<Apparel />} />
        <Route exact path='/bag' element={<Bag />} />

      </Routes>



    </BrowserRouter>
  )
}

export default App