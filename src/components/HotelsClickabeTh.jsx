import React, { PropTypes } from "react";

const HotelsClickableTh = ({ sortKey, label, isSelected, onSort }) => (
  <th onClick={() => onSort(sortKey)} className="hotel-clickable-th">
    {label}
    {isSelected ? "▲" : ""}
  </th>
);

// validationの実施
HotelsClickableTh.propTypes = {
  sortKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired
};

export default HotelsClickableTh;
