import React, {Component} from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actionsTodos from "../../redux/todos/todos-actions";


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
      <form onSubmit={this.handleSubmit}>
        <textarea value={message} onChange={this.handleNameChange}></textarea> 
        <button>Save</button>
      </form>
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
