import {settings} from './src/GASettings.js'
import {settingsDefaults} from './src/GAConstructor.js'
import {mutate} from './src/mutationFunction/index.js'
import {crossover} from './src/crossoverFunction/index.js'
import {doesABeatB} from './src/doesABeatBFunction/index.js'
import {cloneJSON} from './src/services/index.js'
import {localSettingsSet} from './src/localSettings.js'
import {localSettings} from './src/localSettings.js'

export function geneticAlgorithmConstructor(options) {

    // localSettings = settings(options, settingsDefaults())

    var local = localSettingsSet(options, settingsDefaults())
    var l = localSettings()

    // TESTE APENAS

    // function mutate(phenotype) {
    //     return l.muttationFunction(cloneJSON(phenotype))
    // }

    // function doesABeatB(a, b) {
    //     var doesABeatB = false;
    //     if ( l.doesABeatBFunction ) {
    //         return l.doesABeatBFunction(a,b)
    //     } else {
    //         return l.fitnessFunction(a) >= l.fitnessFunction(b)
    //     }
    // }

    function crossover(phenotype) {
        phenotype = cloneJSON(phenotype)
        var mate = l.population[Math.floor(Math.random() * l.population.length)]
        mate = cloneJSON(mate)
        return l.crossoverFunction(phenotype, mate)[0]
    }

    // TESTE APENAS

    function populate () {
        var size = l.population.length
        while(l.population.length < l.populationSize) {
            l.population.push(                    
                mutate(cloneJSON(l.population[Math.floor(Math.random() * size)]))
            )
        }
    }

    function compete () {
        var nextGeneration = []

        for(var p = 0; p < l.population.length - 1; p += 2) {
            var phenotype = l.population[p];
            var competitor = l.populationSize[p+1];

            nextGeneration.push(phenotype)
            if(doesABeatB(phenotype, competitor)) {
                (Math.random() < 0.5) ? nextGeneration.push(mutate(phenotype)) 
                    : nextGeneration.push(crossover(phenotype))
            }
            else {
                nextGeneration.push(competitor)
            }            
        }

        l.population = nextGeneration;
    }

    function randomizePopulationOrder () {
        for(var index = 0; index < l.population.length; index++) {
            var otherIndex = Math.floor(Math.random() * l.population.length)
            var temp = l.population[otherIndex]
            l.population[otherIndex] = l.population[index]
            l.population[index] = temp
        }
    }

    return {
        evolve : function(options) {
            if (options) {
                l = settings(options, l)
            }

            populate()
            randomizePopulationOrder()
            compete()

            return this
        },
        best : function() {
            var scored = this.scoredPopulation()
            var result = scored.reduce(function(a,b) {
                return a.score >= b.score ? a : b
            }, scored[0]).phenotype
            return cloneJSON(result)
        },
        bestScore : function() {
            return l.fitnessFunction(this.best())
        },
        population : function() {
            return cloneJSON(this.config().population)
        },
        scoredPopulation : function() {
            return this.population().map(function(phenotype) {
                return {
                    phenotype : cloneJSON(phenotype),
                    score : l.fitnessFunction(phenotype)
                }
            })        
        },
        config : function() {
            return cloneJSON(l)
        },
        clone : function(options) {
            return geneticAlgorithmConstructor(settings(options, settings(this.config(), l)))
        }
    }
}    