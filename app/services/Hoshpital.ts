import {Axios} from "../libs/axios";
import { HospitalApi } from "../libs/axios";

export async function getAllCountries(){
   const countries = HospitalApi.get('/config/getallcountries')
    .then((res)=>{
        return res.data.countries;
    }).catch((error)=>{
        console.log('error',error);
    });


    return countries;
}


export async function getHospitalDepartments(){
   const departments =  HospitalApi.get("/config/getalldepartments")
   .then((res)=>{
     return  res.data.departments
   }).catch((error)=>{
      console.log("error",error)

   })


   return departments;
  
}


export async function getAllBloodGroup(){
   const departments =  HospitalApi.get("/config/getallbloodgroup")
   .then((res)=>{
    return  res.data.bloodgroups
   }).catch((error)=>{
      console.log("error",error)

   })


   return departments;
  
}