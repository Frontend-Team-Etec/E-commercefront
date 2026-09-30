import { Link, useSearchParams } from "react-router-dom";

const Category = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("name");

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-4">
        Category
      </h1>

      {category ? (
        <div className="bg-white p-8 rounded-xl shadow">

          <h2 className="text-3xl font-bold">
            {category}
          </h2>

          <p className="text-gray-600 mt-2">
            Products in {category} category
          </p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            View Products
          </Link>

        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          <Link
            to="/category?name=Electronics"
            className="bg-white p-8 rounded-xl shadow"
          >
            <h2 className="text-2xl font-bold">
              Electronics
            </h2>
          </Link>

          <Link
            to="/category?name=Shoes"
            className="bg-white p-8 rounded-xl shadow"
          >
            <h2 className="text-2xl font-bold">
              Shoes
            </h2>
          </Link>

          <Link
            to="/category?name=Clothes"
            className="bg-white p-8 rounded-xl shadow"
          >
            <h2 className="text-2xl font-bold">
              Clothes
            </h2>
          </Link>

        </div>
      )}

    </div>
  );
};

export default Category;