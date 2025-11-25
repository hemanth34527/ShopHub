import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { TrendingUp, ShoppingCart, Users, DollarSign } from 'lucide-react';
import Card from '../../components/Card/Card';
import mockData from '../../data/mockData.json';
import './Dashboard.css';

const Dashboard = () => {
  const { analytics } = mockData;
  const COLORS = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];

  const stats = [
    {
      title: 'Total Revenue',
      value: `$${analytics.totalRevenue.toLocaleString()}`,
      icon: <DollarSign size={24} />,
      trend: '+12.5%',
      color: 'primary'
    },
    {
      title: 'Total Orders',
      value: analytics.totalOrders.toLocaleString(),
      icon: <ShoppingCart size={24} />,
      trend: '+8.2%',
      color: 'secondary'
    },
    {
      title: 'Customers',
      value: analytics.totalCustomers.toLocaleString(),
      icon: <Users size={24} />,
      trend: '+5.7%',
      color: 'success'
    },
    {
      title: 'Average Order',
      value: `$${analytics.averageOrder.toFixed(2)}`,
      icon: <TrendingUp size={24} />,
      trend: '+3.1%',
      color: 'warning'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Delivered': 'status-success',
      'Shipped': 'status-primary',
      'Processing': 'status-warning',
      'Cancelled': 'status-danger'
    };
    return colors[status] || '';
  };

  return (
    <div className="dashboard fade-in">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <p className="dashboard-subtitle">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Card key={index} hover className="stat-card">
            <div className="stat-content">
              <div className={`stat-icon stat-icon-${stat.color}`}>
                {stat.icon}
              </div>
              <div className="stat-details">
                <p className="stat-title">{stat.title}</p>
                <h2 className="stat-value">{stat.value}</h2>
                <span className="stat-trend">{stat.trend} from last month</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="charts-grid">
        <Card title="Sales Overview" subtitle="Monthly revenue and orders">
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analytics.salesByMonth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Bar dataKey="sales" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Category Breakdown" subtitle="Revenue by product category">
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={analytics.categoryBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {analytics.categoryBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card title="Recent Orders" subtitle="Latest customer transactions">
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {analytics.recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td>{order.customer}</td>
                  <td className="order-amount">${order.amount}</td>
                  <td>
                    <span className={`order-status ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="order-date">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
