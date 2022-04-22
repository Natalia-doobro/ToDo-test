import React, { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

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
      <div className={s.Overlay} onClick={this.onClickOverlay}>
        <div className={s.Modal}>
          {this.props.children}
        </div>
      </div>
      ,modalRoot
    );
  }
}

export default Modal;
