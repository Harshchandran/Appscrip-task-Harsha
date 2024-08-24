import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

export const ProductCard = ({ product, showFilters }) => {
  return (
    <>
      <div
        className={`product-card ${showFilters ? " " : "expand-Product-List"}`}
      >
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <h2 className="product-title">{product.title}</h2>
        <div className="card-description-box">
          <p className="card-description">
            <span style={{ textDecoration: "underline" }}> Sign in</span> or
            Create an account to see Pricing
          </p>
          <div>
            <FavoriteBorderRoundedIcon />
          </div>
        </div>
      </div>
    </>
  );
};
