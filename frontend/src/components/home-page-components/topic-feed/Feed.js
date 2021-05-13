import React,{Component} from 'react'
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

