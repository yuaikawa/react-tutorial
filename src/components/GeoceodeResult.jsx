import React, { PropTypes } from "react";

// propsから住所と緯度・経度を受けとってviewに表示
const GeocodeResult = ({ address, lat, lng }) => (
  <ul className="geocode-result">
    <li>住所:{address}</li>
    <li>緯度:{lat}</li>
    <li>経度:{lng}</li>
  </ul>
);

// validationの実施
GeocodeResult.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

// dafault値の設定
GeocodeResult.defaultProps = {
  address: '',
  lat: 0,
  lng : 0,
}

export default GeocodeResult;