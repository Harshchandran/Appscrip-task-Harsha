import React, { useState } from "react";

export const SortingComponent = ({ selectedOption, setSelectedOption }) => {
  const options = [
    { value: "recommended", label: "RECOMMENDED" },
    { value: "newest", label: "NEWEST FIRST" },
    { value: "popular", label: "POPULAR" },
    { value: "desc", label: "PRICE: HIGH TO LOW" },
    { value: "asc", label: "PRICE: LOW TO HIGH" },
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div>
        <select
          className="select-Language"
          name="language"
          id="language-select"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          {options.map((option) => (
            <option
              className="select-options"
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
