"use client";

import { ParentLogin, TParentLogin } from "@/collections/parent";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

export default function ParentLoginForm() {
  const {
    register: login,
    handleSubmit,
    formState: { errors },
  } = useForm<TParentLogin>({
    resolver: zodResolver(ParentLogin),
  });
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const onSubmit = handleSubmit(async ({ password, phone }: TParentLogin) => {
    try {
    } catch (error) {}
  });

  return (
    <section className="bg-blue-50 w-1/3">
      <div className="w-full  px-4 mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blue-500 text-sm font-bold">
                Parent Login Form
              </h6>
            </div>
            <div className="btn-wrapper text-center"></div>
            <hr className="mt-6 border-b-1 border-blue-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={onSubmit}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  {...login("phone")}
                  aria-invalid={errors.phone ? "true" : "false"}
                  placeholder="Phone No"
                  className={cn(
                    "border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                    {
                      "focus-visible:ring-red-500": errors.phone,
                    }
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs italic">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...login("password")}
                  aria-invalid={errors.password ? "true" : "false"}
                  className={cn(
                    "border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                    {
                      "focus-visible:ring-red-500": errors.password,
                    }
                  )}
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="text-center mt-6">
                <label className="inline-flex items-center justify-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className={cn(
                      "form-checkbox border-0 rounded text-blue-700 ml-1 w-5 h-5 ease-linear transition-all duration-150",
                      {
                        "focus-visible:ring-red-500": errors.password,
                      }
                    )}
                  />
                  <span className="ml-2 text-sm font-semibold text-blue-600">
                    Remember me
                  </span>
                </label>
              </div>

              <div className="text-center mt-6">
                <Button
                  className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
