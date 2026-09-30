import { useEffect, useMemo, useState } from "react";
import { getOrders } from "../../utils/orders";
import "./Order.css";

const statusStyles = {
    Paid: "order-tag--paid",
    Pending: "order-tag--pending",
    Cancelled: "order-tag--cancelled",
};

const shippingStyles = {
    Delivered: "order-tag--delivered",
    Processing: "order-tag--processing",
    Shipped: "order-tag--shipped",
    Cancelled: "order-tag--cancelled",
};

const OrderPage = () => {
    const [search, setSearch] = useState("");
    const [orders, setOrders] = useState(getOrders);
    useEffect(() => {
        const refresh = () => setOrders(getOrders());
        window.addEventListener("orders-updated", refresh);
        return () => window.removeEventListener("orders-updated", refresh);
    }, []);
    const summary = useMemo(() => {
        const completed = orders.filter((order) => order.status === "Paid").length;
        const revenue = orders.reduce((total, order) => total + Number(order.total.replace(/[^0-9.]/g, "")), 0);
        return [
            { label: "Total Orders", value: orders.length, detail: "Orders received" },
            { label: "Pending", value: orders.filter((order) => order.status === "Pending").length, detail: "Needs review" },
            { label: "Completed", value: completed, detail: "Paid orders" },
            { label: "Revenue", value: `$${revenue.toFixed(2)}`, detail: "Order revenue" },
        ];
    }, [orders]);

    const filteredOrders = orders.filter((order) => {
        const term = search.toLowerCase();

        return (
            order.id.toLowerCase().includes(term) ||
            order.customer.toLowerCase().includes(term) ||
            order.product.toLowerCase().includes(term) ||
            order.date.toLowerCase().includes(term) ||
            order.status.toLowerCase().includes(term) ||
            order.shipping.toLowerCase().includes(term)
        );
    });

    return (
        <div className="order-page">
            <div className="order-page__inner">
                <div className="order-header">
                    <div>
                        <p className="order-header__eyebrow">Orders</p>
                        <h1 className="order-header__title">Order Management</h1>
                    </div>

                    <button className="order-add-btn">+ Add New Order</button>
                </div>

                <div className="order-summary">
                    {summary.map((item, index) => (
                        <div key={item.label} className="order-summary__card">
                            <div className="order-summary__top">
                                <p className="order-summary__label">{item.label}</p>
                                <div className={`order-summary__icon ${index % 2 === 0 ? "blue" : "violet"}`}>
                                    {index === 0 ? "📦" : index === 1 ? "⏳" : index === 2 ? "✅" : "💰"}
                                </div>
                            </div>
                            <h2 className="order-summary__value">{item.value}</h2>
                            <p className="order-summary__detail">{item.detail}</p>
                        </div>
                    ))}
                </div>

                <div className="order-panel">
                    <div className="order-panel__header">
                        <div>
                            <h2 className="order-panel__title">Recent Orders</h2>
                            <p className="order-panel__subtitle">Track and manage all customer orders</p>
                        </div>

                        <div className="order-panel__controls">
                            <input
                                type="text"
                                placeholder="Search orders..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="order-search"
                            />
                            <button className="order-filter-btn">Filter</button>
                        </div>
                    </div>

                    <div className="order-table-wrap">
                        <table className="order-table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Product</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Shipping</th>
                                    <th style={{ textAlign: "right" }}>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredOrders.length > 0 ? (
                                    filteredOrders.map((order) => (
                                        <tr key={order.id}>
                                            <td className="order-table__id">{order.id}</td>
                                            <td>{order.customer}</td>
                                            <td>{order.product}</td>
                                            <td>{order.date}</td>
                                            <td style={{ fontWeight: 800 }}>{order.total}</td>
                                            <td>
                                                <span className={`order-tag ${statusStyles[order.status]}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`order-tag ${shippingStyles[order.shipping]}`}>
                                                    {order.shipping}
                                                </span>
                                            </td>
                                            <td className="order-table__action">
                                                <button className="order-view-btn">View</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="order-empty">
                                            No orders found for your search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
