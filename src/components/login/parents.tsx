"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function () {
  const [dataForm, setDataForm] = useState({
    number: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
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
    try {
      fetch(formURL, {
        method: "POST",
        body: JSON.stringify(dataForm), // Convert to JSON string
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
          accept: "application/json",
        },
      }).then(() => {
        setDataForm({
          number: "",
          password: "",
        });
        const router = useRouter();
        if (rememberMe) {
          // Save login information in local storage
          const loginInfo = JSON.stringify({
            number: dataForm.number,
            password: dataForm.password,
          });
          localStorage.setItem("loginInfo", loginInfo);
        }

        setRememberMe(false);
        router.push("/login");
      });
    } catch (error) {
      alert("Please Try Again Later there is server error ");
      console.log(error);
    }
  };
  const handleRememberMe = (e: { target: { checked: boolean } }) => {
    setRememberMe(e.target.checked);
  };

  return (
    <>
      <section className="bg-blue-50 w-1/3">
        <div className="w-full  px-4 mx-auto pt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blue-500 text-sm font-bold">
                  Parents Login Form
                </h6>
              </div>
              <div className="btn-wrapper text-center"></div>
              <hr className="mt-6 border-b-1 border-blue-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form method="POST" onSubmit={submitForm}>
                <div id="phone" className="relative w-full mb-3">
                  <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                    Phone No
                  </label>
                  <input
                    value={dataForm.number}
                    onChange={handleInput}
                    type="tel"
                    className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Phone No"
                  />
                </div>
                <div id="password" className="relative w-full mb-3">
                  <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                    Password
                  </label>
                  <input
                    value={dataForm.password}
                    onChange={handleInput}
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>
                <div id="rememder-me">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
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
                    type="button"
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
