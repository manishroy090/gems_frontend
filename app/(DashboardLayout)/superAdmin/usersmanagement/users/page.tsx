"use client";
import React, { useState } from "react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import DataTable from "../../../../components/utilities/data-table/DataTable";
import Modal from "../../../../components/ui/Modal";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";


const BCrumb = [
  {
    to: '/',
    title: 'UsersManagement',
  },
  {
    title: 'Roles',
  },
]

const EmployeesData = [
  {
    "name": {
      "text": "Alice Johnson",
      "image": "/images/profile/user-1.jpg"
    },
    "position": "Doctor",
    "salary": 120000,
    "department": "Engineering",
    "status": "Active",

  },
  {
    "name": {
      "text": "Bob Williams",
      "image": "/images/profile/user-2.jpg"
    },
    "position": "Nurse",
    "salary": 95000,
    "department": "Marketing",
    "status": "Active",

  },
  {
    "name": {
      "text": "Carol Davis",
      "image": "/images/profile/user-3.jpg"
    },
    "position": "Appointment scheduler",
    "salary": 70000,
    "department": "Human Resources",
    "status": "On Leave",


  },
  {
    "name": {
      "text": "David Brown",
      "image": "/images/profile/user-4.jpg"
    },
    "position": "Medical receptionist",
    "salary": 110000,
    "department": "Product Development",
    "status": "Active",

  },

]


const page = () => {
  const [showModal, setShowModal] = useState(false);



  function openUserModal() {
    console.log("Open user Modal modal")

    setShowModal(true);

  }

  return (
    <div className="flex flex-col space-y-14">


      <div className="grid grid-cols-4 gap-4">

        <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
          <span>Total Doctors</span>
          <div className=" h-14 w-14">
            <img src={"/hrm_image/doctor.png"} alt="logo" className="w-full" />
          </div>
        </div>

        <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
          <span>Total Doctors</span>
          <div className=" h-14 w-14">
            <img src={"/hrm_image/nurse.png"} alt="logo" className="w-full" />
          </div>
        </div>

        <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
          <span>Total Receptionist</span>
          <div className=" h-14 w-14">
            <img src={"/hrm_image/receptionist.png"} alt="logo" className="w-full" />
          </div>
        </div>


        <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
          <span>Accountant</span>
          <div className=" h-14 w-14">
            <img src={"/hrm_image/accountant.png"} alt="logo" className="w-full" />
          </div>
        </div>





      </div>


      <Modal showModal={showModal}>
        <form className="flex flex-col space-y-4">
          <h1>Add Users</h1>

          <div>
            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Name</Label>
            <Input />
          </div>

          <div>
            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email</Label>
            <Input />
          </div>



          <div>

            <select className="w-full border p-2 rounded-md">
              <option>Doctors</option>
              <option>Receptionist</option>
              <option>Accountant</option>
              <option>Nurses</option>
            </select>
          </div>


          <div>

            <select className="w-full border p-2 rounded-md">
              <option>Active</option>
              <option>InActive</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white p-2 rounded-md ">Cancle</button>
            <button className="bg-blue-600 text-white p-2 rounded-md">Submit</button>
          </div>

        </form>

      </Modal>


      <DataTable data={EmployeesData} title="Users" openUserModal={openUserModal} />
    </div>
  );
};

export default page;
