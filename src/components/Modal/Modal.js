import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from 'styled-components'

const modalRoot = document.querySelector('#modal-root');

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`
const ModalForm = styled.div`
  max-width: 900px;
  max-height: 600px;
  padding: 30px 20px 30px;
  background-color: #fff;
`

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    const { closeModal } = this.props;

    if (e.code === "Escape") {
      closeModal();
    }
  };

  onClickOverlay = (e) => {
    const { closeModal } = this.props;
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onClickOverlay}>
        <ModalForm>
          {this.props.children}
        </ModalForm>
      </Overlay>
      ,modalRoot
    );
  }
}

export default Modal;
