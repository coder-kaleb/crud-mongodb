import React from "react";

const page = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Title"
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Description"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
};

export default page;
