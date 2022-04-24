import React, {Component} from 'react'
import Staistics from './components/Staistics'
import TodoList from './components/TodoList'
import AddForm from './components/AddForm'
import Filter from './components/Filter'
import AddButton from './components/AddButton'
import Modal from './components/Modal'
import styled from 'styled-components'

const AppWrapper = styled.div`
  width:100%;
  min-height: 100vh;
  padding: 2rem;
  background: #D96846;
  color: #fff;
`

const Container = styled.div`
  max-width: 1200px;
  min-height: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px 30px;
  border: 10px solid #2F3020;
`

const ControlPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px 30px;
`

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  }

  render() {
    const {showModal} = this.state;

    return (
      <AppWrapper>
        <Container>
          <Staistics/>

          <ControlPanel>
            <AddButton onClick={this.toggleModal}/>
            <Filter />
          </ControlPanel>
          
          <TodoList/>
          
          {showModal &&
            <Modal closeModal={this.toggleModal}>
              <AddForm onSave={this.toggleModal}/>
            </Modal>
          }
        </Container>
      </AppWrapper>
    )
  }
}



export default App;
