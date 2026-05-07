"use client";
import React, { useState } from "react";
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
import Exportbtn from "../../../../components/cutom/Exportbtn";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Link from 'next/link'








const page = () => {
  const [showModal, setShowModal] = useState(false);



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

  const data = [
    {
      "Name": "Manish Yadav",
      "Role": "Doctor",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": true,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },
     {
      "Name": "Rohan Yadav",
      "Role": "Accountant",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": false,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },

      {
      "Name": "Rohan Yadav",
      "Role": "Accountant",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": true,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },

      {
      "Name": "Rohan Yadav",
      "Role": "Accountant",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": false,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },
      {
      "Name": "Rohan Yadav",
      "Role": "Accountant",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": true,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },

      {
      "Name": "Rohan Yadav",
      "Role": "Accountant",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": false,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },
      {
      "Name": "Rohan Yadav",
      "Role": "Accountant",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": false,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },
      {
      "Name": "Rohan Yadav",
      "Role": "Accountant",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": false,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },
      {
      "Name": "Rohan Yadav",
      "Role": "Accountant",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": false,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },
      {
      "Name": "Rohan Yadav",
      "Role": "Accountant",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": false,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },
      {
      "Name": "Rohan Yadav",
      "Role": "Accountant",
      "Email": "manishkuyadav090@gmail",
      "isActive": true,
      "Verified": false,
      " ":<Link href={"/superAdmin/usersmanagement/permissions"}><div className="border w-fit px-6 py-1 flex space-x-4 items-center"><img src="/hrm_image/authentication.png" className="w-8 h-8"></img><span className="font-semibold">Permission</span></div></Link>

    },
    
  ]

  return (
    <div className="flex flex-col space-y-5">

      <Userscards />


      <div className="flex flex-col space-y-3">
        <div className="flex justify-between items-center border-b pb-4 border-gray-300">
          <span className="font-semibold text-xl">Users</span>

          <div className="flex space-x-4">
              <Exportbtn/>


            <div className="border rounded p-2 text-white flex justify-center items-center bg-[#14967f]  shadow" onClick={openUserModal}>
               <AddOutlinedIcon/>              
                <Label>Add User</Label>

            </div>

          </div>
        </div>


        <div className="flex justify-between space-x-4 ">

          <div className="flex space-x-6">
            <div>
              <Input type="text" placeholder="Search" className="w-96 h-9 bg-white rounded shadow" />
            </div>

            <Datepicker />

          </div>


          <div className="flex items-center space-x-4">

            <Filter />

            <div className="bg-white p-2 h-fit font-semibold shadow">
              <select >
                <option>Sort By:Recent</option>
                <option>Recent</option>
                <option>Oldest</option>
              </select>
            </div>

          </div>

        </div>

      </div>


      <div className="bg-white rounded px-1">

        <Table data={data} />
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
