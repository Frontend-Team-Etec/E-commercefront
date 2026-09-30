const CART_KEY = 'myshop_cart';

export const getCartItems = () => {
    if (typeof window === 'undefined') {
        return [];
    }

    try {
        const saved = window.localStorage.getItem(CART_KEY);
        const parsed = saved ? JSON.parse(saved) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
};

export const getCartCount = () => getCartItems().reduce(
    (total, item) => total + (item.quantity ?? 0),
    0
);

export const saveCartItems = (items) => {
    if (typeof window === 'undefined') {
        return;
    }

    window.localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('cart-updated'));
};

export const addCartItem = (item) => {
    const currentItems = getCartItems();
    const index = currentItems.findIndex(
        (cartItem) => cartItem.product.id === item.product.id && cartItem.color === item.color
    );

    if (index >= 0) {
        currentItems[index].quantity += item.quantity;
    } else {
        currentItems.push(item);
    }

    saveCartItems(currentItems);
    return currentItems;
};

export const clearCart = () => {
    if (typeof window === 'undefined') {
        return;
    }

    window.localStorage.removeItem(CART_KEY);
    window.dispatchEvent(new Event('cart-updated'));
};
