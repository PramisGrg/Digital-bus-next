import React from "react";
import BusStation from "../assets/images/bus.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <section className="min-h-screen py-20 bg-[#e8edf0] ">
      <div className="container mx-auto">
        <div className="items-center flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
            <Image
              width={1000}
              height={1000}
              alt="Sajha Bus"
              src={BusStation}
            />
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h1 className="text-2xl mb-4">About Us : </h1>
            <div>
              <p className="font-sans">
                Our project ”Digital Bus Fare Management System” project
                encompasses the development and implementation of a robust
                system for the automated payment and hassle-free passenger
                experience in public transportation. The project aims to create
                a sustainable solution that addresses the challenges of
                traditional transport system
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
