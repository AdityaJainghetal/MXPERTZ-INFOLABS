// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import BASE_URL from '../config';
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {Link} from "react-router-dom";

// const TopMenu=()=>{
//      const [input, setInput] = useState({});
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);



//     const handleInput=(e)=>{
//        let name=e.target.name;
//        let value=e.target.value;
//        setInput(values=>({...values, [name]:value}));
//        console.log(input);
//     }

//     const handleSubmit=async(e)=>{
//         e.preventDefault();

//         let api=`${BASE_URL}/doctor/registration`;
//         try {
//             const response = await axios.post(api, input);
//             console.log(response);
//             toast.success(response.data.msg);
//             setShow(false)
//         } catch (error) {
//             console.log(error);
//         }


        
//     }
//     return(
//         <>
//            <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">The Hospital Appointment System</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="searchdoctor">Search Doctor</Nav.Link>
//             <Nav.Link href="#pricing" onClick={handleShow}>Doctor Registration</Nav.Link>
//             <Nav.Link as={Link} to="doctorlogin">Doctor Login</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>



       
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Doctor Registration</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Doctor Name</Form.Label>
//         <Form.Control type="text" name="name" onChange={handleInput}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Address</Form.Label>
//         <Form.Control type="text" name="address" onChange={handleInput}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter City</Form.Label>
//         <Form.Control type="text" name="city" onChange={handleInput}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Mobile no</Form.Label>
//         <Form.Control type="text" name="mobile" onChange={handleInput}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>select Specialization</Form.Label>
//         <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
//           <option>Open this select menu</option>
//           <option value="Cardiologist">Cardiologist</option>
//           <option value="ENT">ENT</option>
//           <option value="Neuro Surgeon">Neuro Surgeon</option>
//           <option value="Dentist">Dentist</option>
//           <option value="Plastic Surgeon">Plastic Surgeon</option>
//     </Form.Select>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter email</Form.Label>
//         <Form.Control type="email" name="email" onChange={handleInput} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" name="password" onChange={handleInput} />
//       </Form.Group>
     
//     </Form>




//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleSubmit}>
//             Register
//           </Button>
//         </Modal.Footer>
//       </Modal>



//       <ToastContainer />


//         </>
//     )
// }

// export default TopMenu;













import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const TopMenu = () => {
    const [input, setInput] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const api = `${BASE_URL}/doctor/registration`;

        try {
            const response = await axios.post(api, input);
            toast.success(response.data.msg || "Registration successful");
            setShow(false);
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.msg || "Registration failed");
        }
    };

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">🏥 Hospital Appointments</Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar-nav" />
                    <Navbar.Collapse id="main-navbar-nav" style={{fontWeight:"700", color:"black"}}>
                        <Nav >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/searchdoctor">Search Doctor</Nav.Link>
                            <Nav.Link onClick={handleShow}>Doctor Registration</Nav.Link>
                            <Nav.Link as={Link} to="/doctorlogin">Doctor Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Doctor Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Doctor Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter full name"
                                name="name"
                                onChange={handleInput}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="address"
                                name="address"
                                onChange={handleInput}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City name"
                                name="city"
                                onChange={handleInput}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Mobile no"
                                name="mobile"
                                onChange={handleInput}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Specialization</Form.Label>
                            <Form.Select name="speciality" onChange={handleInput} required>
                                <option value="">Select specialization</option>
                                <option value="Cardiologist">Cardiologist</option>
                                <option value="ENT">ENT</option>
                                <option value="Neuro Surgeon">Neuro Surgeon</option>
                                <option value="Dentist">Dentist</option>
                                <option value="Plastic Surgeon">Plastic Surgeon</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email"
                                name="email"
                                onChange={handleInput}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleInput}
                                required
                            />
                        </Form.Group>
                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <ToastContainer position="top-center" />
        </>
    );
};

export default TopMenu;
