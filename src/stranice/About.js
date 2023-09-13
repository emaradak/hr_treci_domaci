import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import ja from "../ja.jpeg";

const About = () => {
    return (
        <>
            <Container>
                <h1>O meni</h1>
                <Row>
                    <Col>
                        <Image src={ja} roundedCircle />

                    </Col>
                    <Col>
                        <p>
                            Aplikaciju je kreirala Ema Radak. Ema je student Fakulteta organizacionih nauka. 
                            Rođena je i odrasla u Beogradu na Karaburmi. Pored studija njena interesovanja obuhvataju muziku,
                            filmove, serije, društvene igre i šetnje u prirodi. Svoje slobodno vreme najradije provodi sa porodicom
                            i prijateljima.

                        </p>
                        <p>
                            Ovaj zadatak je uradjen u sklopu predmeta <strong>Internet tehnologije</strong> na <strong>Fakultetu organizacionih nauka</strong>.
                            Aplikacija je uradjena u <strong>React</strong> biblioteci.
                            Prikazuje radnika, njegove podatke i projekte na kojima radi.
                            Moguce je dodati radnika u projekat i izbaciti radnika iz projekta.
                        </p>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default About;