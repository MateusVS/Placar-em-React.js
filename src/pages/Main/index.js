import React, { Component } from 'react';

import Placar from '../../components/Placar';

const dados = {
    partida: {
        estadio: 'Allianz Parque - SP',
        data: '17/05/2020',
        hora: '16:00',
    },
    casa: {
        nome: 'Palmeiras',
        escudo: 'https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-0-1536x1536.png'
    },
    visitante: {
        nome: 'Curica',
        escudo: 'https://seeklogo.com/images/C/corinthians-logo-57DF68784C-seeklogo.com.png'
    },
};

export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
        }
    }

    componentDidMount() {
        let golsCasa = parseInt(localStorage.getItem('gols_casa'));
        let golsVisitante = parseInt(localStorage.getItem('gols_visitante'));

        if (golsCasa !== undefined) {
            this.setState({ gols_casa: golsCasa });
        }

        if (golsVisitante !== undefined) {
            this.setState({ gols_visitante: golsVisitante })
        }

    }

    marcarGolCasa = () => {
        this.setState({
            gols_casa: this.state.gols_casa +1,
        });
        localStorage.setItem('gols_casa', this.state.gols_casa +1);
    }

    marcarGolVisitante = () => {
        this.setState({
            gols_visitante: this.state.gols_visitante +1,
        });
        localStorage.setItem('gols_visitante', this.state.gols_visitante +1);
    }

    resetarPlacar = () => {
        this.setState({
            gols_casa: 0,
            gols_visitante: 0,
        });
        localStorage.setItem('gols_casa', 0);
        localStorage.setItem('gols_visitante', 0);
    }

    render() {
        return <Placar
                    partida={dados.partida}
                    casa={dados.casa}
                    visitante={dados.visitante}
                    golsCasa={this.state.gols_casa}
                    golsVisitante={this.state.gols_visitante}
                    marcarGolCasa={this.marcarGolCasa}
                    marcarGolVisitante={this.marcarGolVisitante}
                    resetarPlacar={this.resetarPlacar}
                />
    }
}
