import React from "react";
import { TextAreaComponentProps } from "../../../../types/InputPropsInterface";
export default function TextField({
  label,
  id,
  name,
  onChange,
  value,
  error,
}: TextAreaComponentProps) {
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

      <textarea
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        rows={12}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      />
    </>
  );
}
