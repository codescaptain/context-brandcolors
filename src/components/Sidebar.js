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
            <a onClick={toggleModal}>About BrandColor</a>
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
        <h3>About Colors</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, magni temporibus. Tempora facilis accusamus dolorem laborum dolores, iure optio fugiat! s.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, magni temporibus. Tempora facilis accusamus dolorem laborum dolores, iure optio fugiat! s.</p>

      </Modal>

    </>
  )
}

export default Sidebar
