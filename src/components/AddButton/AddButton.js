import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    width: 50px;
    height: 50px;
    padding: 2px;
    font-weight: 500;
    font-size: 40px;
    border-radius: 50%;
    background-color: #596235;
    color: #ffffff;
    border: 2px solid #ffffff;
`

const AddButton = ({onClick}) =>(
    <Button type="button" onClick={onClick}>+</Button>
)

export default AddButton;