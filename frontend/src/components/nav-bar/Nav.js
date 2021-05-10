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
import {Link, Redirect,useHistory} from 'react-router-dom'
import Default from './../../assets/default.jpg'
import {BsPencilSquare} from 'react-icons/bs'
import WelcomePage from './../welcome-page/welcome'

Modal.setAppElement('#root');


export default function Nav(props){
    const[islogin, setLogin] = useState(loginStatus);

    function loginStatus(){
       if(localStorage.getItem('key')) 
           return true;
       return false 
    }
    let history = useHistory();
    const redirect = () => {
        history.push('/');
       }

    const[accountMenu,setAccountIconMenu] = useState(false);
    const[user,setUser] = useState([]);
    const[regUsername,setRegUsername] = useState('');
    const[regPassword,setRegPassword] = useState('');
    const[regEmail, setRegEmail] = useState('');
    const[shareImage,setShareImage] = useState("");
    const[loginEmail,setLoginemail] = useState('');
    const[loginPassword,setLoginPassowrd] = useState('');


    const[lightTheme, setLightTheme] = useState(true);
    const[loginPop, setLoginPop] = useState(false);
    const[registerPop, setRegisterPop] = useState(false);
    const themeMode = lightTheme ? 'light':'dark';
    const[error,setError] = useState('');
    const handleChange = (event) => {
        setLightTheme(!lightTheme)
      };
     const handleImage=(e)=>{
        const image = e.target.files[0];
    
        if(image==="" || image=== undefined){
          alert(`not an image, the file is a  ${typeof image}`)
          return;
        }
        setShareImage(image);
    }
    const theme = createMuiTheme({
        palette:{
            type: themeMode
        }
    })
     async function signUpUser(){
        SignUpRequest(regUsername,regEmail,regPassword);
    }
   async function loginUser () {
        if(loginEmail=='' && loginPassword==''){
           alert("please fill required field") 
            return ;
        } 
        let response = await LoginRequest(loginEmail,loginPassword);
        if(response){
            alert('yes successfully login')
            setLogin(true);
            setLoginPop(false);
            window.location.reload(false);
            return ;
        }
        setError('invalid username and password...');
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
    const onFocus = () =>{
        console.log('sdljf')
    }
     return(
        <ThemeProvider theme={theme}>
             <Paper style={{height:'75px',position:'fixed'}}>
            <div style={{backgroundColor: lightTheme? '#ececec': '#5A5A5A'}} className={'nav-section'}>
                <div className={'nav-section-sub'}>
                    <a href="/" style={{textDecorationLine:'none'}}>
                    <div className={'mission-ed-logo'}>
                        <img className={'logo-image'} src={MissionEd_logo} width={'40px'}/>
                        <h1 style={{textDecoration:'none',textDecorationLine:'none',}} className={'logo-text'}>Mission<span>Ed</span></h1>
                    </div>
                    </a>
                    <div className={'nav-bar-menu'}>
                        {/* <div className={'theme-button'}>
                        { lightTheme ? <FiSun onClick={handleChange} size={35} color={'#ff914d'}/>:<FiMoon onClick={handleChange} size={35} color={'#ff914d'}/>
                         }
                         </div> */}
                        <div onClick={()=>setAccountIconMenu(!accountMenu)}className={'account-icon-box'} >
                        <img src={Default}/>
                     <div className={'account-menu-box'} style={{display:accountMenu?true:'none',backgroundColor: lightTheme? '#ececec': '#505050'}}>
                        { islogin? 
                            <AccountMenu/> :
                            <div>
                              <h1 className={'button-primary account-login-button'} onClick={()=>setLoginPop(true)}>Login</h1>
                               <h1 className={'button-primary account-login-button'} onClick={()=>setRegisterPop(true)}>Register</h1>
                            </div> 
                        }
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
                        
                        <div style={{textAlign:'center'}}>
                            <img src={MissionEd_logo} width={'70px'}/>
                            <h3>Welcome Back to forum!</h3>
                            </div>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'120px',width:'350px'}}>
                        {/* <TextField required={true} id="outlined-basic"  label="Email Address" variant="outlined" type='email'/> */}
                        <TextField required={true} id="outlined-basic" onChange={(event)=>setLoginemail(event.target.value)} label="Email-Address" variant="outlined" type='email'/>
                        <TextField required={true} id="outlined-basic" onChange={(event)=>setLoginPassowrd(event.target.value)} label="Password" variant="outlined" type='password'/>
                        </div>
                        <text style={{color:'red',fontSize:'12px'}}>{error}</text>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        <h3 className={'button-primary'} onClick={()=>onCancelLogIn()}>cancel</h3>
                        <h3 className={'button-primary'} onClick={()=>loginUser()}>Login</h3>
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
                                width:'400px',
                                height:'80%'
                                
                              },
                          }}>
                    <div style={{}}>

                        <div className={'signup-profile-image'}>
                            <label htmlFor="file">
                             <img src={shareImage? URL.createObjectURL(shareImage) : Default} />
                             <div className={'signup-profile-image-edit-icon'}>
                                 <BsPencilSquare size={30}/>
                             </div>
                            </label> 
                            <h3>Profile image</h3>
                            </div>
                            
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%',width:'100%'}}>
                        {/* <div>
                        <TextField required={true} id="outlined-basic" label="First Name" variant="outlined" type='text'/>
                        <TextField required={true} id="outlined-basic" label="Last Name" variant="outlined" type='text'/>
                        </div> */}
                        <input id="file" style={{display:'none'}} name={'image'} type="file" onChange={(e)=>handleImage(e)} accept={'image/jpg , image/png'} width="48" height="48"/>
                        
                    <div className={'signup-inputs'}>
                      <div className={'signup-input-group'}>
                        <div className={'signup-input'}>
                        <TextField fullWidth required={true} id="outlined-basic" label="Name" onChange={(event)=>console.log(event.target.value)} className={'signup-input'} variant="outlined" type='name'/>
                        </div>
                        <div className={'signup-input'}>
                        <TextField fullWidth required={true} id="outlined-basic" label="username" onChange={(event)=>setRegUsername(event.target.value)} variant="outlined" type='username'/>
                        </div>
                      </div>
                      <div className={'signup-input-group'}>
                        <div className={'signup-input'}>
                        <TextField fullWidth required={true} id="outlined-basic" label="Email Address" onChange={(event)=>setRegEmail(event.target.value)} variant="outlined" type='email'/>
                        </div>
                        <div  className={'signup-input'}>
                        <TextField fullWidth required={true} id="outlined-basic" label="Password" variant="outlined" onChange={(event)=>setRegPassword(event.target.value)} type='password'/>
                        </div>
                       </div>   
                       <div className={'signup-company-input'}>
                        <div className={'signup-input'}>
                        <TextField fullWidth required={true} id="outlined-basic" label="Copmany" onChange={(event)=>console.log(event.target.value)} variant="outlined" type='text'/>
                        </div>
                       </div>
                        <div className={'signup-input-group'}>
                        <div className={'signup-input'}>
                        <TextField fullWidth required={true} id="outlined-basic" label="something about you!" onChange={(event)=>console.log(event.target.value)} variant="outlined" type='text'/>
                        </div>
                        <div className={'signup-input'}>
                        <TextField fullWidth required={true} id="outlined-basic" label="Location" onChange={(event)=>console.log(event.target.value)} variant="outlined" type='location'/>
                        </div>
                       </div>
                    </div>
                        {/* <TextField required={true} id="outlined-basic" label="Confirm Password" variant="outlined" type='password'/> */}
                            </div>
                        <div style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
                        <h3 className={'button-primary'} onClick={()=>onCancelSignUp()}>cancel</h3>
                        <h3 className={'button-primary'} onClick={()=>signUpUser()}>Signup</h3>
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
