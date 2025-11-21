import React from 'react'
import {Appbar} from './components/Appbar.jsx';
import Filter from './components/filter.jsx'
import Items from './components/items.jsx'

import SeasonSpecial from './components/SeasonSpecial.jsx';
import Divider from './components/Divider.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
    <Appbar/>
    <Filter/>
    <Items/>
  <SeasonSpecial/>
  <Footer/>
    </>
  )
}

export default App