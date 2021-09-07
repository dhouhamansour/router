import React from 'react'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.img} />
            <Card.Body>
            <Card.Title><Link to={`/${movie.title}`}>{movie.title}</Link></Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <StarRatingComponent name="rate1"  starCount={5} value={movie.rate}/>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>{movie.date}</ListGroupItem>
            <ListGroupItem>{movie.duration}</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </Card>
        </div>
    )
}

export default MovieCard
