import React from 'react';

import Time from '../Time/index';
import Partida from '../Partida/index';

import { Container, Item, CasaFora } from './styles';

const Placar = ({ casa, partida, visitante,...props }) => (
    <Container>
        <Item>
            <CasaFora>Casa</CasaFora>
            <Time { ...casa } gols={props.golsCasa} marcarGol={props.marcarGolCasa}/>
        </Item>
        <div>
            <Partida { ...partida } resetarPlacar={props.resetarPlacar} />
        </div>
        <Item>
            <CasaFora>Visitante</CasaFora>
            <Time { ...visitante } gols={props.golsVisitante} marcarGol={props.marcarGolVisitante}/>
        </Item>
    </Container>
);

export default Placar;
