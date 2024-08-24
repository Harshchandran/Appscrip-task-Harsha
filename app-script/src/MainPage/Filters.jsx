import React from "react";
import { Accordion } from "./Accordian";

export const Filters = ({ selectedFilters, setSelectedFilters }) => {
  return (
    <>
      <div className="filter-page-container">
        <Accordion
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
    </>
  );
};
