import { Link } from "react-router-dom";
import { products } from "../../data/products";

const Products = () => {
    return (
        <div className="min-h-screen bg-slate-100 px-4 py-8 md:px-8">
            <div className="mx-auto max-w-[1200px]">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Shop</p>
                        <h1 className="mt-2 text-4xl font-black text-slate-900">All products</h1>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                        <span className="text-sm text-slate-500">Showing</span>
                        <span className="text-lg font-bold text-slate-800">{products.length}</span>
                        <span className="text-sm text-slate-500">items</span>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="relative">
                                <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
                                <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
                                    -{product.discount}%
                                </span>
                            </div>

                            <div className="p-5">
                                <div className="text-sm font-medium text-slate-500">{product.category}</div>
                                <h2 className="mt-2 text-xl font-bold text-slate-900">{product.name}</h2>

                                <div className="mt-3 flex items-end justify-between">
                                    <div className="flex items-end gap-2">
                                        <span className="text-2xl font-black text-slate-900">${product.price}</span>
                                        <span className="text-sm text-slate-400 line-through">${product.oldPrice}</span>
                                    </div>
                                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-600">
                                        In stock
                                    </span>
                                </div>

                                <Link
                                    to={`/product/${product.id}`}
                                    className="mt-5 block rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
                                >
                                    View Detail
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;