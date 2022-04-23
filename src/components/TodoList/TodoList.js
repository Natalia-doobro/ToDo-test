import { connect } from "react-redux";
import actionsTodos from "../../redux/todos/todos-actions";
import PropTypes from "prop-types";
import Todo from '../Todo'
import style from './TodoList.module.css'

const TodoList = ({todos, onDeleteTodo, onToggleCompleted}) => {
 return (
    <ul>
         {todos.map(({id, text, completed}) => 
             <li key={id} className={style.item}>
                <Todo 
                  text={text} 
                  completed={completed} 
                  onToggleCompleted={() => onToggleCompleted(id)} 
                  onDeleteTodo={() => onDeleteTodo(id)}
                />
            </li>
        )}   
    </ul>
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