import { useState } from "react";

export const Newsletter = () => {
  return (
    <section className="mb-16 w-full font-poppins">
      <div className="flex items-center justify-between gap-8 bg-gray-100 p-10 rounded-lg">
        <div className="flex-1">
          <p className="text-primary-gray font-poppins text-center">
            Helping sales, marketing and recruiting teams find new leads.
          </p>
        </div>
        <div className="flex-1 flex">
          <div className="">
            <input
              type="email"
              placeholder="✉ Your work e-mail here..."
              className="flex-1 px-4 py-2 text-primary-gray font-poppins bg-white rounded font-bold text-sm w-72 focus:outline-gray-300"
            />
          </div>
          <button className="bg-primary-blue cursor-pointer text-white rounded px-6 py-2 text-sm whitespace-nowrap">
            Find New Customer
          </button>
        </div>
      </div>
    </section>
  );
};
