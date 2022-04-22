import PropTypes from "prop-types";
import shortid from "shortid";

const Filter = ({ value, onChange, onClear }) => {
  const filterInputId = shortid.generate();
  
  return (
    <label htmlFor={filterInputId}>
      Filter Todos by name
      <input
        type="text"
        id={filterInputId}
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={() => onClear()}>сlear</button>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
