import {HospitalApi} from "../libs/axios";
import { IPatient } from "../interface/Ipatient";


//get all patient Api
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


//create patient api
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



//edit patient api
export async function editPatient(){


}

//update patient api
export async function updatePatient(){

}

//delete patient api
export async function deletePatient(){

}