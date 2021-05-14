import {baseurl,getCommnets} from './Apis'

export default async function GetCommnets(topic_id) {

    const response =  await fetch(`${baseurl}${getCommnets}${topic_id}/`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
    }).then(res=>{return res.json()})
    
    return response;
} 