export default function () {
  return (
    <>
      <div className="flex">
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
                <form>
                  <div id="name" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>
                  <div id="phone" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Phone No
                    </label>
                    <input
                      type="tel"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Phone No"
                    />
                  </div>
                  <div id="address" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Address"
                    />
                  </div>
                  <div id="dob" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Date Of Brith
                    </label>
                    <input
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
                      <select name="class" id="id">
                        <option value="no-selected" selected disabled>
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
                      <select name="class" id="id">
                        <option value="no-selected" selected disabled>
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
                          className="scale-125 mr-2 cursor-pointer"
                          type="radio"
                          name="gender"
                          value="m"
                          checked
                        />
                        <div className="title -mt-1">male</div>
                      </label>

                      <label className="flex items-center cursor-pointer m-2">
                        <input
                          className="scale-125 mr-2 cursor-pointer"
                          type="radio"
                          name="gender"
                          value="f"
                        />
                        <div className="title -mt-1">female</div>
                      </label>
                    </div>
                  </div>
                  <div id="email" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div id="password" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div id="rememder-me">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
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
        <section className="bg-blue-50 w-1/3">
          <div className="w-full  px-4 mx-auto pt-6">
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
                <form>
                  <div id="name" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>
                  <div id="phone" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Phone No
                    </label>
                    <input
                      type="tel"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Phone NO"
                    />
                  </div>
                  <div id="address" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Address"
                    />
                  </div>

                  <div id="gender" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Gender
                    </label>
                    <div className="flex flex-wrap">
                      <label className="flex items-center cursor-pointer m-2">
                        <input
                          className="scale-125 mr-2 cursor-pointer"
                          type="radio"
                          name="gender"
                          value="m"
                          checked
                        />
                        <div className="title -mt-1">male</div>
                      </label>

                      <label className="flex items-center cursor-pointer m-2">
                        <input
                          className="scale-125 mr-2 cursor-pointer"
                          type="radio"
                          name="gender"
                          value="f"
                        />
                        <div className="title -mt-1">female</div>
                      </label>
                    </div>
                  </div>
                  <div id="email" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div id="password" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div id="rememder-me">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
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
        <section className="bg-blue-50 w-1/3">
          <div className="w-full  px-4 mx-auto pt-6">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blue-500 text-sm font-bold">
                    Teachers Registration Form
                  </h6>
                </div>
                <div className="btn-wrapper text-center"></div>
                <hr className="mt-6 border-b-1 border-blue-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div id="name" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>
                  <div id="phone" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Phone No
                    </label>
                    <input
                      type="tel"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Phone NO"
                    />
                  </div>
                  <div id="address" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Address"
                    />
                  </div>

                  <div id="gender" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Gender
                    </label>
                    <div className="flex flex-wrap">
                      <label className="flex items-center cursor-pointer m-2">
                        <input
                          className="scale-125 mr-2 cursor-pointer"
                          type="radio"
                          name="gender"
                          value="m"
                          checked
                        />
                        <div className="title -mt-1">male</div>
                      </label>

                      <label className="flex items-center cursor-pointer m-2">
                        <input
                          className="scale-125 mr-2 cursor-pointer"
                          type="radio"
                          name="gender"
                          value="f"
                        />
                        <div className="title -mt-1">female</div>
                      </label>
                    </div>
                  </div>
                  <div id="email" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div id="password" className="relative w-full mb-3">
                    <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div id="rememder-me">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
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
      </div>
    </>
  );
}
