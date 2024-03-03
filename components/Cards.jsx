import React from "react";
import Image from "next/image";
import DataAnalysis from "@/assets/images/DataAnalysis.jpeg";
import Fruad from "@/assets/images/Fruad.jpeg";
import Cashless from "@/assets/images/cashless.jpeg";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Cashless}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Cashless Transaction
          </h2>
          <p className="p-2 font-sans">
            Sahaj Yatra offers contactless payment with the help of RFID which
            is convinient to passengers reduces the need for physical cash
            handling.
          </p>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={DataAnalysis}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 ">
            Data Analytics
          </h2>
          <p className="p-2 font-sans">
            Sahaj Yatra collect and analyze passenger data to generate insights
            into ridership patterns, peak travel times, popular routes, and
            other key metrics, helping transit agencies optimize service
            planning and resource allocation.
          </p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Fruad}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Fraud Detection
          </h2>
          <p className="p-2 font-sans">
            Sahaj Yatra prevent fare evasion, ticket duplication, and other
            unauthorized activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
