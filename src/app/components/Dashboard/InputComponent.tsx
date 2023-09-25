import React from "react";
import { InputComponentProps } from "../../../../types/InputPropsInterface";

export default function InputComponent({
  label,
  id,
  name,
  type,
  onChange,
  value,
  error,
}: InputComponentProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <label
          htmlFor={id}
          className="block mb-2 mt-2 text-sm font-medium text-gray-600 dark:text-white "
        >
          {label}
        </label>
        <p className=" text-xs text-red-600">{error}</p>
      </div>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </>
  );
}
