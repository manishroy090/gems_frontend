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

export async function getDoctor() {
  const doctor = await HospitalApi.get(`doctors/edit/${1}`)
    .then((res) => {
      return res.data.doctor

    }).catch((error) => {
      console.log("error", error)
    })
  return doctor;

}


export async function updateDoctor() {

}

export async function deleteDoctor() {

}

