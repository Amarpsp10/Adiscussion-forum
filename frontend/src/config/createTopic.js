import {topic} from "./Apis";

export default async function CreateTopic(topicUsername,topicTitle,topicTag,topicDescription){
//     console.log('working the console')
//    console.log(loginEmail);
//    console.log(loginPassword)
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
        }),
    }).then(res=>{return res.json()}).then(data=>{console.log(JSON.stringify(data))})
}