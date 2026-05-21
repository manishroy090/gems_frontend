"use client";
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getUser } from '../../../../../../services/User';
import DoctorDetailsPage from '../../../../../../components/cutom/userdetails/Doctordetails';
import NurseDetailsPage from '../../../../../../components/cutom/userdetails/NurseDetailsPage';
import ReceptionistDetailsPage from '../../../../../../components/cutom/userdetails/ReceptionistDetailsPage';
import PharmacistDetailsPage from '../../../../../../components/cutom/userdetails/PharmacistDetailsPage';
import LabTechnicianDetailsPage from '../../../../../../components/cutom/userdetails/LabTechnicianDetailsPage';
import AccountantDetailsPage from '../../../../../../components/cutom/userdetails/AccountantDetailsPage';




const page = () => {

  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {

    const { user_id } = params;

    const getData = async () => {
      const user = await getUser(user_id);
      setUser(user);
    }


    getData();


  }, [])


  useEffect(() => {

    console.log(user?.role);

  }, [user])



  return (

    <div>
      {user?.role == "Doctor" && (<DoctorDetailsPage></DoctorDetailsPage>)}
      {user?.role == "Nurse" && (<NurseDetailsPage></NurseDetailsPage>)}
      {user?.role == "Receptionist" && (<ReceptionistDetailsPage></ReceptionistDetailsPage>)}
      {user?.role == "Pharmacist" && (<PharmacistDetailsPage></PharmacistDetailsPage>)}
      {user?.role == "Lab Technician" && (<LabTechnicianDetailsPage></LabTechnicianDetailsPage>)}
      {user?.role == "Accountant" && (<AccountantDetailsPage></AccountantDetailsPage>)}
    </div>


  )
};

export default page;
