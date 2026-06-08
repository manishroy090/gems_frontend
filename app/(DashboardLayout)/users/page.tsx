"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/medinexus/Modal";
import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import Datepicker from "@/components/medinexus/Datepicker";
import Filter from "@/components/medinexus/Filter";
import Table from "@/components/medinexus/Table";
import Userscards from "@/components/medinexus/cards/users/Userscards";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Userschema } from "@schemas/Users.Schema";
import { Iuser } from "@interface/Iuser";
import Exportbtn from "@/components/medinexus/Exportbtn";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { getUsers } from "@services/User";
import SortBy from "@/components/medinexus/SortBy";
import ProfilePictureUpload from "@/components/medinexus/ProfilePictureUpload";
import { getAllCountries } from "@services/Config";
import { getAllBloodGroup } from "@services/Config";
import { getAllRoles } from "@services/Roles";
import { createUser } from "@services/User";
import { useRouter } from "next/navigation";
import { getUser, updateUser, deleteUserById } from "@services/User";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';


interface Iuse {
  address_one: string;
  address_two: string;
  blood_group: string;
  city: string;
  country_id: string | number;
  designation: string;
  dob: string | number | Date;
  email: string;
  email_verified_at: null;
  firstname: string;
  gender: string;
  id: number | string;
  is_active: boolean;
  lastname: string;
  phone_number: string | number;
  pin_code: string;
  role: string | number;
  role_id: number | string;
  state: string;
}

