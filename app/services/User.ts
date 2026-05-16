import {Axios,HospitalApi} from "../libs/axios";


 export async function getUsers(){
   const {data} = await HospitalApi.get("/auth/users");
   return data.users
 }


 export async function createUser(){


 }


 export async function editUser(){


 }


 export async function updateUser(){

 }



 export async function deleteUser(){
  
 }





