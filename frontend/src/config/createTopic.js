import {baseurl,topic} from "./Apis";

export default async function CreateTopic(topicUsername,topicTitle,topicTag,topicDescription){

    const response =  await fetch(`${baseurl}${topic}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        body:JSON.stringify({
            username:topicUsername,
            title: topicTitle,
            tag: topicTag,
            description: topicDescription,
            replies:'non reply yet'
        }),
    }).then(res=>{return res.json()}).then(data=>{
        if(data.id) return true;
        return false
    })
    
    return response;    
}