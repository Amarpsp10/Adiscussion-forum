import {baseurl, signup} from './Apis'
export default async function LoginRequest(regUsername,regEmail,regPassword){

//    console.log(regUsername);
//    console.log(regEmail);
//    console.log(regPassword);

const response =  await fetch(`${baseurl}${signup}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        body:JSON.stringify({
            username: regUsername,
            email: regEmail,
            password1: regPassword,
            password2: regPassword,
        }),
    }).then(res=>{return res.json()}).then(data=>{console.log(JSON.stringify(data))})
}