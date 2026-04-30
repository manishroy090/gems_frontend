import Axios from "../libs/axios";
import { useRouter } from 'next/navigation'
import { Ionboarding } from "../interface/Ionboarding";
import toast, { Toaster } from 'react-hot-toast';
import useToaster from "../hooks/useToaster";



export async function  hoshpitalRegister(payload:Ionboarding){

  const toaster = useToaster();

  Axios.post('http://127.0.0.1:8080/api/v1/auth/signup',payload)
  .then((res)=>{

     toast.error(res.data.message);

  })
  .catch((error)=>{
    console.log('error',error);
  });

}


export async function login(loginCredential:any){


    
   Axios.post('http://127.0.0.1:8080/api/v1/auth/login',loginCredential)
   .then((res)=>{
    if(res.data.token){
      localStorage.setItem('ACCESS_TOKEN',res.data.token);
    }
   }).catch((error)=>{
    console.log('error',error);
   });

   
}