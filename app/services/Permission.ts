import {HospitalApi} from "../libs/axios";


 export async function getPermissions(){
   const {data} = await HospitalApi.get("/permission");
   return data.permissions;
 }





