import React, { Component } from 'react'

import NavBar from './nav-bar/Nav'
import Header from './home-page-components/headerOptions/header'
export default class Home extends Component{
    render(){
        return(
            <div>
              <NavBar/>
              <Header/>
            </div>
        );
    }
}