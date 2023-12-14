import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./navbar.module.css"
function NavbarBox() {
  
  
  return (
  
      <Navbar >
        <Container >
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
         <AiOutlineSearch style={{color:'#56595c', fontSize: '16px',position:'absolute',marginLeft:10 }} />
            <input
              className='form-control rounded-pill '
              placeholder="Search for your favorite groups in ATG"
              style={{
                width: '360px',
                height: '42px',
                flexShrink: 0,
                background: '#F2F2F2',
                fontFamily: 'IBM Plex Sans',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
               paddingLeft:30
              }}
            />
          </div>

          <p className='text-dark mt-3' style={{ color: '#2E2E2E', fontFamily: 'IBM Plex Sans', fontSize: '16px', fontStyle: 'normal', fontWeight: 500, cursor: 'pointer' ,}}>
            Create account.
            <span className='text-primary' style={{ color: '#2E2E2E', fontFamily: 'IBM Plex Sans', fontStyle: 'normal', fontSize: '16px', fontWeight: 500 }}> It’s free!</span><IoMdArrowDropdown />
          </p>
          
        </Container>
      </Navbar>
  
  );
}

export default NavbarBox;