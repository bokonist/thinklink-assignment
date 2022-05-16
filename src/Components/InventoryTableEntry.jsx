/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from '../Contexts/DataContext';
import dropDown from '../assets/dropdown.svg';
import InventoryTableEntryExpansion from './InventoryTableEntryExpansion';
import '../styles/InventoryTableEntry.css';

function InventoryTableEntry({ dataKey }) {
  const wineData = useContext(DataContext);
  const dataObj = wineData.filter((item) => item.id === dataKey)[0];
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };
  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };
  const dummy = () => {};
  return (
    <>
      <div className="table-data-row">
        <div className="table-data-cell first-column">
          <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        </div>
        <div className="table-data-cell product-column product-col-container">
          <img alt="" src={dataObj?.imageData} className="product-image" />
          <div className="product-cell-inner-info">
            <p>{dataObj?.product}</p>
            <p>{dataObj?.region}</p>
          </div>
        </div>
        <div className="table-data-cell rating-column">
          {dataObj?.avgRating}
        </div>
        <div className="table-data-cell vintage-column">{dataObj?.vintage}</div>
        <div className="table-data-cell qty-column">{dataObj?.qty}</div>
        <div className="table-data-cell vol-column">{dataObj?.volume}</div>
        <div className="table-data-cell cost-column">{dataObj?.cost}</div>
        <div className="table-data-cell price-column">{dataObj?.price}</div>
        <div
          role="button"
          className="table-data-cell sort-column"
          onClick={handleExpand}
          onKeyDown={dummy}
        >
          <img src={dropDown} alt="" className={isExpanded ? 'expanded' : ''} />
        </div>
      </div>
      {isExpanded && <InventoryTableEntryExpansion dataKey={dataKey} />}
    </>
  );
}
InventoryTableEntry.propTypes = {
  dataKey: PropTypes.number.isRequired,
};
export default InventoryTableEntry;
