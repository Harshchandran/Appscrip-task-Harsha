import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ productData, showFilters }) => {
  return (
    <>
      <div
        className={`product-List ${showFilters ? " " : "product-List-Expand"}`}
      >
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showFilters={showFilters}
          />
        ))}
      </div>
    </>
  );
};
