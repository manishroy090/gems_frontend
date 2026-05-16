import {HospitalApi} from "../libs/axios";
import { IPatient } from "../interface/Ipatient";



export async function getAllPatient(){

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

export async function getAllPatientStatus() {
   const patientStatus=   await HospitalApi
    .get("config/patientstatus")
    .then((res)=>{
        
        return res.data.patientStatus;
    })
    .catch((error)=>{
        console.log("error",error)
    });

    return patientStatus;
    
}


export async function editPatient(){


}

export async function updatePatient(){

}

export async function deletePatient(){

}