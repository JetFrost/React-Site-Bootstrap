import React, { Component } from 'react';
import { Button, Card, CardDeck, Container } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import team1 from '../Assets/team1.jpg';
import team2 from '../Assets/team2.jpg';
import team3 from '../Assets/team3.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox/>
                <Container>
                    <h2 className="m-4 text-center">Out team</h2>
                    <CardDeck className="mb-4">
                        <Card>
                            <Card.Img 
                            variant="top" 
                            src={team1}/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium, mi eu viverra volutpat, nunc.</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img 
                            variant="top" 
                            src={team2}/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium, mi eu viverra volutpat, nunc.</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img 
                            variant="top" 
                            src={team3}/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium, mi eu viverra volutpat, nunc.</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </div>
        );
    }
}

export default Home;