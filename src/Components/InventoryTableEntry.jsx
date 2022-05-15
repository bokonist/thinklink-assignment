/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from '../Contexts/DataContext';
import dropDown from '../assets/dropdown.svg';
import InventoryTableEntryExpansion from './InventoryTableEntryExpansion';

function InventoryTableEntry({ dataKey }) {
  const wineData = useContext(DataContext);
  const dataObj = wineData.filter((item) => item.id === dataKey)[0];
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };
  const dummy = () => {};
  return (
    <>
      <tr className="table-data-row">
        <td className="table-data-cell">
          <input type="checkbox" />
        </td>
        <td className="table-data-cell">
          <img alt="" src={dataObj?.imageData} className="product-image" />
          <p>{dataObj?.product}</p>
          <p>{dataObj?.region}</p>
        </td>
        <td className="table-data-cell">{dataObj?.avgRating}</td>
        <td className="table-data-cell">{dataObj?.vintage}</td>
        <td className="table-data-cell">{dataObj?.qty}</td>
        <td className="table-data-cell">{dataObj?.volume}</td>
        <td className="table-data-cell">{dataObj?.cost}</td>
        <td className="table-data-cell">{dataObj?.price}</td>
        <td
          className="table-data-cell"
          onClick={handleExpand}
          onKeyDown={dummy}
        >
          <img src={dropDown} alt="" className={isExpanded ? 'expanded' : ''} />
        </td>
      </tr>
      <tr>
        {isExpanded && (
          <td colSpan="9">
            <InventoryTableEntryExpansion dataKey={dataKey} />
          </td>
        )}
      </tr>
    </>
  );
}
InventoryTableEntry.propTypes = {
  dataKey: PropTypes.number.isRequired,
};
export default InventoryTableEntry;
