import {baseurl, signup, coins} from './Apis'
export default async function SignUpRequest(regUsername,regEmail,regPassword){

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
    }).then(res=>{ if(res.status===500) return null;
                   return res.json()}).then(data=>{
       console.log(JSON.stringify(data))
     if(data!==null){
         console.log('chala')
         return false; 
     }
 })
 if(response===false)
 return false;
 
 localStorage.setItem('username',regUsername);
 

 await fetch(`${baseurl}${coins}`, {
    method: 'POST',
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
        "X-CSRFToken": "$crf_token"
    },
    body:JSON.stringify({
        username: regUsername,
        coins : 20
    })
  })

 return true;
}