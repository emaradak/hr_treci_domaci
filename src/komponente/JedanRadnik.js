import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";
import {LiaAngleDoubleLeftSolid, LiaAngleDoubleRightSolid} from "react-icons/lia";


const JedanRadnik = props => {

    const radnik = props.radnik;

    const dodaRadnikaUProjekat = () => {
        props.dodajRadnikaUProjekat(radnik.id);
    }

    const izbaciRadnikaIzProjekta = () => {
        props.izbaciRadnikaIzProjekta(radnik.id);
    }

    return (
        <>
            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{ radnik.ime + ' ' + radnik.prezime }</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{ radnik.radnoMesto }</Card.Subtitle>
                    <Card.Text>
                        <p>Datum rodjenja: { radnik.datumRodjenja } </p>
                        <p>Datum zaposlenja: { radnik.datumZaposlenja } </p>
                        <p className="alert-secondary">Plata: { radnik.plata } </p>
                        {
                            !radnik.dodatUProjekat && (
                                <Button onClick={dodaRadnikaUProjekat} variant="success">Dodaj u projekat <LiaAngleDoubleRightSolid/></Button>
                            )
                        }
                        {

                            radnik.dodatUProjekat && (
                                <Button onClick={izbaciRadnikaIzProjekta} variant="danger"><LiaAngleDoubleLeftSolid /> Izbaci iz projekta</Button>
                            )
                        }

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

JedanRadnik.propTypes = {
    radnik: PropTypes.object.isRequired,
    dodajRadnikaUProjekat: PropTypes.func.isRequired,
    izbaciRadnikaIzProjekta: PropTypes.func.isRequired
};

export default JedanRadnik;