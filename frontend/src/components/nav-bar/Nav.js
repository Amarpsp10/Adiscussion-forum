import React, { Component,useState,useEffect} from 'react'
import './Nav.css'
import Switch from '@material-ui/core/Switch';
import MissionEd_logo from './../../assets/MissionEd_logo.svg'
import { ThemeProvider } from '@material-ui/styles';
import Modal from 'react-modal'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createMuiTheme, Paper,Button , TextField,ColorButton } from '@material-ui/core';
import {FiMoon,FiSun} from 'react-icons/fi'
import axios from 'axios';
import LoginRequest from './../../config/loginRequest'
import SignUpRequest from './../../config/signUpRequest'
import {RiAccountCircleFill} from 'react-icons/ri'
import AccountMenu from './AccountMenu'
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
    const[accountMenu,setAccountIconMenu] = useState(false);
    const[user,setUser] = useState([]);
    const[regUsername,setRegUsername] = useState('');
    const[regPassword,setRegPassword] = useState('');
    const[regEmail, setRegEmail] = useState('');

    const[loginEmail,setLoginemail] = useState('');
    const[loginPassword,setLoginPassowrd] = useState('');


    const[lightTheme, setLightTheme] = useState(true);
    const[loginPop, setLoginPop] = useState(false);
    const[registerPop, setRegisterPop] = useState(false);
    const themeMode = lightTheme ? 'light':'dark';
    const handleChange = (event) => {
        setLightTheme(!lightTheme)
      };
    const theme = createMuiTheme({
        palette:{
            type: themeMode
        }
    })
     async function signUpUser(){
        SignUpRequest(regUsername,regEmail,regPassword);
    }
    const loginUser = () =>{
        LoginRequest(loginEmail,loginPassword);
    }
    const onCancelSignUp = () =>{
        setRegUsername('');
        setRegEmail('');
        setRegPassword('');
        setRegisterPop(false);
    }
    const onCancelLogIn = () =>{
        setLoginemail('');
        setLoginPassowrd('');
        setLoginPop(false);
    }
    
     return(
        <ThemeProvider theme={theme}>
             <Paper style={{height:'75px',position:'fixed'}}>
            <div style={{backgroundColor: lightTheme? '#ececec': '#5A5A5A'}} className={'nav-section'}>
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
                        <div onClick={()=>setAccountIconMenu(!accountMenu)} className={'account-icon-box'}>
                        <RiAccountCircleFill className={'account-icon'} size={50} color={theme.color}/>
                        <div className={'account-menu-box'} style={{display:accountMenu?true:'none',backgroundColor: lightTheme? '#ececec': '#505050'}}>
                        {/* <h1 className={'button-primary account-login-button'} onClick={()=>setLoginPop(true)}>Login</h1>
                        <h1 className={'button-primary account-login-button'} onClick={()=>setRegisterPop(true)}>Register</h1> */}
                          <AccountMenu/>
                        </div>
                        </div>
                                 
                    <Modal isOpen={loginPop} onRequestClose={()=>onCancelLogIn()} 
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
                        {/* <TextField required={true} id="outlined-basic"  label="Email Address" variant="outlined" type='email'/> */}
                        <TextField required={true} id="outlined-basic" onChange={(event)=>setLoginemail(event.target.value)} label="Email-Address" variant="outlined" type='email'/>
                        <TextField required={true} id="outlined-basic" onChange={(event)=>setLoginPassowrd(event.target.value)} label="Password" variant="outlined" type='password'/>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        <h3 className={'button-primary'} onClick={()=>onCancelLogIn()}>cancel</h3>
                        <h3 className={'button-secondary'} onClick={()=>loginUser()}>Login</h3>
                        </div>
                    </Modal>
                    <Modal isOpen={registerPop} onRequestClose={()=>onCancelSignUp()} 
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
                            
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'220px',width:'100%'}}>
                        {/* <div>
                        <TextField required={true} id="outlined-basic" label="First Name" variant="outlined" type='text'/>
                        <TextField required={true} id="outlined-basic" label="Last Name" variant="outlined" type='text'/>
                        </div> */}
                        <TextField required={true} id="outlined-basic" label="username" onChange={(event)=>setRegUsername(event.target.value)} variant="outlined" type='username'/>
                        <TextField required={true} id="outlined-basic" label="Email Address" onChange={(event)=>setRegEmail(event.target.value)} variant="outlined" type='email'/>
                        <TextField required={true} id="outlined-basic" label="Password" variant="outlined" onChange={(event)=>setRegPassword(event.target.value)} type='password'/>
                        {/* <TextField required={true} id="outlined-basic" label="Confirm Password" variant="outlined" type='password'/> */}
                            </div>
                        <div style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
                        <h3 className={'button-primary'} onClick={()=>onCancelSignUp()}>cancel</h3>
                        <h3 className={'button-secondary'} onClick={()=>signUpUser()}>Signup</h3>
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
