import {Axios,HospitalApi} from "../libs/axios";


export async function getAllRoles(){
    const {data} = await HospitalApi.get("/roles");

    return data.roles;

}


export async function createRole(payload){
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


export async function assignPermission(payload){
    const permission = await HospitalApi.post(`roles/assignpermissiontorole`,payload);
    // return permission.data.permissions;
}

export async function updateRolePermissions(id,payload){
    const permission = await HospitalApi.put(`roles/updaterolepermission/${id}`,payload);
    // return permission.data.permissions;
}


export async function  getRolesWithPermissions(id:any){
    const permission = await HospitalApi.get(`permission/getallpermission/${id}`);
    return permission.data.permissions;
}


