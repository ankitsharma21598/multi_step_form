import React, { useContext } from "react";
import { StepContext } from "../context/StepsContext";

const Description = () => {
  const {
    values,
    editMode,
    handleChange,
    handleSave,
    handleEdit,
    handleCancel,
  } = useContext(StepContext);
  return (
    <div>
      <div className="col-span-full">
        <label
          htmlFor="about"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          About
        </label>
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows={3}
            value={values.desc}
            onChange={(e) => handleChange("desc", e)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
          {editMode.desc && (
            <>
              <button
                className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 m-2"
                onClick={() => handleCancel("desc")}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                onClick={() => handleSave("desc")}
              >
                Save
              </button>
            </>
          )}
          {!editMode.desc && (
            <button
              className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 m-2"
              onClick={() => handleEdit("desc")}
            >
              Edit
            </button>
          )}
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Write a few sentences about yourself.
        </p>
      </div>
    </div>
  );
};

export default Description;
