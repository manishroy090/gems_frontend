"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getUser } from "@services/User";
import DoctorDetailsPage from "@/components/medinexus/userdetails/Doctordetails";
import NurseDetailsPage from "@/components/medinexus/userdetails/NurseDetailsPage";
import ReceptionistDetailsPage from "@/components/medinexus/userdetails/ReceptionistDetailsPage";
import PharmacistDetailsPage from "@/components/medinexus/userdetails/PharmacistDetailsPage";
import LabTechnicianDetailsPage from "@/components/medinexus/userdetails/LabTechnicianDetailsPage";
import AccountantDetailsPage from "@/components/medinexus/userdetails/AccountantDetailsPage";

const page = () => {
  interface Iuser {
    address_one: String
    address_two: String
    blood_group: String
    city: String
    country_id: String
    designation: String
    dob: String
    email: String
    email_verified_at: null;
    firstname: String;
    gender: String;
    id: String | Number;
    is_active:Boolean;
    lastname: String;
    phone_number:String
    pin_code:String;
    role: String;
    role_id: String | Number;
    state: String;
  }
  const params = useParams();
  const [user, setUser] = useState<Iuser>();

  useEffect(() => {
    const { user_id } = params;
    const getData = async () => {
      const user = await getUser(user_id);
      console.log("user", user);
      setUser(user);
    };
    getData();
  }, []);

  return (
    <div>
      {user?.role == "Doctor" && <DoctorDetailsPage></DoctorDetailsPage>}
      {user?.role == "Nurse" && <NurseDetailsPage></NurseDetailsPage>}
      {user?.role == "Receptionist" && (
        <ReceptionistDetailsPage></ReceptionistDetailsPage>
      )}
      {user?.role == "Pharmacist" && (
        <PharmacistDetailsPage></PharmacistDetailsPage>
      )}
      {user?.role == "Lab Technician" && (
        <LabTechnicianDetailsPage></LabTechnicianDetailsPage>
      )}
      {user?.role == "Accountant" && (
        <AccountantDetailsPage></AccountantDetailsPage>
      )}
    </div>
  );
};

export default page;
