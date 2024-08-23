import React, { useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { SortingComponent } from "./SortingComponent";
import { Filters } from "./Filters";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

export const Content = () => {
  const [productData, setProductData] = useState([]);

  const [showFilters, setShowFilters] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  async function fetchData() {
    try {
      const api = `https://fakestoreapi.com/products?sort=${selectedOption}`;
      const response = await fetch(api);
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [selectedOption]);

  const handleFilterDisplay = () => {
    setShowFilters((prevState) => !prevState);
  };

  return (
    <>
      <div className="content-container">
        <div className="content-header">
          <div className="filters-display-container">
            <h3>{productData.length} ITEMS</h3>
            <button className="filters-btn" onClick={handleFilterDisplay}>
              {showFilters ? (
                <>
                  <NavigateBeforeRoundedIcon /> HIDE FILTERS
                </>
              ) : (
                <>
                  <NavigateNextRoundedIcon /> SHOW FILTERS
                </>
              )}
            </button>
          </div>
          <SortingComponent
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className="content-body">
          {showFilters && <Filters />}
          <ProductList productData={productData} showFilters={showFilters} />
        </div>
      </div>

      <div className="mobile-content-container">
        <div className="content-header">
          <div onClick={handleFilterDisplay}>FILTERS </div>
          <hr className="content-header-divider"></hr>
          <div>
            <SortingComponent
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </div>
        <div className="content-body">
          {showFilters && <Filters />}
          <ProductList productData={productData} showFilters={true} />
        </div>
      </div>
    </>
  );
};
