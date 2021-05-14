import react, { useState, useEffect} from 'react'
import './Topic.css'
import Comment from './Comment'
import {RiAccountCircleFill} from 'react-icons/ri'
import { ThemeProvider } from '@material-ui/styles';
import Default from './../../assets/default.jpg'
import {AiOutlineSave,AiFillSave} from 'react-icons/ai'
import GetProfile from './../../config/getProfile'
import GetTopicById from './../../config/GetTopicById'
import SaveUserTopic from './../../config/saveUserTopic'
import IsTopicSaved from './../../config/IsTopicSaved'
import UnSaveTopic from './../../config/UnSavedTopic'
import AddComment from './../../config/addCommnet'
import GetCommnet from './../../config/getComment'
import UpdateCoin from './../../config/updateCoin'

export default function Topic(props) {
    

    const[topic, setTopic] = useState(getTopicData);
    const[topicCommnet, setTopicComment] = useState(null);
    const[profile_img,setProfile_img] = useState(Default);
    const[isSaved, setSave] = useState(false)
    const[saveTopicId, setSaveTopicId] = useState(null)
    async function getTopicData() {
        window.scrollTo(0,0)
        const path = window.location.pathname;
        const id = path.substring(path.lastIndexOf('/')+1);
        let response = await GetTopicById(id);
        setTopic(response);
        let resp =  await GetProfile(response.username);
        if(response!==null){ 
            setProfile_img(resp.pop().profile_img);
        }
        let savestatus = await IsTopicSaved(localStorage.getItem('username'),id);
        if(savestatus.length){
            setSave(true);
            setSaveTopicId(savestatus.pop().id)
        }
        let comment = await GetCommnet(id)
        setTopicComment(comment)
        
    }
    
    const[comment, setComment] = useState(null);
    
    async function isTopicSaved() {
            console.log(topic)
            let savestatus = await IsTopicSaved(localStorage.getItem('username'),topic.id);
            setSave(savestatus);
    }
       
    async function commented(){
        if(comment==''){
            alert('please add comment');
            return ;
        }
        let response =  AddComment(topic.id, localStorage.getItem('username'), comment)
        if(response){
            console.log(response)
            setComment('')
        }
        await UpdateCoin(localStorage.getItem('username'),5)
        window.location.reload(false);
    }
    async function saveClick(){
        if(!isSaved){
          let response =await SaveUserTopic(localStorage.getItem('username'),topic.username,topic.title,topic.tag,topic.id)
          setSaveTopicId(response.id)
          console.log(response.id)
          setSave(true);
          await UpdateCoin(localStorage.getItem('username'),2);
          return;
        }
        else{
            let unsave = await UnSaveTopic(saveTopicId)
            console.log(unsave)
            setSave(false);
            await UpdateCoin(localStorage.getItem('username'),-2);            
        }
    }
    return(
        <div className={'topic-page'}>
            <div className={'topic-section'}>
                 <div className={'header'}>
                     
                           <h1>{topic.title}</h1>
                           <h4>{topic.tag}</h4>
                           {topicCommnet? 
                              
                              <div  onClick={()=>saveClick()}>
                              <div className={'header-heading-save'} style={{backgroundColor:isSaved?'black':'white',color:isSaved?'white':'black'}}>
                                  <div className={'header-save-icon'}>
                                  <AiFillSave size={20}/>
                                  </div>
                                  {isSaved? 
                                  <text>Saved</text>
                                  : <text>Save</text>
                                  }
                               </div>
                               </div>
                            : 
                              <div></div>
                            }
                    <hr/>
                    <div className={'auther'}>
                        <div className={'auther-icon'}>
                            <img src={profile_img} />
                        </div>
                        <h3>{topic.username}</h3>
                    </div>
                    <text  className={'topic-description'}>{topic.description}</text>
                 </div>  
           </div>
           <div className={'comment-box'}>
                <div className={'comment-reply-box'}>
                  <textarea placeholder={'Comment here ......'} value={comment} onChange={(text)=>setComment(text.target.value)} className={'text-area'}/>
                  <text className={'comment-button'} onClick={()=>commented()}>Comment</text>
                </div>
           </div>
           <div className={'comments'}>
               <h2 onClick={()=>console.log(topicCommnet)}>Comments</h2>
               <hr/>
                <div className={'all-replies'}>
                  {topicCommnet?
                       <div>
                           {topicCommnet.map(data=>{
                             return <Comment username={data.username} comment={data.comment}/>
                           })}
                       </div>
                       :
                       <text>no comments yet</text>
                  }

                </div> 
           </div>
        </div>
    );
}

