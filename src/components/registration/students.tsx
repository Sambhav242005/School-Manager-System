"use client";

import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const studentRegistrationSchema = z.object({
  name: z.string().nonempty("Name is required"),
  rollno: z.string().nonempty("Roll no is required"),
  dob: z.string().nonempty("Date of birth is required"),
  class: z.string().nonempty("Class is required"),
  section: z.string().nonempty("Section is required"),
  gender: z.string().nonempty("Gender is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const dataForClass:{[key:string]:string[]} = {
  1: ["A", "B", "C", "D"],
  2: ["A", "B", "C", "D"],
  3: ["A", "B", "C", "D"],
  4: ["A", "B", "C", "D"],
  5: ["A", "B", "C", "D"],
  6: ["A", "B", "C", "D"],
  7: ["A", "B", "C", "D"],
  8: ["A", "B", "C", "D"],
  9: ["A", "B", "C", "D"],
  10: ["A", "B", "C", "D"],
  11: ["PCM", "PCB", "Comm", "Art"],
  12: ["PCM", "PCB", "Comm", "Art"],
};

type StudentRegistrationFormData = z.infer<typeof studentRegistrationSchema>;

export default function StudentRegistrationForm() {
  const router = useRouter();
  const [classValue, setClassValue] = useState< keyof typeof dataForClass>();
  const [sectionValue, setSectionValue] = useState("");
  const [availableSections, setAvailableSections] = useState<typeof dataForClass[keyof typeof dataForClass]>([]);

  const handleClassChange = (e: { target: { value: any; }; }) => {
    const selectedClass = e.target.value as keyof typeof dataForClass;
    setClassValue(selectedClass);
    if (selectedClass in dataForClass) {
      setAvailableSections(dataForClass[selectedClass]);
    }
    setSectionValue(""); // Reset section value when class changes
  };

  const handleSectionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSectionValue(e.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentRegistrationFormData>({
    resolver: zodResolver(studentRegistrationSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch("/api/student/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/login");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Please Try Again Later there is server error ");
    }
  });

  return (
    <section className="bg-blue-50 w-1/3">
      <div className="w-full px-4 mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blue-500 text-sm font-bold">
                Student Registration Form
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
                <input
                  {...register("name")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div id="rollno" className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="rollno"
                >
                  Roll No
                </label>
                <input
                  {...register("rollno")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Roll No"
                />
                {errors.rollno && (
                  <p className="text-red-500 text-xs italic">
                    {errors.rollno.message}
                  </p>
                )}
              </div>
              <div id="dob" className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="dob"
                >
                  Date Of Birth
                </label>
                <input
                  {...register("dob")}
                  type="date"
                  className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Date"
                />
                {errors.dob && (
                  <p className="text-red-500 text-xs italic">
                    {errors.dob.message}
                  </p>
                )}
              </div>

              <div className="flex">
                <div id="class" className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blue-600 text-xs font-bold mb-2"
                    htmlFor="class"
                  >
                    Class
                  </label>
                  <select
                    id="class"
                    value={classValue}
                    onChange={handleClassChange}
                  >
                    <option value="" disabled selected>
                      Select Class
                    </option>
                    {Object.keys(dataForClass).map((key) => (
                      <option key={key} value={key}>
                        Class {key}
                      </option>
                    ))}
                  </select>
                </div>
                <div id="section" className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blue-600 text-xs font-bold mb-2"
                    htmlFor="section"
                  >
                    Section
                  </label>
                  <select
                    id="section"
                    value={sectionValue}
                    onChange={handleSectionChange}
                    disabled={!classValue}
                  >
                    <option value="" disabled selected>
                      Select Section
                    </option>
                    {availableSections.map((section) => (
                      <option key={section} value={section}>
                        {section}
                      </option>
                    ))}
                  </select>
                </div>
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
                    <input
                      {...register("gender")}
                      value="male"
                      type="radio"
                      className="scale-125 mr-2 cursor-pointer"
                    />
                    <div className="title -mt-1">male</div>
                  </label>
                  <label className="flex items-center cursor-pointer m-2">
                    <input
                      {...register("gender")}
                      value="female"
                      type="radio"
                      className="scale-125 mr-2 cursor-pointer"
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
              <div id="password" className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
