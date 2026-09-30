import { useEffect, useState } from "react";
import { getProducts, saveProducts } from "../../data/products";
import "./Addproduct.css";

const Addproducts = () => {
    
    const [show, setShow] = useState(false);

    const [adddata, setAdddata] = useState(getProducts);

    useEffect(() => {
        const refresh = () => setAdddata(getProducts());
        window.addEventListener("products-updated", refresh);
        return () => window.removeEventListener("products-updated", refresh);
    }, []);

    const updateProducts = (updater) => {
        const nextProducts = updater(adddata);
        saveProducts(nextProducts);
        setAdddata(nextProducts);
    };

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const [editingId, setEditingId] = useState(null);

    // Reset form
    const resetForm = () => {
        setName("");
        setPrice("");
        setQty("");
        setCategory("");
        setImage("");
        setDescription("");
        setEditingId(null);
    };

    // Image upload
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    // Add / Update
    const submitdata = (e) => {
        e.preventDefault();

        if (
            !name ||
            !price ||
            !qty ||
            !category ||
            !image ||
            !description
        ) {
            alert("Please fill in all fields");
            return;
        }

        const productData = {
            id: editingId !== null ? editingId : Date.now(),
            name,
            price: Number(price),
            oldPrice: Number(price),
            discount: 0,
            stock: Number(qty),
            category,
            image,
            gallery: [image],
            colors: ["Default"],
            rating: 0,
            reviews: 0,
            description,
        };

        // Update
        if (editingId !== null) {
            updateProducts((prev) =>
                prev.map((product) =>
                    product.id === editingId
                        ? productData
                        : product
                )
            );

            alert("Product updated successfully!");
        }

        // Add
        else {
            updateProducts((prev) => [
                ...prev,
                productData
            ]);

            alert("Product added successfully!");
        }

        resetForm();
        setShow(false);
    };

    // Edit
    const editdata = (product) => {
        setEditingId(product.id);

        setName(product.name);
        setPrice(product.price);
        setQty(product.stock ?? product.qty ?? "");
        setCategory(product.category);
        setImage(product.image);
        setDescription(product.description);

        setShow(true);
    };

    // Delete
    const deleteProduct = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (confirmDelete) {
            updateProducts((prev) =>
                prev.filter((product) => product.id !== id)
            );
        }
    };

    return (
        <div className="min-h-screen bg-blue-950 p-5">

            {/* ADD BUTTON */}
            <div className="mb-5 ">
                <button
                    type="button"
                    onClick={() => {
                        resetForm();
                        setShow(true);
                    }}
                    className="text-white w-[200px] p-3 font-bold bg-blue-700 border-2 border-fuchsia-400 rounded hover:bg-blue-600"
                >
                    + Add Products
                </button>
            </div>

            {/* FORM */}
            {show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
                    <form
                        onSubmit={submitdata}
                        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-blue-950 p-5 text-white shadow-2xl"
                    >

                    <h2 className="text-2xl flex justify-items-center font-bold text-blue-400 mb-5">
                        {editingId !== null
                            ? "Edit Product"
                            : "Add New Product"}
                    </h2>

                    {/* NAME */}
                    <div className="mb-5">
                        <label className="block  text-white font-bold mb-2">
                            Product Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            placeholder="Enter product name"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                    </div>

                    {/* PRICE + QTY */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div>
                            <label className="block  text-white font-bold mb-2">
                                Price
                            </label>

                            <input
                                type="number"
                                value={price}
                                onChange={(e) =>
                                    setPrice(e.target.value)
                                }
                                placeholder="Enter price"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block  text-white font-bold mb-2">
                                Quantity
                            </label>

                            <input
                                type="number"
                                value={qty}
                                onChange={(e) =>
                                    setQty(e.target.value)
                                }
                                placeholder="Enter quantity"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>

                    </div>

                    {/* CATEGORY */}
                    <div className="mt-5">

                        <label className="block  text-white font-bold mb-2">
                            Category
                        </label>

                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-lg p-3"
                        >
                            <option value="">
                                Select Category
                            </option>

                            {[...new Set(adddata.map((product) => product.category))].map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>

                    </div>

                    {/* IMAGE */}
                    <div className="mt-5">

                        <label className="block text-white font-bold mb-2">
                            Product Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />

                        <input
                            type="text"

                            onChange={(e) =>
                                setImage(e.target.value)
                            }
                            placeholder="Or paste image URL"
                            className="w-full border border-gray-300 rounded-lg p-3 mt-3"
                        />

                        {/* IMAGE PREVIEW */}
                        {image && (
                            <div className="mt-4">
                                <img
                                    src={image}
                                    alt="Preview"
                                    className="w-32 h-32 object-cover rounded-lg border"
                                />
                            </div>
                        )}

                    </div>

                    {/* DESCRIPTION */}
                    <div className="mt-5">

                        <label className="block  text-white font-bold mb-2">
                            Description
                        </label>

                        <textarea
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            rows="5"
                            placeholder="Enter product description"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        ></textarea>

                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-between gap-4 mt-6">

                        <button
                            type="submit"
                            className=" w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700"
                        >
                            {editingId !== null
                                ? "Update Product"
                                : "Add Product"}
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                resetForm();
                                setShow(false);
                            }}
                            className="w-full px-6 bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300"
                        >
                            Cancel
                        </button>

                    </div>

                    </form>
                </div>
            )}

            {/* TITLE */}
            <div className="w-full flex justify-center mb-8">

                <div className="w-full md:w-[70%] bg-blue-900 shadow-lg rounded-xl p-4 text-center text-white">

                    <h1 className="text-2xl font-bold">
                        Product Management
                    </h1>

                    <p className="text-blue-200 mt-1">
                        Total Products: {adddata.length}
                    </p>

                </div>

            </div>

            {/* PRODUCTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {adddata.map((product) => (

                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                    >

                        {/* IMAGE */}
                        <div className="h-48 bg-gray-100">

                            {product.image ? (

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />

                            ) : (

                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    No Image
                                </div>

                            )}

                        </div>

                        {/* CONTENT */}
                        <div className="p-5">

                            <h2 className="text-xl font-bold text-gray-800">
                                {product.name}
                            </h2>

                            <p className="text-gray-500 text-sm mt-2">
                                {product.description}
                            </p>

                            <p className="text-gray-600 mt-2">
                                Category: {product.category}
                            </p>

                            <p className="text-gray-600 mt-1">
                                Quantity: {product.stock ?? product.qty}
                            </p>

                            <div className="flex items-center justify-between mt-5 gap-2">

                                <p className="text-xl font-bold text-blue-600">
                                    ${product.price}
                                </p>

                            </div>

                            {/* EDIT + DELETE */}
                            <div className="flex gap-2 mt-4">

                                <button
                                    onClick={() =>
                                        editdata(product)
                                    }
                                    className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() =>
                                        deleteProduct(product.id)
                                    }
                                    className="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Addproducts;
