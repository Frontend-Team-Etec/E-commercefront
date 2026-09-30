import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaHeart, FaSearch, FaStar } from "react-icons/fa";
import { products } from "../data/products";
import { addCartItem } from "../utils/cart";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(() => {
        const product = products.find((item) => item.id === Number(id));
        return product?.colors?.[0] ?? "";
    });

    const product = products.find((item) => item.id === Number(id));
    const activeColor = product?.colors?.includes(selectedColor)
        ? selectedColor
        : product?.colors?.[0] ?? "";

    const handleBuyNow = () => {
        navigate('/order', {
            state: {
                product,
                quantity,
                color: activeColor,
            },
        });
    };

    const handleAddToCart = () => {
        addCartItem({
            product,
            quantity,
            color: activeColor,
        });
        navigate('/basket');
    };

    if (!product) {
        return (
            <div className="min-h-screen bg-[#dfe3e6] p-10">
                <h1 className="text-3xl font-bold">Product Not Found</h1>
                <Link to="/products" className="mt-4 inline-block text-blue-600">
                    Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#dfe3e6] text-slate-800">
            <header className="bg-[#071d2f] text-white">
                <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-4">
                    <div className="text-4xl font-black tracking-tight">MyShop</div>

                    <nav className="hidden items-center gap-10 text-sm font-medium text-slate-200 md:flex">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <Link to="/products" className="hover:text-white">Shop</Link>
                        <Link to="/category" className="hover:text-white">Category</Link>
                        <Link to="/" className="hover:text-white">Other</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="h-12 w-52 rounded-xl border border-slate-300 bg-white/85 pl-10 pr-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500"
                            />
                        </div>

                        <button className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-500">
                            Login
                        </button>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-[1200px] px-4 py-10">
                <div className="rounded-[18px] bg-[#f3f3f3] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                    <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_1fr]">
                        <div className="rounded-[20px] bg-[#e3e3e3] p-5">
                            <div className="overflow-hidden rounded-[18px] bg-[#f5f5f5]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-[420px] w-full object-cover"
                                />
                            </div>

                            <div className="mt-5 grid grid-cols-3 gap-3">
                                {product.gallery.map((item, index) => (
                                    <div
                                        key={`${item}-${index}`}
                                        className={`overflow-hidden rounded-[10px] border-2 ${index === 0 ? "border-slate-900" : "border-transparent"} bg-white`}
                                    >
                                        <img src={item} alt={product.name} className="h-20 w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="text-[15px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                {product.category}
                            </div>

                            <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-slate-800">
                                {product.name}
                            </h1>

                            <div className="mt-4 flex items-center gap-2 text-slate-500">
                                <span className="text-amber-400">
                                    <FaStar />
                                </span>
                                <span className="text-lg font-semibold text-slate-700">{product.rating}</span>
                                <span className="text-sm">({product.reviews} view)</span>
                            </div>

                            <div className="mt-6 flex items-end gap-3">
                                <span className="text-5xl font-extrabold text-slate-800">${product.price}</span>
                                <span className="text-3xl text-slate-400 line-through">${product.oldPrice}</span>
                                <span className="mb-1 rounded-md bg-red-100 px-2 py-1 text-sm font-bold text-red-500">
                                    -{product.discount}%
                                </span>
                            </div>

                            <div className="mt-6 text-lg font-semibold text-green-600">
                                In Stock ({product.stock} available)
                            </div>

                            <p className="mt-4 max-w-[620px] text-base leading-7 text-slate-600">
                                {product.description}
                            </p>

                            <div className="mt-6">
                                <p className="text-base font-medium text-slate-700">Color: {activeColor}</p>
                                <div className="mt-3 flex gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => setSelectedColor(color)}
                                            className={
                                                activeColor === color
                                                    ? "rounded-xl border border-blue-500 bg-blue-50 px-5 py-3 text-base font-medium text-blue-700 transition"
                                                    : "rounded-xl border border-slate-300 bg-white px-5 py-3 text-base font-medium text-slate-700 transition hover:border-slate-400"
                                            }
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8">
                                <p className="text-base font-medium text-slate-700">Quantity</p>
                                <div className="mt-3 inline-flex items-center overflow-hidden rounded-xl border border-slate-300 bg-white">
                                    <button
                                        type="button"
                                        onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                                        className="h-12 w-12 text-2xl text-slate-600 transition hover:bg-slate-100"
                                    >
                                        -
                                    </button>
                                    <span className="min-w-[72px] text-center text-2xl font-semibold text-slate-700">
                                        {quantity}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setQuantity((value) => value + 1)}
                                        className="h-12 w-12 text-2xl text-slate-600 transition hover:bg-slate-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500"
                                >
                                    Add to Cart
                                </button>

                                <button
                                    type="button"
                                    onClick={handleBuyNow}
                                    className="rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-slate-400"
                                >
                                    Buy Now
                                </button>

                                <button
                                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-300 bg-white text-red-500 transition hover:border-red-200 hover:bg-red-50"
                                    aria-label="Wishlist"
                                >
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetail;