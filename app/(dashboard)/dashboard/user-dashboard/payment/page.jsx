"use client";
import React, { useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const verifyPayment = async (payload) => {
  try {
    const router = useRouter();
    const response = await axios.post(
      "https://sahaj-yatra-api.onrender.com/api/v1/transaction/verify-payment/",
      // "http://172.0.18.89:8000/api/v1/transaction/verify-payment",
      payload
    );
    console.log(response);
    console.log(response?.status);
    if (response?.status === 200) {
      toast.success(response?.data?.message, {
        onClose: () => {
          router.push("/dashboard/admin-dashboard");
        },
      });
    }
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
    }, // onError handler is optional
    onError(error) {
      // handle errors
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
  }, []); // Run only on component mount

  const btnOnClick = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      // Your client-side code that uses window goes here
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
              className=" w-full px-2 py-2 bg-blue-600 text-white hover:bg-blue-400 font-bold mt-10 rounded items-center my-2 hover:scale-105 duration-300"
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
