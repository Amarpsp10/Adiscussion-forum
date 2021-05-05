import React,{useState,useEffect} from 'react'
import './Feed.css'

import FeedItem from './Feed-item'

import GetTopics from '../../../config/getTopics'

export default function Feed(){

   const[feedList,setFeedList] = useState([]);
   const[loading, setLoading] = useState(true);
   
   useEffect(()=>{
    //  setFeedList(GetTopics());     
     setLoading(feedList ? false:true)
   });
     
    return(
        <div className={'feed-section'}>
            <div className={'feed'}>
                      <div className={'topic-item-box'}>
                       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingInline:'30px',color:'#414141'}}>
                          <h2>Topic</h2>
                          <h2>Category</h2>
                      </div> 
                
                      <hr style={{height:'3px',backgroundColor:'#414141'}}/>
                    {false ?
                    <div>
                    <FeedItem/>
                    <FeedItem/>
                    <FeedItem/>
                    <FeedItem/>
                    <FeedItem/>
                    </div>
                :   <div className={'loading-box'}>
                    <div className={'loader'}></div>    
                </div> 
                }  
                      </div>
                 </div>
        </div>
    );
}