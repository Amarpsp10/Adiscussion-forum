import {baseurl,getUserTopic} from "./Apis";

export default async function GetUserTopics(username){

    const response =  await fetch(`${baseurl}${getUserTopic}${username}/`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        
    }).then(res=>{return res.json()})
    
     return response
}