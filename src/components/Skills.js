import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FaCode, FaDatabase, FaComments } from 'react-icons/fa'

const Skills = () => {
  const B = (props) => <span style={{ fontWeight: 'bold' }}>{props.children}</span>
  const I = (props) => <span style={{ fontStyle: 'italic' }}>{props.children}</span>

  return (
        <Container fluid style={{ textAlign: 'center', padding: '20px', backgroundColor: '#dc3545', color: '#ffffff' }} >

            <h1 className="display-4">Skills</h1>
            <hr style={{ color: '#ffffff', borderColor: '#ffffff' }}/>

            <Row>
                <Col>
                <p> <B>Relevant Background: </B> Distributed Computing Principles, Machine Learning, Database Systems, Data-Driven Web Apps,
                    Object-Oriented Programming, Data Structures and Algorithms, Computer Vision, Design with Embedded OS,
                    Advanced Microcontrollers

                </p>
             </Col>
             </Row>
             <br/>
            <Row>
                <Col>
                <FaCode size={'10vh'} color={'#ffffff'} />
                <br/> <br/>
                <h2>Programming</h2>
                <p>Python, Go (Golang), Kotlin, HTML/CSS/Javascript (JS), Typescript (TS), C/C++, Java</p>

                </Col>
                <Col>
                <FaDatabase size={'10vh'} color={'#ffffff'}/>
                <br/> <br/>
                <h2>Tools/Technologies</h2>
                <p>Git (Github, Bitbucket), Docker, Linux/Unix, Windows, Mac OSX</p><p>Koin, React.js, Electron, Jest, Node.js, </p> <p> Numpy, Jupyter Notebook, OpenCV, Keras Tensorflow, PyTorch, Pygame</p>

                </Col>
                <Col>
                <FaComments size={'10vh'} color={'#ffffff'}/>
                <br/> <br/>
                <h2>Soft Skills</h2>
                <p>Agile development, time management, effective communication and teamwork, conflict negotiation</p>

                </Col>
            </Row>

        </Container>

  )
}

export default Skills
