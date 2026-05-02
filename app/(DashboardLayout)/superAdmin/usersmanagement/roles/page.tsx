
import React from "react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import DataTable from "../../../../components/utilities/data-table/DataTable";

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
  return (
    <>

     <div className="flex flex-col space-y-14">

    
      <div className="grid grid-cols-3 gap-4">

        <div className=" rounded-md p-8 shadow bg-slate-100">
          <span>Total Roles</span>
        </div>


       <div className=" rounded-md p-8 shadow bg-slate-100">
          <span>Total Roles</span>
        </div>



       <div className=" rounded-md p-8 shadow bg-slate-100">
          <span>Total Roles</span>
        </div>
      </div>
      <DataTable data={EmployeesData} title="Roles" />
       </div>
    </>
  );
};

export default page;
