import React from 'react'
import {RiAccountCircleFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Default from '../../assets/default.jpg'
export default function Reply(props) {
  return(
    <div className={'reply-box'}>
    <div className={'reply'}>
                    <div className={'commenter-auther'}>
                        <div className={'commenter-icon'}>
                            <img src={Default}/>
                        </div>
                        <h3>{props.username}</h3>
                    </div>
            <div>
            <text style={{fontSize:'15px'}}>{props.reply}</text>
            <hr/>
        </div>
    </div>
</div>
  );    
}