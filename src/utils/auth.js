const USERS_KEY = "myshop_users";
const SESSION_KEY = "myshop_session";

export const getUsers = () => {
    try {
        const users = JSON.parse(window.localStorage.getItem(USERS_KEY));
        return Array.isArray(users) ? users : [];
    } catch {
        return [];
    }
};

export const saveUsers = (users) => {
    window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
    window.dispatchEvent(new Event("users-updated"));
};

export const registerUser = (user) => {
    const users = getUsers();
    if (users.some((item) => item.email.toLowerCase() === user.email.toLowerCase())) {
        return { ok: false, message: "An account with this email already exists." };
    }

    saveUsers([...users, { ...user, id: Date.now(), image: "" }]);
    return { ok: true };
};

export const loginUser = ({ email, password, role }) => {
    const user = getUsers().find((item) =>
        item.email.toLowerCase() === email.toLowerCase() && item.password === password && item.role === role
    );

    if (!user) return { ok: false, message: "Incorrect email, password, or role. Please register first." };

    window.localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email, role: user.role }));
    return { ok: true, user };
};
