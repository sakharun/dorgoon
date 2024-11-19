import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import "./Main.css";

function Main(props) {
  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);

  return (
    <section className="section">
      <button
        className="modal-show-button"
        onClick={() => setModalInfoIsOpen(true)}
      >
        {props.image}
        {props.name}
      </button>
      <Modal isOpen={modalInfoIsOpen} onClose={() => setModalInfoIsOpen(false)}>
        <h3>{props.name}</h3>
        <br />
        <p>{props.discription}</p>
      </Modal>
    </section>
  );
}

export default Main;
