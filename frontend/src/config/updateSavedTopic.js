import {baseurl,updateSavedTopics} from './Apis'
import GetSavedTopic from './getSavedTopic'
export default async function UpdateCoin(username, title){
     
    let resp = await GetSavedTopic(username)
    resp = resp.pop();
    const response =  await fetch(`${baseurl}${updateSavedTopics}${resp.id}/`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        body:JSON.stringify({
            username:username,
            saved_topic: resp.saved_topic+'/#/'+title
        }),
    }).then(res=>{return res.json()})
    
     console.log('done')
    return response;
    }