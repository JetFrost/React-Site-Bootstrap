import React, { Component } from 'react';
import { Col, Container, Nav, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container className="mt-5">
                <TabContainer id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <img 
                                    src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif"
                                    alt="1"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Sit amet consectetur adipiscing elit. Id semper risus in hendrerit gravida rutrum quisque non tellus. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Erat imperdiet sed euismod nisi. Non quam lacus suspendisse faucibus. Adipiscing bibendum est ultricies integer quis auctor elit sed. Nisl nunc mi ipsum faucibus. Donec ac odio tempor orci dapibus. Ac turpis egestas sed tempus.</p>
                                </TabPane>
                                <TabPane eventKey="second">
                                    <img 
                                    src="https://static.tildacdn.com/tild3635-6137-4838-b235-346461626364/800.png"
                                    alt="1"/>
                                    <p>Tortor at risus viverra adipiscing at in tellus integer feugiat. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Maecenas accumsan lacus vel facilisis volutpat est velit. Posuere morbi leo urna molestie at elementum eu facilisis sed. Sapien faucibus et molestie ac feugiat sed. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Magnis dis parturient montes nascetur ridiculus mus. Id consectetur purus ut faucibus pulvinar elementum. Nisl suscipit adipiscing bibendum est ultricies integer. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus.</p>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <img 
                                    src="https://lh3.googleusercontent.com/qvD3qR51Mdbh_xWE-b4adHDDlFkrKZRam5ET0ojs6EgHMOj4DWQUeZcYuLsxH9t46oAQaGY0BUmkpRIwABox1olwU8k=w640-h400-e365-rj-sc0x00ffffff"
                                    alt="1"/>
                                    <p>Id aliquet risus feugiat in ante metus dictum. Nunc mattis enim ut tellus elementum. Et tortor at risus viverra adipiscing at. Eu volutpat odio facilisis mauris sit amet. Ultricies tristique nulla aliquet enim tortor at. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Donec enim diam vulputate ut pharetra sit. Eget lorem dolor sed viverra ipsum nunc aliquet. Libero id faucibus nisl tincidunt eget nullam non nisi. Pellentesque habitant morbi tristique senectus et.</p>
                                </TabPane>
                                <TabPane eventKey="fourth">
                                    <img 
                                    src="https://images.ctfassets.net/1khq4uysbvty/Zzp53JtBHxPbj3Y0JTRkg/71c23b0c389ddec51996035335c4de72/multiple-connections-with-component.gif?&w=736"
                                    alt="1"/>
                                    <p>Faucibus et molestie ac feugiat sed lectus. Mauris vitae ultricies leo integer malesuada nunc vel. Vitae tempus quam pellentesque nec. Velit scelerisque in dictum non consectetur a. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Magna sit amet purus gravida quis blandit. Odio tempor orci dapibus ultrices in iaculis. Tellus id interdum velit laoreet id donec ultrices tincidunt. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Odio tempor orci dapibus ultrices in. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.</p>
                                </TabPane>
                                <TabPane eventKey="fifth">
                                    <img 
                                    src="https://www.figmaresources.com/wp-content/uploads/2020/09/a23ebd5f9005179cae6b13c79eb1b111-min-520x390.jpg"
                                    alt="1"/>
                                    <p>Scelerisque mauris pellentesque pulvinar pellentesque habitant. Et netus et malesuada fames ac turpis egestas. Ultricies integer quis auctor elit sed vulputate. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. In fermentum et sollicitudin ac. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Sapien eget mi proin sed libero enim sed. Auctor neque vitae tempus quam pellentesque nec nam. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Tortor at risus viverra adipiscing at in. Lectus sit amet est placerat in egestas. Odio tempor orci dapibus ultrices in iaculis nunc sed augue.</p>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </Container>
        );
    }
}

export default About;