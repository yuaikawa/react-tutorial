import React, { PropTypes } from "react";

// propsから住所と緯度・経度を受けとってviewに表示
const GeocodeResult = ({ address, location }) => (
  <ul className="geocode-result">
    <li>住所:{address}</li>
    <li>緯度:{location.lat}</li>
    <li>経度:{location.lng}</li>
  </ul>
);

// validationの実施
GeocodeResult.propTypes = {
  address: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

// dafault値の設定
GeocodeResult.defaultProps = {
  address: '',
}

export default GeocodeResult;