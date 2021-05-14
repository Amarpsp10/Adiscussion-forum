import { baseurl, login } from "./Apis";

export default async function LoginRequest(loginUsername,loginPassword){

    const response =  await fetch(`${baseurl}${login}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": "$crf_token"
        },
        body:JSON.stringify({
            username:loginUsername,
            email:'',
            password:loginPassword
        }),
    }).then(res=>{return res.json()})
    .then(data=>{
        console.log(JSON.stringify(data))
        if(data.key) {
            localStorage.setItem('key',data.key);
            localStorage.setItem('username',loginUsername);
           
            return true;
        }
        else{
            return false;
        }
    })

    return response;
}