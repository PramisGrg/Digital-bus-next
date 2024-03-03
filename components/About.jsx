import React from "react";
import BusStation from "../assets/images/bus.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 overflow-hidden md:grid-cols-2">
            {/* Left Section */}
            <div
              className="h-full overflow-hidden bg-gray-900 rounded-md"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration={500}
            >
              <Image
                src={BusStation}
                alt="BusPicutre"
                width={1000}
                height={1000}
                className="object-cover w-[100%] h-[100%]"
              />
            </div>

            {/* Right Section */}
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration={500}
              data-aos-delay={200}
            >
              <div className="py-[60px] md:py-[80px] lg:py-[100px] space-y-5 md:px-10">
                <p>Hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleLoginForm}>
        <div className="mt-5">
          <input
            type="tel"
            placeholder="Phone number"
            className="border border-gray-400 py-1 px-2 w-full"
            onChange={handleStateChange}
            name="phoneNumber"
          ></input>
        </div>
        <div className="mt-5">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 py-1 px-2 w-full"
            onChange={handleStateChange}
            name="password"
          ></input>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full  bg-[#1c3c59] hover:bg-[#316da5] text-white font-bold py-2 px-4 rounded-2xl"
          >
            Login
          </button>
          <p className="flex justify-center py-2 px-4 mt-3 items-center">
            Don't have an account!
            <Link
              className="hover:text-[#443c67] font-bold ml-2"
              href="user-register"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default About;
