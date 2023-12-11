import React, { useContext } from "react";
import { StepContext } from "../context/StepsContext";

const ARIDetails = () => {
  const {
    values,
    editMode,
    handleChange,
    handleSave,
    handleEdit,
    handleCancel,
  } = useContext(StepContext);
  return (
    <>
      <div>
        <div>
          <label
            htmlFor="number"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone Number
          </label>
          <input
            type="number"
            onChange={(e) => handleChange("number", e)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-11/12"
            value={values.number}
            readOnly={!editMode.number}
          />
          {editMode.number && (
            <>
              <button
                className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 m-2"
                onClick={() => handleCancel("number")}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                onClick={() => handleSave("number")}
              >
                Save
              </button>
            </>
          )}
          {!editMode.number && (
            <button
              className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 m-2"
              onClick={() => handleEdit("number")}
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Gender
        </legend>

        <div className="mt-3">
          <div className="flex items-center gap-x-3">
            <input
              id="push-everything"
              name="push-notifications"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              onChange={(e) => handleChange("gender", e)}
              value="male"
              checked={values.gender === "male"}
            />
            <label
              htmlFor="push-everything"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Male
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="push-email"
              name="push-notifications"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              
              onChange={(e) => handleChange("gender", e)}
              value="female"
              checked={values.gender === "female"}
            />
            <label
              htmlFor="push-email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Female
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="push-nothing"
              name="push-notifications"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              onChange={(e) => handleChange("gender", e)}
              value="other"
              checked={values.gender === "other"}
            />
            <label
              htmlFor="push-nothing"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              other
            </label>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ARIDetails;
