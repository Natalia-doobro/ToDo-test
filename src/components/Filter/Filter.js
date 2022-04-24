import { connect } from "react-redux";
import actionsTodos from "../../redux/todos/todos-actions";
import PropTypes from "prop-types";
import shortid from "shortid";
import styled from 'styled-components'

const ContainerFilter = styled.label`
  display: flex;
  align-items: flex-end;
  margin-left: 30px;
`
const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-right: 10px;
  font-size: 20px;
  line-height: 1.36;
`
const InputFilter = styled.input`
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 0px 12px 30px;
  transition: border var(--animation-duration), color var(--animation-duration);
`
const Button = styled.button`
    height: 50px;
    padding: 5px;
    font-weight: 500;
    font-size: 18px;
    border-radius: 10px;
    background-color: #a51310;
    color: #ffffff;
    border: 2px solid #ffffff;
`

const Filter = ({ value, onChange, onClear }) => {
  const filterInputId = shortid.generate();
  
  return (
    <ContainerFilter>
      <LabelFilter htmlFor={filterInputId}>
        Filter Todos by name
        <InputFilter
          type="text"
          id={filterInputId}
          value={value}
          onChange={onChange}
        />
      </LabelFilter>
      <Button type="button" onClick={() => onClear()}>сlear</Button>
    </ContainerFilter>
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