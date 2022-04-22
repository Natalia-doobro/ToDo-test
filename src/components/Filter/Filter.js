import PropTypes from "prop-types";
import shortid from "shortid";

const Filter = ({ value, onChange }) => {
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
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
