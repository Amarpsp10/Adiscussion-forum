import {baseurl,updateCoins} from './Apis'
import GetCoins from './getCoins'
export default async function UpdateCoin(username,coins){

    let resp = await GetCoins(username)
    resp = resp.pop();
    const response =  await fetch(`${baseurl}${updateCoins}${resp.id}/`, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        body:JSON.stringify({
            username:username,
            coins: coins+resp.coins
        }),
    }).then(res=>{return res.json()}).then(data=>{console.log(JSON.stringify(data))})
     console.log('done')
    return response;
    }