import React, { useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

export const Accordion = ({ selectedFilters, setSelectedFilters }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleFilterChange = (title, subItem) => {
    setSelectedFilters((prev) => {
      const currentFilters = prev[title] || [];
      const newFilters = currentFilters.includes(subItem)
        ? currentFilters.filter((item) => item !== subItem)
        : [...currentFilters, subItem];
      return {
        ...prev,
        [title]: newFilters,
      };
    });
  };

  const handleUnselectAll = (title) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [title]: [], // Clears all selected filters for this title
    }));
  };

  const accordionItems = [
    {
      title: "IDEAL FOR",
      content: ["Men", "Women", "Baby & Kids"],
    },
    {
      title: "OCCASION",
      content: ["Work", "Casual", "Party", "Sports"],
    },
    {
      title: "FABRIC",
      content: ["Cotton", "Denim", "Silk", "Wool"],
    },
    {
      title: "SEGMENT",
      content: [
        "Electronics",
        "Clothing",
        "Home & Kitchen",
        "Beauty & Personal Care",
      ],
    },
    {
      title: "SUITABLE FOR",
      content: ["Work", "Casual", "Party"],
    },
    {
      title: "RAW MATERIALS",
      content: ["Cotton", "Denim", "Silk", "Wool"],
    },
    {
      title: "PATTERN",
      content: ["Animal Print", "Argyle", "Floral", "Solid"],
    },
  ];

  return (
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.title}</h3>{" "}
            {openIndex === index ? (
              <ExpandLessRoundedIcon />
            ) : (
              <ExpandMoreRoundedIcon />
            )}
          </button>
          <p>All</p>
          <div
            className={`accordion-content ${openIndex === index ? "show" : ""}`}
          >
            <div
              className="unselect-all-btn"
              onClick={() => handleUnselectAll(item.title)}
            >
              Unselect All
            </div>
            {item.content.map((subItem, subIndex) => (
              <div key={subIndex} className="checkbox-container">
                <input
                  type="checkbox"
                  id={`checkbox-${index}-${subIndex}`}
                  checked={
                    selectedFilters[item.title]?.includes(subItem) || false
                  }
                  onChange={() => handleFilterChange(item.title, subItem)}
                />
                <label htmlFor={`checkbox-${index}-${subIndex}`}>
                  {subItem}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
