import { useEffect, useState } from "react";
import "./App.css";
import { ProductCard } from "./components";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products").then((res) =>
      res.json().then((data) => setProducts(data?.products))
    );
  }, []);

  if (!products) return <div>Loading...</div>;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 justify-items-center w-fit mx-auto">
      {products?.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </section>
  );
}

export default App;
