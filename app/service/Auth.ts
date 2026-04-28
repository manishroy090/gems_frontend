import Axios from "../libs/axios";
import { useRouter } from 'next/navigation'


export async function  register(payload:any){

  Axios.post('http://127.0.0.1:8080/api/v1/auth/signup',payload)
  .then((res)=>{
    console.log('res',res);
  })
  .catch((error)=>{
    console.log('error',error);
  });

}


export async function login(loginCredential:any){
    
   Axios.post('http://127.0.0.1:8080/api/v1/auth/login',loginCredential)
   .then((res)=>{
    localStorage.setItem('ACCESS_TOKEN',res.data.token);

   }).catch((error)=>{
    console.log('error',error);
   });

   
}