import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image from "../../assets/post images/img1.svg"
import { BsThreeDots } from "react-icons/bs";
import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";

const CardBox = () => {
  return (
    <Row  style={{width:"60%",}}>
      
        <Col >
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title style={{fontFamily: 'IBM Plex Sans', fontSize: '18px', fontStyle: 'normal', fontWeight: 500,}}>✍️ Article</Card.Title>
              <div  className="d-flex flex-row justify-content-between" >
              <Card.Title style={{fontFamily: 'IBM Plex Sans', fontSize: '22px', fontStyle: 'normal', fontWeight: 600,lineHeight:"30px"}}>What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title>
              <BsThreeDots style={{width:"28px",height:"28px"}}/>
              </div>
              <Card.Text style={{fontFamily: 'IBM Plex Sans', fontSize: '19px', fontStyle: 'normal', fontWeight: 400,color:"#5C5C5C"}}>
              I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
              </Card.Text>

             
            </Card.Body>
            <div className="d-flex flex-row  justify-content-between">
                <div  className="d-flex flex-row  align-items-center ">
                    <img src="../../assets/users/user1.svg"
                    style={{
                        width:"48px",
                        height:"48px",
                        marginLeft:10
                       
                    }}
                    />
                    <p style={{fontFamily: 'IBM Plex Sans', fontSize: '18px', fontStyle: 'normal', fontWeight: 600,color:"black",marginTop:15,paddingLeft:10}}>Sarthak Kamra</p>

                </div>
                <div className="d-flex flex-row align-items-center justify-content-between " style={{width:"150px", paddingRight:10}}>
                <p style={{marginTop:15, color:'#525252',fontFamily: 'IBM Plex Sans', fontSize: '14px', fontStyle: 'normal', fontWeight: 500,}}><IoEyeOutline   />1.4k views </p> 
                <p><IoShareSocial style={{marginTop:15, width:"20px",height:"20px", backgroundColor:'lightgray', }} /></p>

                </div>
            </div>
          </Card>
        </Col>
      
    </Row>
  )
}

export default CardBox