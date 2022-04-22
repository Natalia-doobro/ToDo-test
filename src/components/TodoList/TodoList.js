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

export default TodoList;