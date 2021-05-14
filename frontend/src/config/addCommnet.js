import {baseurl, addComment} from './Apis'

export default async function AddCommnet(topic_id, username, comment){

    const response =  await fetch(`${baseurl}${addComment}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        body:JSON.stringify({
            topic_id: topic_id,
            username: username,
            comment: comment
        }),
    }).then(resp=>{return resp.json()})

    return response;    
}