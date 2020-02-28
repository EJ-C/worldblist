import React from "react";
import Brands from "./Brands";

const BrandsList = ({ brands }) => {
  return (
    <div>
      {brands.map((user, i) => {
        return <Brands key={i} id={brands[i].id} name={brands[i].name} />;
      })}
    </div>
  );
};

export default BrandsList;
