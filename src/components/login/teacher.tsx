"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TTeacherLogin, TeacherLogin } from "@/collections/teacher";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

export default function TeacherLoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTeacherLogin>({
    resolver: zodResolver(TeacherLogin),
  });

  const onSubmit = handleSubmit((data) => {
    // handle form submission logic here
  });

  const handleRememberMe = (e: { target: { checked: boolean } }) => {
    setRememberMe(e.target.checked);
  };

  return (
    <>
      <section className="bg-blue-50 w-1/3">
        <div className="w-full px-4 mx-auto pt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blue-500 text-sm font-bold">
                  Teachers Login Form
                </h6>
              </div>
              <div className="btn-wrapper text-center"></div>
              <hr className="mt-6 border-b-1 border-blue-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={onSubmit}>
                <div id="phone" className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blue-600 text-xs font-bold mb-2"
                    htmlFor="id"
                  >
                    Teacher ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    {...register("id")}
                    className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Teacher ID"
                  />
                  {errors.id && (
                    <p className="text-red-500 text-xs italic mt-1">
                      {errors.id.message}
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
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs italic mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div id="remember-me">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleRememberMe}
                      className="form-checkbox border-0 rounded text-blue-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blue-600">
                      Remember Me
                    </span>
                  </label>
                </div>
                <div id="submit-button" className="text-center mt-6">
                  <Button
                    className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
