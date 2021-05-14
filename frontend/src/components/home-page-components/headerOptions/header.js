import { duration, Paper, TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React,{Component,useState,useEffect,} from 'react'
import Modal from 'react-modal'
// import Select from "react-dropdown-select";
// import Select from 'react-select'
import './header.css'
import {FaPlusSquare} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
// import CategoryFilter from './categoryFIlter'
import {GoPlus} from 'react-icons/go'
import {FaInbox} from 'react-icons/fa'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import Feed from './../topic-feed/Feed'
import CreateTopicRequest from './../../../config/createTopic'
import UpdateCoin from './../../../config/updateCoin'
  
export default function Header(props){
    const[createTopicPop, setCreateTopicPop] =useState(false);
    const[category, setCategory] = useState('All Category');
    const[createTopicTag, setCreateTopicTag] = useState('General')
    const[createTopicError, setCreateTopicError] = useState('')
    const[topicTitle, setTopicTitle] = useState('');
    const[topicTag, setTopicTag] = useState('');
    const[topicDiscription,setTopicDescription] = useState('');

    const theme = 'dark';
   
    async function createTopic (){
        console.log(topicTitle);
        console.log(topicDiscription);
        console.log(createTopicTag);
        if(topicTitle==='' && topicDiscription===''){
            alert('fill the all form complete')
            return ;
        }
        let response =  await CreateTopicRequest(localStorage.getItem('username'),topicTitle,createTopicTag,topicDiscription)
        if(response){
            onCancelCrateTopic();
            await UpdateCoin(localStorage.getItem('username'),20)
            window.location.reload(false);
        }
        setCreateTopicError('Already Given Title Exist');
        return;
    }
    const onCancelCrateTopic =()=>{
        setCreateTopicTag('General')
        setTopicTitle('')
        setTopicDescription('')
        setCreateTopicPop(false)
    }

    function GetCategory(category) {
        
        setCategory(category);
       
    }
    
    
     return(
         <div className={'header-section'}>
             <div className={'header-menu'}>
             <CategoryFilter onChange={(props)=>GetCategory(props)} value={category} filter={true}/>
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
                          <CategoryFilter onChange={(props) =>setCreateTopicTag(props)} value={createTopicTag} filter={false}/>               
                        </div>
                        </div>
                        <text style={{color:'red',fontSize:'12px',marginLeft:'40%'}}>{createTopicError}</text>
                        <div style={{display:'flex',justifyContent:'center'}}>
                        <textarea onChange={(event)=>setTopicDescription(event.target.value)} className={'input-discription'} name="text" placeholder="Enter text"></textarea>
                        </div>
                        
                        <div className={'create-post-buttons-box'}>
                        <text className={'create-post-button'} onClick={()=> onCancelCrateTopic()}>Cancel</text>
                        <text className={'create-post-button'} onClick={()=>createTopic()}  >Create Topic</text>
                        </div>
                    </div>
                    </Modal>
                    <Feed filter={category}/>
         </div>
     );




     function CategoryFilter(param) {
         const[isOpen,setOpen] = useState(false)
         const[intcategory,setintCategory] = useState(param.value)
         const clickCategory = ()=>{
             setOpen(!isOpen);
         }
         function categoryHandle(props){
             param.onChange(props);
             setOpen(false)
         }
         const tags = [
             {tag:'All Category'},
             {tag:'General'},
             {tag:'Question'},
             {tag:'Experience'},
             {tag:'Job Notification'},
             {tag:'Internship'},
             {tag:'Suggestions'},
         ];

         const topic_tags = [
            {tag:'General'},
            {tag:'Question'},
            {tag:'Experience'},
            {tag:'Job Notification'},
            {tag:'Internship'},
            {tag:'Suggestions'},
        ];
     
         const CategoryItem = (props)=>{
             return(
                 <div onClick={()=>{setintCategory(props.tag)
                                     categoryHandle(props.tag)}} className={'category-filter-item'}>
                    <text >{props.tag}</text>
                 </div>
             );
         }
        
         return(
             <div style={{display:'flex',flexDirection:'column'}}>
     
         <div onClick={()=> clickCategory()} className={'category-filter-box'}>
             <input value={intcategory} className={'category-filter-input'}/>
             <div className={'category-filter-icon'}>
             {isOpen? <IoIosArrowUp/> : <IoIosArrowDown/>}
             </div>
             <div style={{display:isOpen?true:'none'}} className={'categories-filter'}>
                 {(param.filter? tags:topic_tags).map((data)=>{
                     return <CategoryItem tag={data.tag}/>
                 })}
             </div>
             </div>
         </div>
         );
     }
    }

