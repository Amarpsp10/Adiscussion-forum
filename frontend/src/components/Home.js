import React, { Component, useState, useEffect } from 'react'

import NavBar from './nav-bar/Nav'
import Header from './home-page-components/headerOptions/header'
import Feed from './home-page-components/topic-feed/Feed'
import { ThemeProvider } from '@material-ui/styles';
import Welcome from './welcome-page/welcome'
import { Paper, createMuiTheme } from '@material-ui/core';
export default function Home (){
    const[islogin,setLogin] = useState(false);
    const theme = createMuiTheme({
        global:{
            type: 'dark'
        }
    })
    useEffect(()=>{
      if(localStorage.getItem('key')){
           setLogin(true)
      }
    },[islogin]);
        return(
            <ThemeProvider theme={theme}>
              <Paper style={{height:'100%'}} onFocus={()=>console.log('yseljskdjld')}>
             {islogin?
                       <div>
                         <Header/>
                         <Feed/>
                       </div> :
                       <Welcome/> 
            }   
              </Paper>
             </ThemeProvider>
        );
    
}