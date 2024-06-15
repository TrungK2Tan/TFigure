import React from "react";

const Contact = () => {
  return (
    <div className="bg-primary/40 py-2 flex flex-col items-center h-[200px]  dark:bg-gray-900 dark:text-white">
      <h1 data-aos="zoom-in" className="p-5 text-3xl sm:text-4xl font-bold">
        Get Notified About New Products
      </h1>
      <input
        data-aos="fade-up"
        type="text"
        placeholder="Enter your email"
        className="w-[550px] p-5 dark:border-white-500 dark:bg-gray-800"
      />
    </div>
  );
};
export default Contact;
