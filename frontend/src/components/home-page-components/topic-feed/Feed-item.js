import React, { cloneElement, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
import {RiAccountCircleFill} from 'react-icons/ri'
import Default from './../../../assets/default.jpg'

export default function FeedItem(props) {
    
//    const functio=()=>{

//    }
    return(
        
        <div>
           <div className={'topic-item'}>
            <Link to={{     
                          pathname: '/topic',
                          title : props.title,
                          description: props.description,
                          tag:props.tag
        }} className={'topic-text'}>
                        <div >
                          <h3 style={{textDecorationLine:'none'}} onClick={()=>console.log('he e')}>{props.title}</h3>
                         </div>
                             </Link>
                             <div className={'midle-field'}>
                                <div className={'feed-list-icon'}>
                                    {/* <RiAccountCircleFill size={40} /> */}
                                    <img src={Default}/>
                                </div>
                                <h4>Username10</h4> 
                             </div>
                         <div className={'topic-tag'}>
                        <h3>{props.tag}</h3>
                         </div>
            </div>
            <hr/>
        </div>
    );
}