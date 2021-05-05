import {topic} from "./Apis";

export default async function GetTopics(){

    const response =  await fetch(`${baseurl}${topic}`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        
    }).then(res=>{return res.json()}).then(data=>{console.log(JSON.stringify(data))})

}