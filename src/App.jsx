import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  DollarSign,
  Package,
  Search,
  Bell,
  Settings,
  Menu,
  X,
  ChevronDown,
  Download,
  Filter,
  Moon,
  Sun,
} from "lucide-react";

const salesData = [
  { month: "Jan", revenue: 4200, orders: 240, customers: 180 },
  { month: "Feb", revenue: 3800, orders: 220, customers: 165 },
  { month: "Mar", revenue: 5100, orders: 290, customers: 215 },
  { month: "Apr", revenue: 4600, orders: 265, customers: 195 },
  { month: "May", revenue: 6200, orders: 340, customers: 250 },
  { month: "Jun", revenue: 7100, orders: 380, customers: 290 },
];

const categoryData = [
  { name: "Electronics", value: 35, color: "#3b82f6" },
  { name: "Clothing", value: 25, color: "#8b5cf6" },
  { name: "Food", value: 20, color: "#10b981" },
  { name: "Books", value: 12, color: "#f59e0b" },
  { name: "Other", value: 8, color: "#ef4444" },
];

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    product: "Laptop",
    amount: 1299,
    status: "Completed",
    date: "2024-12-10",
  },
  {
    id: "#ORD-002",
    customer: "Jane Smith",
    product: "Headphones",
    amount: 299,
    status: "Processing",
    date: "2024-12-10",
  },
  {
    id: "#ORD-003",
    customer: "Mike Johnson",
    product: "Smartphone",
    amount: 899,
    status: "Completed",
    date: "2024-12-09",
  },
  {
    id: "#ORD-004",
    customer: "Sarah Williams",
    product: "Tablet",
    amount: 599,
    status: "Pending",
    date: "2024-12-09",
  },
  {
    id: "#ORD-005",
    customer: "Tom Brown",
    product: "Smartwatch",
    amount: 399,
    status: "Completed",
    date: "2024-12-08",
  },
  {
    id: "#ORD-006",
    customer: "Emily Davis",
    product: "Camera",
    amount: 1099,
    status: "Processing",
    date: "2024-12-08",
  },
  {
    id: "#ORD-007",
    customer: "Chris Wilson",
    product: "Keyboard",
    amount: 149,
    status: "Completed",
    date: "2024-12-07",
  },
  {
    id: "#ORD-008",
    customer: "Lisa Anderson",
    product: "Monitor",
    amount: 449,
    status: "Pending",
    date: "2024-12-07",
  },
];

