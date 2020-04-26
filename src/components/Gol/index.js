import React from 'react';

import { Button } from './styles';

const Gol = (props) => (
    <Button type="button" onClick={ event => props.marcarGol()}>Gol</Button>
);

export default Gol;