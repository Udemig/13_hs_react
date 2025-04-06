import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import Card from "../../components/Card";

const Home = () => {
  // useContext ile ilgili context'e abone ol ve ürünleri al
  const { products } = useContext(ProductContext);

  return (
    <div className="container mt-4">
      <h2>{products.length} Ürün bulundu </h2>

      {products.map((product) => (
        <Card key={product.id} />
      ))}
    </div>
  );
};

export default Home;
