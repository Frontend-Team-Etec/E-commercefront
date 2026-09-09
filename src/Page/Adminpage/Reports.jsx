
import React from "react";
import { Link } from "react-router-dom";

function Reports() {
    return (
        <div className="min-h-screen bg-blue-950 p-6">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Reports
                    </h1>

                    <p className="text-blue-100 mt-1">
                        View your store performance and business reports.
                    </p>
                </div>

                <Link to="App">
                    <button className="bg-white text-blue-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-50">
                        Export Report
                    </button></Link>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

                <div className="bg-blue-900 rounded-xl p-5 shadow-lg">
                    <p className="text-white text-sm">
                        Total Sales
                    </p>

                    <h2 className="text-2xl font-bold mt-2 text-gray-800">
                        $24,580
                    </h2>

                    <p className="text-green-600 font-semibold text-sm mt-2">
                        +12.5%
                    </p>

                    <p className="text-gray-400 text-xs mt-1">
                        Compared to last month
                    </p>
                </div>

                <div className="bg-blue-900 rounded-xl p-5 shadow-lg">
                    <p className="text-white text-sm">
                        Total Orders
                    </p>

                    <h2 className="text-2xl font-bold mt-2 text-gray-800">
                        1,248
                    </h2>

                    <p className="text-green-600 font-semibold text-sm mt-2">
                        +8.2%
                    </p>

                    <p className="text-gray-400 text-xs mt-1">
                        Compared to last month
                    </p>
                </div>

                <div className="bg-blue-900 rounded-xl p-5 shadow-lg">
                    <p className="text-white text-sm">
                        Customers
                    </p>

                    <h2 className="text-2xl font-bold mt-2 text-gray-800">
                        856
                    </h2>

                    <p className="text-green-600 font-semibold text-sm mt-2">
                        +5.4%
                    </p>

                    <p className="text-gray-400 text-xs mt-1">
                        Compared to last month
                    </p>
                </div>

                <div className="bg-blue-900 rounded-xl p-5 shadow-lg">
                    <p className="text-white text-sm">
                        Products Sold
                    </p>

                    <h2 className="text-2xl font-bold mt-2 text-gray-800">
                        3,642
                    </h2>

                    <p className="text-green-600 font-semibold text-sm mt-2">
                        +10.1%
                    </p>

                    <p className="text-gray-400 text-xs mt-1">
                        Compared to last month
                    </p>
                </div>

            </div>

            {/* Sales Report */}
            <div className="bg-blue-800 rounded-xl shadow-lg p-6 mb-6">

                <div className="flex justify-between items-center mb-6">

                    <div>
                        <h2 className="text-white font-bold text-gray-800">
                            Sales Report
                        </h2>

                        <p className="text-sm text-gray-500">
                            Monthly sales overview
                        </p>
                    </div>

                    <select className="border border-gray-300 rounded-lg px-4 text-black py-2">
                        <option>2026</option>
                        <option>2025</option>
                        <option>2024</option>
                    </select>

                </div>

                {/* Chart */}
                <div className="h-72 flex items-end justify-around border-l border-b bg-white border-gray-300 px-5">

                    {/* January */}
                    <div className="flex flex-col items-center justify-end h-full">
                        <div
                            className="w-8 bg-green-500 rounded-t-lg"
                            style={{ height: "100px" }}
                        ></div>

                        <span className="text-xs text-gray-500 mt-2">
                            Jan
                        </span>
                    </div>

                    {/* February */}
                    <div className="flex flex-col items-center justify-end h-full">
                        <div
                            className="w-8 bg-green-500 rounded-t-lg"
                            style={{ height: "140px" }}
                        ></div>

                        <span className="text-xs text-gray-500 mt-2">
                            Feb
                        </span>
                    </div>

                    {/* March */}
                    <div className="flex flex-col items-center justify-end h-full">
                        <div
                            className="w-8 bg-green-500 rounded-t-lg"
                            style={{ height: "120px" }}
                        ></div>

                        <span className="text-xs text-gray-500 mt-2">
                            Mar
                        </span>
                    </div>

                    {/* April */}
                    <div className="flex flex-col items-center justify-end h-full">
                        <div
                            className="w-8 bg-green-500 rounded-t-lg"
                            style={{ height: "165px" }}
                        ></div>

                        <span className="text-xs text-gray-500 mt-2">
                            Apr
                        </span>
                    </div>

                    {/* May */}
                    <div className="flex flex-col items-center justify-end h-full">
                        <div
                            className="w-8 bg-green-500 rounded-t-lg"
                            style={{ height: "150px" }}
                        ></div>

                        <span className="text-xs text-gray-500 mt-2">
                            May
                        </span>
                    </div>

                    {/* June */}
                    <div className="flex flex-col items-center justify-end h-full">
                        <div
                            className="w-8 bg-green-500 rounded-t-lg"
                            style={{ height: "190px" }}
                        ></div>

                        <span className="text-xs text-gray-500 mt-2">
                            Jun
                        </span>
                    </div>

                    {/* July */}
                    <div className="flex flex-col items-center justify-end h-full">
                        <div
                            className="w-8 bg-green-500 rounded-t-lg"
                            style={{ height: "175px" }}
                        ></div>

                        <span className="text-xs text-gray-500 mt-2">
                            Jul
                        </span>
                    </div>

                    {/* August */}
                    <div className="flex flex-col items-center justify-end h-full">
                        <div
                            className="w-8 bg-green-500 rounded-t-lg"
                            style={{ height: "215px" }}
                        ></div>

                        <span className="text-xs text-gray-500 mt-2">
                            Aug
                        </span>
                    </div>

                </div>
            </div>

            {/* Bottom */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Top Products */}
                <div className="bg-white rounded-xl shadow-lg p-6">

                    <div className="mb-5">
                        <h2 className="text-xl font-bold text-gray-800">
                            Top Products
                        </h2>

                        <p className="text-sm text-gray-500">
                            Best selling products
                        </p>
                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 text-sm text-gray-500">
                                        Product
                                    </th>

                                    <th className="text-left py-3 text-sm text-gray-500">
                                        Sold
                                    </th>

                                    <th className="text-left py-3 text-sm text-gray-500">
                                        Revenue
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b">
                                    <td className="py-4">
                                        iPhone 15 Pro
                                    </td>

                                    <td>
                                        245
                                    </td>

                                    <td className="font-semibold">
                                        $244,755
                                    </td>
                                </tr>

                                <tr className="border-b">
                                    <td className="py-4">
                                        MacBook Air M3
                                    </td>

                                    <td>
                                        128
                                    </td>

                                    <td className="font-semibold">
                                        $153,600
                                    </td>
                                </tr>

                                <tr className="border-b">
                                    <td className="py-4">
                                        AirPods Pro
                                    </td>

                                    <td>
                                        312
                                    </td>

                                    <td className="font-semibold">
                                        $77,688
                                    </td>
                                </tr>

                                <tr>
                                    <td className="py-4">
                                        Samsung Galaxy S24
                                    </td>

                                    <td>
                                        156
                                    </td>

                                    <td className="font-semibold">
                                        $124,800
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>
                </div>

                {/* Order Status */}
                <div className="bg-white rounded-xl shadow-lg p-6">

                    <div className="mb-5">
                        <h2 className="text-xl font-bold text-gray-800">
                            Order Status
                        </h2>

                        <p className="text-sm text-gray-500">
                            Current order summary
                        </p>
                    </div>

                    <div className="space-y-4">

                        <div className="flex justify-between items-center border-b pb-4">
                            <span>Completed</span>

                            <span className="font-semibold">
                                842
                            </span>

                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                                67%
                            </span>
                        </div>

                        <div className="flex justify-between items-center border-b pb-4">
                            <span>Processing</span>

                            <span className="font-semibold">
                                216
                            </span>

                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                                17%
                            </span>
                        </div>

                        <div className="flex justify-between items-center border-b pb-4">
                            <span>Pending</span>

                            <span className="font-semibold">
                                124
                            </span>

                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                                10%
                            </span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span>Cancelled</span>

                            <span className="font-semibold">
                                66
                            </span>

                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                                6%
                            </span>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Reports;
