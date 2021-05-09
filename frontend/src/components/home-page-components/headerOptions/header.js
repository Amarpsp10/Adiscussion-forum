import { duration, Paper, TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React,{Component,useState,useEffect,} from 'react'
import Modal from 'react-modal'
// import Select from "react-dropdown-select";
import Select from 'react-select'
import './header.css'
import {FaPlusSquare} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import CategoryFilter from './categoryFIlter'
import {GoPlus} from 'react-icons/go'
import {FaInbox} from 'react-icons/fa'

  
export default function Header(props){
    const[createTopicPop, setCreateTopicPop] =useState(false);
    const[category, setCategory] = useState([]);
    
    const[topicTitle, setTopicTitle] = useState('');
    const[topicTag, setTopicTag] = useState('');
    const[topicDiscription,setTopicDescription] = useState('');

    const theme = 'dark';
   
    const createTopic =()=>{
        console.log(topicTitle);
        console.log(topicDiscription);
    }
    
    
     return(
         <div className={'header-section'}>
             <div className={'header-menu'}>
             <CategoryFilter/>
             <div style={{display:'flex',flexDirection:'row'}}>

             <div onClick={()=>setCreateTopicPop(true)} className={'create-button'}>
                 <GoPlus style={{alignSelf:'center',paddingRight:'5px'}} size={25} color={'white'}/>
                 <text className={'create-topic-text'}>Create Topic</text>
             </div>
             <Link to="/network" style={{textDecorationLine:'none'}}>
             <div  className={'create-button'}>
                 <BsFillPeopleFill style={{alignSelf:'center',paddingRight:'5px'}} size={25} color={'white'}/>
                 <text className={'create-topic-text'}>My Network</text>
             </div>
             </Link>
             <Link to='/inbox' style={{textDecoration:'none'}}>
             <div className={'create-button'}>
                  <FaInbox style={{alignSelf:'center',paddingRight:'5px'}} size={25} color={'white'}/>
                  <text className={'create-topic-text'}>Inbox</text>
                </div>
             </Link>
             </div>
             </div>
             
             <Modal  isOpen={createTopicPop}  
                          style={{
                            content : {
                                borderRadius: '20px',
                                top                   : '60%',
                                left                  : '50%',
                                right                 : 'auto',
                                bottom                : 'auto',
                                marginRight           : '-50%',
                                transform             : 'translate(-50%, -50%)',
                                // backgroundColor: lightTheme? 'white': '#3a3838',
                                width:    '80%',
                                height: '80%',
                                backgroundColor:'#bbbbbb',
                                borderTopWidth:'3px',
                                
                              },
                          }}>
                    <div>
                        <text style={{textAlign:'center',fontSize:'20px'}}>Create Topic</text>
                        <hr></hr>
                        <div className={'input-uper-box'}>

                        <input onChange={(event)=>setTopicTitle(event.target.value)} className={'input-title'} required={true} maxLength={50} placeholder={"Title"}/>

                        <div style={{width:'250px'}}>
                          <CategoryFilter/>
                        </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'center'}}>

                        <textarea onChange={(event)=>setTopicDescription(event.target.value)} className={'input-discription'} name="text" placeholder="Enter text"></textarea>
                        </div>
                        <div className={'create-post-buttons-box'}>
                        <text className={'create-post-button'} onClick={()=> setCreateTopicPop(false)}>Cancel</text>
                        <text className={'create-post-button'} onClick={()=>createTopic()}  >Create Topic</text>
                        </div>
                    </div>
                    </Modal>
         </div>
     );
}