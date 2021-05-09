import React,{useState,useEffect} from 'react'
import './Feed.css'
import FeedItem from './Feed-item'
import GetTopics from '../../../config/getTopics'

export default function Feed(){

   const[feedList,setFeedList] = useState([]);
   const[loading, setLoading] = useState(true);
   
   useEffect(()=>{
     let feedlist = GetTopics();
     setFeedList(feedList);     
     setLoading(feedList ? false:true)
   });

   const feedlist = list.map((data,id)=>{
       return(<FeedItem title={data.title} tag={data.tag} description={data.description}/>);
   })
     
    return(
        <div className={'feed-section'}>
            <div style={{backgroundColor:true? 'white':'#5A5A5A'}} className={'feed'}>   
                      <div className={'topic-item-box'}>
                          <h2>Posts</h2>
                      <hr style={{height:'3px',backgroundColor:'#414141'}}/>
                {feedList ?
                    <div>
                        {feedlist}
                    </div>
                :  
                    <div className={'loading-box'}>
                       <div className={'loader'}></div>    
                    </div> 
                }  
                      </div>
                 </div>
        </div>
    );
}

const list = [
    {
        id:'1',
        username:'amrpsp10',
        title:'1this is title parsed in thsdkfklsdkfjasfs',
        description:'yea u got it this is descirption',
        tag:'notag',
    },
    {
        id:'2',
        username:'amrpsp10',
        title:'2this is title parsed in thsdkfklsdkfjasfs',
        description:'yea u got it this is descirption',
        tag:'notag',
    },
    {
        id:'3',
        username:'amrpsp10',
        title:'3this is title parsed in thsdkfklsdkfjasfs',
        description:'yea u got it this is descirption',
        tag:'notag',
    },
    {
        id:'4',
        username:'amrpsp10',
        title:'4this is title parsed in thsdkfklsdkfjasfs',
        description:'yea u got it this is descirption',
        tag:'notag',
    },
    {
        id:'5',
        username:'amrpsp10',
        title:'5this is title parsed in thsdkfklsdkfjasfs',
        description:'yea u got it this is descirption',
        tag:'notag',
    },
    {
        id:'6',
        username:'amrpsp10',
        title:'6this is title parsed in thsdkfklsdkfjasfs',
        description:'yea u got it this is descirption',
        tag:'notag',
    },
    {
        id:'7',
        username:'amrpsp10',
        title:'7this is title parsed in thsdkfklsdkfjasfs',
        description:'yea u got it this is descirption',
        tag:'notag',
    },
]