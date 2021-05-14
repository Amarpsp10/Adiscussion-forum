import React,{Component,useState} from 'react'
import GetSavedTopic from './../../config/getSavedTopic'
import GetProfile from './../../config/getProfile'
import Default from './../../assets/default.jpg'
import {Link} from 'react-router-dom'
export default class Feed extends Component{
   
   constructor(props){
       super(props);
       this.state = {
           isLoading : true,
           feedlist : null
       }
   }

   componentDidMount(){
    window.scrollTo(0,0)
     GetSavedTopic(localStorage.getItem('username'))
       .then(data=>{
           this.setState({
               isLoading : false,
               feedlist : data
           })
       })
   }
   async ProfileImage(username){
    let response =  await GetProfile(username);
     if(response!==null){ 
        return response.pop().profile_img;
     }
     else{
         return Default;
     }
    }
     profile_img = (prop) =>{
        let response =  GetProfile(prop)
        return response? response.profile_img : Default
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
                            return(<div>
                                <div className={'topic-item'}>
                                 <Link to={{     
                                               pathname: `/topic/${data.topic_id}`
                                             }} className={'topic-text'}>
                                             <div >
                                               <h3 style={{textDecorationLine:'none'}}>{data.title}</h3>
                                              </div>
                                                  </Link>
                                                  <div className={'midle-field'}>
                                                     <div className={'feed-list-icon'}>
                                                         <img src={this.profile_img(data.username)}/>
                                                     </div>
                                                     <h4>{data.username}</h4> 
                                                  </div>
                                              <div className={'topic-tag'}>
                                             <h3>{data.tag}</h3>
                                              </div>
                                 </div>
                                 <hr/>
                             </div>);
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

