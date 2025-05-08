import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-lg">
        <div className="flex-1">
          <p className="text-gray-700 font-medium">
            Helping sales, marketing and recruiting teams find new leads.
          </p>
        </div>
        <div className="flex-1 flex gap-2">
          <input
            type="email"
            placeholder="Your work e-mail here..."
            className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2 text-sm whitespace-nowrap">
            Find New Customer
          </button>
        </div>
      </div>
    </section>
  );
};
