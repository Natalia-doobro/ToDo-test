import React, {Component} from 'react'
import Staistics from './components/Staistics'
import TodoList from './components/TodoList'
import AddForm from './components/AddForm'
import Filter from './components/Filter'
import AddButton from './components/AddButton'
import Modal from './components/Modal'
import initialTodos from './todos.json'
import shortid from 'shortid';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    const todo = JSON.parse(localStorage.getItem("todos"));

    if (todo) {
      this.setState({ todos: todo });
    } else {
      alert("fill the phonebook with contacts");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;

    if (prevProps.todos !== todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  addTodo = data =>{
    const todo = {
      id: shortid.generate(),
      text: data,
      completed: false,
    }

    this.setState(({todos, showModal}) => ({
      todos: [todo, ...todos],
      showModal: !showModal,
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

  сlearFilter = () => {
    return this.setState({ filter: "" });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizerForm = filter.toLowerCase();

    const searchResponse = todos.filter((todo) => 
      todo.text.toLowerCase().includes(normalizerForm) 
    );
    
    return searchResponse;
  };

  getCompletedTodoCount = () => {
    const {todos} = this.state;
    return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0,)
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  }

  render() {
    const {todos, filter, showModal} = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodoCount();

    const visibleTodos = this.getVisibleTodos();

    return (
      <div className="App">
        <Staistics amount={totalTodoCount} done={completedTodoCount}/>

        <AddButton onClick={this.toggleModal}/>
        <Filter value={filter} onChange={this.changeFilter} onClear={this.сlearFilter}/>
        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/>
      
        {showModal &&
          <Modal closeModal={this.toggleModal}>
            <AddForm onSubmit={this.addTodo}/>
          </Modal>
        }
        
      </div>
    )
  }
}

export default App;
