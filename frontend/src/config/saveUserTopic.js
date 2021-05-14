import {baseurl,saveUserTopics} from "./Apis";

export default async function CreateTopic(saver, topicUsername,topicTitle,topicTag, topicId){

    const response =  await fetch(`${baseurl}${saveUserTopics}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        body:JSON.stringify({
            saver: saver,
            username: topicUsername,
            title: topicTitle,
            tag: topicTag,
            topic_id: topicId
        }),
    }).then(resp=>{return resp.json()})

    return response;    
}