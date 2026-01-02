import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex gap-6">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="gender"
          value="male"
          className="radio radio-primary"
        />
        <span className="text-sm font-medium">Male</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="gender"
          value="female"
          className="radio radio-primary"
        />
        <span className="text-sm font-medium">Female</span>
      </label>
    </div>
  );
};

export default GenderCheckBox;
