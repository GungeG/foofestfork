"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      className="flex flex-col gap-4 font-Gambetta text-black"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="m-auto w-[600px]">
        <label className="block text-sm mb-1" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          {...register("Name", { required: true, maxLength: 200 })}
          className="input input-bordered md:w-[600px] w-[485px] bg-[#D9D9D9] placeholder-black"
        />
        {errors.Name && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="m-auto w-[600px]">
        <label className="block text-sm mb-1" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          type="number"
          placeholder="Card number"
          {...register("Card number", {
            required: true,
            minLength: 16,
            maxLength: 19,
          })}
          className="input input-bordered md:w-[600px] w-[485px] bg-[#D9D9D9] placeholder-black"
        />
        {errors["Card number"] && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex space-x-[30px] m-auto">
        <div>
          <label className="block text-sm mb-1" htmlFor="expiryDate">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            {...register("Expiry date", {
              required: true,
              minLength: 3,
              maxLength: 4,
            })}
            className="input input-bordered md:w-[285px] bg-[#D9D9D9] placeholder-black"
          />
          {errors["Expiry date"] && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="cvc">
            CVC
          </label>
          <input
            type="number"
            placeholder="CVC"
            {...register("CVC", { required: true, minLength: 3, maxLength: 3 })}
            className="input input-bordered md:w-[285px] bg-[#D9D9D9] placeholder-black"
          />
          {errors.CVC && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="btn rounded-full border-black text-black hover:text-white py-2 px-6 w-44 flex items-center gap-4 justify-center bg-gold mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
