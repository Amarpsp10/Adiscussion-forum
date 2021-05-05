import {profile} from "./Apis";

export default async function GetTopics(profileUsername){

    const response =  await fetch(`${baseurl}${profile}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        body:JSON.stringify({
            username:profileUsername
        }),
        
    }).then(res=>{return res.json()}).then(data=>{console.log(JSON.stringify(data))})
}