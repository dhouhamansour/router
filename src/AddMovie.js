import React, {useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMovie = ({handleClose,show,addMovie}) => {
    const [newMovie,setNewMovie]=useState({
        title:"",
        duration:0,
        date:"",
        rate:1,
        genre:"",
        description:"",
        img:"",
    });
    const handleChange=(e) => {
        setNewMovie({ ...newMovie, [e.target.name]:e.target.value});
    };
    return (
        <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Put a movie title" name="title" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="number" placeholder="Put a movie duration" name="duration" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date</Form.Label>
            <Form.Control type="number" placeholder="Put a movie date" name="date" onChange={handleChange}/>
        </Form.Group>
        <Form.Select aria-label="Default select example" name="rate" onChange={handleChange}>
        <option>Rate</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Genre</Form.Label>
            <Form.Control type="string" placeholder="Put a movie genre" name="genre" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="string" placeholder="Put a movie description" name="description" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="string" placeholder="Put a movie image" name="img" onChange={handleChange}/>
        </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>{
            addMovie(newMovie)
            handleClose()}}>
            Add movie
        </Button>
        </Modal.Footer>
        </Modal>
        </div>
    )
}

export default AddMovie
