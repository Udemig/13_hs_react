import React from "react";
import RestaurantDetail from "./RestaurantDetail";
import RestaurantProducts from "./RestaurantProducts";

const Detail = () => {
  return (
    <div>
      {/* Detail */}
      <div className="shadow">
        <div className="container">
          <RestaurantDetail />
        </div>
      </div>
      {/* Products */}
      <div className="shadow">
        <div className="container">
          <RestaurantProducts />
        </div>
      </div>
    </div>
  );
};

export default Detail;
