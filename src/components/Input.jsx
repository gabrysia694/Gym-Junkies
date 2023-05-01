import React from 'react';

export default function Input({ label, placeholder, required = false }) {
  //convert label name to html-friendly format
  let htmlLabel = label.toLowerCase().replaceAll(' ', '-');

  return (
    <div className="">
      <label className="block mb-1 text-sm" htmlFor={htmlLabel}>
        {label}
      </label>
      <textarea
        className="h-auto resize-none w-full block rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="text"
        name={htmlLabel}
        id={htmlLabel}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
