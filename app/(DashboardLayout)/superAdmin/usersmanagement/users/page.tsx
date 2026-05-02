
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
  return (
        <div className="flex flex-col space-y-14">

    
      <div className="grid grid-cols-3 gap-4">

        <div className=" rounded-md p-8 shadow bg-slate-100">
          <span>Total Doctors</span>
        </div>


       <div className=" rounded-md p-8 shadow bg-slate-100">
          <span>Total Nurses</span>
        </div>



       <div className=" rounded-md p-8 shadow bg-slate-100">
          <span>Appointment schedule</span>
        </div>
      </div>
      <DataTable data={EmployeesData} title="Roles" />
       </div>
  );
};

export default page;
