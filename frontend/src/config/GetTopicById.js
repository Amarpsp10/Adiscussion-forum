import {baseurl,topic} from "./Apis";

export default async function GetTopicById(id){

    const response =  await fetch(`${baseurl}${topic}${id}/`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        
    }).then(res=>{return res.json()}).then(data=>{return data});
    
     return response;
}