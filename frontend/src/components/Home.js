import React, { Component } from 'react'

import NavBar from './nav-bar/Nav'
import Header from './home-page-components/headerOptions/header'
import Feed from './home-page-components/topic-feed/Feed'
import { ThemeProvider } from '@material-ui/styles';
import { Paper, createMuiTheme } from '@material-ui/core';
export default function Home (){

    const theme = createMuiTheme({
        global:{
            type: 'dark'
        }
    })
    
        return(
            <ThemeProvider theme={theme}>
              <Paper style={{height:'100%'}}>
            <div>
              
              <Header/>
              <Feed/>
            </div>
              </Paper>
             </ThemeProvider>
        );
    
}