import React, { useContext } from "react";
import { StepContext } from "../context/StepsContext";

const AdressDetails = () => {
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
      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Country
        </label>
        <div className="mt-2">
          <select
            id="country"
            name="country"
            value={values.country}
            autoComplete="country-name"
            onChange={(e) => handleChange("country", e)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="street-address"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Street address
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="street-address"
            id="street-address"
            value={values.street}
            onChange={(e) => handleChange("street", e)}
            autoComplete="street-address"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        {editMode.street && (
          <>
            <button
              className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 m-2"
              onClick={() => handleCancel("street")}
            >
              Cancel
            </button>
            <button
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
              onClick={() => handleSave("street")}
            >
              Save
            </button>
          </>
        )}
        {!editMode.street && (
          <button
            className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 m-2"
            onClick={() => handleEdit("street")}
          >
            Edit
          </button>
        )}
      </div>

      <div className="sm:col-span-2 sm:col-start-1">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          City
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="city"
            id="city"
            value={values.city}
            onChange={(e) => handleChange("city", e)}
            autoComplete="address-level2"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {editMode.city && (
            <>
              <button
                className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 m-2"
                onClick={() => handleCancel("city")}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                onClick={() => handleSave("city")}
              >
                Save
              </button>
            </>
          )}
          {!editMode.city && (
            <button
              className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 m-2"
              onClick={() => handleEdit("city")}
            >
              Edit
            </button>
          )}
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="region"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          State / Province
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="region"
            id="region"
            value={values.state}
            onChange={(e) => handleChange("state", e)}
            autoComplete="address-level1"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {editMode.state && (
            <>
              <button
                className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 m-2"
                onClick={() => handleCancel("state")}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                onClick={() => handleSave("state")}
              >
                Save
              </button>
            </>
          )}
          {!editMode.state && (
            <button
              className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 m-2"
              onClick={() => handleEdit("state")}
            >
              Edit
            </button>
          )}
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="postal-code"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ZIP / Postal code
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="postal-code"
            id="postal-code"
            value={values.zip}
            onChange={(e) => handleChange("zip", e)}
            autoComplete="postal-code"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {editMode.zip && (
            <>
              <button
                className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 m-2"
                onClick={() => handleCancel("zip")}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2"
                onClick={() => handleSave("zip")}
              >
                Save
              </button>
            </>
          )}
          {!editMode.zip && (
            <button
              className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 m-2"
              onClick={() => handleEdit("zip")}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdressDetails;
