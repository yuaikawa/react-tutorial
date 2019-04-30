import React, { PropTypes } from "react";

import HotelRow from "./HotelRow";

// propsから住所と緯度・経度を受けとってviewに表示
const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th>ホテル名</th>
      </tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

// validationの実施
HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any)
};

// dafault値の設定
HotelsTable.defaultProps = {
  hotels: []
};

export default HotelsTable;