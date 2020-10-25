const INITIAL_STATE = {
    groups: [],

    errorMessage: '',
    successMessage: '',

    _id: null,
    code: '',
    name: '',
    category: '',
    students: 0,
    specialStudents: 0,
    attributes: []
}

export const TYPE_GROUP = 'TYPE_GROUP'
export const TYPE_GROUP_SET_LIST = TYPE_GROUP + '_SET_LIST'

export const TYPE_GROUP_SET_FORM = TYPE_GROUP + '_SET_'

export const TYPE_GROUP_LIMPAR = TYPE_GROUP + '_LIMPAR'
export const TYPE_GROUP_SET_ERROR_MESSAGE = TYPE_GROUP + '_SET_ERROR_MESSAGE'
export const TYPE_GROUP_SET_SUCCESS_MESSAGE = TYPE_GROUP + '_SET_SUCCESS_MESSAGE'
export const TYPE_GROUP_SELECT = TYPE_GROUP + '_SELECT'


export default function(state = INITIAL_STATE, acao){
    switch(acao.type){
        /*Lista*/
        case TYPE_GROUP_SET_LIST :
            return {...state, groups: acao.value}

        case TYPE_GROUP_SET_ERROR_MESSAGE :
            return {...state, errorMessage: acao.value, successMessage: ''}
        case TYPE_GROUP_SET_SUCCESS_MESSAGE :
            return {...state, successMessage: acao.value, errorMessage: ''}

        /*Form*/
        case TYPE_GROUP_SET_FORM+'CODE' : 
            return {...state, code: acao.value}
        case TYPE_GROUP_SET_FORM+'NAME' : 
            return {...state, name: acao.value}
        case TYPE_GROUP_SET_FORM+'CATEGORY' : 
            return {...state, category: acao.value}
        case TYPE_GROUP_SET_FORM+'STUDENTS' : 
            return {...state, students: acao.value}
        case TYPE_GROUP_SET_FORM+'SPECIALSTUDENTS' : 
            return {...state, specialStudents: acao.value}
        case TYPE_GROUP_SET_FORM+'ATTRIBUTES' :
            return {...state, attributes: acao.value}
        
        case TYPE_GROUP_LIMPAR :
            return {...INITIAL_STATE, groups : state.groups}
        case TYPE_GROUP_SELECT :
            return {
                ...state,
                _id: acao.payload._id,
                code: acao.payload.code,
                name: acao.payload.name,
                students: acao.payload.students,
                specialStudents: acao.payload.specialStudents,
                category: acao.payload.category,
                attributes: acao.payload.attributes,
                successMessage: '',
                errorMessage: ''
            }
            
        default: return state
    }
}