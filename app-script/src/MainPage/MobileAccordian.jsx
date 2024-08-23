import React, { useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { Dialog, DialogContent } from "@mui/material";

const Modal = ({ open, onClose, children }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export const MobileAccordian = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCheckboxChange = (index, subIndex) => {
    setCheckedItems((prev) => ({
      ...prev,
      [`${index}-${subIndex}`]: !prev[`${index}-${subIndex}`],
    }));
  };

  const handleUnselectAll = (index) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev };
      Object.keys(newCheckedItems).forEach((key) => {
        if (key.startsWith(`${index}-`)) {
          delete newCheckedItems[key];
        }
      });
      return newCheckedItems;
    });
  };

  const accordionItems = [
    { title: "IDEAL FOR", content: ["Men", "Women", "Baby & Kids"] },
    { title: "OCCASION", content: ["Work", "Casual", "Party"] },
    { title: "FABRIC", content: ["Cotton", "Denim", "Silk", "Wool"] },
    { title: "SUITABLE FOR", content: ["Work", "Casual", "Party"] },
    { title: "RAW MATERIALS", content: ["Cotton", "Denim", "Silk", "Wool"] },
    {
      title: "PATTERN",
      content: ["Animal Print", "Argyle", "Floral", "Solid"],
    },
  ];

  return (
    <>
      <button onClick={() => setModalOpen(true)}>FILTERS</button>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="accordion">
          {accordionItems.map((item, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.title}</h3>
                {openIndex === index ? (
                  <ExpandLessRoundedIcon />
                ) : (
                  <ExpandMoreRoundedIcon />
                )}
              </button>
              <p>All</p>
              <div
                className={`accordion-content ${
                  openIndex === index ? "show" : ""
                }`}
              >
                <div
                  className="unselect-all"
                  onClick={() => handleUnselectAll(index)}
                >
                  Unselect All
                </div>
                {item.content.map((subItem, subIndex) => (
                  <div key={subIndex} className="checkbox-container">
                    <input
                      type="checkbox"
                      id={`checkbox-${index}-${subIndex}`}
                      checked={!!checkedItems[`${index}-${subIndex}`]}
                      onChange={() => handleCheckboxChange(index, subIndex)}
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
      </Modal>
    </>
  );
};
