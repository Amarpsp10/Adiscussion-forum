import {baseurl,savedTopics} from './Apis'
import GetTopicById from './GetTopicById'
export default async function GetSavedTopic(username) {

    const response =  await fetch(`${baseurl}${savedTopics}${username}/`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
    }).then(res=>{return res.json()}).then(jas=>{return jas.pop().saved_topic.split('/')})
  
    return response;
}