import react, { useState } from 'react'
import './Topic.css'
import Reply from './Reply'
import {RiAccountCircleFill} from 'react-icons/ri'
export default function Topic(props) {
    
    const[comment, setComment] = useState('');

    const replyList = list.map(data=>{
           return <Reply username={data.username} reply={data.reply}/>
        });
       
    const commented = ()=>{
        console.log(comment)
    }
    return(
        <div className={'topic-page'}>
            <div className={'topic-section'}>
                <div className={'header'}>
                    <h1>here is the title of page nothin else</h1>
                    <h4>Tag of page</h4>
                    <hr/>
                </div>
                <div>
                   {replyList}
                </div>   
            <div className={'create-reply-box'}>
              <textarea placeholder={'Comment here ......'} onChange={(text)=>setComment(text.target.value)} className={'text-area'}/>
              <h3 className={'button-secondary comment-button'} onClick={()=>commented()}>Comment</h3>
            </div>
            </div>
        </div>
    );
}

const list = [
    {
        id:'0',
        username:'amarpsp',
        reply:'lsdkjfn dslflsd flksdj fkljsad kl fklasdklfj alsdk jfklj asklfj dlsk l sldkf sdlkj klasdjklfjsadkjfklsjdkjfaskljdklsjklfjsdakljfklsdjklfjkljsdasdklfjaklsdjlkjfklasdjkljfsdklajfklsdajklfjdksljf'
    },
    {
        id:'1',
        username:'amarpsp',
        reply:'lsdkjfklasdjklfjsadkjfklsjdkjfsdfsd  fsdafsdflsd flksd jfjasdkl fklsd kl fklsd fkl sadkl fkl askljdklsjklfjsdakljfklsdjklfjkljsdasdklfjaklsdjlkjfklasdjkljfsdklajfklsdajklfjdksljf'
    },
    {
        id:'2',
        username:'amarpsp',
        reply:'lsdkjfklasdjklfjsadkjfklsjdkjfaskljdklsjklfjsdakljfklsdjklfjkljsdasdklfjaklsdjlkjfklasdjkljfsdklajfklsdajklfjdksljf'
    },
    {
        id:'3',
        username:'amarpsp',
        reply:'lsdkjfklasdjklfjsadkjfklsjdkjfaskljdklsjklfjsdakljfklsdjklfjkljsdasdklfjaklsdjlkjfklasdjkljfsdklajfklsdajklfjdksljf'
    },
    {
        id:'4',
        username:'amarpsp',
        reply:'lsdkjfklasdjklfjsadkjfklsjdkjfaskljdklsjklfjsdakljfklsdjklfjkljsdasdklfjaklsdjlkjfklasdjkljfsdklajfklsdajklfjdksljf'
    },
]