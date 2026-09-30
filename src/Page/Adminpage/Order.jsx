import React, { useState } from "react";
import "./Order.css";

const orders = [
    {
        id: "#ORD-1024",
        customer: "John Smith",
        product: "Wireless Headphones",
        date: "18 Sep 2026",
        total: "$249.00",
        status: "Paid",
        shipping: "Delivered",
    },
    {
        id: "#ORD-1023",
        customer: "Sarah Lee",
        product: "Smart Watch",
        date: "16 Sep 2026",
        total: "$189.00",
        status: "Pending",
        shipping: "Processing",
    },
    {
        id: "#ORD-1022",
        customer: "Michael Kim",
        product: "Laptop Pro 14",
        date: "14 Sep 2026",
        total: "$1,299.00",
        status: "Paid",
        shipping: "Shipped",
    },
    {
        id: "#ORD-1021",
        customer: "Emma Wilson",
        product: "Phone 15 Pro",
        date: "12 Sep 2026",
        total: "$899.00",
        status: "Cancelled",
        shipping: "Cancelled",
    },
    {
        id: "#ORD-1020",
        customer: "Dara Chan",
        product: "Bluetooth Speaker",
        date: "09 Sep 2026",
        total: "$119.00",
        status: "Paid",
        shipping: "Delivered",
    },
];

const summary = [
    { label: "Total Orders", value: "1,248", detail: "+12.4% this week" },
    { label: "Pending", value: "84", detail: "Needs review" },
    { label: "Completed", value: "1,102", detail: "88.3% success rate" },
    { label: "Revenue", value: "$48,240", detail: "+8.1% vs last month" },
];

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
