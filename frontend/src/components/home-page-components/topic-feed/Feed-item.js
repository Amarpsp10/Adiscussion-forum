import React from 'react'

export default function FeedItem(props) {
    
    return(
        <div>
           <div className={'topic-item'}>
                        <div className={'topic-text'}>
                          <h3>{props.title}</h3>
                         </div>
                         <div className={'topic-tag'}>
                        <h3>{props.tag}</h3>
                         </div>
            </div>
            <hr/>
        </div>
    );
}