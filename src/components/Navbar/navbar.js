import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./navbar.module.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import photo from "../../assets/user1.svg";

const NavbarBox = ({ login }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/assets/logo.svg"
            width="162"
            height="24"
            className=''
            alt="logo"
          />
        </Navbar.Brand>

        <div className='d-flex flex-row align-items-center' >
          <AiOutlineSearch style={{ color: '#56595c', fontSize: '16px', position: 'absolute', marginLeft: 10 }} />
          <input
            className='form-control rounded-pill '
            placeholder="Search for your favorite groups in ATG"
            style={{
              width: '340px',
              height: '42px',
              flexShrink: 0,
              background: '#F2F2F2',
              fontFamily: 'IBM Plex Sans',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              paddingLeft: 30
            }}
          />
        </div>

        <div onClick={handleShow}> 
          {login && <div className='d-flex flex-row align-items-center'>
            <img  src={photo}/>
            <p style={{fontFamily: 'IBM Plex Sans', fontSize: '16px', fontStyle: 'normal', fontWeight: 500, cursor: 'pointer',marginTop:15 }}>Sarthak Kamra</p>

            </div>}
        {!login &&  <p className='text-dark mt-3' style={{ color: '#2E2E2E', fontFamily: 'IBM Plex Sans', fontSize: '16px', fontStyle: 'normal', fontWeight: 500, cursor: 'pointer', }}>
            Create account.
            <span className='text-primary' style={{ color: '#2E2E2E', fontFamily: 'IBM Plex Sans', fontStyle: 'normal', fontSize: '16px', fontWeight: 500 }}> It’s free!</span><IoMdArrowDropdown />
          </p>}
          
        </div>
        
      </Container>
      {!login  && <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>}
    </Navbar>
  );
}

export default NavbarBox;
