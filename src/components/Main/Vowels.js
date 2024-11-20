import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import "./Main.css";

function Vowels({ image, name, discription }) {
  const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);

  return (
    <section className="section">
      <button
        className="modal-show-button"
        onClick={() => setModalInfoIsOpen(true)}
      >
        {image}
        {name}
      </button>
      <Modal isOpen={modalInfoIsOpen} onClose={() => setModalInfoIsOpen(false)}>
        <h3>{name}</h3>
        <br />
        <p>{discription}</p>
      </Modal>
    </section>
  );
}

export default Vowels;
