import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const Users = () => {

    const [show, setShow] = useState(false);

    const [addData, setAddData] = useState([
        {
            id: 11,
            name: "Dara",
            email: "Dara@gmail.com",
            role: "Manager",
            image: "",
        },
        {
            id: 12,
            name: "Heng Sok",
            email: "HengSok@gmail.com",
            role: "User",
            image: "",
        },
        {
            id: 13,
            name: "Dara Sok",
            email: "Darasok@gmail.com",
            role: "Manager",
            image: "",
        },
        {
            id: 14,
            name: "Mengly",
            email: "Mengly@gmail.com",
            role: "Admin",
            image: "",
        },
        {
            id: 15,
            name: "Sokphaha",
            email: "Sokphaha@gmail.com",
            role: "User",
            image: "",
        },
        {
            id: 16,
            name: "Kun Tha",
            email: "huntha@gmail.com",
            role: "User",
            image: "",
        },
        {
            id: 17,
            name: "Nita",
            email: "Nita@gmail.com",
            role: "User",
            image: "",
        },
    ]);



    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("User");
    const [image, setImage] = useState("");

    const [search, setSearch] = useState("");


    const [editId, setEditId] = useState(null);



    const resetForm = () => {
        setId("");
        setName("");
        setEmail("");
        setPassword("");
        setRole("User");
        setImage("");
        setEditId(null);
    };



    function submitdata(e) {
        e.preventDefault();

        if (editId !== null) {
            setAddData((data) =>
                data.map((user) =>
                    user.id === editId
                        ? {
                            ...user,
                            id: Number(id),
                            name: name,
                            email: email,
                            password: password,
                            role: role,
                            image: image,
                        }
                        : user
                )
            );

            resetForm();
            setShow(false);

            return;
        }

        const users = {
            id: Number(id),
            name: name,
            email: email,
            password: password,
            role: role,
            image: image,
        };

        setAddData((data) => [...data, users]);

        resetForm();
        setShow(false);
    }



    const edituser = (user) => {
        setEditId(user.id);

        setId(user.id);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password || "");
        setRole(user.role);
        setImage(user.image || "");

        setShow(true);
    };



    const deleteUser = (userId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (confirmDelete) {
            setAddData((data) =>
                data.filter((user) => user.id !== userId)
            );
        }
    };


    const result = addData.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
         
        <div className="min-h-screen bg-slate-50 p-6">

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">



                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                    <div className="flex items-center gap-4">

                        <img
                            className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwgk_boThzfsIe5B3jdIazepvkjABfwt37inqIW68siIONkxsPOPRKR81&s=10"
                            alt="Management"
                        />

                        <div>

                            <h3 className="text-xl font-bold text-blue-600 tracking-wide">
                                MANAGEMENT
                            </h3>

                            <p className="text-sm text-slate-500">
                                User Administration
                            </p>

                        </div>

                    </div>


                    <div className="flex gap-3">

                        <button
                            className="px-5 py-2.5 rounded-xl border border-cyan-400
                         text-cyan-600 font-medium
                         hover:bg-cyan-50 transition shadow-sm"
                        >
                            Export
                        </button>


                        <button
                            onClick={() => {
                                resetForm();
                                setShow(true);
                            }}
                            className="px-5 py-2.5 rounded-xl bg-green-500
                         text-white font-medium
                         hover:bg-green-600 transition shadow-sm"
                        >
                            + Add User
                        </button>

                    </div>

                </div>


                {/* ================= TITLE ================= */}

                <div className="mt-8">

                    <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
                        User
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Review accounts, roles, account status, and team ownership.
                    </p>

                </div>


                {/* ================= STATISTICS ================= */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">

                    {/* Total Users */}

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">

                        <p className="text-sm text-slate-500">
                            Total Users
                        </p>

                        <h2 className="text-3xl font-bold text-slate-800 mt-2">
                            {addData.length}
                        </h2>

                        <p className="text-sm text-green-500 mt-2">
                            ↑ 12% this month
                        </p>

                    </div>


                    {/* Active Users */}

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">

                        <p className="text-sm text-slate-500">
                            Active Users
                        </p>

                        <h2 className="text-3xl font-bold text-green-500 mt-2">
                            {addData.length}
                        </h2>

                        <p className="text-sm text-slate-500 mt-2">
                            Currently active
                        </p>

                    </div>


                    {/* Admins */}

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">

                        <p className="text-sm text-slate-500">
                            Admins
                        </p>

                        <h2 className="text-3xl font-bold text-blue-600 mt-2">
                            {
                                addData.filter(
                                    (user) =>
                                        user.role.toLowerCase() === "admin"
                                ).length
                            }
                        </h2>

                        <p className="text-sm text-slate-500 mt-2">
                            System administrators
                        </p>

                    </div>


                    {/* Pending */}

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">

                        <p className="text-sm text-slate-500">
                            Pending
                        </p>

                        <h2 className="text-3xl font-bold text-orange-500 mt-2">
                            0
                        </h2>

                        <p className="text-sm text-slate-500 mt-2">
                            Waiting for approval
                        </p>

                    </div>

                </div>


                {/* ================= USER TABLE ================= */}

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mt-6 overflow-hidden">

                    {/* Search */}

                    <div className="p-5 border-b flex flex-col md:flex-row gap-3 md:items-center md:justify-between">

                        <h2 className="text-xl font-bold text-slate-800">
                            User Accounts
                        </h2>

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search users..."
                            className="w-full md:w-64 px-4 py-2.5 rounded-xl
                         border border-slate-300 outline-none
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>


                    {/* Table */}

                    <div className="overflow-x-auto">

                        <table className="w-full text-left">

                            <thead className="bg-slate-50">

                                <tr>

                                    <th className="px-6 py-4 text-sm font-semibold text-slate-500">
                                        ID
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-slate-500">
                                        User
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-slate-500">
                                        Email
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-slate-500">
                                        Role
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-slate-500">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-slate-500">
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {result.length > 0 ? (

                                    result.map((row) => (

                                        <tr
                                            key={row.id}
                                            className="border-t hover:bg-slate-50 transition"
                                        >

                                            {/* ID */}

                                            <td className="px-6 py-4 text-slate-600">
                                                {row.id}
                                            </td>


                                            {/* USER */}

                                            <td className="px-6 py-4">

                                                <div className="flex items-center gap-3">

                                                    {row.image ? (

                                                        <img
                                                            src={row.image}
                                                            alt={row.name}
                                                            className="w-10 h-10 rounded-full object-cover
                                         border-2 border-cyan-400 shadow"
                                                        />

                                                    ) : (

                                                        <div
                                                            className="w-10 h-10 rounded-full bg-blue-100
                                         flex items-center justify-center
                                         text-blue-600 font-bold"
                                                        >
                                                            {row.name.charAt(0).toUpperCase()}
                                                        </div>

                                                    )}

                                                    <p className="font-semibold text-slate-800">
                                                        {row.name}
                                                    </p>

                                                </div>

                                            </td>


                                            {/* EMAIL */}

                                            <td className="px-6 py-4 text-slate-600">
                                                {row.email}
                                            </td>


                                            {/* ROLE */}

                                            <td className="px-6 py-4">

                                                <span
                                                    className="px-3 py-1 rounded-full bg-blue-100
                                     text-blue-600 text-sm font-medium"
                                                >
                                                    {row.role}
                                                </span>

                                            </td>


                                            {/* STATUS */}

                                            <td className="px-6 py-4">

                                                <span
                                                    className="px-3 py-1 rounded-full bg-green-100
                                     text-green-600 text-sm font-medium"
                                                >
                                                    Active
                                                </span>

                                            </td>


                                            {/* ACTION */}

                                            <td className="px-6 py-4">

                                                <button
                                                    onClick={() => edituser(row)}
                                                    className="text-blue-600 hover:text-blue-800
                                     font-medium mr-5"
                                                >
                                                    Edit
                                                </button>


                                                <button
                                                    onClick={() => deleteUser(row.id)}
                                                    className="text-red-600 hover:text-red-400
                                     font-medium"
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            className="px-6 py-12 text-center"
                                        >

                                            <div className="text-5xl mb-3">
                                                😔
                                            </div>

                                            <p className="text-lg font-semibold text-slate-600">
                                                No user found
                                            </p>

                                            <p className="text-sm text-slate-400 mt-1">
                                                Try searching with another name
                                            </p>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>


            {/* ================================================= */}
            {/* ADD / EDIT USER MODAL */}
            {/* ================================================= */}

            {show && (

                <div
                    className="fixed inset-0 bg-black/50
                     flex items-center justify-center
                     z-50 p-4"
                >

                    <form
                        onSubmit={submitdata}
                        className="w-full max-w-[420px]
                       bg-indigo-950 rounded-2xl
                       shadow-2xl p-6
                       max-h-[90vh] overflow-y-auto"
                    >

                        {/* MODAL HEADER */}

                        <div className="flex items-center justify-between mb-6">

                            <h1 className="text-2xl font-bold text-amber-50">

                                {editId !== null
                                    ? "Edit User"
                                    : "Add User"}

                            </h1>


                            <button
                                type="button"
                                onClick={() => {
                                    resetForm();
                                    setShow(false);
                                }}
                                className="text-gray-300 hover:text-white text-2xl"
                            >
                                ×
                            </button>

                        </div>


                        {/* ID */}

                        <div className="mb-4">

                            <label className="block mb-2 text-sm font-medium text-amber-50">
                                ID
                            </label>

                            <input
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                type="number"
                                placeholder="Enter ID"
                                required
                                className="w-full p-3 rounded-lg border border-indigo-400
                           bg-indigo-900 text-white outline-none
                           focus:ring-2 focus:ring-cyan-400"
                            />

                        </div>


                        {/* NAME */}

                        <div className="mb-4">

                            <label className="block mb-2 text-sm font-medium text-amber-50">
                                Full Name
                            </label>

                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Enter full name"
                                required
                                className="w-full p-3 rounded-lg border border-indigo-400
                           bg-indigo-900 text-white outline-none
                           focus:ring-2 focus:ring-cyan-400"
                            />

                        </div>


                        {/* EMAIL */}

                        <div className="mb-4">

                            <label className="block mb-2 text-sm font-medium text-amber-50">
                                Email
                            </label>

                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter email"
                                required
                                className="w-full p-3 rounded-lg border border-indigo-400
                           bg-indigo-900 text-white outline-none
                           focus:ring-2 focus:ring-cyan-400"
                            />

                        </div>


                        {/* PASSWORD */}

                        <div className="mb-4">

                            <label className="block mb-2 text-sm font-medium text-amber-50">
                                Password
                            </label>

                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter password"
                                required={editId === null}
                                className="w-full p-3 rounded-lg border border-indigo-400
                           bg-indigo-900 text-white outline-none
                           focus:ring-2 focus:ring-cyan-400"
                            />

                        </div>


                        {/* ROLE */}

                        <div className="mb-4">

                            <label className="block mb-2 text-sm font-medium text-amber-50">
                                Role
                            </label>

                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full p-3 rounded-lg border border-indigo-400
                           bg-indigo-900 text-white outline-none
                           focus:ring-2 focus:ring-cyan-400"
                            >

                                <option value="Admin">
                                    Admin
                                </option>

                                <option value="User">
                                    User
                                </option>

                                <option value="Manager">
                                    Manager
                                </option>

                            </select>

                        </div>


                        {/* IMAGE */}

                        <div className="mb-6">

                            <label className="block mb-2 text-sm font-medium text-amber-50">
                                Profile Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {

                                    const file = e.target.files[0];

                                    if (file) {
                                        setImage(URL.createObjectURL(file));
                                    }

                                }}
                                className="w-full p-2 rounded-lg
                           border border-indigo-400
                           bg-indigo-900 text-white"
                            />


                            {/* IMAGE PREVIEW */}

                            {image && (

                                <div className="mt-4 flex justify-center">

                                    <img
                                        src={image}
                                        alt="Preview"
                                        className="w-24 h-24 rounded-full
                               object-cover border-4
                               border-cyan-400 shadow-lg"
                                    />

                                </div>

                            )}

                        </div>


                        {/* BUTTONS */}

                        <div className="flex justify-end gap-3">

                            <button
                                type="button"
                                onClick={() => {
                                    resetForm();
                                    setShow(false);
                                }}
                                className="px-5 py-2.5 rounded-lg
                           border border-gray-400
                           text-gray-200
                           hover:bg-gray-800 transition"
                            >
                                Cancel
                            </button>


                            <button
                                type="submit"
                                className="px-5 py-2.5 rounded-lg
                           bg-cyan-500 text-white
                           font-semibold
                           hover:bg-cyan-600
                           transition shadow-lg"
                            >

                                {editId !== null
                                    ? "Update User"
                                    : "Add User"}

                            </button>

                        </div>

                    </form>

                </div>

            )}

        </div>
    )
}

export default Users
