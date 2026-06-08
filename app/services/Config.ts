import { Axios } from "../libs/axios";
import { HospitalApi } from "../libs/axios";

// doctorstatus


//get allCountries api 
export async function getAllCountries() {
  const countries = Axios.get("/config")
    .then((res) => {
      return res.data.countries;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return countries;
}


//getAllDoctor api
export async function getAllDoctorStatus() {
  const doctorstatus = HospitalApi.get("/config/doctorstatus")
    .then((res) => {
      return res.data.doctorStatus;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return doctorstatus;
}


//get allPatient Api
export async function getAllPatientStatus() {
  const patientStatus = await HospitalApi.get("config/patientstatus")
    .then((res) => {
      return res.data.patientStatus;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return patientStatus;
}

//get allHoshpitalDepartment
export async function getHospitalDepartments() {
  const departments = HospitalApi.get("/config/getalldepartments")
    .then((res) => {
      return res.data.departments;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return departments;
}

//get allBloodGroup api
export async function getAllBloodGroup() {
  const bloodgroups = HospitalApi.get("/config/getallbloodgroup")
    .then((res) => {
      return res.data.bloodgroups;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return bloodgroups;
}


//get allAvailableTest api
export async function getAllAvailableTest() {
  const availabletest = HospitalApi.get("/config/availabletest")
    .then((res) => {
      return res.data.availabletests;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return availabletest;
}


//getAllModules api
export async function getAllModules() {
  const modules = HospitalApi.get("/config/getallmodules")
    .then((res) => {
      return res.data.modules;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return modules;
}


//get allSubModule api
export async function getAllSubModule() {
  const subModules = HospitalApi.get("/config/getallsubmodules")
    .then((res) => {
      return res.data.subModules;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return subModules;
}
