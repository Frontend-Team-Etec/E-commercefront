import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { getCartItems } from "../utils/cart";

const categories = [
    { name: "Laptop", icon: "💻", link: "/products" },
    { name: "Audio", icon: "🎧", link: "/products" },
    { name: "Wearables", icon: "⌚", link: "/products" },
    { name: "Accessories", icon: "🎒", link: "/products" },
];

const featuredProducts = products.slice(0, 6);

const Home = () => {
    const [cartCount, setCartCount] = useState(() =>
        getCartItems().reduce((sum, item) => sum + item.quantity, 0)
    );

    useEffect(() => {
        const updateCount = () => {
            const items = getCartItems();
            const total = items.reduce((sum, item) => sum + item.quantity, 0);
            setCartCount(total);
        };

        updateCount();
        window.addEventListener('cart-updated', updateCount);

        return () => {
            window.removeEventListener('cart-updated', updateCount);
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-100 text-slate-800">
            <header className="bg-[#071d2f] text-white">
                <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-4">
                    <div className="text-4xl font-black tracking-tight">MyShop</div>

                    <nav className="hidden items-center gap-9 text-sm font-medium text-slate-200 md:flex">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <Link to="/products" className="hover:text-white">Shop</Link>
                        <Link to="/category" className="hover:text-white">Category</Link>
                        <Link to="/" className="hover:text-white">Other</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden rounded-xl border border-slate-500 bg-white/10 px-4 py-2 text-sm text-slate-200 md:block">
                            Search...
                        </div>

                        <Link to="/basket" className="relative flex items-center justify-center">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl text-slate-700 shadow-md">
                                🛒
                            </div>
                            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white shadow-lg">
                                {cartCount}
                            </span>
                        </Link>

                        <Link to="/login" className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-500">
                            Login
                        </Link>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-[1200px] px-4 py-8">
                <section className="rounded-[28px] bg-gradient-to-r from-sky-200 via-white to-slate-100 p-8 shadow-md md:p-10">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                                New collection
                            </p>
                            <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                                Smart tech for your everyday life
                            </h1>
                            <p className="mt-4 max-w-xl text-lg text-slate-600">
                                Upgrade your workspace, entertainment, and lifestyle with premium devices, audio, and accessories.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    to="/products"
                                    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500"
                                >
                                    Shop now
                                </Link>
                                <Link
                                    to="/category"
                                    className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400"
                                >
                                    Explore categories
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="relative w-full max-w-[500px] overflow-hidden rounded-[28px] bg-white p-4 shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80"
                                    alt="Featured device"
                                    className="h-[420px] w-full rounded-[22px] object-cover"
                                />
                                <div className="absolute bottom-8 left-8 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                                        Daily deal
                                    </div>
                                    <div className="mt-1 text-3xl font-black text-slate-900">$699</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-10">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-3xl font-black text-slate-900">Categories</h2>
                        <Link to="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                            View all
                        </Link>
                    </div>

                    <div className="grid gap-5 md:grid-cols-4">
                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                to={category.link}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="text-4xl">{category.icon}</div>
                                <div className="mt-4 text-xl font-bold text-slate-800">{category.name}</div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mt-12">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-3xl font-black text-slate-900">Featured products</h2>
                        <Link to="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                            See more
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                <div className="relative">
                                    <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
                                    <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
                                        -{product.discount}%
                                    </span>
                                </div>

                                <div className="p-5">
                                    <div className="text-sm font-medium text-slate-500">{product.category}</div>
                                    <h3 className="mt-2 text-xl font-bold text-slate-900">{product.name}</h3>

                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="flex items-end gap-2">
                                            <span className="text-2xl font-black text-slate-900">${product.price}</span>
                                            <span className="text-sm text-slate-400 line-through">${product.oldPrice}</span>
                                        </div>
                                        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-600">
                                            {product.stock} left
                                        </span>
                                    </div>

                                    <Link
                                        to={`/product/${product.id}`}
                                        className="mt-5 block rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;