import {HospitalApi} from "../libs/axios";


//get all permission api
 export async function getPermissions(){
   const {data} = await HospitalApi.get("/permission");
   return data.permissions;
 }





