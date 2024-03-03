import react, { useRef } from "react";
import { ReactTyped } from "react-typed";

const Top = ({ GetStartedOnClick }) => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#1c3c59] text-3xl font-bold p-2 mb-2">
          Travel with Sahaj Yatri
        </p>
        <h1 className="text-slate-900 text-4xl font-bold ">
          यात्री को सहयात्री
        </h1>
        <div className="mt-4 flex justify-center items-center">
          <ReactTyped
            className="ml-8 bg-[#00df9a] text-3xl"
            strings={[
              "Travel for exploration",
              "Travel for enjoyment",
              "Travel for Renaissance",
            ]}
            typeSpeed={80}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input type="text" />
          </ReactTyped>
        </div>
        <button
          className="bg-[#203f5d] hover:bg-[#37638f] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white"
          onClick={GetStartedOnClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Top;
