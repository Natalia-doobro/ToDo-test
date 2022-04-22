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
    this.props.onSubmit(this.state.message)
    this.reset();
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