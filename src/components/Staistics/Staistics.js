import { connect } from "react-redux";
import styled from 'styled-components'

const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px 20px 10px;
    border-bottom: 5px solid #2F3020;
`
const Title = styled.h1`
    font-style: normal;
    font-weight: 900;
    font-size: 44px;
    line-height: 1.36;
`

const Staistic = styled.div`
    min-width: 250px;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
`

const Staistics = ({amount, done}) =>{
    return (
        <ContainerTitle>
            <Title>Todos</Title>
            <Staistic>
            <p>Amount todos: {amount}</p>
            <p>Done: {done}</p>
            </Staistic>
        </ContainerTitle>
    );
}


const getCompletedTodoCount = todos => todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0,)

  
const mapStateToProps = (state) => ({
  amount: state.todos.items.length,
  done: getCompletedTodoCount(state.todos.items),
});

export default connect(mapStateToProps)(Staistics);
