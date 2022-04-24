import { connect } from "react-redux";
import actionsTodos from "../../redux/todos/todos-actions";
import PropTypes from "prop-types";
import Todo from '../Todo'
import styled from 'styled-components'

const ListTodo = styled.ul`
  list-style: none;
  padding: 20px 20px 20px;
  -moz-column-count: 2; 
  -webkit-column-count: 2;
  column-count: 2;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

const ItemTodo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  min-height: 50px;
  margin-bottom: 10px;
  padding: 5px 10px 10px;
  border-radius: 10px;
  background: #596235;
  border: 2px solid #2F3020;
`

const TodoList = ({todos, onDeleteTodo, onToggleCompleted}) => {
 return (
    <ListTodo>
         {todos.map(({id, text, completed}) => 
             <ItemTodo key={id}>
                <Todo 
                  text={text} 
                  completed={completed} 
                  onToggleCompleted={() => onToggleCompleted(id)} 
                  onDeleteTodo={() => onDeleteTodo(id)}
                />
            </ItemTodo>
        )}   
    </ListTodo>
 );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
};

const filterName = (todos, filter) => {
  const normalizerForm = filter.toLowerCase();
  return todos.filter((el) =>
    el.text.toLowerCase().includes(normalizerForm)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.todos;

  const filterItems = filterName(items, filter);

  return {
    todos: filterItems,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (id) => dispatch(actionsTodos.deliteTodos(id)),
  onToggleCompleted: (id) => dispatch(actionsTodos.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);