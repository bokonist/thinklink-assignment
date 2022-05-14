import React from 'react';
import refreshIcon from '../assets/refresh.svg';
import '../styles/ChartView.css';

function ChartView() {
  return (
    <div className="chart-view-container">
      <div className="chart-view-header-container">
        <div className="header-overview-container">
          <h1 className="overview-title">Total Sales Overview</h1>
          <p className="overview-range">7-13 Aug, 2020</p>
        </div>
        <div className="refresh-container">
          <img
            src={refreshIcon}
            alt="refresh metrics button"
            className="refresh-icon"
          />
          <h1 className="refresh-title">Refresh Metrics</h1>
        </div>
        <form>
          <label htmlFor="filter-range" className="filter-container">
            <p className="filter-title">Filter by</p>
            <select
              name="filter by date range"
              id="filter-range"
              className="filter-range-select"
            >
              <option value="week">this week</option>
              <option value="month">this month</option>
              <option value="year">this year</option>
            </select>
          </label>
        </form>
      </div>
      <div className="chart-view-body-container">
        <div className="graph-container">
          <div className="graph-info-container">graph info</div>
          <div className="graph-container">graph</div>
        </div>
        <div className="general-info-container">
          <h1 className="info-title">Total Profit</h1>
          <p className="net-info-container">$12,545.00</p>
          <div className="insight-container">
            <img
              src={refreshIcon}
              alt="insights icon"
              className="insight-icon"
            />
            <p className="insight-info">+23% from last week</p>
          </div>
          <h1 className="sales-info-title">Total Products Sold</h1>
          <p className="sales-info">329</p>
        </div>
      </div>
    </div>
  );
}

export default ChartView;
