import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet,Link } from 'react-router-dom';

const Layout=()=>{
    return(
        <>
             <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cybrom</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            {/* <Nav.Link as={Link} to="update">Update</Nav.Link> */}
            <Nav.Link as={Link} to="updatenew">UpdateNew</Nav.Link>

            <Nav.Link as={Link} to="contact">Contact</Nav.Link>


          </Nav>
        </Container>
      </Navbar>
{/* =================================================================== */}
       <div className='middle'>

          <Outlet/>

       </div>


       {/* =============================================================== */}
       <div className='footer'>


           

       </div>


        </>
    )

}
export default Layout;


