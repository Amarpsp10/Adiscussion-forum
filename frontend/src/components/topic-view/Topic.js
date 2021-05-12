import react, { useState } from 'react'
import './Topic.css'
import Reply from './Reply'
import {RiAccountCircleFill} from 'react-icons/ri'
import { useLocation } from 'react-router';
import { ThemeProvider } from '@material-ui/styles';
import Default from './../../assets/default.jpg'
import {AiOutlineSave,AiFillSave} from 'react-icons/ai'
import GetProfile from './../../config/getProfile'

export default function Topic(props) {
    
    let Temp = useLocation();

    const[profile_img,setProfile_img] = useState(ProfileImage);
    
    async function ProfileImage(){
        let response =  await GetProfile(Temp.data.username);
         if(response!==null){ 
             setProfile_img(response.pop().profile_img);
         }
         else{
             setProfile_img(Default);
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
                     
                           <h1>{Temp.data.title}</h1>
                           <h4>{Temp.data.tag}</h4>
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
                        <h3>{Temp.data.username}</h3>
                    </div>
                    <text className={'topic-description'}>{Temp.data.description}</text>
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