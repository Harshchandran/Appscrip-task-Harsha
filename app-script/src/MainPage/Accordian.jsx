import React, { useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

export const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "IDEAL FOR",
      content: ["Men", "Women", "Baby & Kids"],
    },
    {
      title: "OCCASION",
      content: ["Work", "Casual", "Party"],
    },
    {
      title: "FABRIC",
      content: ["Cotton", "Denim", "Silk", "Wool"],
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
            <div onClick={""}>unselect all</div>
            {item.content.map((subItem, subIndex) => (
              <div key={subIndex} className="checkbox-container">
                <input type="checkbox" id={`checkbox-${index}-${subIndex}`} />
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
