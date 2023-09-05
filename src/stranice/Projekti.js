import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import radnici from "../podaci/radnici.js";
import JedanRadnik from "../komponente/JedanRadnik";

const Projekti = props => {

    const [slobodniRadnici, setSlobodniRadnici] = useState(radnici);
    const [projekti, setProjekti] = useState([]);
    const [radniciNaProjektu, setRadniciNaProjektu] = useState([]);

    const refNaziv = useRef();
    const refDuzina = useRef();

    const dodajRadnikaUProjekat = (id) => {
        const radnik = slobodniRadnici.find(radnik => radnik.id === id);
        radnik.dodatUProjekat = true;
        setSlobodniRadnici(slobodniRadnici.filter(radnik => radnik.id !== id));
        setRadniciNaProjektu([...radniciNaProjektu, radnik]);
    }

    const izbaciRadnikaIzProjekta = (id) => {
        const radnik = radniciNaProjektu.find(radnik => radnik.id === id);
        radnik.dodatUProjekat = false;
        setRadniciNaProjektu(radniciNaProjektu.filter(radnik => radnik.id !== id));
        setSlobodniRadnici([...slobodniRadnici, radnik]);
    }

    const sacuvajProjekat = () => {
        const naziv = refNaziv.current.value;
        const duzina = refDuzina.current.value;
        const projekat = {
            naziv: naziv,
            duzina: duzina,
            radnici: radniciNaProjektu
        }

        setProjekti([...projekti, projekat]);
        setRadniciNaProjektu([]);
        setSlobodniRadnici(radnici);
    }


    return (
        <>
            <Container>
                <Row className="mt-3">
                    <Col >
                        <h1>Radnici</h1>

                        {
                            slobodniRadnici.map(radnik => {
                                return <JedanRadnik radnik={radnik}  dodajRadnikaUProjekat={dodajRadnikaUProjekat} izbaciRadnikaIzProjekta={izbaciRadnikaIzProjekta}/>
                            })
                        }
                    </Col>
                    <Col>
                        <h1>Napravi projekat</h1>
                        <Form.Control ref={refNaziv} className="mt-3" type="text" placeholder="Naziv projekta" />
                        <br />
                        <Form.Control ref={refDuzina} type="number" placeholder="Duzina projekta" />
                        {
                            radniciNaProjektu.map(radnik => {
                                return <JedanRadnik radnik={radnik}  dodajRadnikaUProjekat={dodajRadnikaUProjekat} izbaciRadnikaIzProjekta={izbaciRadnikaIzProjekta}/>
                            })
                        }

                        <hr/>
                        <Button onClick={sacuvajProjekat} variant="primary">Sacuvaj projekat</Button>
                    </Col>
                    <Col>
                        <h1>Projekti</h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

Projekti.propTypes = {

};

export default Projekti;