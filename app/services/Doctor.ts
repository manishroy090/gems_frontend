import { HospitalApi } from "../libs/axios";
import { IDoctor } from "../interface/IDoctor";


//get all doctors api
export async function getAllDoctor() {
  const doctors = await HospitalApi.get('doctors').
    then((res) => {
      return res.data.doctors
    })
    .catch((error) => {
      console.log("error", error)
    });

  return doctors;
}

//create doctor api
export async function createDoctor(payload:any) {
  const register = await HospitalApi.post('doctors/create', payload, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  return register;

}


//get doctorapi module
export async function getDoctor(id:String) {
  const doctor = await HospitalApi.get(`doctors/edit/${id}`)
    .then((res) => {
      return res.data.doctor

    }).catch((error) => {
      console.log("error", error)
    })
  return doctor;

}


//update doctorapi module
export async function updateDoctor(id:string |number ,payload:any) {
  const doctor = await HospitalApi.put(`doctors/update/${id}`,payload)
}


//view doctordetail a api
export async function View(id:any ){
   const doctor = await HospitalApi.get(`doctors/view/${id}`)
    .then((res) => {
      return res.data.doctordetails

    }).catch((error) => {
      console.log("error", error)
    })
  return doctor;

}


//delete doctor api
export async function deleteDoctor(id:string) {
     const doctor = await HospitalApi.delete(`doctors/delete/${id}`)

}

