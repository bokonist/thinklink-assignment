import React from 'react';
import InventoryTableEntry from './InventoryTableEntry';
import sortUpDown from '../assets/sort-up-down.svg';
import '../styles/InventoryTable.css';
import wineData from '../data/wineData';
import DataContext from '../Contexts/DataContext';

function InventoryTable() {
  return (
    <DataContext.Provider value={wineData}>
      <table className="main-table">
        <thead className="table-header">
          <tr>
            <th className="table-header-cell">
              <input type="checkbox" />
            </th>
            <th className="table-header-cell">
              <p>PRODUCT</p>
            </th>
            <th className="table-header-cell">
              <p>RATING</p>
              <img src={sortUpDown} alt="" />
            </th>
            <th className="table-header-cell">
              <p>VINTAGE</p>
              <img src={sortUpDown} alt="" />
            </th>
            <th className="table-header-cell">
              <p>QTY</p>
              <img src={sortUpDown} alt="" />
            </th>
            <th className="table-header-cell">
              <p>VOLUME</p>
              <img src={sortUpDown} alt="" />
            </th>
            <th className="table-header-cell">
              <p>COST</p>
              <img src={sortUpDown} alt="" />
            </th>
            <th className="table-header-cell">
              <p>PRICE</p>
              <img src={sortUpDown} alt="" />
            </th>
            <th className="table-header-cell">
              <img src={sortUpDown} alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {wineData.map((item) => (
            <InventoryTableEntry key={item.id} dataKey={item.id} />
          ))}
        </tbody>
      </table>
    </DataContext.Provider>
  );
}

export default InventoryTable;
