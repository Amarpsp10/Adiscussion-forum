import React from 'react'
import {RiAccountCircleFill} from 'react-icons/ri'
import {MdLocationOn} from 'react-icons/md'

export default function Profile(props) {
    return(
        <div>


        <div className={'profile-box'}> 
           <div className={'profile-icon-box'}>
               <RiAccountCircleFill size={90}/>
           </div>
           <div className={'profile-text'}>
                 <text className={'profile-username'}>amarpsp10</text>
                 <text className={'profile-name'}>Amar Preet Singh</text>
                 <text className={'profile-company'}>University institute of engineering and technology, Punjab Universtiy chandigarh</text>
                 <text className={'profile-about'}>Full stack developer, react, react-native,js</text>
                <text className={'profile-location'}>
                    <MdLocationOn />Jaipur,Rajasthan
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