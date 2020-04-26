import React from 'react';
import PropTypes from 'prop-types';

import Reset from '../Reset/index';

import { Container } from './styles';

const Partida = (props) => (
    <Container>
        <h2>{props.estadio}</h2>
        <div>
            <span>{props.data}</span>
            <span> - </span>
            <span>{props.hora}</span>
        </div>
        <Reset resetarPlacar={props.resetarPlacar} />
    </Container>
);

Partida.propTypes = {
    estadio: PropTypes.string,
    data: PropTypes.string,
    hora: PropTypes.string,
};

export default Partida;