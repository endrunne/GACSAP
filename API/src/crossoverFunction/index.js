import {localSettings} from '../localSettings.js'
import {cloneJSON} from '../services/index.js'

export function crossover(phenotype) {
    phenotype = cloneJSON(phenotype)
    var mate = localSettings().population[Math.floor(Math.random() * localSettings().population.length)]
    mate = cloneJSON(mate)
    return localSettings().crossoverFunction(phenotype, mate)[0]
}