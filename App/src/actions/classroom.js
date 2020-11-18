import axios from 'axios'
import {
    TYPE_CLASSROOM_SET_LIST,
    TYPE_CLASSROOM_SET_ERROR_MESSAGE,
    TYPE_CLASSROOM_SET_SUCCESS_MESSAGE,
    TYPE_CLASSROOM_SET_FORM,
    TYPE_CLASSROOM_LIMPAR,
    TYPE_CLASSROOM_SELECT
} from '../reducers/classroom'

const URL = 'http://localhost:3000/api/classrooms/'

export const getClassroomList = () => {
    return async dispatch => {
        try {
            const result = await axios.get(URL)
            if (result.data) {
                return dispatch({
                    type: TYPE_CLASSROOM_SET_LIST,
                    value: result.data
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const setErrorMessage = msg => ({
    type: TYPE_CLASSROOM_SET_ERROR_MESSAGE,
    value: msg
})

export const setSuccessMessage = msg => ({
    type: TYPE_CLASSROOM_SET_SUCCESS_MESSAGE,
    value: msg
})

export const setInputForms = evento => {
    const type = (TYPE_CLASSROOM_SET_FORM + evento.target.id).toUpperCase()

    return {
        type,
        value: evento.target.value
    }
}

export const deleteClassroom = _id => {
    return async dispatch => {
        if (window.confirm('Deseja realmente excluir a sala selecionada?')) {
            try {
                await axios.delete(URL + _id)
                dispatch(getClassroomList())
                dispatch(setSuccessMessage('Sala deletada com sucesso'))
            } catch (e) {
                console.log(e)
                dispatch(setErrorMessage('Erro ao deletar a sala'))
            }
        }
    }
}

export const selectClassroom = classroom => ({
    type: TYPE_CLASSROOM_SELECT,
    payload: classroom
})

export const limpar = e => {
    if(e)
        e.preventDefault()

    return {
        type: TYPE_CLASSROOM_LIMPAR,
    }
}

export const saveClassroom = (evento, _id, code, name, normalSpaces, accessibleSpaces, attributes = []) => {
    return async dispatch => {
        evento.preventDefault()
        try{
            if(!code || !name || !normalSpaces || !accessibleSpaces ){
                dispatch(setErrorMessage("Favor preencher todos os campos obrigatórios!"))
            }

            const body = { code, name, normalSpaces, accessibleSpaces, attributes}
            let msg = ''
            if(_id){
                await axios.put(URL + _id, body)
                msg = "atualizado"
            } else {
                await axios.post(URL, body)
                msg = "cadastrado"
            }

            dispatch(limpar())
            dispatch(getClassroomList())
            dispatch(setSuccessMessage(`Sala de aula ${msg} com sucesso!`))
        }catch(e){
            console.log(e)
            dispatch(setErrorMessage('Erro ao salvar a sala!'))
        }
    }
}

export const searchGroups = (evento) => {
    return async dispatch => {
        if (window.confirm('Deseja realmente atribuir as turmas?')) {
            try {
                await axios.get(URL + "assignGroups/")
                dispatch(getClassroomList())
                dispatch(setSuccessMessage('Turmas atribuídas com sucesso'))
            } catch (e) {
                console.log(e)
                dispatch(setErrorMessage('Erro ao atribuir turmas'))
            }
        }
    }
}

