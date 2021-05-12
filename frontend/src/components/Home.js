import React, { Component, useState, useEffect } from 'react'

import NavBar from './nav-bar/Nav'
import Header from './home-page-components/headerOptions/header'
import Feed from './home-page-components/topic-feed/Feed'
import { ThemeProvider } from '@material-ui/styles';
import Welcome from './welcome-page/welcome'
import { Paper, createMuiTheme } from '@material-ui/core';
export default function Home (){
    const[islogin,setLogin] = useState(null);
    
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
              <Paper style={{height:'100%'}} >
              {islogin==null ?
                   <div style={{paddingTop:'300px'}} className={'loading-box'}>
                   <div className={'loader'}>
                     </div>    
                </div> :
                <div>
             {islogin?
              <div>
              <Header/>
              </div> :
              <Welcome/> 
            }   
            </div>
          }
              </Paper>
             </ThemeProvider>
        );
    
}