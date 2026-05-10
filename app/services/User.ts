import Axios from "../libs/axios";


 export async function getUsers(){
   const {data} = await Axios.get("/hoshpital/auth/users");
   return data.users
 }





