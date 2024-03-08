"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import {
  ParentRegistrationRegister,
  TParentRegistrationRegister,
} from "@/collections/parent";
import { Input } from "../ui/input";

export default function ParentRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TParentRegistrationRegister>({
    resolver: zodResolver(ParentRegistrationRegister),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      // submit form data to server
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <section className="bg-blue-50 w-1/3">
      <div className="w-full px-4 mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blue-500 text-sm font-bold">
                Parents Registration Form
              </h6>
            </div>
            <div className="btn-wrapper text-center"></div>
            <hr className="mt-6 border-b-1 border-blue-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={onSubmit}>
              <div id="name" className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <Input
                  {...register("fullname")}
                  aria-invalid={errors.fullname ? "true" : "false"}
                  type="text"
                  className={cn(
                    "border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                    { "focus-visible:ring-red-500": errors.fullname }
                  )}
                  placeholder="Name"
                />
                {errors.fullname && (
                  <p className="text-red-500 text-xs italic">
                    {errors.fullname.message}
                  </p>
                )}
              </div>
              <div id="phone" className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="number"
                >
                  Phone No
                </label>
                <Input
                  {...register("phone")}
                  aria-invalid={errors.phone ? "true" : "false"}
                  type="tel"
                  className={cn(
                    "border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                    { "focus-visible:ring-red-500": errors.phone }
                  )}
                  placeholder="Phone No"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs italic">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div id="address" className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <Input
                  {...register("address")}
                  aria-invalid={errors.address ? "true" : "false"}
                  type="text"
                  className={cn(
                    "border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                    { "focus-visible:ring-red-500": errors.address }
                  )}
                  placeholder="Address"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs italic">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div id="gender" className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <div className="flex flex-wrap">
                  <label className="flex items-center cursor-pointer m-2">
                    <Input
                      {...register("gender")}
                      className="scale-125 mr-2 cursor-pointer"
                      type="radio"
                      value="male"
                    />
                    <div className="title -mt-1">male</div>
                  </label>
                  <label className="flex items-center cursor-pointer m-2">
                    <Input
                      {...register("gender")}
                      className="scale-125 mr-2 cursor-pointer"
                      type="radio"
                      value="female"
                    />
                    <div className="title -mt-1">female</div>
                  </label>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-xs italic">
                    {errors.gender.message}
                  </p>
                )}
              </div>
              <div id="email" className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                  type="email"
                  className={cn(
                    "border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                    { "focus-visible:ring-red-500": errors.email }
                  )}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div id="password" className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  {...register("password")}
                  aria-invalid={errors.password ? "true" : "false"}
                  type="password"
                  className={cn(
                    "border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                    { "focus-visible:ring-red-500": errors.password }
                  )}
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div id="submit-button" className="text-center mt-6">
                <button
                  className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
