import PropTypes from "prop-types";
import style from './TodoList.module.css'

const TodoList = ({todos, onDeleteTodo, onToggleCompleted}) => {
 return (
    <ul>
         {todos.map(({id, text, completed}) => 
             <li key={id} className={style.item}>
                 <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggleCompleted(id)}
                />
                 <p>{text}</p>
                 <button onClick={() => onDeleteTodo(id)}>delete</button>
            </li>
        )}   
    </ul>
 );
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       text: PropTypes.string,
//       completed: PropTypes.bool,
//     })
//   ),
//   onDeleteTodo: PropTypes.func.isRequired,
//   onToggleCompleted: PropTypes.func.isRequired,
// };

export default TodoList;