import {baseurl,updateCoins} from './Apis'

export default async function UpdateCoin(username,coins,id){

    const response =  await fetch(`${baseurl}${updateCoins}${id}/`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        body:JSON.stringify({
            username:baseurl,
            coins: coins
        }),
    }).then(res=>{return res.json()}).then(data=>{console.log(JSON.stringify(data))})
     console.log('done')
    return response;
    }