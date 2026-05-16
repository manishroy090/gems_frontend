import {Axios,HospitalApi} from "../libs/axios";


export async function getAllRoles(){
    const {data} = await HospitalApi.get("/roles");

    return data.roles;

}


export async function createRole(){
//   const roles = await Axios.post()


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


export async function  getRolesWithPermissions(id:any){
    const permission = await Axios.get(`hoshpital/permission/getallpermission/${id}`);
    return permission.data.permissions;
}


