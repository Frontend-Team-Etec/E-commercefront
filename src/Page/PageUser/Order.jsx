import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { clearCart, getCartItems } from "../../utils/cart";
import { createOrder } from "../../utils/orders";

const Order = () => {
    const location = useLocation();
    const cartItems = location.state?.product ? [] : (location.state?.cartItems ?? getCartItems());
    const orderItems = cartItems.length > 0
        ? cartItems
        : [{ product: location.state?.product, quantity: location.state?.quantity ?? 1, color: location.state?.color ?? "Default" }];
    const product = orderItems[0]?.product;
    const quantity = orderItems[0]?.quantity ?? 1;
    const color = orderItems[0]?.color ?? product?.colors?.[0] ?? "Default";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!product) {
        return (
            <div className="min-h-screen bg-slate-100 p-10 text-slate-800">
                <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-md">
                    <h1 className="text-3xl font-bold">No product selected</h1>
                    <p className="mt-3 text-slate-600">Please choose a product before placing an order.</p>
                    <Link to="/products" className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">
                        Go to Products
                    </Link>
                </div>
            </div>
        );
    }

    const total = orderItems.reduce(
        (sum, item) => sum + (item.product?.price ?? 0) * (item.quantity ?? 1),
        0
    );

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = Object.values(formData).every((value) => value.trim() !== "");

        if (!isValid) {
            alert("Please complete all fields before placing your order.");
            return;
        }

        setIsSubmitted(true);
        createOrder({ customer: formData.name, items: orderItems, total });
        clearCart();
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#f0f0f0] px-4 py-10 text-slate-800 md:px-8">
                <div className="mx-auto max-w-5xl rounded-[28px] bg-[#f4f4f4] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] md:p-12">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#cfead9] text-4xl text-[#1a9a5a] shadow-inner">
                        ✓
                    </div>

                    <h1 className="mt-8 text-5xl font-black tracking-[-0.06em] text-slate-900">Order success</h1>

                    <p className="mx-auto mt-8 max-w-4xl text-2xl leading-relaxed text-slate-700">
                        Thank you, {formData.name}. Your order for {product ? product.name : `${orderItems.length} item${orderItems.length > 1 ? 's' : ''}`} has been placed successfully.
                    </p>

                    <p className="mx-auto mt-6 max-w-3xl text-2xl leading-relaxed text-slate-700">
                        We will contact you at {formData.email} soon.
                    </p>

                    <Link
                        to="/home"
                        className="mt-10 inline-flex items-center justify-center rounded-xl bg-[#1e7de8] px-10 py-5 text-2xl font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#166fd7]"
                    >
                        Continue shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800 md:px-8">
            <div className="mx-auto max-w-5xl rounded-[28px] bg-white p-6 shadow-lg md:p-8">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-3xl font-black text-slate-900">Order</h1>
                    <Link to="/products" className="text-sm font-semibold text-blue-600">
                        Continue shopping
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-3">
                            <div className="h-28 w-28 overflow-hidden rounded-xl bg-slate-100">
                                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                            </div>

                            <div className="flex-1">
                                <div className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                                    {product.category}
                                </div>
                                <h2 className="mt-2 text-2xl font-black text-slate-900">{product.name}</h2>
                                <div className="mt-2 flex items-center gap-4 text-sm text-slate-600">
                                    <span>Color: {color}</span>
                                    <span>Qty: {quantity}</span>
                                </div>
                            </div>

                            <div className="flex items-center text-2xl font-black text-slate-900">
                                ${product.price}
                            </div>
                        </div>

                        <div className="mt-6 space-y-4 border-t border-slate-200 pt-5">
                            <div className="flex items-center justify-between text-slate-600">
                                <span>Items</span>
                                <span>{orderItems.length}</span>
                            </div>
                            <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xl font-black text-slate-900">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900">Customer information</h3>

                        <div className="mt-4 space-y-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500"
                                    placeholder="Enter your phone"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-slate-700">Address</label>
                                <textarea
                                    name="address"
                                    rows="3"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500"
                                    placeholder="Enter your address"
                                />
                            </div>
                        </div>

                        <button type="submit" className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-blue-500">
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;
