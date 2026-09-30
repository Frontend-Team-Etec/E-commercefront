const ORDERS_KEY = "myshop_orders";

export const getOrders = () => {
    try {
        const orders = JSON.parse(window.localStorage.getItem(ORDERS_KEY));
        return Array.isArray(orders) ? orders : [];
    } catch {
        return [];
    }
};

export const createOrder = ({ customer, items, total }) => {
    const order = {
        id: `#ORD-${Date.now().toString().slice(-6)}`,
        customer,
        product: items.map((item) => item.product.name).join(", "),
        date: new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date()),
        total: `$${total.toFixed(2)}`,
        status: "Pending",
        shipping: "Processing",
    };
    const orders = [order, ...getOrders()];
    window.localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    window.dispatchEvent(new Event("orders-updated"));
    return order;
};
