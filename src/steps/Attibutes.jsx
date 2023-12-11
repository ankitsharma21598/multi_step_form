import React, { useContext } from "react";
import { StepContext } from "../context/StepsContext";

const Attibutes = () => {
  const {values,editMode,handleChange,handleSave,handleEdit,handleCancel}=useContext(StepContext)

  return (
    <>
      <div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            onChange={(e) => handleChange("name", e)}
            value={values.name}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-11/12"
            readOnly={!editMode.name}
          />
          {editMode.name && (
            <>
              <button
                className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 m-2"
                onClick={() => handleCancel("name")}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                onClick={() => handleSave("name")}
              >
                Save
              </button>
            </>
          )}
          {!editMode.name && (
            <button
              className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 m-2"
              onClick={() => handleEdit("name")}
            >
              Edit
            </button>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => handleChange("email", e)}
            value={values.email}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-11/12"
            readOnly={!editMode.email}
          />
          {editMode.email && (
            <>
              <button
                className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 m-2"
                onClick={() => handleCancel("email")}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                onClick={() => handleSave("email")}
              >
                Save
              </button>
            </>
          )}
          {!editMode.email && (
            <button
              className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 m-2"
              onClick={() => handleEdit("email")}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Attibutes;
