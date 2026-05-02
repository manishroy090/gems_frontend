import Axios from "../libs/axios";
import { useRouter } from 'next/navigation'
import { Ionboarding } from "../interface/Ionboarding";
import toast, { Toaster } from 'react-hot-toast';
import useToaster from "../hooks/useToaster";




export async function  hoshpitalRegister(payload:Ionboarding){
 const register = await Axios.post('http://127.0.0.1:8080/api/v1/auth/signup',payload);
 return register;

}


export async function login(loginCredential:any){
  const login =  await Axios.post('/auth/login',loginCredential)
  return login;

}


export async function  getMe(params:type) {
  
}