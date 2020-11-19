import React from 'react'

import { Cabecalho } from '../../componentes/cabecalho'
import { Contato } from '../../componentes/contato/contato'

export const ContatoPage = props => {
    return (
        <div className="container">
            <Cabecalho titulo="Contato" subtitulo="Fale conosco!"/>
            <Contato nomeInteiro="Leandro Glowatski" ></Contato>
            <Contato nomeInteiro="Lucas Yuichi Shimoda" ></Contato>
            <Contato nomeInteiro="Vitor Oliveira" ></Contato>
            <Contato nomeInteiro="Vinícius Queiroz Costa" linkedin="https://www.linkedin.com/in/vinicius-queiroz-costa/"></Contato>
        </div>
    )
}