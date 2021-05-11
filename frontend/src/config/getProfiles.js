import {baseurl,profiles} from "./Apis";

export default async function GetTopics(profileUsername){

    const response =  await fetch(`${baseurl}${profiles}`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
    }).then(res=>{return res.json()}).then(data=>{return data})

    return response;
}