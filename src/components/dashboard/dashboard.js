import React from "react";
import { Container } from "react-bootstrap";
import classes from "./dashboard.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdGroupAdd } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { HiPencil } from "react-icons/hi";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import CardBox from "../card/Card";
import CardBox2 from "../card/Card2";
import CardBox3 from "../card/Card3";
import CardBox4 from "../card/Card4";
import { RiThumbUpLine } from "react-icons/ri";
const Dashboard = ({ login }) => {
  return (
    <div className={classes.box}>
      {!login && (
        <div className="d-flex flex-column">
          <img src="/assets/dashboardImg.svg" className={classes.image} />
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
            <li
              className="me-2"
              style={{
                fontFamily: "IBM Plex Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                color: " #8A8A8A",
                paddingTop: 10,
                paddingBottom: 20,
                paddingLeft: 10,
              }}
            >
              Article
            </li>
            <li
              className="me-2"
              style={{
                fontFamily: "IBM Plex Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                color: " #8A8A8A",
                paddingTop: 10,
                paddingBottom: 20,
                paddingLeft: 10,
              }}
            >
              Event
            </li>
            <li
              className="me-2"
              style={{
                fontFamily: "IBM Plex Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                color: " #8A8A8A",
                paddingTop: 10,
                paddingBottom: 20,
                paddingLeft: 10,
              }}
            >
              Education
            </li>
            <li
              className="me-2"
              style={{
                fontFamily: "IBM Plex Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                color: " #8A8A8A",
                paddingTop: 10,
                paddingBottom: 20,
                paddingLeft: 10,
              }}
            >
              Jobs
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
      <Container className="d-flex flex-row justify-content-between mt-3  mb-3 align-items-center">
        <CardBox />
        <div className="d-flex flex-column justify-content-center position-relative ">
          <div>
            <CiLocationOn
              style={{ position: "absolute", left: 0, top: 7, marginTop: 20 }}
            />
            <input
              placeholder="Enter the location"
              className="form-control      "
              style={{
                width: "100%",
                height: 30,

                marginTop: 20,
                border: "none",
                borderRadius: 0,
                paddingLeft: 20,
                borderColor: "lightgray",
                borderBottom: "1px solid gray",
              }}
            />
            <HiPencil
              style={{ position: "absolute", right: 10, top: 7, marginTop: 20 }}
            />
          </div>
          <div
            className="d-flex flex-row justify-content-between "
            style={{ position: "absolute", width: "200px", marginTop: -190 }}
          >
            <p>
              <HiOutlineExclamationCircle />
            </p>
            <p
              style={{
                fontFamily: "IBM Plex Sans",
                fontSize: "12px",
                color: "gray",
                fontStyle: "normal",
                fontWeight: 400,
                border: "none",
                marginTop: 5,
              }}
            >
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto",
              position: "relative",
              marginTop: 100,
            }}
          >
            <RiThumbUpLine />
            <span
              style={{
                marginTop: 5,
                marginLeft: 5,
                fontFamily: "IBM Plex Sans",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              RECOMENDED GROUPS
            </span>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center ">
            <div className="d-flex flex-row  align-items-center ">
              <img
                src="../../assets/groups/grp1.svg"
                style={{
                  width: "36px",
                  height: "36px",
                }}
              />
              <p
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "black",
                  marginTop: 15,
                  paddingLeft: 5,
                }}
              >
                Leisure
              </p>
            </div>
            <p
              style={{
                width: "100",
                marginTop: 15,
                color: "#525252",
                fontFamily: "IBM Plex Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                backgroundColor: "lightgray",
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 5,
              }}
            >
              Follow{" "}
            </p>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center ">
            <div className="d-flex flex-row  align-items-center ">
              <img
                src="../../assets/groups/grp1.svg"
                style={{
                  width: "36px",
                  height: "36px",
                }}
              />
              <p
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "black",
                  marginTop: 15,
                  paddingLeft: 5,
                }}
              >
                Activism
              </p>
            </div>
            <p
              style={{
                width: "100",
                marginTop: 15,
                color: "#525252",
                fontFamily: "IBM Plex Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                backgroundColor: "lightgray",
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 5,
              }}
            >
              Follow{" "}
            </p>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center ">
            <div className="d-flex flex-row  align-items-center ">
              <img
                src="../../assets/groups/grp3.svg"
                style={{
                  width: "36px",
                  height: "36px",
                }}
              />
              <p
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "black",
                  marginTop: 15,
                  paddingLeft: 5,
                }}
              >
                MBA
              </p>
            </div>
            <p
              style={{
                width: "100",
                marginTop: 15,
                color: "#525252",
                fontFamily: "IBM Plex Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                backgroundColor: "lightgray",
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 5,
              }}
            >
              Follow{" "}
            </p>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center ">
            <div className="d-flex flex-row  align-items-center ">
              <img
                src="../../assets/groups/grp4.svg"
                style={{
                  width: "36px",
                  height: "36px",
                }}
              />
              <p
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "black",
                  marginTop: 15,
                  paddingLeft: 5,
                }}
              >
                Philosophy
              </p>
            </div>
            <p
              style={{
                width: "100",
                marginTop: 15,
                color: "#525252",
                fontFamily: "IBM Plex Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                backgroundColor: "lightgray",
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 5,
              }}
            >
              Follow{" "}
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <CardBox2 />
        <CardBox3 />
        <CardBox4 />
      </Container>
    </div>
  );
};

export default Dashboard;
