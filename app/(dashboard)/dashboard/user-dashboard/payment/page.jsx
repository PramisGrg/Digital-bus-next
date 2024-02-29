"use client";
import React, { useState, useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosAuthInstance } from "@/services/axios";
import { useGlobalContext } from "../../../../../components/ContextApi";

const verifyPayment = async (payload) => {
  const userID = useGlobalContext();
  const [id, setId] = useState("");
  setId(userID);
  console.log(id);

  try {
    // const userID = useGlobalContext();
    // console.log(userID);
    const payloadWithUserId = { ...payload, id };
    const response = await axiosAuthInstance.post(
      "/transaction/verify-payment/",
      payloadWithUserId
    );
    console.log(response);
    console.log(response?.status);
    // if (response?.status === 200) {
    //   router.push("/dashboard/admin-dashboard");
    // }
  } catch (error) {
    toast.error(error?.message);
  }
};

const config = {
  // replace this key with yours
  publicKey: "test_public_key_77bac81b32ed4e95b995bfbe502a3ab8",
  productIdentity: "1234567890",
  productName: "Drogon",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  eventHandler: {
    async onSuccess(payload) {
      try {
        await verifyPayment(payload);
        console.log(payload);
        // hit merchant api for initiating verfication
        // window.location.href = "/dashboard/user-dashboard/";
        // console.log(payload);
      } catch (error) {
        console.log(error);
      }
    },
    onError(error) {
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkout = new KhaltiCheckout(config);
      console.log(checkout);
    }
  }, []);

  const btnOnClick = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const checkout = new KhaltiCheckout(config);
      checkout.show({ amount: 1000 });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="pl-96 min-h-screen w-full flex items-center justify-center">
        <div className="mr-8 flex-cols">
          <h1 className="text-4xl">Payment: </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <form>
            <input
              placeholder="enter amount "
              className="w-full p-4 inline-block border rounded-md"
            ></input>
            <button
              type="submit"
              id="payment-button"
              onClick={btnOnClick}
              className=" w-full px-2 py-2 bg-slate-600 text-white hover:bg-blue-600 font-bold mt-10 rounded items-center my-2 hover:scale-105 duration-300"
            >
              Pay with khalti
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
