import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';


class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '600px' }} className="mt-5">
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"/>
                        <Form.Text>
                            We'll never share your email anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="5" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;