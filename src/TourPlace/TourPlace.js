import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './TourPlace.css'
const TourPlace = () => {
    const [data, setData] = useState([]);

    useEffect(() => (
        fetch("service.json")
            .then(res => res.json())
            .then(data => setData(data))
    ), [])
    return (
        <>
            <div data-aos="fade-up" id='service' className="text-part d-flex justify-content-center mb-5">
                <div className=" w-50 text-center">
                    <h1 style={{ color: "#101F46" }} className='fw-bold'>POPULAR PACKAGES</h1><span className="s">EXPLORE GREAT PLACES</span>
                    <p style={{ padding: "8px" }}>Travel agents offer advice on destinations, plan trip itineraries, and make travel arrangements for clients. Travel agents sell transportation, lodging, and admission to entertainment activities to individuals and groups planning trips.</p>
                </div>
            </div>
            <Row data-aos="fade-right" xs={1} md={3} className="g-4 w-100 car">
                {
                    data.map(dt =>
                        <>
                            <Col>
                                <Card>
                                    <Card.Img className='car-img mb-4' style={{ height: "270px" }} variant="top" src={dt.img} />
                                    <Card.Body>
                                        <div className='card-header' style={{ display: "flex", backgroundColor: "#0791BE", color: "white" }}>
                                            <div className="bor2">
                                                <p style={{ margin: "10px", }}><i class="far fa-clock"></i> {dt.day}</p>
                                            </div>
                                            <div className="bor2">
                                                <p style={{ margin: "10px", paddingLeft: "50px" }}><i class="fas fa-user-friends"></i> {dt.people}</p>
                                            </div>
                                            <p style={{ margin: "10px", paddingLeft: "55px" }}><i class="fas fa-map-marker-alt"></i> {dt.location}</p>
                                        </div>
                                        <div className='card-price'>
                                            <h5>${dt.price} / per person</h5>
                                        </div>
                                        <Card.Title style={{ color: "#101F46" }} className='title'><h4 className=' fw-bold'> {dt.title}</h4></Card.Title>
                                        <p style={{ color: "#6c757d" }}>({dt.rating} reviews)
                                            <span style={{ paddingLeft: "15px", color: "#dc3545" }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i></span> </p>
                                        <Card.Text>
                                            {dt.desc}
                                        </Card.Text> <hr />
                                        <Container>
                                            <Row>
                                                <Col className='bor cur'>
                                                    <p className=' fw-bold'>Book Now <i class=" love fas fa-arrow-right"></i></p>
                                                </Col>
                                                <Col className='cur'>
                                                    <p className='fw-bold'>Wish List <i class="love far fa-heart"></i></p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    )
                }
            </Row>
        </>
    );
};

export default TourPlace;