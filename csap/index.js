import {geneticAlgorithmConstructor} from '../index.js'
import {csapPhenotype} from './phenotype.js'

export function csap() {

    function mutationFunction(phenotype){
        return phenotype
    }

    function crossoverFunction(phenotypeA, phenotypeB){
        return [phenotypeA,phenotypeB]
    }

    function fitnessFunction(phenotype){
        var score = 0
        return score
    }

    var firstPhenotype = csapPhenotype();

    var geneticAlgorithm;

    return new Promise (function(resolve,reject){
        geneticAlgorithm = geneticAlgorithmConstructor({
            mutationFunction : mutationFunction,
            crossoverFunction : crossoverFunction,
            //fitnessFunction : fitnessFunction,
            population : [firstPhenotype],
            populationSize : 10
        });

        if(geneticAlgorithm != null)
            resolve()
        else
            reject()
    }).then(() => {
        console.log("Starting with:")
        console.log(firstPhenotype)

        for(var i = 0; i < 100; i++)
            geneticAlgorithm.evolve()

        var best = geneticAlgorithm.best()
        delete best.score
        console.log("Finishied with: ")
        console.log(best)
    })
}
