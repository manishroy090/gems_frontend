import { HospitalApi } from "../libs/axios";
import { IDoctor } from "../interface/IDoctor";



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

export async function createDoctor(payload) {
  const register = await HospitalApi.post('doctors/create', payload, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  return register;

}

export async function getDoctor(id) {
  const doctor = await HospitalApi.get(`doctors/edit/${id}`)
    .then((res) => {
      return res.data.doctor

    }).catch((error) => {
      console.log("error", error)
    })
  return doctor;

}


export async function updateDoctor(id,payload) {

  const doctor = await HospitalApi.put(`doctors/update/${id}`,payload)


}

export async function View(id){
   const doctor = await HospitalApi.get(`doctors/view/${id}`)
    .then((res) => {
      return res.data.doctordetails

    }).catch((error) => {
      console.log("error", error)
    })
  return doctor;

}

export async function deleteDoctor(id) {
     const doctor = await HospitalApi.delete(`doctors/delete/${id}`)


}

