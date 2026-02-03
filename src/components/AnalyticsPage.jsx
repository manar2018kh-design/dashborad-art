import { salesData, categoryData, topArtists } from "../data/data";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";


function AnalyticsPage() {
  return (
    <div className="analysis-page">
      <main className="analysis-main">

        <div className="analysis-header">
          <h1 className="analysis-title">Analytics</h1>
          <p className="analysis-subtitle">Gallery performance overview</p>
        </div>


        <div className="analysis-charts">
          <div className="analysis-card chart-card">
            <h3 className="analysis-card-header">Revenue Overview</h3>
            <div className="analysis-card-content">
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="analysis-card chart-card">
            <h3 className="analysis-card-header">Sales by City</h3>
            <div className="analysis-card-content">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="count"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="analysis-card">
          <h3 className="analysis-card-header">Top Performing Artists</h3>
          <div className="analysis-list">
            {topArtists.map((artist, index) => (
              <div key={artist.name} className="analysis-list-item">
                <div className="analysis-list-left">
                  <div className="analysis-rank">{index + 1}</div>
                  <div>
                    <p className="analysis-artist-name">{artist.name}</p>
                    <p className="analysis-artist-sales">{artist.sales} artworks sold</p>
                  </div>
                </div>
                <p className="analysis-artist-revenue">${artist.revenue.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

export default AnalyticsPage;