import React from "react";
import { Container } from "react-bootstrap";
import classes from "./dashboard.module.css"
const Dashboard = () => {
  return (
    <div style={{ maxWidth: "1500px", minWidth: "600px" }}>
      <div className="d-flex flex-column">
      <img src="/assets/dashboardImg.svg"  className={classes.image}/>
        <div style={{position:'absolute',top:337,left:160}}>
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
              marginTop:-15
            }}
          >
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
