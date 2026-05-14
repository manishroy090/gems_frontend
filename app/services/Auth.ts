import {Axios} from "../libs/axios";
import { useRouter } from 'next/navigation'
import { Ionboarding } from "../interface/Ionboarding";
import toast, { Toaster } from 'react-hot-toast';
import useToaster from "../hooks/useToaster";




export async function  hoshpitalRegister(payload:Ionboarding){
 const register = await Axios.post('auth/signup',payload);
 return register;

}


export async function login(loginCredential:any){
  const login =  await Axios.post('/auth/login',loginCredential)
  return login;

}



export async function  getMe() {
  const AuthUser = await Axios.get('auth/me');
  return AuthUser;
  
}


export async function logout(){
    const {data} = await Axios.post('auth/logout');
    return data.success;
}