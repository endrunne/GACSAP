const settingsDefaults = require('./gAlgorithm/GAConstructor.js')
const mutate           = require('./gAlgorithm/mutationFunction/index.js')
const crossover        = require('./gAlgorithm/crossoverFunction/index.js')
const doesABeatB       = require('./gAlgorithm/doesABeatBFunction/index.js')
const cloneJSON        = require('./gAlgorithm/services/index.js')
const localSettings    = require('./gAlgorithm/localSettings.js')

const geneticAlgorithmConstructor = function (options) {
    localSettings.LocalSettingsSet(options, settingsDefaults())
    var settings = localSettings.LocalSettings();
    
    function populate () {
        var size = settings.population.length
        while(settings.population.length < settings.populationSize) {
            settings.population.push(
                mutate(cloneJSON(settings.population[Math.floor(Math.random() * size)]))
            )
        }
    }

    function compete () {
        var nextGeneration = []

        for(var p = 0; p < settings.population.length - 1; p += 2) {
            var phenotype = settings.population[p];
            var competitor = settings.populationSize[p+1];

            nextGeneration.push(phenotype)
            if(doesABeatB(phenotype, competitor)) {
                (Math.random() < 0.5) ? nextGeneration.push(mutate(phenotype))
                    : nextGeneration.push(crossover(phenotype))
            }
            else {
                nextGeneration.push(competitor)
            }
        }

        settings.population = nextGeneration;
    }

    function randomizePopulationOrder () {
        for(var index = 0; index < settings.population.length; index++) {
            var otherIndex = Math.floor(Math.random() * settings.population.length)
            var temp = settings.population[otherIndex]
            settings.population[otherIndex] = settings.population[index]
            settings.population[index] = temp
        }
    }

    return {
        evolve : function(options) {
            if (options) {
                settings = settings(options, settings)
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
            return settings.fitnessFunction(this.best())
        },
        population : function() {
            return cloneJSON(this.config().population)
        },
        scoredPopulation : function() {
            return this.population().map(function(phenotype) {
                return {
                    phenotype : cloneJSON(phenotype),
                    score : settings.fitnessFunction(phenotype)
                }
            })
        },
        config : function() {
            return cloneJSON(settings)
        },
        clone : function(options) {
            return geneticAlgorithmConstructor(settings(options, settings(this.config(), settings)))
        }
    }
}

module.exports = geneticAlgorithmConstructor;