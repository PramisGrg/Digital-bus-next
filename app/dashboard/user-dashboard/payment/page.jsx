"use client";

import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

const verifyPayment = async (payload, router) => {
  try {
    console.log(`inside verify ${payload}`);
    const response = await axios.post(
      "https://sahaj-yatra-api.onrender.com/api/v1/transaction/verify-payment/",
      // "http://172.0.18.89:8000/api/v1/transaction/verify-payment",
      payload
    );
    console.log(response);
    if (response?.status === 200) {
      toast.success(response?.data?.message, {
        onClose: () => {
          router.push("/user-dashboard");
        },
      });
    }
  } catch (error) {
    console.log(error);
    // toast.log(error);
  }
};

const Payment = () => {
  const router = useRouter();

  function btnOnClick(e) {
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    e.preventDefault();
    if (typeof window !== "undefined") {
      // Your client-side code that uses window goes here
      let config = {
        // replace this key with yours
        publicKey: "test_public_key_77bac81b32ed4e95b995bfbe502a3ab8",
        productIdentity: "1234567890",
        productName: "Drogon",
        productUrl: "http://gameofthrones.com/buy/Dragons",
        eventHandler: {
          async onSuccess(payload) {
            try {
              await verifyPayment(payload, router);
              // hit merchant api for initiating verfication
              // window.location.href = "/dashboard/user-dashboard/";
            } catch (error) {
              console.log(error);
            }
            // console.log(payload);
          },
          // onError handler is optional
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

      let checkout = new KhaltiCheckout(config);
      console.log(checkout);
      checkout.show({ amount: 1000 });
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="">
        <h1>Payment</h1>
        <div className="flex flex-col items-center justify-center">
          <form>
            <input
              placeholder="enter amount "
              className="w-full block px-2 py-2 inline-block border rounded-md"
            ></input>
            <button
              type="submit"
              id="payment-button"
              onClick={btnOnClick}
              className="w-full px-2 py-2 w-full bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300"
            >
              Pay with khalti
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
