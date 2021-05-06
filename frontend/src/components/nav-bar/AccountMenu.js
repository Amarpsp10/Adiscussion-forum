import React from 'react'
import {FaInbox} from 'react-icons/fa'
import {FiLogOut,FiInbox} from 'react-icons/fi'
import {VscAccount} from 'react-icons/vsc'
import {RiAccountCircleFill} from 'react-icons/ri'
import {IoLogOut} from 'react-icons/io5'
import {IoIosSave} from 'react-icons/io' 
export default function AccountMenu(props) {

    return(
      <div>
        <div onClick={()=>console.log('hellll')} className={'account-menu-item'}>
            <div className={'account-menu-item-icon'}>
            <RiAccountCircleFill size={20} />
            </div>
            <h4>Profile</h4>
        </div>    
        <div onClick={()=>console.log('hellll')} className={'account-menu-item'}>
            <div className={'account-menu-item-icon'}>
            <FaInbox size={20} />
            </div>
            <h4>Inbox</h4>
        </div>
        <div onClick={()=>console.log('hellll')} className={'account-menu-item'}>
            <div className={'account-menu-item-icon'}>
            <IoIosSave size={20} />
            </div>
            <h4>Saved</h4>
        </div>
        <div onClick={()=>console.log('hellll')} className={'account-menu-item'}>
            <div className={'account-menu-item-icon'}>
            <IoLogOut size={20} />
            </div>
            <h4>Logout</h4>
        </div>
      </div>
    );
    
}