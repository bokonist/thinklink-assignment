import React from 'react';
import PropTypes from 'prop-types';

function MetricCard({ dataName, dataValue, dataIcon }) {
  return (
    <div className="metric-card-container">
      <div className="metric-card-info-container">
        <p className="metric-card-info-name">{dataName}</p>
        <img className="metric-card-info-icon" src={dataIcon} alt={dataName} />
      </div>
      <p className="metric-card-value">{dataValue}</p>
    </div>
  );
}
MetricCard.propTypes = {
  dataName: PropTypes.string.isRequired,
  dataValue: PropTypes.number.isRequired,
  dataIcon: PropTypes.string.isRequired,
};
export default MetricCard;
