import axios from 'axios'
import {
    TYPE_GROUP_SET_LIST,
    TYPE_GROUP_SET_ERROR_MESSAGE,
    TYPE_GROUP_SET_SUCCESS_MESSAGE,
    TYPE_GROUP_SET_FORM,
    TYPE_GROUP_LIMPAR,
    TYPE_GROUP_SELECT
} from '../reducers/group'

const URL = 'http://localhost:3000/api/groups/'

export const getGroupList = () => {
    return async dispatch => {
        try {

            const result = await axios.get(URL)
            if (result.data) {
                console.log(result.data)
                return dispatch({
                    type: TYPE_GROUP_SET_LIST,
                    value: result.data
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const setErrorMessage = msg => ({
    type: TYPE_GROUP_SET_ERROR_MESSAGE,
    value: msg
})

export const setSuccessMessage = msg => ({
    type: TYPE_GROUP_SET_SUCCESS_MESSAGE,
    value: msg
})

export const setInputForms = evento => {
    const type = (TYPE_GROUP_SET_FORM + evento.target.id).toUpperCase()

    return {
        type,
        value: evento.target.value
    }
}

export const deleteGroup = _id => {
    return async dispatch => {
        if (window.confirm('Deseja realmente excluir a turma selecionada?')) {
            try {
                await axios.delete(URL + _id)
                dispatch(getGroupList())
                dispatch(setSuccessMessage('Turma deletada com sucesso'))
            } catch (e) {
                console.log(e)
                dispatch(setErrorMessage('Erro ao deletar a turma'))
            }
        }
    }
}

export const selectGroup = group => ({
    type: TYPE_GROUP_SELECT,
    payload: group
})

export const limpar = e => {
    if(e)
        e.preventDefault()

    return {
        type: TYPE_GROUP_LIMPAR,
    }
}

export const saveGroup = (evento, _id, code, name, students, specialStudents, category, attributes = []) => {
    return async dispatch => {
        evento.preventDefault()
        try{
            if(!code || !name || !students || !specialStudents || !category){
                dispatch(setErrorMessage("Favor preencher todos os campos obrigatórios!"))
            }

            const body = { code, name, students, specialStudents, category, attributes}
            let msg = ''
            if(_id){
                await axios.put(URL + _id, body)
                msg = "atualizada"
            } else {
                await axios.post(URL, body)
                msg = "cadastrada"
            }

            dispatch(limpar())
            dispatch(getGroupList())
            dispatch(setSuccessMessage(`Turma ${msg} com sucesso!`))
        }catch(e){
            console.log(e)
            dispatch(setErrorMessage('Erro ao salvar a turma!'))
        }
    }
}