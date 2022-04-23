import { connect } from "react-redux";
import actionsTodos from "../../redux/todos/todos-actions";
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
  onClear: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { value: state.todos.filter };
};
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actionsTodos.changeFilter(e.currentTarget.value)),
  onClear: () => dispatch(actionsTodos.changeFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);