import {baseurl,getCoins} from "./Apis";

export default async function GetCoins(username){

    const response =  await fetch(`${baseurl}${getCoins}${username}/`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
    }).then(res=>{return res.json()})

    return response;
}