import { Axios, HospitalApi } from "../libs/axios";
import { Iuser } from "@/interface/Iuser";

//get User api call from here
export async function getUsers() {
  const { data } = await HospitalApi.get("/auth/users");
  return data.users;
}

//create user api call from here
export async function createUser(data: Iuser) {
  const user = HospitalApi.post("auth/signup", data)
    .then((res) => {})
    .catch((error) => {});
}

//get user api call from here
export async function getUser(user_id: any) {
  const { data } = await HospitalApi.get(`/auth/users/${user_id}`);
  return data.user;
}

//update user api call from here
export async function updateUser(id: string | number, payload: Iuser) {
  const { data } = await HospitalApi.put(`/auth/users/${id}`, payload);
  return data.user;
}

//delete user api call from here
export async function deleteUserById(id: any) {
  const { data } = await HospitalApi.delete(`/auth/users/${id}`);
  return data.message;
}

export async function excelExport() {
 const {data} =  await HospitalApi.post("/auth/users/excel/export",{},{
  responseType: 'blob'
 })

 return data;
 
}
