const geneticAlgorithmConstructor = require('../index.js')

    const csap = function() {
        var mutationFunction = function( phenotype ) {
        return phenotype
    }

    function crossoverFunction(phenotypeA, phenotypeB) {
        // move, copy, or append some values from a to b and from b to a
        return [ phenotypeA , phenotypeB ]
    }
    
    function fitnessFunction(phenotype) {
        var score = 0
        // use your phenotype data to figure out a fitness score
        return score
    }
    
    var firstPhenotype = {
        dummyKey : "dummyValue"
        // enter phenotype data here
    }

    var geneticAlgorithm;

    return new Promise (function(resolve, reject) {
        geneticAlgorithm = geneticAlgorithmConstructor({
           mutationFunction: mutationFunction,
           crossoverFunction: crossoverFunction,
           fitnessFunction: fitnessFunction,
           population: [ firstPhenotype ],
           populationSize:1000
        });

        if (geneticAlgorithm != null)
            resolve()
        else
           reject()

    }).then(() => {
        console.log("Starting with:")
        console.log( firstPhenotype )
        for( var i = 0 ; i < 100 ; i++ ) geneticAlgorithm.evolve()
        var best = geneticAlgorithm.best()
        delete best.score
        console.log("Finished with:")
        console.log(best)
    }).catch((error) => {console.error(error);})
}

module.exports = csap;
