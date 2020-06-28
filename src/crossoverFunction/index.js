import {settings} from '../GASettings.js'
import {cloneJSON} from '../services/index.js'

export function crossover(phenotype) {
    phenotype = cloneJSON(phenotype)
    var mate = settings.population[Math.floor(Math.random() * settings.population.length)]
    mate = cloneJSON(mate)
    return settings.crossoverFunction(phenotype, mate)[0]
}