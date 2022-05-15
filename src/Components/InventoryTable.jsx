import React from 'react';
import InventoryTableEntry from './InventoryTableEntry';
import sortUpDown from '../assets/sort-up-down.svg';
import '../styles/InventoryTable.css';
import wineData from '../data/wineData';
import DataContext from '../Contexts/DataContext';

function InventoryTable() {
  return (
    <DataContext.Provider value={wineData}>
      <div className="table-container">
        <div className="main-table">
          <div className="table-header">
            <div className="table-header-cell first-column">
              <input type="checkbox" />
            </div>
            <div className="table-header-cell product-column">
              <p>PRODUCT</p>
            </div>
            <div className="table-header-cell rating-column">
              <p>RATING</p>
              <img src={sortUpDown} alt="" />
            </div>
            <div className="table-header-cell vintage-column">
              <p>VINTAGE</p>
              <img src={sortUpDown} alt="" />
            </div>
            <div className="table-header-cell qty-column">
              <p>QTY</p>
              <img src={sortUpDown} alt="" />
            </div>
            <div className="table-header-cell vol-column">
              <p>VOLUME</p>
              <img src={sortUpDown} alt="" />
            </div>
            <div className="table-header-cell cost-column">
              <p>COST</p>
              <img src={sortUpDown} alt="" />
            </div>
            <div className="table-header-cell price-column">
              <p>PRICE</p>
              <img src={sortUpDown} alt="" />
            </div>
            <div className="table-header-cell sort-column">
              <img src={sortUpDown} alt="" />
            </div>
          </div>
          <div className="table-body">
            {wineData.map((item) => (
              <InventoryTableEntry key={item.id} dataKey={item.id} />
            ))}
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default InventoryTable;
