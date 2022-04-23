import { connect } from "react-redux";

const Staistics = ({amount, done}) =>{
    return (
        <header>
            <p>Todos</p>
            <p>Amount todos: {amount}</p>
            <p>Done: {done}</p>
        </header>
    );
}


const getCompletedTodoCount = todos => todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0,)

  
const mapStateToProps = (state) => ({
  amount: state.todos.items.length,
  done: getCompletedTodoCount(state.todos.items),
});

export default connect(mapStateToProps)(Staistics);
