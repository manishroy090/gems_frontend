import {Axios} from "../libs/axios";


 export async function getUsers(){
   const {data} = await Axios.get("/hoshpital/auth/users");
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





