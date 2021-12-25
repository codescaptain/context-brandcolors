import React, {useState} from 'react'
import Modal from 'react-modal'
import {GrClose} from 'react-icons/gr'
const Sidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () =>  {
    setModalIsOpen(!modalIsOpen);
  }

 
  return (
    <>
   <aside className="sidebar">
    <div className="logo">
        <a>Brand<b>Color</b></a>
      </div>
      <div className="description">
       Lorem ipsum dolor sit amet,sit ametsit ametsit amet
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a onClick={toggleModal}>About APP</a>
          </li>
        </ul>
      </nav>
   </aside>
   <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
    >
        <button className="model-close-btn" onClick={toggleModal}>
          <GrClose />
        </button>
        <h3>About App</h3>
        <p>First off all, this project cloned from brandcolors.net. </p>
        <p>If you like the project, you can look at code base from <a target="_blank" href="https://github.com/codescaptain">My Github Profile</a></p>

      </Modal>

    </>
  )
}

export default Sidebar
