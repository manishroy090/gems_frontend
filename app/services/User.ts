import { Axios, HospitalApi } from "../libs/axios";


export async function getUsers() {
  const { data } = await HospitalApi.get("/auth/users");
  return data.users
}


export async function createUser() {


}


export async function getUser(user_id: any) {
  const { data } = await HospitalApi.get(`/auth/users/${user_id}`);
  return data.user

}


export async function updateUser(id,payload) {
  const { data } = await HospitalApi.put(`/auth/users/${id}`,payload);
  return data.user

}





export async function deleteUserById(id) {
    const { data } = await HospitalApi.delete(`/auth/users/${id}`);
  return data.message

}





