import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import { Multiselect } from 'multiselect-react-dropdown'/*utilizar depois, no lugar de sala acessivel, trocar por atributos da sala*/

import {
    setInputForms,
    saveClassroom
} from '../../actions/classroom'

var styles = {
    divInputGroup : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    divInputCenter : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}

const ClassroomForm = props => {

    const {
        _id,
        code,
        name,
        normalSpaces,
        accessibleSpaces,
        assignedGroup,
        attributes,
    
        setInputForms,
        limpar,
        saveClassroom} = props

    return (
        <div className="border-right pl-3 pr-3">
            <h3 className="border-bottom">Formulário</h3>
            <form>
                <div className="form-group row" style={styles.divInputGroup}>
                    <label htmlFor="code"
                        className="col-sm-3 col-form-label">
                        Código:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="text"
                            className="form-control" id="code"
                            value={code}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row" style={styles.divInputGroup}>
                    <label htmlFor="name"
                        className="col-sm-3 col-form-label">
                        Nome:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="text"
                            className="form-control" id="name"
                            value={name}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="normalSpaces"
                        className="col-sm-3 col-form-label">
                        Lugares:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="normalSpaces"
                            value={normalSpaces}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="AccessibleSpaces"
                        className="col-sm-3 col-form-label">
                        Lugares Acessiveis:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="AccessibleSpaces"
                            value={accessibleSpaces}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <button className="btn btn-primary ml-3 mb-3"
                        onClick={e => saveClassroom(e, _id, code, name, normalSpaces, accessibleSpaces, attributes) }>
                        {_id ? "Atualizar" : "Adicionar"}
                    </button>
                    <button className="btn btn-secondary ml-3 mb-3"
                        onClick={limpar}>
                        Limpar
                    </button>
                </div>
            </form>
        </div>
    )
}

const mapStoreToProps = store => ({
    _id: store.classroom._id,
    code: store.classroom.code,
    name: store.classroom.name,
    assignedGroup: store.classroom.assignedGroup,
    normalSpaces: store.classroom.normalSpaces,
    accessibleSpaces: store.classroom.accessibleSpaces,
    attributes: store.classroom.attributes
})

const mapActionToProps = dispatch => bindActionCreators({
    setInputForms,
    saveClassroom
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionToProps)(ClassroomForm)
export {conectado as ClassroomForm}