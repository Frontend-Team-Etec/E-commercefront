import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart, getCartItems } from '../../utils/cart';

const Basket = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(getCartItems);

    useEffect(() => {
        const refresh = () => setCartItems(getCartItems());
        window.addEventListener('cart-updated', refresh);
        return () => window.removeEventListener('cart-updated', refresh);
    }, []);

    if (!cartItems.length) {
        return (
            <div className="min-h-screen bg-slate-100 p-10 text-slate-800">
                <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-md">
                    <h1 className="text-3xl font-bold">Your basket is empty</h1>
                    <p className="mt-3 text-slate-600">Add products to your basket before placing an order.</p>
                    <Link to="/products" className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">
                        Go to Products
                    </Link>
                </div>
            </div>
        );
    }

    const total = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        navigate('/order', {
            state: {
                cartItems,
            },
        });
    };

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800 md:px-8">
            <div className="mx-auto max-w-5xl rounded-[28px] bg-white p-6 shadow-lg md:p-8">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-3xl font-black text-slate-900">Basket</h1>
                    <button
                        type="button"
                        onClick={() => clearCart()}
                        className="text-sm font-semibold text-red-600"
                    >
                        Clear basket
                    </button>
                </div>

                <div className="space-y-5">
                    {cartItems.map((item) => (
                        <div key={`${item.product.id}-${item.color}`} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center">
                            <img src={item.product.image} alt={item.product.name} className="h-24 w-24 rounded-xl object-cover" />

                            <div className="flex-1">
                                <div className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                                    {item.product.category}
                                </div>
                                <h2 className="mt-2 text-xl font-black text-slate-900">{item.product.name}</h2>
                                <div className="mt-2 flex items-center gap-4 text-sm text-slate-600">
                                    <span>Color: {item.color}</span>
                                    <span>Qty: {item.quantity}</span>
                                </div>
                            </div>

                            <div className="text-right text-xl font-black text-slate-900">
                                ${(item.product.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between text-lg font-bold text-slate-800">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    <button
                        type="button"
                        onClick={handleCheckout}
                        className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-blue-500"
                    >
                        Order from basket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Basket;
