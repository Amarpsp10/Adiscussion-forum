import {baseurl,getProfile} from "./Apis";

export default async function GetProfile(username){

    const response =  await fetch(`${baseurl}${getProfile}${username}/`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
    }).then(res=>{return res.json()})

    return response;
}