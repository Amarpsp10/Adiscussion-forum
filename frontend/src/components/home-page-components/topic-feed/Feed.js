import React,{useState,useEffect, Component} from 'react'
import './Feed.css'
import FeedItem from './Feed-item'
import GetTopics from '../../../config/getTopics'

export default class Feed extends Component{

   constructor(props){
       super(props);
       this.state = {
           isLoading : true,
           feedlist : null
       }
   }

   componentDidMount(){
     GetTopics()
       .then(data=>{
           this.setState({
               isLoading : false,
               feedlist : data
           })
       })
   }


   render(){
       return(
           <div className={'feed-section'}>
            <div style={{backgroundColor:true? 'white':'#5A5A5A'}} className={'feed'}>   
                      <div className={'topic-item-box'}>
                          <h2>Posts</h2>
                      <hr style={{height:'3px',backgroundColor:'#414141'}}/>
                {!this.state.isLoading ?
                    <div>
                        {this.state.feedlist.filter(obj=>{
                            if(this.props.filter==='All Category') return  obj;
                            else return obj.tag===this.props.filter;
                        })
                        .map((data,id)=>{
                             return(<FeedItem data={data}/>);
                         })}
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
}

const list = [
    {
        id:'1',
        username:'amrpsp10ka bahi',
        title:'dkjfdks 1this is title parsed in thsdkfklsdkfjasfs',
        description:'yea u got it this is descirption',
        tag:'Internship',
    },
    {
        id:'2',
        username:'amrpsp10',
        title:'2this is title parsed in thsdkfklsdkfjasfs',
        description:'yea u got it this is descirption',
        tag:'jatt',
    },
    {
        id:'3',
        username:'amrpsp10',
        title:'3this is title parsed in thsdkfklsdkfjasfs',
        description:'yea u got it this is descirption',
        tag:'Recomendation',
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