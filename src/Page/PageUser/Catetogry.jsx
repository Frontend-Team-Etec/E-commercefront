import { Link } from "react-router-dom";
import { getProducts } from "../../data/products";

const Category = () => {
  const categories = [...new Set(getProducts().map((product) => product.category))];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-4">
        Category
      </h1>

      <p className="mb-6 text-gray-600">Choose a category to see its available products.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Link key={category} to={`/products?category=${encodeURIComponent(category)}`} className="rounded-xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-2xl font-bold">{category}</h2>
            <p className="mt-2 text-gray-600">Browse {category} products</p>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Category;
