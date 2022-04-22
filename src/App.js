import React, {Component} from 'react'
import Staistics from './components/Staistics'
import TodoList from './components/TodoList'
import AddForm from './components/AddForm'
import Filter from './components/Filter'
import initialTodos from './todos.json'
import shortid from 'shortid';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = data =>{
    const todo = {
      id: shortid.generate(),
      text: data,
      completed: false,
    }

    this.setState(({todos}) => ({
      todos: [todo, ...todos]
    }))
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }));
  }

  toggleCompleted = todoId => {
    
    this.setState(({todos}) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? {...todo, completed: !todo.completed,}
          : todo
      ),
    }))
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizerForm = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizerForm)
    );
  };

  getCompletedTodoCount = () => {
    const {todos} = this.state;
    todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0,)
  }

  render() {
    const {todos, filter} = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodoCount;

    const visibleTodos = this.getVisibleTodos;

    return (
      <div className="App">
        <Staistics amount={totalTodoCount} done={completedTodoCount}/>

        <AddForm onSubmit={this.addTodo}/>
        <Filter value={filter} onChange={this.changeFilter}/>
        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/>
      </div>
    )
  }
}

export default App;
