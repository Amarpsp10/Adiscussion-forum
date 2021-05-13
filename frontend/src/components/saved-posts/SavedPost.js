import React,{Component} from 'react'
import './../home-page-components/topic-feed/Feed.css'
import FeedItem from './../home-page-components/topic-feed/Feed-item'
import GetTopics from './../../config/getTopics'
import GetSavedTopics from './../../config/getSavedTopic'

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
      console.log(window.location.pathname);
   }


   render(){
       return(
        <div>
          <div className={'saved-topics-header'}>
            <text>Saved Topics</text>

          </div>

           <div className={'feed-section'}>
            <div style={{backgroundColor:true? 'white':'#5A5A5A'}} className={'feed'}>   
                      <div className={'topic-item-box'}>
                          <h2>Posts</h2>
                      <hr style={{height:'3px',backgroundColor:'#414141'}}/>
                {!this.state.isLoading ?
                    <div>
                        {this.state.feedlist.map((data,id)=>{
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
        </div>
    );
   }  
}

