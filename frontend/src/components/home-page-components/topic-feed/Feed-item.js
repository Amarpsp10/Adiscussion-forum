import React, { cloneElement, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
import {RiAccountCircleFill} from 'react-icons/ri'
import Default from './../../../assets/default.jpg'
import GetProfile from './../../../config/getProfile'
export default function FeedItem(props) {
    const[profile_img,setProfile_img] = useState(ProfileImage);
    
    async function ProfileImage(){
        let response =  await GetProfile(props.data.username);
         if(response!==null){ 
             setProfile_img(response.pop().profile_img);
         }
         else{
             setProfile_img(Default);
         }
     }
    return(
        
        <div>
           <div className={'topic-item'}>
            <Link to={{     
                          pathname: `/topic/${props.data.id}`,
                          data:props.data
        }} className={'topic-text'}>
                        <div >
                          <h3 style={{textDecorationLine:'none'}} onClick={()=>console.log('he e')}>{props.data.title}</h3>
                         </div>
                             </Link>
                             <div className={'midle-field'}>
                                <div className={'feed-list-icon'}>
                                    {/* <RiAccountCircleFill size={40} /> */}
                                    <img src={profile_img}/>
                                </div>
                                <h4>{props.data.username}</h4> 
                             </div>
                         <div className={'topic-tag'}>
                        <h3>{props.data.tag}</h3>
                         </div>
            </div>
            <hr/>
        </div>
    );
}