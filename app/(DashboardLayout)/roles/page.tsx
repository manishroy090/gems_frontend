"use client";
import { useEffect, useState } from "react";
import Modal from "@/components/medinexus/Modal";
import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import { Textarea } from "@/components/medinexus/textarea";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { RoleSchema } from "@schemas/Role.schema"
import { IRole} from "@interface/IRoles";
import Link from 'next/link'
import { getAllRoles,createRole } from "@services/Roles";
import Table from "@/components/medinexus/Table"







const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [roles, setRoles] = useState([])



  //toggel modal code
  function openUserModal() {
    console.log("Open user Modal modal")
    setShowModal(true);
  }


  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(RoleSchema) });
  const onSubmit: SubmitHandler<IRole> = async (data) => {
        await createRole(data);
  }

  const onError: SubmitHandler<IRole> = async (error) => {

    console.log("error", error);

  }


  useEffect(() => {
    const getAllRole = async () => {
      const result = await getAllRoles();
      setRoles(result);
    }

    getAllRole();
  }, [])





  return (
    <div className="flex flex-col space-y-5">



      <div className="flex flex-col space-y-3">
        <div className="flex justify-between items-center border-b pb-4 border-gray-300">
          <span className="font-semibold text-xl">Roles</span>

          <div className="flex space-x-4">



            <div className="border rounded-md p-2 text-white text-center bg-blue-600 hidden" onClick={openUserModal}>
              <Label>Add Roles</Label>

            </div>

          </div>
        </div>



      </div>


      <div className="bg-white rounded px-1">

        {roles.length > 0 ? <Table data={roles} showaction={false} columnRenderers={{
          permissions: (value, row) => {
            return <Link href={`/permissions/${row.id}`}><img src={"/hrm_image/authentication.png"} className="w-8" /></Link>;
          }
        }} /> : 'loading'}

      </div>


      {/* modal code Start from here */}
      <Modal showModal={showModal}>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
          <h1>Add Users</h1>


          <div>
            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Title</Label>
            <Input  {...register("title")} />
            {errors?.["title"] && (
              <p className="text-xs text-red-500">{errors["title"].message}</p>
            )}
          </div>

          <div>
            <select className="w-full border p-2 rounded-md"  {...register("status")}>
              <option value="">Select Status</option>
              <option value={"active"}>Active</option>
              <option value={"inactive"}>InActive</option>
            </select>
            {errors?.["status"] && (
              <p className="text-xs text-red-500">{errors["status"].message}</p>
            )}
          </div>


          <div>
            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Description</Label>
            <Textarea {...register("description")} />
              {errors?.["description"] && (
              <p className="text-xs text-red-500">{errors["description"].message}</p>
            )}
          </div>




          <div className="flex space-x-4">
            <button className="bg-red-600 text-white p-2 rounded-md ">Cancle</button>
            <button className="bg-blue-600 text-white p-2 rounded-md" type="submit">Submit</button>
          </div>

        </form>

      </Modal>

    </div>
  );
};

export default page;
