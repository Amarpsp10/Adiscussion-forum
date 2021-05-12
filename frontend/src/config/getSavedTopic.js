import {baseurl,savedTopics} from './Apis'

export default function GetSavedTopic(username) {

    const response =  await fetch(`${baseurl}${savedTopics}${username}/`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
    }).then(res=>{return res.json()})

    return response;
    
}