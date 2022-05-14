import React from 'react';
import openIcon from '../assets/openIcon.svg';
import transitIcon from '../assets/transitIcon.svg';
import cancelledIcon from '../assets/cancelledIcon.svg';
import fulfilledIcon from '../assets/fulfilledIcon.svg';
import MetricCard from './MetricCard';
import '../styles/MetricCard.css';

function Metrics() {
  const metricItems = [
    {
      id: 1,
      name: 'Open orders',
      value: 239,
      icon: openIcon,
    },
    {
      id: 2,
      name: 'Orders in transit',
      value: 126,
      icon: transitIcon,
    },
    {
      id: 3,
      name: 'Fulfilled orders',
      value: 1254,
      icon: fulfilledIcon,
    },
    {
      id: 4,
      name: 'Cancelled orders',
      value: 35,
      icon: cancelledIcon,
    },
  ];
  return (
    <div className="metrics-container">
      {
        // eslint-disable-next-line max-len
        metricItems.map((item) => (
          <MetricCard
            key={item.id}
            dataName={item.name}
            dataValue={item.value}
            dataIcon={item.icon}
          />
        ))
      }
    </div>
  );
}

export default Metrics;
