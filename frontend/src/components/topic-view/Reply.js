import React from 'react'
import {RiAccountCircleFill} from 'react-icons/ri'
export default function Reply(props) {
  return(
    <div className={'reply-box'}>
    <div className={'reply'}>
        <RiAccountCircleFill color={'#A0A0A0'} size={60}/>
        <div >
            <h2>{props.username}</h2>
            <h3>{props.reply}</h3>
            <hr/>
        </div>
    </div>
</div>
  );    
}