
const Todo = ({text, completed, onToggleCompleted, onDeleteTodo }) => (
    <>
        <input
            type="checkbox"
            checked={completed}
            onChange={onToggleCompleted}
        />
        <p>{text}</p>
        <button onClick={onDeleteTodo}>delete</button>
    </>
);

export default Todo;