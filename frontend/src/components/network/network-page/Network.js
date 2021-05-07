import { Button } from '@material-ui/core'
import React from 'react'
import './Network.css'
import {FaPlusSquare} from 'react-icons/fa'
import {GiThreeFriends} from 'react-icons/gi'
import Profile from './Profile'
export default function Network(props) {
    return(
        <div className={'network-page'}>
             <div className={'header-menu'}>
                <div onClick={()=>console.log('hel')} className={'create-button'}>
                  <GiThreeFriends style={{alignSelf:'center',paddingRight:'5px'}} size={25} color={'white'}/>
                  <h4 className={'create-topic-text'}>My Friends</h4>
                </div>
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