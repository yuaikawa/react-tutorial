import React, { PropTypes } from "react";

import HotelRow from "./HotelRow";
import HotelsClickableTh from "./HotelsClickabeTh";

// propsから住所と緯度・経度を受けとってviewに表示
const HotelsTable = ({ hotels, sortKey, onSort }) => (
  <table>
    <tbody>
      <tr>
        <th>ホテル画像</th>
        <th>ホテル名</th>
        <HotelsClickableTh
          sortKey="price"
          label="値段"
          isSelected={sortKey === "price"}
          onSort={key => onSort(key)}
        />
        <HotelsClickableTh
          sortKey="reviewAverage"
          label="レビュースコア"
          isSelected={sortKey === "reviewAverage"}
          onSort={key => onSort(key)}
        />
        <th>レビュー数</th>
        <th>距離</th>
      </tr>
      {hotels.map(hotel => (
        <HotelRow key={hotel.id} hotel={hotel} />
      ))}
    </tbody>
  </table>
);

// validationの実施
HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired
};

// dafault値の設定
HotelsTable.defaultProps = {
  hotels: []
};

export default HotelsTable;
