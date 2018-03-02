import React from "react";
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Arena Corinthians",
        data: "24/02/2018",
        horario: "17h"
    },
    casa: {
        nome: "Corinthians"
    },
    visitante: {
        nome: "Palmeiras"
    }
}

class App extends React.Component{

    render(){
        return (
            <PlacarContainer 
                partida={dados.partida}
                casa={dados.casa}
                visitante={dados.visitante} />
        )
    }
}

export default App;