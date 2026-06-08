"use client";

import  { useEffect, useState } from "react"; import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import { Textarea } from "@/components/medinexus/textarea";
import { CirclePlus } from 'lucide-react';
import ProfilePictureUpload from "@/components/medinexus/ProfilePictureUpload";
import { useForm, SubmitHandler, useFieldArray, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { IDoctor,IEducation,IAward,ICertification} from "@interface/IDoctor";
import { Doctorschema } from "@schemas/Doctor.schema";
import { getHospitalDepartments, getAllCountries, getAllBloodGroup } from "@services/Config";
import Addbtn from "@/components/medinexus/Addbtn";
import Cancelbtn from "@/components/medinexus/Cancelbtn";
import CustomDatePicker from "@/components/medinexus/CustomDatePicker";
import TimePicker from "@/components/medinexus/TimePicker";
import { getAllDoctorStatus } from "@services/Config";
import { createDoctor, getDoctor, updateDoctor } from "@services/Doctor";
import { useSearchParams } from "next/navigation";
import { Printer } from 'lucide-react';




const page = () => {

  const [departments, setDepartments] = useState([]);
  const [countries, setCountries] = useState([]);
  const [bloodgroups, setBloodgroups] = useState([]);
  const [doctorStatus, setDoctorStatus] = useState([]);
  const [doctorId, setDoctorId] = useState<String | Number | null>(null);
  const [doctorImage, setDoctorImage] = useState();
  const params = useSearchParams();

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IDoctor>({
    resolver: yupResolver(Doctorschema),
    defaultValues: {
      image: "",
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      dob: "",
      feature_on_website: false,
      year_of_experience: "",
      department_id: "",
      designation: "",
      medical_licese_number: "",
      language_spoken: "",
      blood_group: "",
      gender: "",
      bio: "",

      sessions: [
        {
          day: "",
          start_time: "",
          end_time: "",
          patients: "",
        },
      ],

      educations: [
        {
          degree: "",
          university: "",
          from: "",
          to: "",
        },
      ],

      awards: [
        {
          name: "",
          from: "",
        },
      ],

      certifications: [
        {
          name: "",
          from: "",
        },
      ],
    },
  });


  const {
    fields: sessionFields,
    append: appendSession,
    remove: removeSession,
  } = useFieldArray({
    control,
    name: "sessions",
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "educations",
  });

  const {
    fields: awardFields,
    append: appendAward,
    remove: removeAward,
  } = useFieldArray({
    control,
    name: "awards",
  });

  const {
    fields: certificationFields,
    append: appendCertification,
    remove: removeCertification,
  } = useFieldArray({
    control,
    name: "certifications",
  });


  useEffect(() => {
    const doctorId:String | Number | null = params.get('doctor_id');


    if (doctorId !== null) {
      setDoctorId(doctorId);
      const getDoctorDetails = async () => {
        const result = await getDoctor(doctorId);

        const dob = new Date(result.dob).toISOString();
        const education = result.education.map((item:IEducation) => ({id:item.id, degree: item.degree, from: new Date(item.from).toISOString(), to: new Date(item.to).toISOString(), university: item.university }))
        const awards = result.award.map((item:IAward) => ({ id: item.id, name: item.name, from: new Date(item.from).toISOString() }))
        const certification = result.certification.map((item:ICertification) => ({ id: item.id, name: item.name, from: new Date(item.from).toISOString() }))

        console.log("educt", education);
        setDoctorImage(result.image)
        reset({
          firstname: result.firstname,
          lastname: result.lastname,
          phonenumber: result.phone_number,
          email: result.email,
          dob: dob,
          year_of_experience: result.year_of_exp,
          department_id: String(result.department_id),
          designation: result.designation,
          medical_licese_number: result.medical_license_number,
          language_spoken: result.language_spoken,
          blood_group: String(result.blood_group),
          gender: result.gender,
          fee: result.fees,
          status: result.status_id,
          feature_on_website: result.feature_on_website,
          bio: result.bio,
          country_id: String(result.country_id),
          state: result.state,
          city: result.city,
          address: result.address_one,
          address_2: result.address_two,
          pin_code: result.pin_code,
          sessions: result.doctor_sessions,
          educations: education,
          awards: awards,
          certifications: certification
        })
      }
      getDoctorDetails();
    }

  }, [departments, bloodgroups, countries])



  const onSubmit: SubmitHandler<IDoctor> = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {


      if (key == "dob") {
        console.log(value);
        value = new Date(value).toISOString();
      }

      if (Array.isArray(value)) {
        if (key == "educations") {
          value = value.map((item) => ({ id: item.id, degree: item.degree, from: new Date(item.from).toISOString(), to: new Date(item.to).toISOString(), university: item.university }));
        }
        if (key == "awards" || key == "certifications") {
          value = value.map((item:ICertification | IAward) => ({ id: item.id, name: item.name, from: new Date(item.from).toISOString() }));

        }

        formData.append(key, JSON.stringify(value));
      }

      else if (value instanceof File) {
        formData.append(key, value);
      }

      else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    // DEBUG (correct way)
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    if (doctorId) {
      updateDoctor(doctorId, formData)
    }
    else {

      await createDoctor(formData);
    }
  };

  const onError = (error: any) => {
    console.log("FORM ERROR", error);
  };

  useEffect(() => {

    const callMasterData = async () => {
      const getAllDepartment = await getHospitalDepartments();
      const Countries = await getAllCountries();
      const bloodgroup = await getAllBloodGroup();
      const doctorStatus = await getAllDoctorStatus();

      setBloodgroups(bloodgroup);
      setDepartments(getAllDepartment);
      setCountries(Countries);
      setDoctorStatus(doctorStatus);

    }
    callMasterData();
  }, [])




  return (
    <>
      <div className="bg-white  pb-8 w-full h-fit">
        <form onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 flex justify-between">

            <div>


              <h2 className="text-white text-lg font-semibold tracking-wide">
                {doctorId ? "Update" : "Add"} Doctor
              </h2>
              <p className="text-white/80 text-xs mt-1">
                Fill in the details to create a new Doctor profile
              </p>
            </div>
            <div className="flex items-center justify-center  px-2 bg-yellow-200 rounded">

              <Printer />
            </div>
          </div>



          <div className="grid grid-cols-5 gap-4 p-4">
            <div className="col-span-5 flex flex-col items-center justify-center">
              <ProfilePictureUpload setValue={setValue} register={register("image")} imaged={doctorImage} />
              <p className="text-xs text-red-500 mt-1">
                {errors.image?.message}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <Label>First Name</Label>

              <Input {...register("firstname")} />

              <p className="text-xs text-red-500 mt-1">
                {errors.firstname?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Last Name</Label>

              <Input {...register("lastname")} />

              <p className="text-xs text-red-500 mt-1">
                {errors.lastname?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Phone Number</Label>
              <Input {...register("phonenumber")} />
              <p className="text-xs text-red-500 mt-1">
                {errors.phonenumber?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Email</Label>
              <Input  {...register("email")} />
              <p className="text-xs text-red-500 mt-1">
                {errors.email?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Dob</Label>

              <Controller
                name="dob"
                control={control}
                render={({ field }) => (
                  <CustomDatePicker
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.dob?.message}
                  />
                )}
              />

            </div>

            <div className="flex flex-col space-y-2">
              <Label>Experience</Label>
              <Input  {...register("year_of_experience")} type="number" />
              <p className="text-xs text-red-500 mt-1">
                {errors.year_of_experience?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Department</Label>
              <select
                {...register("department_id")}
                className="w-full border rounded-md h-10 px-3"
              >
                <option value="">Select Department</option>

                {departments?.map((item: any) => (
                  <option key={item.id} value={item.id}>{item.title}</option>
                ))}


              </select>

              <p className="text-xs text-red-500 mt-1">
                {errors.department_id?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Designation</Label>
              <Input  {...register("designation")} />
              <p className="text-xs text-red-500 mt-1">
                {errors.designation?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Medical License Number</Label>
              <Input {...register("medical_licese_number")} />
              <p className="text-xs text-red-500 mt-1">
                {errors.medical_licese_number?.message}
              </p>
            </div>


            <div className="flex flex-col space-y-2">
              <Label>Language Spoken</Label>
              <Input  {...register("language_spoken")} />
              <p className="text-xs text-red-500 mt-1">
                {errors.language_spoken?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Blood Group</Label>
              <select
                {...register("blood_group")}
                className="w-full border rounded-md h-10 px-3"
              >
                <option value="">Select Bloodgroup</option>
                {bloodgroups?.map((bloodgroup: any) => (
                  <option key={bloodgroup.id} value={bloodgroup.id}>{bloodgroup.title}</option>
                ))}

              </select>

              <p className="text-xs text-red-500 mt-1">
                {errors.blood_group?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Gender</Label>

              <select
                {...register("gender")}
                className="w-full border rounded-md h-10 px-3"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>

              </select>

              <p className="text-xs text-red-500 mt-1">
                {errors.gender?.message}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Fee</Label>
              <Input  {...register("fee")} />
              <p className="text-xs text-red-500 mt-1">
                {errors.fee?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Status</Label>
              <select
                {...register("status")}
                className="w-full border rounded-md h-10 px-3"
              >
                <option value="">Select Status</option>
                {doctorStatus?.map((status: any) => (
                  <option key={status.id} value={status.id}>{status.title}</option>
                ))}

              </select>
              <p className="text-xs text-red-500 mt-1">
                {errors.status?.message}
              </p>
            </div>

            <div className="flex  space-x-4">
              <Label>Features onWebsite</Label>

              <input type="checkbox" checked={watch("feature_on_website") === true} {...register("feature_on_website")} />

              <p className="text-xs text-red-500 mt-1">
                {errors.status?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2 col-span-5">
              <Label>Bio</Label>
              <Textarea  {...register("bio")} />
              <p className="text-xs text-red-500 mt-1">
                {errors.bio?.message}
              </p>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold">Address Information</h2>
            <div className="grid grid-cols-4 gap-4 p-4">
              <div className="flex flex-col space-y-2">
                <Label>Country</Label>

                <select
                  {...register("country_id")}
                  className="w-full border rounded-md h-10 px-3"
                >
                  <option value="">Select Country</option>


                  {countries?.map((country: any) => (
                    <option key={country.id} value={country.id}>{country.title}</option>
                  ))}


                </select>
                <p className="text-xs text-red-500 mt-1">
                  {errors.country_id?.message}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <Label>State</Label>

                <Input {...register("state")} />

                <p className="text-xs text-red-500 mt-1">
                  {errors.state?.message}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <Label>City</Label>

                <Input {...register("city")} />

                <p className="text-xs text-red-500 mt-1">
                  {errors.city?.message}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <Label>Address</Label>

                <Input  {...register("address")} />

                <p className="text-xs text-red-500 mt-1">
                  {errors.address?.message}

                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <Label>Address 2</Label>

                <Input {...register("address_2")} />

                <p className="text-xs text-red-500 mt-1">
                  {errors.address_2?.message}

                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <Label>Pinecode</Label>

                <Input {...register("pin_code")} />

                <p className="text-xs text-red-500 mt-1">
                  {errors.pin_code?.message}

                </p>
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Session Information</h2>

              <button type="button" onClick={() =>
                appendSession({
                  day: "",
                  start_time: "",
                  end_time: "",
                  patients: "",
                })
              } className="bg-[#12b886] p-2 text-white rounded-full hover:scale-105 transition">
                <CirclePlus size={18} />
              </button>
            </div>

            <div>
              {sessionFields.map((field, index) => (

                <div className="grid grid-cols-4 gap-4 p-4 border" key={index}>
                  <div className="flex flex-col space-y-2">
                    <Label>Day</Label>

                    <select
                      {...register(`sessions.${index}.day`)} className="w-full border rounded-md h-10 px-3"
                    >
                      <option value="">Select Day</option>

                      <option>Sunday</option>
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                    </select>

                    <p className="text-xs text-red-500 mt-1">
                      {errors.sessions?.[index]?.day?.message}
                    </p>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label>Start</Label>


                    <Controller
                      name={`sessions.${index}.start_time`}
                      control={control}
                      render={({ field }) => (
                        <TimePicker
                          value={field.value}
                          onChange={field.onChange}
                          error={errors.sessions?.[index]?.start_time?.message}
                          placeholder="Select meeting time"
                        />
                      )}
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label>End</Label>
                    <Controller
                      name={`sessions.${index}.end_time`}
                      control={control}
                      render={({ field }) => (
                        <TimePicker
                          value={field.value}
                          onChange={field.onChange}
                          error={errors.sessions?.[index]?.end_time?.message}
                          placeholder="Select meeting time"
                        />
                      )}
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label>patients</Label>

                    <Input type="number"                  {...register(`sessions.${index}.patients`)}
                    />

                    <p className="text-xs text-red-500 mt-1">
                      {errors.sessions?.[index]?.patients?.message}

                    </p>
                  </div>
                </div>
              ))}

            </div>

            <DynamicSection title="Education Information"
              fields={educationFields}
              append={() =>
                appendEducation({
                  degree: "",
                  university: "",
                  from: "",
                  to: "",
                })
              }
              remove={removeEducation}
              register={register}
              errors={errors.educations}
              type="education"
              control={control}
            />

            <DynamicSection
              title="Awards & Recognition"
              fields={awardFields}
              append={() =>
                appendAward({
                  name: "",
                  from: "",
                })
              }
              remove={removeAward}
              register={register}
              errors={errors.awards}
              type="award"
              control={control}
            />


            <DynamicSection
              title="Certifications"
              fields={certificationFields}
              append={() =>
                appendCertification({
                  name: "",
                  from: "",
                })
              }
              remove={removeCertification}
              register={register}
              errors={errors.certifications}
              type="certification"
              control={control}
            />


          </div>


          <div className="flex  place-content-end pr-10 space-x-4">
            <Cancelbtn label="Cancel" />
            <Addbtn label={doctorId ? "Update" : "Submit"} />
          </div>
        </form>

      </div>
    </>
  );
};

export default page;


const DynamicSection = ({
  title,
  fields,
  append,
  remove,
  register,
  errors,
  type,
  control
}: any) => {

  return (
    <div className=" flex flex-col space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>

        <button type="button" onClick={append} className="bg-[#12b886] p-2 text-white rounded-full hover:scale-105 transition">
          <CirclePlus size={18} />
        </button>
      </div>
      {fields.map((field: any, index: number) => (

        <div key={index}>
          {type === "education" ? (
            <>

              <div className="grid grid-cols-4 gap-4 p-4 border">


                <div className="flex flex-col space-y-2">
                  <Label>Degree</Label>

                  <Input    {...register(`educations.${index}.degree`)} />

                  <p className="text-xs text-red-500 mt-1">
                    {errors?.[index]?.degree?.message}

                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <Label>University</Label>

                  <Input     {...register(`educations.${index}.university`)} />

                  <p className="text-xs text-red-500 mt-1">
                    {errors?.[index]?.university?.message}


                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <Label>Start Date</Label>


                  <Controller
                    name={`educations.${index}.from`}
                    control={control}
                    render={({ field }) => (
                      <CustomDatePicker
                        value={field.value}
                        onChange={field.onChange}
                        error={errors?.[index]?.from?.message}
                      />
                    )}
                  />


                </div>

                <div className="flex flex-col space-y-2">
                  <Label>End Date</Label>

                  <Controller
                    name={`${type}s.${index}.to`}
                    control={control}
                    render={({ field }) => (
                      <CustomDatePicker
                        value={field.value}
                        onChange={field.onChange}
                        error={errors?.[index]?.to?.message}
                      />
                    )}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 flex flex-col space-y-4">

                <div className="grid grid-cols-4 gap-4 p-4 border">


                  <div className="flex flex-col space-y-2">
                    <Label>Title</Label>

                    <Input                     {...register(`${type}s.${index}.name`)}
                    />

                    <p className="text-xs text-red-500 mt-1">
                      {errors?.[index]?.name?.message}

                    </p>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label>Date</Label>


                    <Controller
                      name={`${type}s.${index}.from`}
                      control={control}
                      render={({ field }) => (
                        <CustomDatePicker
                          value={field.value}
                          onChange={field.onChange}
                          error={errors?.[index]?.from?.message}
                        />
                      )}
                    />
                  </div>


                </div>


              </div>
            </>
          )}
        </div>
      ))}
    </div>

  )
}
