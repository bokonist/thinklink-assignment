import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DataContext from '../Contexts/DataContext';
import editEntry from '../assets/edit.svg';
import deleteEntry from '../assets/deleteDustbin.svg';

function InventoryTableEntryExpansion({ dataKey }) {
  const wineData = useContext(DataContext);
  const dataObj = wineData.filter((item) => item.id === dataKey)[0];
  return (
    <div className="expansion-container">
      <div className="expansion-header">
        <div className="expansion-header-info">
          <h1 className="wine-title">{dataObj?.product}</h1>
          <div className="additional-info-container">
            <div className="info-key">Region</div>
            <div className="info-value">{dataObj?.region}</div>
            <div className="info-key">Vintage</div>
            <div className="info-value">{dataObj?.vintage}</div>
          </div>
        </div>
        <div className="expansion-header-toolkit">
          <a href=".." className="toolkit-view">
            View Wine
          </a>
          <img src={editEntry} alt="" className="edit-wine" />
          <img src={deleteEntry} alt="" className="delete-wine" />
        </div>
      </div>
      <div className="expansion-body"> </div>
      <div className="rating-expanded">
        <h1 className="rating-title">RATING</h1>
        {dataObj?.ratings.map((ratingInfo, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            <h1 className="rating-author">{ratingInfo.name}</h1>
            <p className="rating-value">{ratingInfo.rating}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="stock-expanded">
        <h1 className="stock-title">STOCK</h1>
        {dataObj?.stocks.map((stockInfo, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            <h1 className="stock-supplier">{stockInfo.name}</h1>
            <p className="stock-quantity">{stockInfo.quantity}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
InventoryTableEntryExpansion.propTypes = {
  dataKey: PropTypes.number.isRequired,
};
export default InventoryTableEntryExpansion;
