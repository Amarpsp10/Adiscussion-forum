import React from 'react'
import {RiAccountCircleFill} from 'react-icons/ri'
import {MdLocationOn} from 'react-icons/md'
import Default from './../../../assets/default.jpg'

export default function Profile(props) {
    return(
        <div>


        <div className={'profile-box'}> 
           <div className={'profile-icon-box'}>
               {/* <RiAccountCircleFill size={90}/> */}
               <img src={props.data.profile_img}/>
           </div>
           <div className={'profile-text'}>
                 <text className={'profile-username'}>{props.data.username}</text>
                 <text className={'profile-name'}>{props.data.name}</text>
                 <text className={'profile-company'}>{props.data.company}</text>
                 <text className={'profile-about'}>{props.data.about}</text>
                <text className={'profile-location'}>
                    <MdLocationOn />{props.data.location}
                </text>
           </div>
           <div className={'profile-button-box'}>
                <text className={'profile-message-button'}>message</text>
           </div>
        </div>
        <hr/>
        </div>
    );
}