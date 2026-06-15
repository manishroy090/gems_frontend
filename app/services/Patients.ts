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
export async function PatientDetails(patientId:String){

  const result =  await HospitalApi
    .get(`/patient/edit/${patientId}`).then((res)=>{
        return res.data.patientDetails;
    }).catch((error)=>{
        console.log("error",error)
    });

    return result;
   

}

//update patient api
export async function updatePatient(patientId:String,patientDetails:IPatient){
    const result = await HospitalApi.put(`patient/update/${patientId}`,patientDetails)
    .then((res)=>{
        console.log("res",res);
    }).catch((error)=>{
        console.log("error",error);
    });

    console.log("result",result);

}

//delete patient api
export async function deletePatient(patientId:String){
     const result = await HospitalApi.delete(`patient/delete/${patientId}`)
    .then((res)=>{
        console.log("res",res);
    }).catch((error)=>{
        console.log("error",error);
    });

    console.log("result",result);

}