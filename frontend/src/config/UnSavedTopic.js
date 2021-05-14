import {baseurl, deleteSavedTopic} from "./Apis";

export default async function GetUserTopics(savedTopicId){

    const response =  await fetch(`${baseurl}${deleteSavedTopic}${savedTopicId}/`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        
    }).then(res=>{return res.status})
    
     return response
}