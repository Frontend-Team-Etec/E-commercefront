import { useState } from "react";
import "./Sales.css";

function Sales() {

    const [year, setYear] = useState("2026");
    const [salesSearch, setSalesSearch] = useState("");
    const salesData = {
        2026: [
            12000, 18000, 15000, 23000,
            28000, 21000, 33000, 27000,
            36000, 31000, 40000, 45000
        ],

        2025: [
            10000, 14000, 17000, 19000,
            22000, 25000, 29000, 24000,
            30000, 34000, 38000, 42000
        ],

        2024: [
            8000, 12000, 11000, 16000,
            20000, 18000, 24000, 22000,
            27000, 29000, 32000, 36000
        ]
    };
    const months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    const data = salesData[year];
    const maxValue = Math.max(...data);

    const customer = [
        { name: "Dara", month: "Sep 10, 2026", amount: 2500, product: "Motor Bike", status: "Completed" },
        { name: "Mengly", month: "Sep 09, 2026", amount: 350, product: "Helmet", status: "Completed" },
        { name: "John", month: "Aug 10,2026", amount: 180, product: "Motor Oil", status: "Pending" },
        { name: "Sarah", month: "Aug 10,2026", amount: 420, product: "Brake Set", status: "Completed" },
        { name: "Michael", month: "Jul 10,2026", amount: 3200, product: "Motor Bike", status: "Completed" },
        { name: "Emma", month: "Jul 10,2026", amount: 250, product: "Helmet", status: "Cancelled" },
        { name: "Sokha", month: "Jun 10,2026", amount: 560, product: "Motor Oil", status: "Completed" },
        { name: "Vanna", month: "Jun 10,2026", amount: 780, product: "Brake Set", status: "Completed" },
        { name: "Piseth", month: "May 10,2026", amount: 1500, product: "Motor Bike", status: "Pending" },
        { name: "Sophea", month: "May 10,2026", amount: 300, product: "Helmet", status: "Completed" },
        { name: "Borey", month: "Apr 10,2026", amount: 650, product: "Motor Oil", status: "Completed" },
        { name: "Rina", month: "Apr 10,2026", amount: 450, product: "Brake Set", status: "Pending" },
        { name: "Kosal", month: "Mar 10,2026", amount: 2200, product: "Motor Bike", status: "Completed" },
        { name: "Nita", month: "Mar 10,2026", amount: 280, product: "Helmet", status: "Completed" },
        { name: "Sokunthea", month: "Feb 10,2026", amount: 390, product: "Motor Oil", status: "Cancelled" },
        { name: "Vuthy", month: "Feb 10,2026", amount: 720, product: "Brake Set", status: "Completed" },
        { name: "Chenda", month: "Jan 10,2026", amount: 1900, product: "Motor Bike", status: "Completed" },
        { name: "Rith", month: "Jan 10,2026", amount: 320, product: "Helmet", status: "Pending" },
        { name: "Dalin", month: "Dec 10,2026", amount: 850, product: "Motor Oil", status: "Completed" },
        { name: "Chantha", month: "Dec 10,2026", amount: 600, product: "Brake Set", status: "Completed" },
        { name: "Mengly Morn", month: "Sep 09, 2026", amount: 350, product: "Helmet", status: "Completed" },
        { name: "John Smith", month: "Sep 08, 2026", amount: 180, product: "Motor Oil", status: "Pending" },
        { name: "Sarah Lee", month: "Sep 07, 2026", amount: 420, product: "Brake Set", status: "Completed" }
    ];

    const filteredSales = customer.filter((items) =>
        [items.name, items.product, items.month, items.amount, items.status]
            .join(" ")
            .toLowerCase()
            .includes(salesSearch.toLowerCase())
    );

    return (
        <div className="sales-page min-h-screen p-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Sales Overview
                    </h1>
                    <p className="text-gray-500">
                        Monitor your sales and business performance
                    </p>
                </div>

                <button className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700">
                    Download Report
                </button>
            </div>

            {/* Statistics */}
            <div className="sales-stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-500">Today's Sales</p>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                        $4,850
                    </h2>
                    <p className="text-green-500 mt-2">
                        ↑ 12.5%
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-500">This Month</p>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                        $53,000
                    </h2>
                    <p className="text-green-500 mt-2">
                        ↑ 8.4%
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-500">Total Orders</p>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                        2,340
                    </h2>
                    <p className="text-green-500 mt-2">
                        ↑ 15.2%
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-500">Profit</p>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                        $18,750
                    </h2>
                    <p className="text-green-500 mt-2">
                        ↑ 10.8%
                    </p>
                </div>

            </div>

            {/* Sales Performance */}
            <div className="sales-performance grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

                {/* Chart */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">

                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                Sales Performance
                            </h2>
                            <p className="text-sm text-gray-500">
                                Monthly sales revenue
                            </p>
                        </div>

                        <select value={year} onChange={(e) => setYear(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                            <option>2026</option>
                            <option>2025</option>
                            <option>2024</option>
                        </select>
                    </div>

                    <div className="flex items-end gap-4 h-72">

                        {data.map((value, index) => {
                            const height = (value / maxValue) * 100;
                            return (
                                <div
                                    key={months[index]}
                                    className="flex-1 h-full flex flex-col
                                    justify-end items-center"
                                >

                                    {/* Bar */}
                                    <div className="flex-1 w-full flex items-end justify-center">

                                        <div
                                            className="w-full max-w-[80px]
                                             bg-blue-600 rounded-t-xl
                                             hover:bg-blue-700
                                             transition-all duration-300"
                                            style={{
                                                height: `${height}%`
                                            }}
                                            title={`$${value.toLocaleString()}`}
                                        ></div>

                                    </div>

                                    {/* Month */}
                                    <p className="text-sm text-slate-500 mt-4">
                                        {months[index]}
                                    </p>

                                </div>
                            )
                        })}
                    </div>


                </div>


                <div className="bg-white rounded-xl shadow-sm p-6">

                    <h2 className="text-xl font-bold text-gray-800">
                        Sales Target
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Monthly target
                    </p>

                    <div className="flex justify-center my-8">
                        <div className="w-40 h-40 rounded-full border-[18px] border-blue-600 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold">
                                    82%
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    Completed
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between border-t pt-5">
                        <div>
                            <p className="text-gray-500 text-sm">
                                Target
                            </p>
                            <p className="font-bold text-lg">
                                $65,000
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-gray-500 text-sm">
                                Achieved
                            </p>
                            <p className="font-bold text-lg text-blue-600">
                                $53,000
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Recent Sales */}
            <div className="recent-sales bg-white rounded-xl shadow-sm p-6">

                <div className="flex justify-between items-center mb-5">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            Recent Sales
                        </h2>
                        <p className="text-sm text-gray-500">
                            Latest transactions
                        </p>
                    </div>

                    <div className="recent-sales-actions">
                        <input
                            type="search"
                            value={salesSearch}
                            onChange={(event) => setSalesSearch(event.target.value)}
                            placeholder="Search sales..."
                            aria-label="Search recent sales"
                        />

                        <button
                            className="text-blue-600 font-medium hover:underline"
                            type="button"
                            onClick={() => setSalesSearch("")}
                        >
                            View All
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>
                            <tr className="border-b text-left text-gray-500 text-sm">
                                <th className="py-4">Customer</th>
                                <th className="py-4">Product</th>
                                <th className="py-4">Date</th>
                                <th className="py-4">Amount</th>
                                <th className="py-4">Status</th>
                            </tr>
                        </thead>

                        <tbody>

                            {filteredSales.length > 0 ? filteredSales.map((items) => (
                                <tr className="border-b" key={`${items.name}-${items.month}`}>
                                    <td className="py-4 font-medium">
                                        {items.name}
                                    </td>
                                    <td className="py-4">
                                        {items.product}
                                    </td>
                                    <td className="py-4 text-gray-500">
                                        {items.month}
                                    </td>
                                    <td className="py-4 font-semibold">
                                        {items.amount}
                                    </td>
                                    <td className="py-4">
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                            {items.status}
                                        </span>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td className="sales-empty" colSpan="5">
                                        No sales found
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default Sales;

