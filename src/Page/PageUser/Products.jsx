import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getProducts } from "../../data/products";

const Products = () => {
    const [searchParams] = useSearchParams();
    const [catalogue, setCatalogue] = useState(getProducts);
    const [search, setSearch] = useState("");
    const category = searchParams.get("category");
    const filteredProducts = useMemo(() => catalogue.filter((product) => {
        const matchesCategory = !category || product.category === category;
        const term = search.trim().toLowerCase();
        const matchesSearch = !term || product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term);
        return matchesCategory && matchesSearch;
    }), [catalogue, category, search]);

    useEffect(() => {
        const refresh = () => setCatalogue(getProducts());
        window.addEventListener("products-updated", refresh);
        return () => window.removeEventListener("products-updated", refresh);
    }, []);

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-8 md:px-8">
            <div className="mx-auto max-w-[1200px]">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Shop</p>
                        <h1 className="mt-2 text-4xl font-black text-slate-900">{category ? `${category} products` : "All products"}</h1>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                        <span className="text-sm text-slate-500">Showing</span>
                        <span className="text-lg font-bold text-slate-800">{filteredProducts.length}</span>
                        <span className="text-sm text-slate-500">items</span>
                    </div>
                </div>

                <div className="mb-6 flex gap-3">
                    <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products..." className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500" />
                    {category && <Link to="/products" className="shrink-0 rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700">Clear filter</Link>}
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="relative">
                                <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
                                <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
                                    {product.discount ? `-${product.discount}%` : "New"}
                                </span>
                            </div>

                            <div className="p-5">
                                <div className="text-sm font-medium text-slate-500">{product.category}</div>
                                <h2 className="mt-2 text-xl font-bold text-slate-900">{product.name}</h2>

                                <div className="mt-3 flex items-end justify-between">
                                    <div className="flex items-end gap-2">
                                        <span className="text-2xl font-black text-slate-900">${product.price}</span>
                                        {product.oldPrice && <span className="text-sm text-slate-400 line-through">${product.oldPrice}</span>}
                                    </div>
                                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-600">
                                        {product.stock ?? product.qty ?? 0} in stock
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
                {filteredProducts.length === 0 && <p className="rounded-2xl bg-white p-8 text-center text-slate-500 shadow-sm">No products match your search.</p>}
            </div>
        </div>
    );
};

export default Products;
