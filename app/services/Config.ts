import {Axios} from "../libs/axios";
import { HospitalApi } from "../libs/axios";

// doctorstatus


export async function getAllCountries(){
   const countries = Axios.get('/config')
    .then((res)=>{
        return res.data.countries;
    }).catch((error)=>{
        console.log('error',error);
    });


    return countries;
}

export async function getAllDoctorStatus(){
   const doctorstatus = HospitalApi.get('/config/doctorstatus')
    .then((res)=>{
        return res.data.doctorStatus;
    }).catch((error)=>{
        console.log('error',error);
    });


    return doctorstatus;
}