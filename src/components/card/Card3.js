import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image from "../../assets/post images/img3.svg"
import { BsThreeDots } from "react-icons/bs";
import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { BsCalendarDate } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Container ,Button} from 'react-bootstrap';

const CardBox3 = () => {
  return (
    <Row  style={{width:"60%",marginTop:15}}>
      
        <Col >
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title style={{fontFamily: 'IBM Plex Sans', fontSize: '18px', fontStyle: 'normal', fontWeight: 500,}}><FcCalendar style={{marginTop:-5}} /> Meetup</Card.Title>
              <div  className="d-flex flex-row justify-content-between" >
              <Card.Title style={{fontFamily: 'IBM Plex Sans', fontSize: '22px', fontStyle: 'normal', fontWeight: 600,lineHeight:"30px"}}>Tax Benefits for Investment under National Pension Scheme launched by Government</Card.Title>
              <BsThreeDots style={{width:"28px",height:"28px"}}/>
              </div>
              <Card.Text style={{fontFamily: 'IBM Plex Sans', fontSize: '19px', fontStyle: 'normal', fontWeight: 400,color:"#5C5C5C"}}>
             <span>
                <BsCalendarDate style={{width:"20px",height:"20px",marginRight:5,color:'black'}}/>
             <span style={{fontFamily: 'IBM Plex Sans', fontSize: '15px',color:'black', fontStyle: 'normal', fontWeight: 500,}}>Fri, 12 Oct, 2018</span>
             </span>
             <span style={{marginLeft:"10%"}}>
              <CiLocationOn style={{width:"20px",height:"20px",marginRight:5, color:'black'}}/>
              <span style={{fontFamily: 'IBM Plex Sans', fontSize: '15px', color:'black',fontStyle: 'normal', fontWeight: 500,}}>Ahmedabad, India</span>
              </span>
              </Card.Text>
              <Button variant="outline-secondary" className='container' style={{fontFamily: 'IBM Plex Sans', fontSize: '13px', color:'black',fontStyle: 'normal', fontWeight: 600, height:"38px", color:"#E56135"}}>Visit website</Button>

             
            </Card.Body>
            <div className="d-flex flex-row  justify-content-between">
                <div  className="d-flex flex-row  align-items-center ">
                    <img src="../../assets/users/user3.svg"
                    style={{
                        width:"48px",
                        height:"48px",
                        marginLeft:10
                       
                    }}
                    />
                    <p style={{fontFamily: 'IBM Plex Sans', fontSize: '18px', fontStyle: 'normal', fontWeight: 600,color:"black",marginTop:15,paddingLeft:10}}>Sarah West</p>

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

export default CardBox3