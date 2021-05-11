import React from 'react'
import {FaInbox} from 'react-icons/fa'
import {FiLogOut,FiInbox} from 'react-icons/fi'
import {VscAccount} from 'react-icons/vsc'
import {RiAccountCircleFill} from 'react-icons/ri'
import {IoLogOut} from 'react-icons/io5'
import {IoIosSave} from 'react-icons/io' 
import { Link, useHistory } from 'react-router-dom'
import {IoHome} from 'react-icons/io5'

export default function AccountMenu(props) {
    
    async function Logout(){
        localStorage.removeItem('key');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    return(
      <div>
        <Link to="/" style={{textDecoration:'none',color:'black'}}>
        <div className={'account-menu-item'}>
            <div className={'account-menu-item-icon'}>
            <IoHome size={20} />
            </div>
            <h4>Home</h4>
        </div>    
        </Link>
        <Link to="/profile" style={{textDecoration:'none',color:'black'}}>
        <div className={'account-menu-item'}>
            <div className={'account-menu-item-icon'}>
            <RiAccountCircleFill size={20} />
            </div>
            <h4>Profile</h4>
        </div>    
        </Link>
        <Link to="/inbox" style={{textDecoration:'none',color:'black'}}>
        <div onClick={()=>console.log('hellll')} className={'account-menu-item'}>
            <div className={'account-menu-item-icon'}>
            <FaInbox size={20} />
            </div>
            <h4>Inbox</h4>
        </div>
        </Link>
        <Link to="/saved-post" style={{textDecoration:'none',color:'black'}}>
        <div onClick={()=>console.log('hellll')} className={'account-menu-item'}>
            <div className={'account-menu-item-icon'}>
            <IoIosSave size={20} />
            </div>
            <h4>Saved</h4>
        </div>
        </Link>
        {/* <Link to="/" style={{textDecoration:'none',color:'black'}}> */}
        <a href='/' style={{textDecoration:'none'}}>
        <div onClick={()=> Logout()} className={'account-menu-item'}>
            <div className={'account-menu-item-icon'}>
            <IoLogOut size={20} />
            </div>
            <h4>Logout</h4>
        </div>
        </a>
        {/* </Link> */}
      </div>
    );
    
}