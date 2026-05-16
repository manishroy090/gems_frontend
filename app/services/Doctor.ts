import {HospitalApi} from "../libs/axios";
import { IDoctor } from "../interface/IDoctor";



export async function getAllDoctor(){
 const doctors = await HospitalApi.get('doctors').
 then((res)=>{
   return res.data.doctors
 })
 .catch((error)=>{
    console.log("error",error)
 });


 return doctors;
}

export async function  createDoctor(payload:IDoctor){
 const register = await HospitalApi.post('doctors/create',payload);
 return register;

}

export async function editDoctor(){

}


export async function updateDoctor(){

}

export async function deleteDoctor(){

}

