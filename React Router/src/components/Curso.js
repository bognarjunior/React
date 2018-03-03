import React, { Component } from 'react'

const cursos = [
    {nome: "JavaScript"},
    {nome: "NodeJS"},
    {nome: "React"},
    {nome: "Redux"},
    {nome: "React Native"},
]

class Curso extends Component {
    render() {
        return (
            <div>
                <h1>Você está no curso de {cursos[this.props.params.id].nome}</h1>
            </div>
        )
    }
}

export default Curso
