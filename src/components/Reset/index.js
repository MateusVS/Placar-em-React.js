import React from 'react';

import { Button } from './styles';

const Reset = (props) => (
    <Button type='button' onClick={event => props.resetarPlacar()}>Resetar Placar</Button>
);

export default Reset