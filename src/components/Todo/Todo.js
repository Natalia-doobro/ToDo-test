import styled from 'styled-components'

const InputTodo = styled.input`
  width:20px;
  height: 20px;
`

const TextTodo = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
`
const Button = styled.button`
    max-height: 30px;
    padding: 5px;
    font-weight: 500;
    font-size: 18px;
    border-radius: 10px;
    background-color: #a51310;
    color: #ffffff;
    border: 2px solid #ffffff;
`

const Todo = ({text, completed, onToggleCompleted, onDeleteTodo }) => (
    <>
        <InputTodo
            type="checkbox"
            checked={completed}
            onChange={onToggleCompleted}
        />
        <TextTodo>{text}</TextTodo>
        <Button onClick={onDeleteTodo}>delete</Button>
    </>
);

export default Todo;