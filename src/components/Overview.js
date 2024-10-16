import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Overview.css';

const dataLine = [
  { name: 'Jan', UI: 4000, UX: 2400, IA: 2400 },
  { name: 'Feb', UI: 3000, UX: 1398, IA: 2210 },
  { name: 'Mar', UI: 2000, UX: 9800, IA: 2290 },
  { name: 'Apr', UI: 2780, UX: 3908, IA: 2000 },
  { name: 'May', UI: 1890, UX: 4800, IA: 2181 },
  { name: 'Jun', UI: 2390, UX: 3800, IA: 2500 },
  { name: 'Jul', UI: 3490, UX: 4300, IA: 2100 },
];

const dataBar = [
  { name: 'Jan', growth: 400 },
  { name: 'Feb', growth: 300 },
  { name: 'Mar', growth: 200 },
  { name: 'Apr', growth: 278 },
  { name: 'May', growth: 189 },
  { name: 'Jun', growth: 239 },
  { name: 'Jul', growth: 349 },
];

const dataPie = [
  { name: 'LinkedIn', value: 400 },
  { name: 'Facebook', value: 300 },
  { name: 'Twitter', value: 300 },
  { name: 'Others', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Overview() {
  return (
    <div className="overview">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {/* Left-aligned header */}
        <h1 style={{ margin: '0' }}>ABC COMPANY</h1>
        {/* Straight horizontal line */}
        <hr style={{ flex: 1, marginLeft: '20px', border: '1px solid #ccc' }} />
      </div>

      <div className="stats">
        <div className="stat-box">
          <h3>New Reviews</h3>
          <p>Total: 35</p>
          <p>This Month: 5</p>
        </div>
        <div className="stat-box">
          <h3>Growth</h3>
          <BarChart width={300} height={150} data={dataBar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="growth" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="stat-box">
          <h3>Social Media Traffic</h3>
          <PieChart width={200} height={150}>
            <Pie data={dataPie} cx={100} cy={75} innerRadius={40} outerRadius={60} fill="#8884d8" paddingAngle={5} dataKey="value">
              {dataPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>

      <div className="charts">
        <h3>Stats</h3>
        <LineChart width={500} height={300} data={dataLine}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="UI" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="UX" stroke="#82ca9d" />
          <Line type="monotone" dataKey="IA" stroke="#ffc658" />
        </LineChart>
      </div>
    </div>
  );
}

export default Overview;
