"use client";
import React, { useEffect, useState } from "react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import DataTable from "../../../../components/utilities/data-table/DataTable";
import Modal from "../../../../components/ui/Modal";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import Datepicker from "../../../../components/cutom/Datepicker";
import Filter from "../../../../components/cutom/Filter";
import Table from "../../../../components/cutom/Table";
import Userscards from "../../../../components/cutom/cards/users/Userscards";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { Userschema } from "../../../../schemas/Users.Schema"
import { Iuser } from "../../../../interface/Iuser";
import Link from 'next/link'
import { getAllRoles } from "../../../../services/Roles";








const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [roles, setRoles] = useState([])



  //toggel modal code
  function openUserModal() {
    console.log("Open user Modal modal")
    setShowModal(true);
  }


  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Userschema) });
  const onSubmit: SubmitHandler<Iuser> = async (data) => {

    console.log("onsubmit method hitted", data);
  }

  const onError: SubmitHandler<Iuser> = async (error) => {

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



            <div className="border rounded-md p-2 text-white text-center bg-blue-600" onClick={openUserModal}>
              <Label>Add Roles</Label>

            </div>

          </div>
        </div>



      </div>


      <div className="bg-white rounded px-1">

          {roles.length>0 ? <Table data={roles}  /> : 'loading'}
        
      </div>


      {/* modal code Start from here */}
      <Modal showModal={showModal}>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
          <h1>Add Users</h1>
          <div className="flex space-x-4">
            <div>
              <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Name</Label>
              <Input  {...register("name")} />
              {errors?.["name"] && (
                <p className="text-xs text-red-500">{errors["name"].message}</p>
              )}
            </div>

            <div>
              <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email</Label>
              <Input  {...register("email")} />
              {errors?.["email"] && (
                <p className="text-xs text-red-500">{errors["email"].message}</p>
              )}
            </div>
          </div>


          <div className="flex space-x-4">
            <div>
              <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Passsword</Label>
              <Input  {...register("password")} />
              {errors?.["password"] && (
                <p className="text-xs text-red-500">{errors["password"].message}</p>
              )}
            </div>


            <div>
              <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Confirm Password</Label>
              <Input  {...register("password")} />
              {errors?.["password"] && (
                <p className="text-xs text-red-500">{errors["password"].message}</p>
              )}
            </div>



          </div>



          <div>
            <select className="w-full border p-2 rounded-md"  {...register("role")}>
              <option value={"doctor"}>Doctors</option>
              <option value={"receptionist"}>Receptionist</option>
              <option value={"accountant"}>Accountant</option>
              <option value={"nurses"}>Nurses</option>
            </select>
            {errors?.["role"] && (
              <p className="text-xs text-red-500">{errors["role"].message}</p>
            )}
          </div>


          <div>
            <select className="w-full border p-2 rounded-md"  {...register("status")}>
              <option value={"active"}>Active</option>
              <option value={"inactive"}>InActive</option>
            </select>
            {errors?.["status"] && (
              <p className="text-xs text-red-500">{errors["status"].message}</p>
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
