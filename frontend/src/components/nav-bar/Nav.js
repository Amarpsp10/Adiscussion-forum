import React, { Component,useState} from 'react'
import './Nav.css'
import Switch from '@material-ui/core/Switch';
import MissionEd_logo from './../../assets/MissionEd_logo.svg'
import { ThemeProvider } from '@material-ui/styles';
import Modal from 'react-modal'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createMuiTheme, Paper,Button , TextField } from '@material-ui/core';
import {FiMoon,FiSun} from 'react-icons/fi'

Modal.setAppElement('#root');

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    },
  };

export default function Nav(){
    
    const[lightTheme, setLightTheme] = useState(true);
    const[loginPop, setLoginPop] = useState(false);
    const[registerPop, setRegisterPop] = useState(false);
    const themeMode = lightTheme ? 'light':'dark';
    const handleChange = (event) => {
        // setState({ ...state, [event.target.name]: event.target.checked });
        setLightTheme(!lightTheme)
      };
    const theme = createMuiTheme({
        palette:{
            type: themeMode
        }
    })
    
     return(
        <ThemeProvider theme={theme}>
             <Paper style={{height:'75px'}}>
            <div style={{backgroundColor: lightTheme? '#ececec': 'transparent'}} className={'nav-section'}>
                <div className={'nav-section-sub'}>
                    <div className={'mission-ed-logo'}>
                        <img className={'logo-image'} src={MissionEd_logo} width={'50px'}/>
                        <h1 className={'logo-text'}>Mission<span>Ed</span></h1>
                    </div>
                    <div className={'nav-bar-menu'}>
                        <div className={'theme-button'}>
                        { lightTheme ? <FiSun onClick={handleChange} size={35} color={'#ff914d'}/>:<FiMoon onClick={handleChange} size={35} color={'#ff914d'}/>
                         }
                         </div>
                        <h3 className={'button-primary'} onClick={()=>setLoginPop(true)}>Login</h3>
                        <h3 className={'button-secondary'} onClick={()=>setRegisterPop(true)}>Register</h3>
                                 
                    <Modal isOpen={loginPop} onRequestClose={()=>setLoginPop(false)} 
                           style={{
                            content : {
                                borderRadius: '20px',
                                top                   : '50%',
                                left                  : '50%',
                                right                 : 'auto',
                                bottom                : 'auto',
                                marginRight           : '-50%',
                                transform             : 'translate(-50%, -50%)',
                                backgroundColor: lightTheme? 'white': '#3a3838',
                              },
                          }}>
                        
                        <div style={{textAlign:'center',}}>
                            <img src={MissionEd_logo} width={'70px'}/>
                            <h1>Welcome Back to forum!</h1>
                            </div>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'120px',width:'350px'}}>
                        <TextField required={true} id="outlined-basic" label="Email Address" variant="outlined" type='email'/>
                        <TextField required={true} id="outlined-basic" label="Password" variant="outlined" type='password'/>
                        </div>
                        <div style={{display:'flex',flexDirection:'row'}}>
                        <h3 className={'button-primary'} onClick={()=>setLoginPop(false)}>cancel</h3>
                        <h3 className={'button-secondary'}>Login</h3>
                        </div>
                    </Modal>
                    <Modal isOpen={registerPop} onRequestClose={()=>setRegisterPop(false)} 
                          style={{
                            content : {
                                borderRadius: '20px',
                                top                   : '50%',
                                left                  : '50%',
                                right                 : 'auto',
                                bottom                : 'auto',
                                marginRight           : '-50%',
                                transform             : 'translate(-50%, -50%)',
                                backgroundColor: lightTheme? 'white': '#3a3838',
                              },
                          }}>
                    <div style={{}}>

                        <div style={{textAlign:'center'}}>
                            <img src={MissionEd_logo} width={'70px'}/>
                            <h1>Join MissionEd forum</h1>
                            </div>
                            
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'250px',width:'100%'}}>
                        <div>
                        <TextField required={true} id="outlined-basic" label="First Name" variant="outlined" type='text'/>
                        <TextField required={true} id="outlined-basic" label="Last Name" variant="outlined" type='text'/>
                        </div>
                        <TextField required={true} id="outlined-basic" label="Email Address" variant="outlined" type='email'/>
                        <TextField required={true} id="outlined-basic" label="Password" variant="outlined" type='password'/>
                        <TextField required={true} id="outlined-basic" label="Confirm Password" variant="outlined" type='password'/>
                        </div>
                        <div style={{display:'flex',flexDirection:'row'}}>
                        <h3 className={'button-primary'} onClick={()=>setRegisterPop(false)}>cancel</h3>
                        <h3 className={'button-secondary'}>Signup</h3>
                        </div>
                    </div>
                    </Modal>

                    </div>

                </div>
            </div>
             </Paper>
         </ThemeProvider>
    );
}

