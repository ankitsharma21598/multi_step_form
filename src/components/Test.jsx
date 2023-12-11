import React, { useState } from "react";

const Test = () => {
  const [value, setValue] = useState("");
  const [oldValue, setOldValue] = useState(value);
  const [editMode, setEditMode] = useState(true);

  const handleEdit = () => {
    setOldValue(value);
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setValue(oldValue);
  };

  const handleSave = () => {
    setEditMode(false);
    setOldValue(value);
    // You can add logic to save the value to your database here
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={value}
          readOnly={!editMode}
        />
        {editMode && (
          <>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </>
        )}
        {!editMode && <button onClick={handleEdit}>Edit</button>}
      </div>
    </div>
  );
};

export default Test;