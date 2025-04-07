import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import Card from "../../components/Card";

const Home = () => {
  // useContext ile ilgili context'e abone ol ve ürünleri al
  const { products, selectedCategory } = useContext(ProductContext);

  return (
    <div className="container mt-4">
      {/* selectedCategory all değilse seçili kategorinin adını render et  */}
      {selectedCategory != "all" && (
        <h2>
          <span className="text-primary">{selectedCategory}</span> için ürünler
        </h2>
      )}
      <h2>{products.length} ürün bulundu </h2>

      <div className="wrapper">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
