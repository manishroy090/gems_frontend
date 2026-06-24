"use client";

import Link from "next/link";
import { Button } from "@components/medinexus/button";
import { Input } from "@components/medinexus/input";
import { Checkbox } from "../medinexus/checkbox";
import { Label } from "@components/medinexus/label";
import { login } from "@services/Auth";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loginschema } from "@schemas/Login.schema";
import { ILogin } from "@interface/ILogin";
import useToaster from "@hooks/useToaster";

export const Login = () => {
  const router = useRouter();
  const toaster = useToaster();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Loginschema) });

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    const res = await login(data);
    if (res.status === 401) {
      toaster.error(res.data.message);
    }

    const { success } = res.data;
    console.log(success);
    if (success) {
      router.push("/");
    }
  };

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hrm_image/loginbg.gif')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      {/* card */}
      <div
        className="relative z-10 w-[360px] p-8 rounded-3xl 
        backdrop-blur-xl bg-white/10 
        border border-white/20 
        shadow-2xl shadow-black/40"
      >
        <div className="flex items-center justify-center  mb-6  h-24  w-full">
          <img
            src="/hrm_image/newlogo.svg"
            className="h-auto w-fit  object-contain"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email */}

          <div className="mb-4">
            <Label className="text-gray-200">Email</Label>
            <Input
              {...register("email")}
              placeholder="Enter email"
              autoComplete="off"
              className="bg-white/20 text-white placeholder:text-gray-300 border border-white/20 focus:border-white"
            />
            {errors?.["email"] && (
              <p className="text-xs text-red-500">{errors["email"].message}</p>
            )}
          </div>

          {/* password */}
          <div className="mb-4">
            <Label className="text-gray-200">Password</Label>
            <Input
              {...register("password")}
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              className="bg-white/20 text-white placeholder:text-gray-300 border border-white/20 focus:border-white"
            />
            {errors?.["password"] && (
              <p className="text-xs text-red-500">
                {errors["password"].message}
              </p>
            )}
          </div>

          {/* remember + forgot */}
          <div className="flex items-center justify-between mb-5 text-sm">
            <div className="flex items-center gap-2">
              <Checkbox />
              <Label className="text-gray-300">Remember</Label>
            </div>

            <Link
              href="/forgot-password"
              className="text-blue-300 hover:text-blue-200 transition font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          {/* login */}
          <Button
            type="submit"
            className="w-full mb-4 bg-white text-black hover:bg-gray-200 font-medium"
          >
            Login
          </Button>
        </form>

        {/* divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-gray-300 text-xs tracking-widest">OR</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* google */}
        <Button
          variant="outline"
          className="w-full bg-white/90 text-black hover:bg-white flex items-center justify-center gap-2 font-medium hidden"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </Button>

        {/* signup */}
        <p className="text-center text-gray-300 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-white font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
