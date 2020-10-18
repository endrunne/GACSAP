import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import { Multiselect } from 'multiselect-react-dropdown'/*utilizar depois, no lugar de sala acessivel, trocar por atributos da sala*/

import {
    setInputForms,
    saveGroup
} from '../../actions/group'

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

const GroupForm = props => {

    const {
        _id,
        code,
        name,
        students,
        specialStudents,
        category,
        attributes,
    
        setInputForms,
        limpar,
        saveGroup} = props

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

                <div className="form-group row" style={styles.divInputGroup}>
                    <label htmlFor="category"
                        className="col-sm-3 col-form-label">
                        Categoria:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="text"
                            className="form-control" id="category"
                            value={category}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="students"
                        className="col-sm-3 col-form-label">
                        Alunos:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="students"
                            value={students}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="specialStudents"
                        className="col-sm-3 col-form-label">
                        Alunos portadores de necessidades especiais:
                    </label>
                    <div className="col-sm-9" style={styles.divInputCenter}>
                        <input type="number"
                            className="form-control" id="specialStudents"
                            value={specialStudents}
                            onChange={setInputForms} />
                    </div>
                </div>

                <div className="form-group row">
                    <button className="btn btn-primary ml-3 mb-3"
                        onClick={e => saveGroup(e, _id, code, name, students, specialStudents, category, attributes) }>
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
    _id: store.group._id,
    code: store.group.code,
    name: store.group.name,
    students: store.group.students,
    specialStudents: store.group.specialStudents,
    category: store.group.category,
    attributes: store.group.attributes
})

const mapActionToProps = dispatch => bindActionCreators({
    setInputForms,
    saveGroup
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionToProps)(GroupForm)
export {conectado as GroupForm}