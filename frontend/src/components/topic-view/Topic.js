import react, { useState, useEffect} from 'react'
import './Topic.css'
import Reply from './Reply'
import {RiAccountCircleFill} from 'react-icons/ri'
import { ThemeProvider } from '@material-ui/styles';
import Default from './../../assets/default.jpg'
import {AiOutlineSave,AiFillSave} from 'react-icons/ai'
import GetProfile from './../../config/getProfile'
import GetTopicById from './../../config/GetTopicById'

export default function Topic(props) {
    
    window.scrollTo(0,0)
    const[topic, setTopic] = useState(getTopicData);
    const[profile_img,setProfile_img] = useState(Default);
    
    async function getTopicData() {
        const path = window.location.pathname;
        const id = path.substring(path.lastIndexOf('/')+1);
        let response = await GetTopicById(id);
        setTopic(response);
        let resp =  await GetProfile(response.username);
         if(response!==null){ 
             setProfile_img(resp.pop().profile_img);
         }
    }

    const[comment, setComment] = useState('');
    const[isSaved, setSave] = useState(false)
    const replyList = list.map(data=>{
           return <Reply username={data.username} reply={data.reply}/>
        });
       
    const commented = ()=>{
        
        console.log(comment);
        
    }
    const saveClick = ()=>{
        setSave(!isSaved);
    }
    return(
        <div className={'topic-page'}>
            <div className={'topic-section'}>
                 <div className={'header'}>
                     
                           <h1>{topic.title}</h1>
                           <h4>{topic.tag}</h4>
                             <div onClick={()=>saveClick()}>
                             {isSaved? 
                             <div className={'header-heading-save'}><AiFillSave size={20}/><text>Saved</text></div> 
                             : <div className={'header-heading-save'}><AiOutlineSave size={20}/><text>Save</text></div>
                            }
                            </div>
                    <hr/>
                    <div className={'auther'}>
                        <div className={'auther-icon'}>
                            <img src={profile_img} />
                        </div>
                        <h3>{topic.username}</h3>
                    </div>
                    <text className={'topic-description'}>{topic.description}</text>
                 </div>  
           </div>
           <div className={'comment-box'}>
                <div className={'comment-reply-box'}>
                  <textarea placeholder={'Comment here ......'} onChange={(text)=>setComment(text.target.value)} className={'text-area'}/>
                  <text className={'comment-button'} onClick={()=>commented()}>Comment</text>
                </div>
           </div>
           <div className={'comments'}>
               <h2>Comments</h2>
               <hr/>
                <div className={'all-replies'}>
                   {replyList}
                </div> 
           </div>
        </div>
    );
}

const list = [
    {
        id:'0',
        username:'amarpsp', 
        reply:'lsdkjfn dslflsd flksdj fkljsad kl fklasdklfj alsdk jfklj asklfj dlsk l sldkf sdlkj klasdjklfjsadkjfk lsj dkjfaskl dklsjklfjsda kljfkl sdjklfjkljsdasdklf jaklsdjlkjfklasdjklj fsdkla fkl sdajklfjdk sljf'
    },
    {
        id:'1',
        username:'amarpsp',
        reply:'lsdkjfkla sdjklfjsadkjfklsjdkjfsdfsd  fsdafsdflsd flksd jfjasdkl fklsd kl fklsd fkl sadkl fkl askljdklsjk lfjsdakljfklsdjk lf jkljsdasdklfjaklsdjlkjfklasdjkljfsdklajfklsdajklfjdksljf'
    },
    {
        id:'2',
        username:'amarpsp',
        reply:'lsdkjfklasd  jklfjsadkj fklsjdkjfaskljd klsjkl  jsdakljfklsdj kljsdasdklfjakl   sdjlkjfklasdjkljfsd klaj fkl da jdksljf'
    },
    {
        id:'3',
        username:'amarpsp',
        reply:'lsdkjfkla sdjk lfjsadkjfklsj dkjfaskljdkl klfjsdakljf klsdjk jkljsdasdk lsdjlkjf lasdjk  ljfsd lsdajk ksljf'
    },
    {
        id:'4',
        username:'amarpsp',
        reply:'l sdkjfkl sdj fjsadkjfklsjdkjfask ljdklsj klfjsdakljfk lsdjklf kljsdasdklf sdjlkjfklasdjk ljfs kla jfkl sdaj kl ksl jf'
    }, 
]