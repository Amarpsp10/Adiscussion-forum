import {baseurl, isSavedTopic} from './Apis'

export default async function IsTopicSaved(saver,topic_id) {
    const response =  await fetch(`${baseurl}${isSavedTopic}${saver}/${topic_id}/`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
    }).then(res=>{return res.json()})
    
    return response;
}