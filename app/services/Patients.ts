import {HospitalApi} from "../libs/axios";
import { IPatient } from "../interface/Ipatient";



export async function getAllPatient(){

  const patients =  await HospitalApi
    .get("/patient")
    .then((res)=>{
        return res.data.patients;
    })
    .catch((error)=>{
        console.log("error",error)
    })

    return patients;
}


export async function createPatient(patientDetails:IPatient){
    
    await HospitalApi
    .post("/patient/create",patientDetails)
    .then((res)=>{
        console.log("res",res);
    })
    .catch((error)=>{
        console.log("error",error)
    })
}




export async function editPatient(){


}

export async function updatePatient(){

}

export async function deletePatient(){

}