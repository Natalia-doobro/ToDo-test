import React, {Component} from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actionsTodos from "../../redux/todos/todos-actions";
import styled from 'styled-components'

const TodoForm = styled.form`
  width: 400px;
  height: 200px;
`
const TextareaForm = styled.textarea`
  width: 100%;
  height: 70%;
`
const Button = styled.button`
    width: 100%;
    height: 50px;
    font-weight: 500;
    font-size: 40px;
    border-radius: 10px;
    background-color: #596235;
    color: #ffffff;
    border: 2px solid #ffffff;
`

class AddForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    message: '',
  };
    
  handleNameChange = event => {
    this.setState({
      message: event.currentTarget.value,
    })

  }

  handleSubmit = event => {
    event.preventDefault();
    const {message} = this.state;

    if (message === " ") {
      return alert(`enter a value`);
    } else {
      this.props.onSubmit(message);
      this.props.onSave();
      this.reset();
    }
  }
    
  reset = () => {
     this.setState({message: ''}) 
  }
  
  render() {
    const {message} = this.state;

    return (
      <TodoForm onSubmit={this.handleSubmit}>
        <TextareaForm value={message} onChange={this.handleNameChange}></TextareaForm> 
        <Button>Save</Button>
      </TodoForm>   
    )
  }
}      

const mapStateToProps = (state) => {
  return {
    masTodos: state.todos.items,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(actionsTodos.addTodos(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
