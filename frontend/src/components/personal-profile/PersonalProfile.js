import React,{useState} from 'react'
import {TextField} from '@material-ui/core'
import './PersonalProfile.css'
import {RiAccountCircleFill} from 'react-icons/ri'
import General from './General-profile'
import Rewards from './Rewards-profile'
import Account from './Account-profile'
import Default from './../../assets/default.jpg'
import GetProfile from './../../config/getProfile'
export default function PersonalProfile(props) {
   
   const[activeSection,setActiveSection] = useState('General');

   const[profile_img,setProfile_img] = useState(ProfileImage);

   async function ProfileImage(){
    let response =  await GetProfile(localStorage.getItem('username'));
     if(response!==null){
         setProfile_img(response.pop().profile_img);
     }
     else{
         setProfile_img(Default);
     }
    }

    
    return(
        <div className={'personal-profile-page'}>
          <div className={'personal-profile'}>

          <div className={'profile-heading'}>
            {/* <RiAccountCircleFill size={50}/>  */}
            <img src={profile_img}/>
            <text>Amarpsp10</text>
          </div>
          
          <div className={'profile-category-box'}>
            <text style={{borderBottom:activeSection==='General'?'solid':'none'}} onClick={()=>setActiveSection('General')} className={'profile-category'} >General</text>
            <text style={{borderBottom:activeSection==='Rewards'?'solid':'none'}} onClick={()=>setActiveSection('Rewards')} className={'profile-category'}>Rewards</text>
            <text style={{borderBottom:activeSection==='Account'?'solid':'none'}} onClick={()=>setActiveSection('Account')} className={'profile-category'}>Account</text>
          </div>
          <hr/>
          {activeSection==='General'? <General/>:''}
          {activeSection==='Rewards'? <Rewards/>:''}
          {activeSection==='Account'? <Account/>:''}

          </div>
        </div>
    )
}