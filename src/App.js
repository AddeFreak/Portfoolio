import React, { useState } from 'react';
import Navbar from './Navigation/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Contact/Contact';
import About from './About/About'

import Home from './Home/Home.js'

import SideDrawer from './Navigation/SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'



function App() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(true)

  }
  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }



  let backdrop;

  if (sideDrawerOpen) {

    backdrop = <Backdrop click={backdropClickHandler} />
  }
  return (
    <div style={{ height: '100 %' }}>
      <BrowserRouter>
        <Navbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}


        <Switch>
          <Route path="/about" component={About} />


          <Route path="/contact" component={Contact} />


          <Route exact path="/" component={Home} />



        </Switch >


      </BrowserRouter >
    </div>
  )
}

export default App;
