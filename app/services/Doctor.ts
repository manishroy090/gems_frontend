import {HospitalApi} from "../libs/axios";
import { IDoctor } from "../interface/IDoctor";



export async function getAllDoctor(){


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

