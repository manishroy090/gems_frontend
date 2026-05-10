import Axios from "../libs/axios";


 export async function getPermissions(){
   const {data} = await Axios.get("/hoshpital/permission");
   return data.permissions;
 }





