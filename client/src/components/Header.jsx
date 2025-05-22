import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { HOME_ROUTE, PROFILE_ROUTE } from '../utils/consts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../styles.css';



const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar style={{backgroundColor: "#17CDFF"}} expand="lg" className="mb-5 shadow-sm">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand
          style={{ cursor: 'pointer', fontWeight: 'bold' }}
          onClick={() => navigate(HOME_ROUTE)}
        >
          GoalStream
        </Navbar.Brand>

        <InputGroup className="w-50 me-3">
          <Form.Control
            placeholder="Поиск..."
            aria-label="Поиск"
            className="bg-dark text-white border-0"
          />
        </InputGroup>

        <IoMdPerson 
          size={28} 
          style={{ cursor: 'pointer' }} 
          onClick={() => navigate(PROFILE_ROUTE)} 
        />
      </Container>
    </Navbar>
  );
};

export default NavBar
