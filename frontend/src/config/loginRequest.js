import { baseurl, login } from "./Apis";

export default async function LoginRequest(loginEmail,loginPassword){

    const response =  await fetch(`${baseurl}${login}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        body:JSON.stringify({
            username:loginEmail,
            email:'',
            password:loginPassword
        }),
    }).then(res=>{return res.json()})
    .then(data=>{
        console.log(JSON.stringify(data))
        if(data.key) {
            localStorage.setItem('key',data.key);
            return true;
        }
        else{
            return false;
        }
    })

    return response;
}