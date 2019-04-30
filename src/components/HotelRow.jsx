import React, { PropTypes } from "react";

const HotelRow = ({ hotel }) => (
  <tr>
    <td><a href={hotel.url} target="_blank">{hotel.name}</a></td>
  </tr>
);

// validationの実施
HotelRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired
};

export default HotelRow;
