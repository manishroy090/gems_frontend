import {Axios,HospitalApi} from "../libs/axios";
import { IRole } from "@/interface/IRoles";


//get all Role api here
export async function getAllRoles(){
    const {data} = await HospitalApi.get("/roles");
    return data.roles;
}


//create roles api here
export async function createRole(payload:IRole){
    const role = await HospitalApi.post(`roles/create`,payload)

}


export async function editRole(){
    //   const roles = await Axios.get()



}

export async function updateRole(){
    //   const roles = await Axios.patch()



}


export async function deleteRole(){
    // const roles = await Axios.delete()

}

 
//assign role api here
export async function assignPermission(payload:any){
    const permission = await HospitalApi.post(`roles/assignpermissiontorole`,payload);
    // return permission.data.permissions;
}

//update role permission api here
export async function updateRolePermissions(id:any,payload:any){
    const permission = await HospitalApi.put(`roles/updaterolepermission/${id}`,payload);
    // return permission.data.permissions;
}

//get roles with permission api here
export async function  getRolesWithPermissions(id:any){
    const permission = await HospitalApi.get(`permission/getallpermission/${id}`);
    return permission.data.permissions;
}


