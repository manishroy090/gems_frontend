'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useEffect, useState } from "react";
import "dotenv/config"
import Axios from "../../libs/axios";
import { hoshpitalRegister } from "../../services/Auth";
import { getAllCountries } from "../../services/Config";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { Registerschema } from "../../schemas/Register.schema";
import { Ionboarding } from "../../interface/Ionboarding";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation'





export const Register = () => {
    const router = useRouter()
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    
    
  };
  const [countries, setCountries] = useState();




  //countries api call
  useEffect(() => {
    const AllCountries = async () => {
      try {
        const countries = await getAllCountries();
        setCountries(countries);
      } catch (error) {
        console.log('error', error);
      }

    }
    AllCountries();
  }, []);





  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Registerschema) });


  const onSubmit: SubmitHandler<Ionboarding> = async(data) => {
    const res = await hoshpitalRegister(data);
    const {success} = res.data;
     if(success){
      router.push('/')
    }



  }







  return (
    <div className="flex h-screen">
      <Toaster />

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="w-[80%]">
          <Slider {...settings}>
            {[
              "Hospital building-rafiki.png",
              "Doctor-rafiki.png",
              "Hospital room-rafiki.png",
              "Mammography-rafiki.png",
              "Medical care-rafiki.png"
            ].map((img, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={`/vector/${img}`}
                  className="w-[90%] mx-auto drop-shadow-lg"
                />
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Smart healthcare management system
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* RIGHT SIDE */}
      {/* RIGHT SIDE — Scrollable form */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-2xl mx-auto px-8 py-12">

          {/* Mobile logo */}
          <p className="lg:hidden text-blue-600 font-bold text-lg mb-6">MediCare</p>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Create Account</h1>
            <p className="text-gray-400 text-sm mt-1">Register your organization to get started</p>
          </div>

          <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>

            {/* BASIC INFO */}
            <Section title="Account Credentials" icon="🔐">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Hoshpital Name" placeholder="Green Valley Hospital" name="name" register={register}  errors={errors} />
                <Field label="Email" type="email" placeholder="example@email.com" name="email" register={register}   errors={errors}/>
                <Field label="Password" type="password" placeholder="••••••••" name="password" register={register}   errors={errors}/>
                <Field label="Confirm Password" type="password" placeholder="••••••••" name="confirm_password" register={register}   errors={errors}/>
              </div>
            </Section>

            {/* ORGANIZATION */}
            <Section title="Organization Details" icon="🏥">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Registration Number" placeholder="REG-000000" name="registration_number" register={register}  errors={errors} />
                <Field label="Tax ID" placeholder="TAX-000000" name="tax_id" register={register}   errors={errors}/>
                <Field label="Website" placeholder="https://example.com" name="website" register={register}  errors={errors}/>
                <Field label="Emergency Contact" placeholder="+1 000 000 0000" name="emergency_contact" register={register}  errors={errors} />
                <Field label="Established Date" type="date" name="established_date" register={register}   errors={errors}/>
                <Field label="Total Beds" type="number" placeholder="e.g. 200" name="total_beds" register={register} min={2}  errors={errors}/>
                <div className="sm:col-span-2">
                  <Field label="Logo" type="file" name="logo" register={register}  errors={errors}/>
                </div>
              </div>
            </Section>

            {/* ADDRESS */}
            <Section title="Address" icon="📍">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <Field label="Address Line 1" placeholder="Street address" name="address_line1" register={register}  errors={errors}/>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Address Line 2" placeholder="Suite, building, etc. (optional)" name="address_line2" register={register}  errors={errors}/>
                </div>
                <Field label="City" placeholder="City" name="city" register={register}  errors={errors}/>
                <Field label="State / Province" placeholder="State" name="state" register={register}  errors={errors}/>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Country
                  </Label>
                  <select
                    {...register("country_id")} className="h-10 text-sm bg-white text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    defaultValue=""
                     errors={errors}

                  >
                    <option value="" disabled>
                      Select Country
                    </option>

                    {countries?.map((country, index) => (
                      <option className="text-black" key={index} value={country.id}>
                        {country.title}
                      </option>
                    ))}
                  </select>
                </div>
                <Field label="Postal Code" placeholder="000000" name="postal_code" register={register} />
              </div>
            </Section>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Create Account →
            </button>

            <p className="text-center text-xs text-gray-400 pb-4">
              Already have an account?{" "}
              <a href="/auth/login" className="text-blue-500 hover:underline font-medium">Sign in</a>
            </p>

          </form>
        </div>
      </div>
    </div>

  );
};





const Section = ({ title, icon, children }) => (
  <div>
    <div className="flex items-center gap-2 mb-4">
      <span className="text-base">{icon}</span>
      <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-widest">{title}</h2>
    </div>
    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
      {children}
    </div>
  </div>
);

const Field = ({ label, type = "text", placeholder, name, register ,min ,errors}) => (
  <div className="flex flex-col gap-1.5">
    <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</Label>
    <Input
      type={type}
      {...register(name)}
      placeholder={placeholder}

      className="h-10 text-sm bg-white border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-gray-300"
    />
     {errors?.[name] && (
      <p className="text-xs text-red-500">{errors[name].message}</p>
    )}
  </div>
);