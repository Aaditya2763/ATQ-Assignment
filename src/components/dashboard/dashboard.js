import React from "react";
import { Container } from "react-bootstrap";
import classes from "./dashboard.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import CardBox from "../card/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const DashboardBox = ({ login }) => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  const imageChangeHandler = (event) => {
    const file = event.target.files[0];
   
    // Check if a file is selected
    if (file) {
      // Convert the selected file to a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title >✍️Create Post with ❤️</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                {" "}
                Post Title
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Title of the post"
                autoFocus
                style={{
                    fontFamily: "IBM Plex Sans",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,height:'auto'
                  }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label  style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}>Post Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="auto"
                style={{
                    fontFamily: "IBM Plex Sans",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                  }}
                placeholder="Write the description of the post"
              />
            </Form.Group>
            
        <div className="d-flex flex-row justify-content-between">
              <input className="form-control"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => imageChangeHandler(e)}
            style={{width:"200px",height:"50px"}}
    placeholder="Choose file"/>
    {selectedImage && (
         <div className="d-flex flex-row"> <p>Selected Image:</p>
         <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%',height:"200px" ,margin:"5px" }} /></div>
          )}
        </div>
     
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}  style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleClose}  style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
      {!login && (
        <div className="d-flex flex-column">
          <img
            src="/assets/dashboardImg.svg"
            className={classes.image}
            alt="img"
          />
          <div style={{ position: "absolute", top: "40%", left: "10%" }}>
            <h3
              style={{
                color: "white",
                fontFamily: "IBM Plex Sans",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: 700,
              }}
            >
              Computer Engineering
            </h3>
            <p
              style={{
                color: "white",
                fontFamily: "IBM Plex Sans",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                marginTop: -10,
              }}
            >
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
      )}

      <Container>
        <div
          className="d-flex flex-row justify-content-between  border-bottom  mt-5 align-items-center"
          style={{ height: 40, minWidth: "100%" }}
        >
          <ul
            className="list-unstyled d-flex flex-row  text-dark "
            style={{
              fontFamily: "IBM Plex Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              alignItems: "center",
            }}
          >
            <li
              className="me-2"
              style={{
                fontFamily: "IBM Plex Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                paddingLeft: 10,
                borderBottom: "2px solid black",
                paddingTop: 10,
                paddingBottom: 20,
              }}
            >
              All posts(32)
            </li>
          </ul>

          <ul className="d-flex flex-row p-1">
            <button
              className="btn btn-secondary mx-2 text-dark"
              style={{
                backgroundColor: "#EDEEF0",
                fontFamily: "IBM Plex Sans",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 400,
                border: "none",
                borderRadius: 4,
              }}
              onClick={handleShow}
            >
              Write a Post <IoMdArrowDropdown className="text-dark" />{" "}
            </button>
            <button
              className="btn btn-primary mx-2 text-light"
              style={{
                fontFamily: "IBM Plex Sans",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 400,
                border: "none",
                borderRadius: 4,
              }}
            >
              <MdGroupAdd className="m-1" />
              Join Group{" "}
            </button>
          </ul>
        </div>
      </Container>
      <Container className=" d-flex flex-row align-items-center mt-3  mb-3  ">
        <CardBox />
        <CardBox />
      </Container>
    </div>
  );
};

export default DashboardBox;
