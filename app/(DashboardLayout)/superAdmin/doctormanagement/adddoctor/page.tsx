"use client";

import React from "react";

import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import {
  useForm,
  useFieldArray,
  SubmitHandler,
} from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { IDoctor } from "../../../../interface/IDoctor";
import { Doctorschema } from "../../../../schemas/Doctor.schema";
import { createDoctor } from "../../../../services/Doctor";

const Page = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IDoctor>({
    resolver: yupResolver(Doctorschema),

    defaultValues: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      dob: "",
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
          start: "",
          end: "",
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

  // ================= FIELD ARRAYS =================

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

  // ================= SUBMIT =================

  const onSubmit: SubmitHandler<IDoctor> = async (data) => {
    console.log("FORM DATA", data);
    createDoctor(data)
  };

  const onError = (error: any) => {
    console.log("FORM ERROR", error);
  };

  return (
    <div className="bg-white p-8 rounded-xl">
      <h1 className="text-2xl font-semibold border-b pb-4">
        New Doctor
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="space-y-10 mt-8"
      >
        {/* ================= BASIC INFO ================= */}

        <div className="grid grid-cols-2 gap-5">
          {/* FIRST NAME */}
          <div className="flex flex-col space-y-2">
            <Label>First Name</Label>

            <Input {...register("firstname")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.firstname?.message}
            </p>
          </div>

          {/* LAST NAME */}
          <div className="flex flex-col space-y-2">
            <Label>Last Name</Label>

            <Input {...register("lastname")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.lastname?.message}
            </p>
          </div>

          {/* PHONE */}
          <div className="flex flex-col space-y-2">
            <Label>Phone Number</Label>

            <Input {...register("phonenumber")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.phonenumber?.message}
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col space-y-2">
            <Label>Email</Label>

            <Input {...register("email")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.email?.message}
            </p>
          </div>

          {/* DOB */}
          <div className="flex flex-col space-y-2">
            <Label>DOB</Label>

            <Input type="date" {...register("dob")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.dob?.message}
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="flex flex-col space-y-2">
            <Label>Experience</Label>

            <Input {...register("year_of_experience")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.year_of_experience?.message}
            </p>
          </div>

          {/* DEPARTMENT */}
          <div className="flex flex-col space-y-2">
            <Label>Department</Label>

            <Input {...register("department_id")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.department_id?.message}
            </p>
          </div>

          {/* DESIGNATION */}
          <div className="flex flex-col space-y-2">
            <Label>Designation</Label>

            <Input {...register("designation")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.designation?.message}
            </p>
          </div>

          {/* LICENSE */}
          <div className="flex flex-col space-y-2">
            <Label>Medical License Number</Label>

            <Input {...register("medical_licese_number")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.medical_licese_number?.message}
            </p>
          </div>

          {/* LANGUAGE */}
          <div className="flex flex-col space-y-2">
            <Label>Language Spoken</Label>

            <Input {...register("language_spoken")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.language_spoken?.message}
            </p>
          </div>

          {/* BLOOD GROUP */}
          <div className="flex flex-col space-y-2">
            <Label>Blood Group</Label>

            <Input {...register("blood_group")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.blood_group?.message}
            </p>
          </div>

          {/* GENDER */}
          <div className="flex flex-col space-y-2">
            <Label>Gender</Label>

            <Input {...register("gender")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.gender?.message}
            </p>
          </div>

          {/* BIO */}
          <div className="col-span-2">
            <Label>Bio</Label>

            <Textarea {...register("bio")} />

            <p className="text-xs text-red-500 mt-1">
              {errors.bio?.message}
            </p>
          </div>
        </div>

        {/* ================= SESSION INFO ================= */}

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Session Information
            </h2>

            <button
              type="button"
              onClick={() =>
                appendSession({
                  day: "",
                  start: "",
                  end: "",
                  patients: "",
                })
              }
              className="border px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <AddIcon className="!text-sm" />
              Add Row
            </button>
          </div>

          <div className="space-y-4">
            {sessionFields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-5 gap-4 border rounded-xl p-4"
              >
                {/* DAY */}
                <div className="flex flex-col space-y-2">
                  <Label>Day</Label>

                  <select
                    {...register(`sessions.${index}.day`)}
                    className="w-full border rounded-md h-10 px-3"
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

                {/* START */}
                <div className="flex flex-col space-y-2">
                  <Label>Start</Label>

                  <Input
                    type="time"
                    {...register(`sessions.${index}.start`)}
                  />

                  <p className="text-xs text-red-500 mt-1">
                    {errors.sessions?.[index]?.start?.message}
                  </p>
                </div>

                {/* END */}
                <div className="flex flex-col space-y-2">
                  <Label>End</Label>

                  <Input
                    type="time"
                    {...register(`sessions.${index}.end`)}
                  />

                  <p className="text-xs text-red-500 mt-1">
                    {errors.sessions?.[index]?.end?.message}
                  </p>
                </div>

                {/* PATIENTS */}
                <div className="flex flex-col space-y-2">
                  <Label>Patients</Label>

                  <Input
                    type="number"
                    {...register(`sessions.${index}.patients`)}
                  />

                  <p className="text-xs text-red-500 mt-1">
                    {errors.sessions?.[index]?.patients?.message}
                  </p>
                </div>

                {/* DELETE */}
                <div className="flex items-end">
                  {index !== 0 && (
                    <button
                      type="button"
                      onClick={() => removeSession(index)}
                      className="border rounded-lg h-10 w-10 flex items-center justify-center"
                    >
                      <DeleteIcon />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EDUCATION ================= */}

        <DynamicSection
          title="Education Information"
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
        />

        {/* ================= AWARDS ================= */}

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
        />

        {/* ================= CERTIFICATIONS ================= */}

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
        />

        {/* ================= BUTTONS ================= */}

        <div className="flex gap-4">
          <button
            type="button"
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="border px-5 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;

// ================= REUSABLE COMPONENT =================

const DynamicSection = ({
  title,
  fields,
  append,
  remove,
  register,
  errors,
  type,
}: any) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>

        <button
          type="button"
          onClick={append}
          className="border px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <AddIcon className="!text-sm" />
          Add Row
        </button>
      </div>

      <div className="space-y-4">
        {fields.map((field: any, index: number) => (
          <div
            key={field.id}
            className="grid grid-cols-3 gap-4 border rounded-xl p-4"
          >
            {type === "education" ? (
              <>
                <div className="flex flex-col space-y-2">
                  <Label>Degree</Label>
                  <Input
                    placeholder="Degree"
                    {...register(`educations.${index}.degree`)}
                  />

                  <p className="text-xs text-red-500 mt-1">
                    {errors?.[index]?.degree?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <Label>University</Label>
                  <Input
                    placeholder="University"
                    {...register(`educations.${index}.university`)}
                  />

                  <p className="text-xs text-red-500 mt-1">
                    {errors?.[index]?.university?.message}
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    {...register(`educations.${index}.from`)}
                  />

                  <p className="text-xs text-red-500 mt-1">
                    {errors?.[index]?.from?.message}
                  </p>
                </div>

               <div className="flex flex-col space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    {...register(`educations.${index}.to`)}
                  />

                  <p className="text-xs text-red-500 mt-1">
                    {errors?.[index]?.to?.message}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Input
                    placeholder="Name"
                    {...register(`${type}s.${index}.name`)}
                  />

                  <p className="text-xs text-red-500 mt-1">
                    {errors?.[index]?.name?.message}
                  </p>
                </div>

                <div>
                  <Input
                   type="date"
                    placeholder="From"
                    {...register(`${type}s.${index}.from`)}
                  />

                  <p className="text-xs text-red-500 mt-1">
                    {errors?.[index]?.from?.message}
                  </p>
                </div>
              </>
            )}

            <div className="flex items-end">
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="border rounded-lg h-10 w-10 flex items-center justify-center"
                >
                  <DeleteIcon />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};