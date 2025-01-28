
import Product from "./Product"; 


const products = [
  {
    id: 1,
    name: "Mahomes Trikot",
    price: 120,
    available: true,
    image: "./src/assets/Trikot.avif",
  },
  {
    id: 2,
    name: "Wintermütze",
    price: 40,
    available: false,
    image: "./src/assets/Mutze.avif",
  },
  {
    id: 3,
    name: "Cap",
    price: 50,
    available: true,
    image: "./src/assets/Cap.avif",
  },
  {
    id: 4,
    name: "Jacke",
    price: 100,
    available: true,
    image: "./src/assets/Jacket.avif",
  },
];

function Card() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className=" text-4xl font-bold text-center text-white mb-6">Alle Produkte</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Card;
