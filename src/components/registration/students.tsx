"use client";

import { ChangeEvent, useState } from "react";

export default function () {
  const [dataForm, setDataForm] = useState({
    name: "",
    rollno: "",
    dob: "",
    class: "",
    section: "",
    gender: "",
    password: "",
  });
  const handleInput = (e: { target: { name: any; value: any } }) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setDataForm((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e: any) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;

    console.log(dataForm);

    // POST the data to the URL of the form
    // fetch(formURL, {
    //   method: "POST",
    //   body: data,
    //   headers: {
    //     accept: "application/json",
    //   },
    // }).then(() => {
    //   setDataForm({
    //     name: "",
    //     rollno: "",
    //     dob: "",
    //     class: "",
    //     section: "",
    //     gender: "",
    //     password: "",
    //   });
    // });
  };

  return (
    <>
      <section className="bg-blue-50 w-1/3">
        <div className="w-full  px-4 mx-auto pt-6">
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
              <form method="POST" onSubmit={submitForm}>
                <div id="name" className="relative w-full mb-3">
                  <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    required
                    name="name"
                    onChange={handleInput}
                    value={dataForm.name}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                  />
                </div>
                <div id="rollno" className="relative w-full mb-3">
                  <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                    Roll No
                  </label>
                  <input
                    required
                    name="rollno"
                    onChange={handleInput}
                    value={dataForm.rollno}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Roll No"
                  />
                </div>
                <div id="dob" className="relative w-full mb-3">
                  <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                    Date Of Brith
                  </label>
                  <input
                    required
                    name="dob"
                    onChange={handleInput}
                    value={dataForm.dob}
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Date"
                  />
                </div>
                <div className="flex">
                  <div id="class" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Class
                    </label>
                    <select
                      onChange={handleInput}
                      value={dataForm.class}
                      name="class"
                      id="id"
                      defaultValue="no-selected"
                    >
                      <option value="no-selected" disabled>
                        Select Class
                      </option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                      <option value="4">Class 4</option>
                      <option value="5">Class 5</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                  <div id="section" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Section
                    </label>
                    <select
                      onChange={handleInput}
                      value={dataForm.section}
                      name="section"
                      id="id"
                      defaultValue="no-selected"
                    >
                      <option value="no-selected" disabled>
                        Select Section
                      </option>
                      <option value="1">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
                      <option value="G">G</option>
                      <option value="H">H</option>
                    </select>
                  </div>
                </div>

                <div id="gender" className="relative w-full mb-3">
                  <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                    Gender
                  </label>
                  <div className="flex flex-wrap">
                    <label className="flex items-center cursor-pointer m-2">
                      <input
                        onChange={handleInput}
                        value={dataForm.gender}
                        className="scale-125 mr-2 cursor-pointer"
                        type="radio"
                        name="gender"
                        defaultValue="m"
                        checked
                      />
                      <div className="title -mt-1">male</div>
                    </label>

                    <label className="flex items-center cursor-pointer m-2">
                      <input
                        onChange={handleInput}
                        value={dataForm.gender}
                        className="scale-125 mr-2 cursor-pointer"
                        type="radio"
                        name="gender"
                        defaultValue="f"
                      />
                      <div className="title -mt-1">female</div>
                    </label>
                  </div>
                </div>
                <div id="password" className="relative w-full mb-3">
                  <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={handleInput}
                    value={dataForm.password}
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>
                <div id="rememder-me">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      name="me"
                      onChange={handleInput}
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blue-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blue-600">
                      Remember Me
                    </span>
                  </label>
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
    </>
  );
}
