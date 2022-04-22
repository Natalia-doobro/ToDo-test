import React, {Component} from 'react'


class AddForm extends Component {
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
      this.props.onSubmit(message)
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


export default AddForm;