const page = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [bloodgroups, setBloodgroups] = useState([]);
  const [roles, setRole] = useState([]);
  const [user, setUser] = useState<Iuse | null>(null);
  const [isDeleted, setIsDeleted] = useState(false);

  //toggel modal code
  function openUserModal() {
    setShowModal(true);
  }

  //form submission code
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Userschema) });

  const onSubmit: SubmitHandler<Iuser> = async (data) => {
    const userExists = user && Object.keys(user).length > 0;
    if (userExists && user) {
      console.log("user", user);
      await updateUser(user.id, data);
    } else {
      //  setShowModal(true);
      createUser(data);
    }
  };

  //form submission fail fallback

  const onError = async (error: any) => {
    console.log("error", error);
  };

  // called on first render
  useEffect(() => {
    const getAllData = async () => {
      const result = await getUsers();
      const countries = await getAllCountries();
      const bloodgroup = await getAllBloodGroup();
      const roles = await getAllRoles();
      // console.log("result", result.length);
      setUsers(result);
      setCountries(countries);
      setBloodgroups(bloodgroup);
      setRole(roles);
    };
    getAllData();
    setIsDeleted(false);
  }, [isDeleted]);

  //call on edit
  const edit = async (userId: String | Number) => {
    const user = await getUser(userId);
    setUser(user);
    setShowModal(true);
    reset({
      first_name: user.firstname,
      last_name: user.lastname,
      role_id: user.role_id,
      designation: user.designation,
      phone_number: user.phone_number,
      email: user.email,
      dob: user.dob?.split("T")[0],
      gender: user.gender,
      bloodgroup: user.blood_group,
      country: user.country_id,
      state: user.state,
      city: user.city,
      address_1: user.address_one,
      address_2: user.address_two,
      pinecode: user.pin_code,
    });
  };

  //call on delete
  const deleteUser = async (userId: String | Number) => {
    deleteUserById(userId);
    setIsDeleted(true);
  };

  return (
    <div className="flex flex-col space-y-5">
      <Userscards />

      <div className="flex flex-col space-y-3">
        <div className="flex justify-between items-center border-b pb-4 border-gray-300">
          <span className="font-semibold text-xl">Users</span>

          <div className="flex space-x-4">
            <Exportbtn />

            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#14967f] text-white border border-[#14967f]
             shadow-sm hover:shadow-md transition cursor-pointer select-none"
              onClick={openUserModal}
            >
              <AddOutlinedIcon fontSize="small" />
              <span className="text-sm font-medium leading-none">Add User</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between space-x-4 ">
          <div className="flex space-x-6">
            <div>
              <Input
                type="text"
                placeholder="Search"
                className="w-96 h-9 bg-white rounded shadow"
              />
            </div>

            <Datepicker />
          </div>

          <div className="flex items-center space-x-4">
            <Filter />

            <SortBy />
          </div>
        </div>
      </div>

      <div className="bg-white rounded px-1">
        <Table
          data={users}
          showaction={true}
          actionlist={[
            {
              label: "View",
              icon: <VisibilityIcon className="text-blue-600"/>,
              href: (item) => `/users/view/${item.id}`,
            },

            {
              label: "Edit",
              icon: <ModeIcon className="text-yellow-600"/>,
              onClick: (item) => edit(item.id),
            },

            {
              label: "Delete",
              icon: <DeleteIcon className="text-red-600"/>,
              confirm: true,
              onClick: (item) => deleteUser(item.id),
            },
          ]}
          columns={[
            { title: "First Name" },
            { title: "last Name" },
            { title: "Title" },
            { title: "Email" },
            { title: "Status" },
            { title: "Verified" },
          ]}
        />
      </div>

      {/* modal code Start from here */}
      <Modal
        showModal={showModal}
        className="w-[60rem] rounded-2xl overflow-hidden shadow-2xl mt-8"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4">
          <h2 className="text-white text-lg font-semibold tracking-wide">
            {user && Object.keys(user).length > 0 ? "Update" : "Add"} Staff
          </h2>
          <p className="text-white/80 text-xs mt-1">
            Fill in the details to create a new staff profile
          </p>
        </div>

        {/* Form */}
        <form
          className="flex flex-col space-y-8 bg-white p-8"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          {/* Profile */}
          <div className="flex justify-center">
            <ProfilePictureUpload />
          </div>

          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider border-b pb-2">
              Basic Information
            </h3>

            <div className="grid grid-cols-12 gap-4 mt-2">
              <div className="col-span-4">
                <Label>First Name</Label>
                <Input {...register("first_name")} />
                {errors?.["first_name"] && (
                  <p className="text-xs text-red-500">
                    {errors["first_name"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>Last Name</Label>
                <Input {...register("last_name")} />
                {errors?.["last_name"] && (
                  <p className="text-xs text-red-500">
                    {errors["last_name"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>Role</Label>
                <select
                  {...register("role_id")}
                  className="w-full border rounded-md h-10 px-3"
                >
                  <option value="">Select Role</option>
                  {roles?.map((role: any) => (
                    <option key={role.id} value={role.id}>
                      {role.title}
                    </option>
                  ))}
                </select>
                {errors?.["role_id"] && (
                  <p className="text-xs text-red-500">
                    {errors["role_id"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>Designation</Label>
                <Input {...register("designation")} />
                {errors?.["designation"] && (
                  <p className="text-xs text-red-500">
                    {errors["designation"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>Phone Number</Label>
                <Input {...register("phone_number")} />
                {errors?.["phone_number"] && (
                  <p className="text-xs text-red-500">
                    {errors["phone_number"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>Email</Label>
                <Input {...register("email")} />
                {errors?.["email"] && (
                  <p className="text-xs text-red-500">
                    {errors["email"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>DOB</Label>
                <Input type="date" {...register("dob")} />
                {errors?.["dob"] && (
                  <p className="text-xs text-red-500">
                    {errors["dob"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>Gender</Label>
                <select
                  {...register("gender")}
                  className="w-full border rounded-md h-10 px-3"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors?.["gender"] && (
                  <p className="text-xs text-red-500">
                    {errors["gender"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>Blood Group</Label>
                <select
                  {...register("bloodgroup")}
                  className="w-full border rounded-md h-10 px-3"
                >
                  <option value="">Select Bloodgroup</option>
                  {bloodgroups?.map((bloodgroup: any) => (
                    <option key={bloodgroup.id} value={bloodgroup.id}>
                      {bloodgroup.title}
                    </option>
                  ))}
                </select>

                {errors?.["bloodgroup"] && (
                  <p className="text-xs text-red-500">
                    {errors["bloodgroup"].message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider border-b pb-2">
              Address Information
            </h3>

            <div className="grid grid-cols-12 gap-4 mt-2">
              <div className="col-span-4">
                <Label>Country</Label>
                <select
                  {...register("country")}
                  className="w-full border rounded-md h-10 px-3"
                >
                  <option value="">Select Country</option>
                  {countries?.map((country: any) => (
                    <option key={country.id} value={country.id}>
                      {country.title}
                    </option>
                  ))}
                </select>
                {errors?.["country"] && (
                  <p className="text-xs text-red-500">
                    {errors["country"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>State</Label>
                <Input {...register("state")} />
                {errors?.["state"] && (
                  <p className="text-xs text-red-500">
                    {errors["state"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>City</Label>
                <Input {...register("city")} />
                {errors?.["city"] && (
                  <p className="text-xs text-red-500">
                    {errors["city"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>Address 1</Label>
                <Input {...register("address_1")} />
                {errors?.["address_1"] && (
                  <p className="text-xs text-red-500">
                    {errors["address_1"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>Address 2</Label>
                <Input {...register("address_2")} />
                {errors?.["address_2"] && (
                  <p className="text-xs text-red-500">
                    {errors["address_2"].message}
                  </p>
                )}
              </div>

              <div className="col-span-4">
                <Label>Pincode</Label>
                <Input {...register("pinecode")} />
                {errors?.["pinecode"] && (
                  <p className="text-xs text-red-500">
                    {errors["pinecode"].message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#14967f] text-white font-medium hover:opacity-90 shadow-md transition"
            >
              {user && Object.keys(user).length > 0 ? "Update" : "Save"} Staff
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default page;
