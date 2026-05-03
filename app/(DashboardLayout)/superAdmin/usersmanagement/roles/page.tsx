
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
      "text": "Doctors / Physicians",
      "image": "/images/profile/user-1.jpg"
    },
    "description": "this is a doctor role",
    "status": "Active",
    "created_at": "2082-03-04",
    "updated_at": "2082-03-05",
  },
  {
    "name": {
      "text": "Nurse",
      "image": "/images/profile/user-1.jpg"
    },
    "description": "this is a nurse role",
    "status": "Active",
    "created_at": "2082-03-04",
    "updated_at": "2082-03-05",
  },


  {
    "name": {
      "text": " Appointment scheduler",
      "image": "/images/profile/user-1.jpg"
    },
    "description": "this is a nurse role",
    "status": "Active",
    "created_at": "2082-03-04",
    "updated_at": "2082-03-05",
  },
  {
    "name": {
      "text": "Medical receptionist",
      "image": "/images/profile/user-1.jpg"
    },
    "description": "this is a nurse role",
    "status": "Active",
    "created_at": "2082-03-04",
    "updated_at": "2082-03-05",
  },

  {
    "name": {
      "text": "Medical receptionist",
      "image": "/images/profile/user-1.jpg"
    },
    "description": "this is a nurse role",
    "status": "Active",
    "created_at": "2082-03-04",
    "updated_at": "2082-03-05",
  },

  {
    "name": {
      "text": "Medical receptionist",
      "image": "/images/profile/user-1.jpg"
    },
    "description": "this is a nurse role",
    "status": "Active",
    "created_at": "2082-03-04",
    "updated_at": "2082-03-05",
  },

  {
    "name": {
      "text": "Medical receptionist",
      "image": "/images/profile/user-1.jpg"
    },
    "description": "this is a nurse role",
    "status": "Active",
    "created_at": "2082-03-04",
    "updated_at": "2082-03-05",
  },
  {
    "name": {
      "text": "Medical receptionist",
      "image": "/images/profile/user-1.jpg"
    },
    "description": "this is a nurse role",
    "status": "Active",
    "created_at": "2082-03-04",
    "updated_at": "2082-03-05",
  },

  {
    "name": {
      "text": "Medical receptionist",
      "image": "/images/profile/user-1.jpg"
    },
    "description": "this is a nurse role",
    "status": "Active",
    "created_at": "2082-03-04",
    "updated_at": "2082-03-05",
  },

  {
    "name": {
      "text": "Medical receptionist",
      "image": "/images/profile/user-1.jpg"
    },
    "description": "this is a nurse role",
    "status": "Active",
    "created_at": "2082-03-04",
    "updated_at": "2082-03-05",
  },



]

const page = () => {

    const [showModal, setShowModal] = useState(false);
  
  
  
    function openUserModal() {
      console.log("Open user Modal modal")
  
      setShowModal(true);
  
    }
  return (
    <>

      <div className="flex flex-col space-y-14">


        <div className="grid grid-cols-3 gap-4">

          <div className=" rounded-md p-8 shadow bg-white">
            <span>Total Roles</span>
          </div>


          <div className=" rounded-md p-8 shadow bg-white">
            <span>Total Roles</span>
          </div>



          <div className=" rounded-md p-8 shadow bg-white">
            <span>Total Roles</span>
          </div>
        </div>


      <Modal showModal={showModal}>
        <form className="flex flex-col space-y-4">
        <h1>Add Roles</h1>

          <div>
            <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Title</Label>
            <Input />
          </div>

          <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Descriptioniom</Label>
            <Textarea></Textarea>
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
\              <DataTable data={EmployeesData} title="Roles" openUserModal={openUserModal} />

      </div>
    </>
  );
};

export default page;
