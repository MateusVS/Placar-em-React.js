import React from 'react';
import PropTypes from 'prop-types';

import Gol from '../Gol/index';

import { Info, Nome, Gols, Escudo} from './styles';

const Time = (props) => (
    <Info>
        <Nome>{ props.nome }</Nome>
        <Escudo src={ props.escudo } alt={ props.nome } />
        <Gols>{ props.gols }</Gols>
        <Gol marcarGol={ props.marcarGol } />
    </Info>
);

Time.propTypes = {
    nome: PropTypes.string,
    escudo: PropTypes.string,
    gols: PropTypes.number,
};

export default Time;