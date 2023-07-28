import logo from "../../public/image/logo.png";
import Image from "next/image";
import "@/style/dropdown.css";

const Header = () => {
  return (
    <>
      <script
        src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"
        defer
      ></script>
      <header>
        <nav className=" border-gray-200  bg-[#264c86]">
          <div className="flex flex-wrap justify-between items-center mx-auto px-2">
            <a href="/" className="flex items-center">
              <Image
                width={500}
                height={500}
                src={logo}
                alt=""
                className="mr-3 w-auto  h-16"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Artificial intelligence school
              </span>
            </a>
            <div className="flex items-center xl:order-2">
              <a
                href="login"
                className="text-white text-lg  focus:ring-4 focus:ring-indigo-500 font-medium rounded-lg px-4 xl:px-5 py-2 xl:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </a>
              <a
                href="registration"
                className="text-white m-4 text-base bg-[#3c74bb] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 xl:px-5 py-2 xl:py-2.5 mr-2  focus:outline-none "
              >
                Registration
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full xl:flex xl:w-auto xl:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-3 font-medium xl:flex-row xl:space-x-8 xl:mt-0">
                <li>
                  <div className="dropdown">
                    <button className="dropbtn flex">
                      <a href="/">Home</a>
                      <i className="fa fa-caret-down">
                        <svg className="w-8 h-8 p-[1px]" fill="none">
                          <path
                            d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                    </button>
                    <div className="dropdown-content">
                      <a href="#">Mission & Vision</a>
                      <a href="#dm">Directior's Message</a>
                      <a href="#pm">Principal's Message</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <button className="dropbtn flex">
                      Academics
                      <i className="fa fa-caret-down">
                        <svg className="w-8 h-8 p-[1px]" fill="none">
                          <path
                            d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                    </button>
                    <div className="dropdown-content">
                      <a href="staff">Staff</a>
                      <a href="facility">Facility</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <button className="dropbtn flex">
                      <a href="students&parents">Students & Parents </a>
                      <i className="fa fa-caret-down">
                        <svg className="w-8 h-8 p-[1px]" fill="none">
                          <path
                            d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                    </button>
                    <div className="dropdown-content">
                      <a href="/students&parents#school-timing">
                        School Timing
                      </a>
                      <a href="/students&parents#school-timing">
                        Visiting Hours
                      </a>
                      <a href="/students&parents#uniform">School Uniform</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <button className="dropbtn flex">
                      Admissions
                      <i className="fa fa-caret-down">
                        <svg className="w-8 h-8 p-[1px]" fill="none">
                          <path
                            d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                    </button>
                    <div className="dropdown-content">
                      <a href="admissions_procedure">Admission Procedure</a>
                      <a href="fees">Fees Structure</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <button className="dropbtn flex">
                      Contact
                      <i className="fa fa-caret-down">
                        <svg className="w-8 h-8 p-[1px]" fill="none">
                          <path
                            d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                    </button>
                    <div className="dropdown-content">
                      <a href="#">About Us</a>
                      <a href="#">Find Us</a>
                      <a href="#">Mail us</a>
                      <a href="#">FAQ</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
