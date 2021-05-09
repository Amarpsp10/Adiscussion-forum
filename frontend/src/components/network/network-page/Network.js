import { Button} from '@material-ui/core'
import React from 'react'
import './Network.css'
import {FaPlusSquare} from 'react-icons/fa'
import {GiThreeFriends} from 'react-icons/gi'
import Profile from './Profile'
import {FaInbox} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Header from './../../home-page-components/headerOptions/header'

export default function Network(props) {
    return(
        <div className={'network-page'}>
             <div className={'header-menu'}>
               <Link to='/inbox' style={{textDecoration:'none'}}>
                <div className={'create-button'}>
                  <FaInbox style={{alignSelf:'center',paddingRight:'5px'}} size={25} color={'white'}/>
                  <text className={'create-topic-text'}>Inbox</text>
                </div>
               </Link>
             </div>
             <div className={'profiles-section'}>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>

             </div>
        </div>
    );
}