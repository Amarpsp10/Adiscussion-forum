import React,{Component} from 'react'
import FeedItem from './../home-page-components/topic-feed/Feed-item'
import GetUserTopics from './../../config/GetUserTopics'
export default class MyPost extends Component{

   constructor(props){
       super(props);
       this.state = {
           isLoading : true,
           feedlist : null
       }
   }

   componentDidMount(){
     GetUserTopics(localStorage.getItem('username'))
       .then(data=>{
           this.setState({
               isLoading : false,
               feedlist : data
           })
       })
   }


   render(){
       return(<div>
           <div className={'saved-topics-header'}>
            <text>My Topics</text>
          </div>
           <div className={'feed-section'}>
            <div style={{backgroundColor:true? 'white':'#5A5A5A'}} className={'feed'}>   
                      <div className={'topic-item-box'}>
                          <h2>Posts</h2>
                      <hr style={{height:'3px',backgroundColor:'#414141'}}/>
                {!this.state.isLoading ?
                    <div>
                        {this.state.feedlist
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
        </div>
    );
   }  
}

