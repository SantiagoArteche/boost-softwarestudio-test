import { useState } from "react";
import arrayProducts from "../../mockData.json";

export const Products = () => {
  const [products, setProducts] = useState(arrayProducts);
  const [priceSelected, setPriceSelected] = useState("1000000");

  const handleProducts = (values) => {
    const myValues = values.split(" ");

    const filterAndSortedProducts = arrayProducts
      .filter((prod) => prod.price >= myValues[0] && prod.price <= myValues[1])
      .sort((a, b) => a.price - b.price);

    handlePrice(myValues[1]);
    setProducts(filterAndSortedProducts);
  };

  const handlePrice = (value) => {
    setPriceSelected(value);
  };

  return (
    <div className="bg-yellow-400 flex flex-col justify-center items-center gap-5 pt-10 min-h-[85vh]">
      <h2 className="text-4xl md:text-5xl font-bold mb-5">Productos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-10 py-10 gap-10 ">
        <div className="flex flex-col items-center lg:col-span-1 border-black border-2 h-fit  text-black rounded pb-3 gap-2">
          <h3 className="text-2xl md:text-3xl font-semibold w-full text-center border-black border-b-2 mb-3">
            Filtros
          </h3>
          <button
            className={`text-xl hover:bg-black hover:text-white  w-full ${
              priceSelected === "1000000" && "bg-black text-white"
            }`}
            onClick={() => handleProducts("0 1000000")}
          >
            Todos los Productos
          </button>
          <button
            className={`text-xl hover:bg-black hover:text-white  w-full ${
              priceSelected === "49" && "bg-black text-white"
            }`}
            onClick={() => handleProducts("0 49")}
          >
            0$ - 49$
          </button>
          <button
            className={`text-xl hover:bg-black hover:text-white  w-full ${
              priceSelected === "70" && "bg-black text-white"
            }`}
            onClick={() => handleProducts("50 70")}
          >
            50$ - 70$
          </button>
          <button
            className={`text-xl hover:bg-black hover:text-white  w-full ${
              priceSelected === "100" && "bg-black text-white"
            }`}
            onClick={() => handleProducts("71 100")}
          >
            71$ - 100$
          </button>
        </div>
        <div className="grid lg:grid-cols-2 lg:col-span-2 gap-5">
          {products.map(({ id, description, image, name, price }) => {
            return (
              <div
                key={id}
                className="flex flex-col justify-between items-center border-2 border-black gap-3 py-10 rounded-lg  sm:w-auto md:w-[650px] lg:w-auto "
              >
                <img
                  src={image}
                  className="w-[200px] h-[150px] sm:w-[250px] sm:h-[200px] md:h-[250px] md:w-[300px] xl:w-[350px] xl:h-[300px]"
                />
                <div className="px-20 flex flex-col gap-5 items-center">
                  <h3 className="text-xl font-bold text-center">{name}</h3>
                  <p className="font-semibold text-center">{description}</p>
                  <span className="text-lg font-bold">$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
