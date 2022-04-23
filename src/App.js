import React, {Component} from 'react'
import Staistics from './components/Staistics'
import TodoList from './components/TodoList'
import AddForm from './components/AddForm'
import Filter from './components/Filter'
import AddButton from './components/AddButton'
import Modal from './components/Modal'



class App extends Component {
  state = {
    showModal: false,
  };

  // componentDidMount() {
  //   const todo = JSON.parse(localStorage.getItem("todos"));

  //   if (todo) {
  //     this.setState({ todos: todo });
  //   } else {
  //     alert("fill out Todo");
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { todos } = this.state;

  //   if (prevProps.todos !== todos) {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   }
  // }

  

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  }

  render() {
    const {showModal} = this.state;

    return (
      <div className="App">
        <Staistics/>

        <AddButton onClick={this.toggleModal}/>
        <Filter/>
        <TodoList/>
      
        {showModal &&
          <Modal closeModal={this.toggleModal}>
            <AddForm onSave={this.toggleModal}/>
          </Modal>
        }
        
      </div>
    )
  }
}



export default App;
