import {localSettings} from '../localSettings.js'
import {cloneJSON} from '../services/index.js'

export function mutate(phenotype) { 
    return localSettings().muttationFunction(cloneJSON(phenotype))
}