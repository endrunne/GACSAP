import React from 'react'

export const Contato = props => {
    return(
        <div>
            <h3>{props.nomeInteiro}</h3>
            <p><i className="fa fa-linkedin-square"></i> <a href={props.linkedin}>{props.linkedin}</a></p>
            <p><i className="fa fa-envelope-square"></i> {props.email}</p>
            {! typeof props.sobre === 'undefined' ?
                <p>{props.sobre}</p>
                :
                <></>
            }
        </div>
    )
}