const topProducts = [
  { name: "MacBook Pro", sales: 1234, revenue: 1849600, trend: 12 },
  { name: "iPhone 15", sales: 2156, revenue: 2585440, trend: 8 },
  { name: "AirPods Pro", sales: 3421, revenue: 854025, trend: -3 },
  { name: "iPad Air", sales: 1876, revenue: 1125600, trend: 15 },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [activeTab, setActiveTab] = useState("overview");
  const [darkMode, setDarkMode] = useState(false);

  const filteredOrders = recentOrders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      order.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    sidebar: {
      width: sidebarOpen ? "256px" : "80px",
      backgroundColor: darkMode ? "#1e293b" : "#ffffff",
      transition: "width 0.3s",
      display: "flex",
      flexDirection: "column",
      borderRight: `1px solid ${darkMode ? "#334155" : "#e2e8f0"}`,
    },
    sidebarHeader: {
      padding: "1rem",
      borderBottom: `1px solid ${darkMode ? "#334155" : "#e2e8f0"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    logoIcon: {
      width: "32px",
      height: "32px",
      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
    },
    logoText: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: darkMode ? "#ffffff" : "#1e293b",
    },
    menuButton: {
      padding: "0.5rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: darkMode ? "#94a3b8" : "#64748b",
      borderRadius: "0.5rem",
      transition: "background 0.2s",
    },
    nav: {
      flex: 1,
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    navButton: (active) => ({
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.75rem",
      background: active ? (darkMode ? "#3b82f6" : "#eff6ff") : "transparent",
      color: active
        ? darkMode
          ? "#ffffff"
          : "#3b82f6"
        : darkMode
        ? "#94a3b8"
        : "#64748b",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      fontWeight: "500",
      transition: "all 0.2s",
      textAlign: "left",
    }),
    sidebarFooter: {
      padding: "1rem",
      borderTop: `1px solid ${darkMode ? "#334155" : "#e2e8f0"}`,
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    main: {
      flex: 1,
      overflow: "auto",
    },
    header: {
      backgroundColor: darkMode ? "#1e293b" : "#ffffff",
      borderBottom: `1px solid ${darkMode ? "#334155" : "#e2e8f0"}`,
      padding: "1.5rem",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    headerContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1.5rem",
    },
    searchBar: {
      flex: 1,
      maxWidth: "600px",
      position: "relative",
    },
    searchInput: {
      width: "100%",
      padding: "0.75rem 1rem 0.75rem 2.5rem",
      border: `2px solid ${darkMode ? "#334155" : "#e2e8f0"}`,
      borderRadius: "0.5rem",
      backgroundColor: darkMode ? "#0f172a" : "#ffffff",
      color: darkMode ? "#ffffff" : "#1e293b",
      outline: "none",
    },
    searchIcon: {
      position: "absolute",
      left: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: darkMode ? "#64748b" : "#94a3b8",
    },
    headerIcons: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    iconButton: {
      padding: "0.5rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: darkMode ? "#94a3b8" : "#64748b",
      borderRadius: "0.5rem",
      transition: "background 0.2s",
      position: "relative",
    },
    badge: {
      position: "absolute",
      top: "0",
      right: "0",
      width: "8px",
      height: "8px",
      backgroundColor: "#ef4444",
      borderRadius: "50%",
    },
    content: {
      padding: "1.5rem",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      marginBottom: "1.5rem",
    },
    statCard: {
      backgroundColor: darkMode ? "#1e293b" : "#ffffff",
      padding: "1.5rem",
      borderRadius: "0.75rem",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
    statHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },
    statIcon: (gradient) => ({
      width: "48px",
      height: "48px",
      borderRadius: "0.5rem",
      background: gradient,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
    }),
    statChange: (positive) => ({
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      fontSize: "0.875rem",
      fontWeight: "600",
      color: positive ? "#10b981" : "#ef4444",
    }),
    statTitle: {
      fontSize: "0.875rem",
      color: darkMode ? "#94a3b8" : "#64748b",
      marginBottom: "0.25rem",
    },
    statValue: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: darkMode ? "#ffffff" : "#1e293b",
    },
    chartsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "1.5rem",
      marginBottom: "1.5rem",
    },
    chartCard: {
      backgroundColor: darkMode ? "#1e293b" : "#ffffff",
      padding: "1.5rem",
      borderRadius: "0.75rem",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
    chartHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1.5rem",
    },
    chartTitle: {
      fontSize: "1.125rem",
      fontWeight: "bold",
      color: darkMode ? "#ffffff" : "#1e293b",
    },
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "transparent",
      color: "#3b82f6",
      border: "none",
      borderRadius: "0.375rem",
      cursor: "pointer",
      fontSize: "0.875rem",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    table: {
      width: "100%",
      backgroundColor: darkMode ? "#1e293b" : "#ffffff",
      borderRadius: "0.75rem",
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
    tableHeader: {
      padding: "1.5rem",
      borderBottom: `1px solid ${darkMode ? "#334155" : "#e2e8f0"}`,
    },
    tableTitle: {
      fontSize: "1.125rem",
      fontWeight: "bold",
      color: darkMode ? "#ffffff" : "#1e293b",
      marginBottom: "1rem",
    },
    filterButtons: {
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap",
    },
    filterButton: (active) => ({
      padding: "0.5rem 1rem",
      backgroundColor: active ? "#3b82f6" : darkMode ? "#0f172a" : "#f8fafc",
      color: active ? "#ffffff" : darkMode ? "#94a3b8" : "#64748b",
      border: "none",
      borderRadius: "0.375rem",
      cursor: "pointer",
      fontSize: "0.875rem",
      fontWeight: "500",
      textTransform: "capitalize",
    }),
    th: {
      padding: "0.75rem 1.5rem",
      textAlign: "left",
      fontSize: "0.75rem",
      fontWeight: "600",
      color: darkMode ? "#94a3b8" : "#64748b",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
      borderBottom: `1px solid ${darkMode ? "#334155" : "#e2e8f0"}`,
    },
    td: {
      padding: "1rem 1.5rem",
      color: darkMode ? "#e2e8f0" : "#1e293b",
      borderBottom: `1px solid ${darkMode ? "#334155" : "#e2e8f0"}`,
    },
    statusBadge: (status) => {
      const colors = {
        Completed: { bg: "#dcfce7", color: "#166534" },
        Processing: { bg: "#dbeafe", color: "#1e40af" },
        Pending: { bg: "#fef3c7", color: "#92400e" },
      };
      const style = colors[status] || colors.Pending;
      return {
        padding: "0.25rem 0.75rem",
        borderRadius: "9999px",
        fontSize: "0.75rem",
        fontWeight: "600",
        backgroundColor: style.bg,
        color: style.color,
        display: "inline-block",
      };
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          {sidebarOpen && (
            <div style={styles.logo}>
              <div style={styles.logoIcon}>D</div>
              <span style={styles.logoText}>Dashboard</span>
            </div>
          )}
          <button
            style={styles.menuButton}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav style={styles.nav}>
          {[
            {
              icon: <TrendingUp size={20} />,
              label: "Overview",
              id: "overview",
            },
            { icon: <ShoppingCart size={20} />, label: "Orders", id: "orders" },
            { icon: <Package size={20} />, label: "Products", id: "products" },
            { icon: <Users size={20} />, label: "Customers", id: "customers" },
            { icon: <DollarSign size={20} />, label: "Revenue", id: "revenue" },
          ].map((item) => (
            <button
              key={item.id}
              style={styles.navButton(activeTab === item.id)}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div style={styles.sidebarFooter}>
          <button
            style={styles.navButton(false)}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            {sidebarOpen && (
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            )}
          </button>
          <button style={styles.navButton(false)}>
            <Settings size={20} />
            {sidebarOpen && <span>Settings</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.searchBar}>
              <div style={styles.searchIcon}>
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search orders, customers, products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
            </div>

            <div style={styles.headerIcons}>
              <button style={styles.iconButton}>
                <Bell size={20} />
                <span style={styles.badge}></span>
              </button>
              <button style={styles.iconButton}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  JD
                </div>
              </button>
            </div>
          </div>
        </header>

        <div style={styles.content}>
          {activeTab === "overview" && (
            <>
              {/* Stats Cards */}
              <div style={styles.statsGrid}>
                {[
                  {
                    title: "Total Revenue",
                    value: "$45,231",
                    change: "+12.5%",
                    icon: <DollarSign />,
                    gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
                    trend: true,
                  },
                  {
                    title: "Total Orders",
                    value: "2,340",
                    change: "+8.2%",
                    icon: <ShoppingCart />,
                    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                    trend: true,
                  },
                  {
                    title: "Total Customers",
                    value: "1,456",
                    change: "+5.7%",
                    icon: <Users />,
                    gradient: "linear-gradient(135deg, #10b981, #059669)",
                    trend: true,
                  },
                  {
                    title: "Total Products",
                    value: "892",
                    change: "-2.3%",
                    icon: <Package />,
                    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
                    trend: false,
                  },
                ].map((stat, idx) => (
                  <div key={idx} style={styles.statCard}>
                    <div style={styles.statHeader}>
                      <div style={styles.statIcon(stat.gradient)}>
                        {stat.icon}
                      </div>
                      <span style={styles.statChange(stat.trend)}>
                        {stat.trend ? (
                          <TrendingUp size={16} />
                        ) : (
                          <TrendingDown size={16} />
                        )}
                        {stat.change}
                      </span>
                    </div>
                    <h3 style={styles.statTitle}>{stat.title}</h3>
                    <p style={styles.statValue}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div style={styles.chartsGrid}>
                <div style={styles.chartCard}>
                  <div style={styles.chartHeader}>
                    <h2 style={styles.chartTitle}>Revenue Overview</h2>
                    <button style={styles.button}>
                      <Download size={16} />
                      Export
                    </button>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={darkMode ? "#334155" : "#e2e8f0"}
                      />
                      <XAxis
                        dataKey="month"
                        stroke={darkMode ? "#94a3b8" : "#64748b"}
                      />
                      <YAxis stroke={darkMode ? "#94a3b8" : "#64748b"} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: darkMode ? "#1e293b" : "#ffffff",
                          border: "none",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ fill: "#3b82f6", r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div style={styles.chartCard}>
                  <h2 style={styles.chartTitle}>Sales by Category</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: darkMode ? "#1e293b" : "#ffffff",
                          border: "none",
                          borderRadius: "0.5rem",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bar Chart */}
              <div style={styles.chartCard}>
                <h2 style={styles.chartTitle}>Monthly Orders</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={darkMode ? "#334155" : "#e2e8f0"}
                    />
                    <XAxis
                      dataKey="month"
                      stroke={darkMode ? "#94a3b8" : "#64748b"}
                    />
                    <YAxis stroke={darkMode ? "#94a3b8" : "#64748b"} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: darkMode ? "#1e293b" : "#ffffff",
                        border: "none",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="orders"
                      fill="#8b5cf6"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Top Products */}
              <div style={styles.chartCard}>
                <h2 style={styles.chartTitle}>Top Products</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  {topProducts.map((product, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1rem",
                        backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "0.5rem",
                            background:
                              "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: "600",
                              color: darkMode ? "#ffffff" : "#1e293b",
                            }}
                          >
                            {product.name}
                          </p>
                          <p
                            style={{
                              fontSize: "0.875rem",
                              color: darkMode ? "#94a3b8" : "#64748b",
                            }}
                          >
                            {product.sales} sales
                          </p>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            color: darkMode ? "#ffffff" : "#1e293b",
                          }}
                        >
                          ${product.revenue.toLocaleString()}
                        </p>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            color: product.trend > 0 ? "#10b981" : "#ef4444",
                          }}
                        >
                          {product.trend > 0 ? (
                            <TrendingUp size={14} />
                          ) : (
                            <TrendingDown size={14} />
                          )}
                          {Math.abs(product.trend)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "orders" && (
            <div style={styles.table}>
              <div style={styles.tableHeader}>
                <h2 style={styles.tableTitle}>Recent Orders</h2>
                <div style={styles.filterButtons}>
                  {["all", "completed", "processing", "pending"].map(
                    (status) => (
                      <button
                        key={status}
                        style={styles.filterButton(filterStatus === status)}
                        onClick={() => setFilterStatus(status)}
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Order ID</th>
                      <th style={styles.th}>Customer</th>
                      <th style={styles.th}>Product</th>
                      <th style={styles.th}>Amount</th>
                      <th style={styles.th}>Status</th>
                      <th style={styles.th}>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id}>
                        <td style={styles.td}>{order.id}</td>
                        <td style={styles.td}>{order.customer}</td>
                        <td style={styles.td}>{order.product}</td>
                        <td style={styles.td}>${order.amount}</td>
                        <td style={styles.td}>
                          <span style={styles.statusBadge(order.status)}>
                            {order.status}
                          </span>
                        </td>
                        <td style={styles.td}>{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {["products", "customers", "revenue"].includes(activeTab) && (
            <div
              style={{
                ...styles.chartCard,
                textAlign: "center",
                padding: "3rem",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
              >
                {activeTab === "products" && (
                  <Package size={32} color="white" />
                )}
                {activeTab === "customers" && <Users size={32} color="white" />}
                {activeTab === "revenue" && (
                  <DollarSign size={32} color="white" />
                )}
              </div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  textTransform: "capitalize",
                  color: darkMode ? "#ffffff" : "#1e293b",
                }}
              >
                {activeTab} Section
              </h2>
              <p style={{ color: darkMode ? "#94a3b8" : "#64748b" }}>
                This section is ready to be expanded with more features!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
