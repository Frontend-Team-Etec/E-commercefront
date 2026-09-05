
import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";

import Users from "./Page/Users";

import "./App.css";

import {
  LayoutDashboard,
  Users as UsersIcon,
  ShoppingCart,
  Package,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Search,
  MoreHorizontal,
  ArrowUpRight,
  DollarSign,
  UserPlus,
  Boxes,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

 
const salesData = [
  { month: "Jan", sales: 12000 },
  { month: "Feb", sales: 18000 },
  { month: "Mar", sales: 15000 },
  { month: "Apr", sales: 23000 },
  { month: "May", sales: 28000 },
  { month: "Jun", sales: 21000 },
  { month: "Jul", sales: 33000 },
  { month: "Aug", sales: 27000 },
  { month: "Sep", sales: 36000 },
  { month: "Oct", sales: 31000 },
  { month: "Nov", sales: 40000 },
  { month: "Dec", sales: 45000 },
];


const users = [
  {
    name: "John Smith",
    amount: "342",
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    name: "Sarah Lee",
    amount: "287",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    name: "Michael Kim",
    amount: "215",
    avatar: "https://i.pravatar.cc/80?img=13",
  },
  {
    name: "Emma Wilson",
    amount: "192",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
];
 
const orders = [
  [
    "#ORD-1024",
    "John Smith",
    "Motor Bike",
    "$1,250",
    "Completed",
  ],
  [
    "#ORD-1023",
    "Sarah Lee",
    "Helmet",
    "$120",
    "Pending",
  ],
  [
    "#ORD-1022",
    "Michael Kim",
    "Motor Oil",
    "$75",
    "Completed",
  ],
  [
    "#ORD-1021",
    "Emma Wilson",
    "Brake Set",
    "$230",
    "Cancelled",
  ],
];
 
const ordersChartData = [
  {
    day: "Mon",
    orders: 30,
  },
  {
    day: "Tue",
    orders: 45,
  },
  {
    day: "Wed",
    orders: 28,
  },
  {
    day: "Thu",
    orders: 65,
  },
  {
    day: "Fri",
    orders: 50,
  },
  {
    day: "Sat",
    orders: 72,
  },
  {
    day: "Sun",
    orders: 58,
  },
];
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
 
        <Route
          path="/"
          element={<Dashboard />}
        />
 
        <Route
          path="/users"
          element={<Users/>}
        />

       
        <Route
          path="/products"
          element={
            <SimplePage title="Products" />
          }
        />

       
        <Route
          path="/orders"
          element={
            <SimplePage title="Orders" />
          }
        />

    
        <Route
          path="/sales"
          element={
            <SimplePage title="Sales" />
          }
        />

 
        <Route
          path="/reports"
          element={
            <SimplePage title="Reports" />
          }
        />

 
        <Route
          path="/settings"
          element={
            <SimplePage title="Settings" />
          }
        />

 
        <Route
          path="/notifications"
          element={
            <SimplePage title="Notifications" />
          }
        />
 
        <Route
          path="*"
          element={
            <SimplePage title="Page Not Found" />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

 
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [showNotification, setShowNotification] =
    useState(false);

  return (
    <div className="app">
 

      <aside
        className={`sidebar ${
          sidebarOpen ? "open" : ""
        }`}
      >
 

        <div className="logo">

          <div className="logo-icon">
            <LayoutDashboard size={20} />
          </div>

          <span>
            VISION ADMIN
          </span>

          <button
            className="close-sidebar"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <X size={20} />
          </button>

        </div>

        {/* MENU TITLE */}

        <div className="menu-title">
          MENU
        </div>

        {/* NAVIGATION */}

        <nav>

          {/* DASHBOARD */}

          <Link
            to="/"
            className="menu-item active"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          {/* USERS */}

          <Link
            to="/users"
            className="menu-item"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <UsersIcon size={18} />
            Users
          </Link>

          {/* PRODUCTS */}

          <Link
            to="/products"
            className="menu-item"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <Package size={18} />
            Products
          </Link>

          {/* ORDERS */}

          <Link
            to="/orders"
            className="menu-item"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <ShoppingCart size={18} />
            Orders
          </Link>

          {/* SALES */}

          <Link
            to="/sales"
            className="menu-item"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <DollarSign size={18} />
            Sales
          </Link>

          {/* REPORTS */}

          <Link
            to="/reports"
            className="menu-item"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <BarChart3 size={18} />
            Reports
          </Link>

          {/* SYSTEM */}

          <div className="menu-title second">
            SYSTEM
          </div>

          {/* SETTINGS */}

          <Link
            to="/settings"
            className="menu-item"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <Settings size={18} />
            Settings
          </Link>

          {/* LOGOUT */}

          <Link
            to="/"
            className="menu-item"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <LogOut size={18} />
            Logout
          </Link>

        </nav>

        {/* SIDEBAR BOTTOM */}

        <div className="sidebar-bottom">

          <div className="help-box">

            <div className="help-icon">
              ?
            </div>

            <div>

              <strong>
                Need Help?
              </strong>

              <p>
                Contact support
              </p>

            </div>

          </div>

        </div>

      </aside>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="main">

        {/* =================================================
            TOPBAR
        ================================================= */}

        <header className="topbar">

          <div className="top-left">

            {/* MOBILE MENU */}

            <button
              className="mobile-menu"
              onClick={() =>
                setSidebarOpen(true)
              }
            >
              <Menu size={22} />
            </button>

            <div>

              <h1>
                Dashboard
              </h1>

              <p>
                Welcome back, Admin 👋
              </p>

            </div>

          </div>

          {/* TOP ACTIONS */}

          <div className="top-actions">

            {/* SEARCH */}

            <div className="search">

              <Search size={17} />

              <input
                type="text"
                placeholder="Search..."
              />

            </div>

            {/* NOTIFICATION */}

            <div className="notification-wrapper">

              <button
                className="icon-btn notification"
                onClick={() =>
                  setShowNotification(
                    !showNotification
                  )
                }
              >

                <Bell size={19} />

                <span>
                  3
                </span>

              </button>

              {showNotification && (

                <div className="notification-box">

                  {/* NOTIFICATION HEADER */}

                  <div className="notification-header">

                    <div>

                      <h3>
                        Notifications
                      </h3>

                      <p>
                        You have 3 new notifications
                      </p>

                    </div>

                    <span>
                      3 New
                    </span>

                  </div>

                  {/* NOTIFICATION 1 */}

                  <div className="notification-item">

                    <img
                      src="https://i.pravatar.cc/50?img=11"
                      alt="John"
                    />

                    <div>

                      <strong>
                        New Order
                      </strong>

                      <p>
                        John Smith placed a new order.
                      </p>

                      <small>
                        5 minutes ago
                      </small>

                    </div>

                  </div>

                  {/* NOTIFICATION 2 */}

                  <div className="notification-item">

                    <img
                      src="https://i.pravatar.cc/50?img=32"
                      alt="Sarah"
                    />

                    <div>

                      <strong>
                        New User
                      </strong>

                      <p>
                        Sarah Lee registered a new account.
                      </p>

                      <small>
                        15 minutes ago
                      </small>

                    </div>

                  </div>

                  {/* NOTIFICATION 3 */}

                  <div className="notification-item">

                    <img
                      src="https://i.pravatar.cc/50?img=13"
                      alt="Michael"
                    />

                    <div>

                      <strong>
                        Order Completed
                      </strong>

                      <p>
                        Order #ORD-1022 has been completed.
                      </p>

                      <small>
                        30 minutes ago
                      </small>

                    </div>

                  </div>

                  {/* VIEW ALL */}

                  <Link
                    to="/notifications"
                    className="view-notifications"
                    onClick={() =>
                      setShowNotification(false)
                    }
                  >
                    View All Notifications
                  </Link>

                </div>

              )}

            </div>

            {/* PROFILE */}

            <div className="profile">

              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Profile"
              />

              <div>

                <strong>
                  Mark Johnson
                </strong>

                <small>
                  Administrator
                </small>

              </div>

              <ChevronDown size={15} />

            </div>

          </div>

        </header>

        {/* =================================================
            STATS
        ================================================= */}

        <section className="stats">

          <StatCard
            title="Total Revenue"
            value="$53,000"
            change="+12.5%"
            icon={<DollarSign />}
            type="blue"
          />

          <StatCard
            title="Total Orders"
            value="2,340"
            change="+8.2%"
            icon={<ShoppingCart />}
            type="purple"
          />

          <StatCard
            title="New Customers"
            value="3,652"
            change="+6.8%"
            icon={<UserPlus />}
            type="green"
          />

          <StatCard
            title="Total Products"
            value="873"
            change="+4.1%"
            icon={<Boxes />}
            type="orange"
          />

        </section>

        {/* =================================================
            WELCOME GRID
        ================================================= */}

        <section className="welcome-grid">

          {/* WELCOME CARD */}

          <div className="welcome-card">

            <div className="welcome-text">

              <span>
                WELCOME BACK
              </span>

              <h2>
                Mark Johnson
              </h2>

              <p>
                Here's what's happening with your
                business today. Check your latest
                statistics and activity.
              </p>

              <button className="primary-btn">

                View Analytics

                <ArrowUpRight size={16} />

              </button>

            </div>

            <div className="welcome-art">

              <div className="glow"></div>

              <div className="orb">
                ◉
              </div>

            </div>

          </div>

          {/* SATISFACTION */}

          <div className="dashboard-card satisfaction">

            <div className="card-heading">

              <div>

                <h3>
                  Satisfaction Rate
                </h3>

                <p>
                  Customer satisfaction
                </p>

              </div>

              <MoreHorizontal size={20} />

            </div>

            <div className="circle-progress">

              <div>

                <strong>
                  95%
                </strong>

                <small>
                  Excellent
                </small>

              </div>

            </div>

            <div className="satisfaction-bottom">

              <span>
                ★★★★★
              </span>

              <strong>
                95%
              </strong>

            </div>

          </div>

          {/* REFERRAL */}

          <div className="dashboard-card referral">

            <div className="card-heading">

              <div>

                <h3>
                  Referral Tracking
                </h3>

                <p>
                  Monthly performance
                </p>

              </div>

              <MoreHorizontal size={20} />

            </div>

            <div className="referral-score">

              <div>

                <small>
                  Score
                </small>

                <strong>
                  9.3
                </strong>

                <span>
                  Total Score
                </span>

              </div>

            </div>

            <div className="referral-data">

              <div>

                <small>
                  Visitors
                </small>

                <strong>
                  14,530
                </strong>

              </div>

              <div>

                <small>
                  Referrals
                </small>

                <strong>
                  1,465
                </strong>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            CHARTS
        ================================================= */}

        <section className="content-grid">

          {/* SALES CHART */}

          <div className="dashboard-card sales-card">

            <div className="card-heading">

              <div>

                <h3>
                  Sales Overview
                </h3>

                <p>
                  Monthly revenue statistics
                </p>

              </div>

              <select>

                <option>
                  2026
                </option>

                <option>
                  2025
                </option>

              </select>

            </div>

            <div className="chart">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <AreaChart
                  data={salesData}
                >

                  <defs>

                    <linearGradient
                      id="salesGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="0%"
                        stopColor="#148bff"
                        stopOpacity={0.45}
                      />

                      <stop
                        offset="100%"
                        stopColor="#148bff"
                        stopOpacity={0}
                      />

                    </linearGradient>

                  </defs>

                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    stroke="#6075a5"
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    stroke="#6075a5"
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#168cff"
                    strokeWidth={3}
                    fill="url(#salesGradient)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* ORDERS CHART */}

          <div className="dashboard-card orders-chart">

            <div className="card-heading">

              <div>

                <h3>
                  Orders Overview
                </h3>

                <p>
                  Weekly orders
                </p>

              </div>

              <MoreHorizontal size={20} />

            </div>

            <div className="bar-chart">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <BarChart
                  data={ordersChartData}
                >

                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    stroke="#6075a5"
                  />

                  <YAxis hide />

                  <Tooltip />

                  <Bar
                    dataKey="orders"
                    fill="#1592ff"
                    radius={[
                      5,
                      5,
                      0,
                      0,
                    ]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </section>

        {/* =================================================
            USERS + ORDERS
        ================================================= */}

        <section className="bottom-grid">

          {/* ACTIVE USERS */}

          <div className="dashboard-card">

            <div className="card-heading">

              <div>

                <h3>
                  Active Users
                </h3>

                <p>
                  Users currently online
                </p>

              </div>

              <strong className="active-number">
                2,420
              </strong>

            </div>

            <div className="users-list">

              {users.map((user) => (

                <div
                  className="user-row"
                  key={user.name}
                >

                  <div className="user-info">

                    <div className="avatar-wrapper">

                      <img
                        src={user.avatar}
                        alt={user.name}
                      />

                      <span className="online-dot">
                      </span>

                    </div>

                    <div>

                      <strong>
                        {user.name}
                      </strong>

                      <small>
                        Online now
                      </small>

                    </div>

                  </div>

                  <strong>
                    {user.amount}
                  </strong>

                </div>

              ))}

            </div>

          </div>

          {/* RECENT ORDERS */}

          <div className="dashboard-card orders-table">

            <div className="card-heading">

              <div>

                <h3>
                  Recent Orders
                </h3>

                <p>
                  Latest transactions
                </p>

              </div>

              <Link
                to="/orders"
                className="view-btn"
              >
                View All
              </Link>

            </div>

            <div className="table-wrapper">

              <table>

                <thead>

                  <tr>

                    <th>
                      Order ID
                    </th>

                    <th>
                      Customer
                    </th>

                    <th>
                      Product
                    </th>

                    <th>
                      Amount
                    </th>

                    <th>
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {orders.map((order) => (

                    <tr
                      key={order[0]}
                    >

                      <td>
                        {order[0]}
                      </td>

                      <td>
                        {order[1]}
                      </td>

                      <td>
                        {order[2]}
                      </td>

                      <td>
                        {order[3]}
                      </td>

                      <td>

                        <span
                          className={`status ${
                            order[4].toLowerCase()
                          }`}
                        >
                          {order[4]}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </section>

        {/* =================================================
            QUICK ACTIONS
        ================================================= */}

        <section className="quick-section">

          <div className="section-title">

            <div>

              <h2>
                Quick Actions
              </h2>

              <p>
                Frequently used admin functions
              </p>

            </div>

          </div>

          <div className="quick-grid">

            {/* ADD PRODUCT */}

            <QuickAction
              icon={<Package />}
              title="Add Product"
              text="Create new product"
              link="/products"
            />

            {/* ADD USER */}

            <QuickAction
              icon={<UserPlus />}
              title="Add User"
              text="Create new user"
              link="/users"
            />

            {/* VIEW ORDERS */}

            <QuickAction
              icon={<ShoppingCart />}
              title="View Orders"
              text="Manage orders"
              link="/orders"
            />

            {/* VIEW REPORTS */}

            <QuickAction
              icon={<BarChart3 />}
              title="View Reports"
              text="Business analytics"
              link="/reports"
            />

          </div>

        </section>

      </main>

    </div>
  );
}

// =====================================================
// SIMPLE PAGE
// =====================================================

function SimplePage({ title }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#f5f7fb",
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >

        <h1>
          {title} Page
        </h1>

        <p>
          This is the {title} page.
        </p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            background: "#168cff",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          ← Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

// =====================================================
// STAT CARD
// =====================================================

function StatCard({
  title,
  value,
  change,
  icon,
  type,
}) {
  return (
    <div className="stat-card">

      <div className="stat-info">

        <p>
          {title}
        </p>

        <h2>
          {value}
        </h2>

        <span>

          <ArrowUpRight size={14} />

          {change}

        </span>

        <small>
          vs last month
        </small>

      </div>

      <div
        className={`stat-icon ${type}`}
      >
        {icon}
      </div>

    </div>
  );
}

// =====================================================
// QUICK ACTION
// =====================================================

function QuickAction({
  icon,
  title,
  text,
  link,
}) {
  return (
    <Link
      to={link}
      className="quick-action"
      style={{
        textDecoration: "none",
      }}
    >

      <div className="quick-icon">
        {icon}
      </div>

      <div>

        <strong>
          {title}
        </strong>

        <small>
          {text}
        </small>

      </div>

      <ArrowUpRight size={17} />

    </Link>
  );
}

// =====================================================
// EXPORT
// =====================================================

export default App;

