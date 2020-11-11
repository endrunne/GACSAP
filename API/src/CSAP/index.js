const geneticAlgorithmConstructor = require('../index.js')
const fetch = require("node-fetch");

    const csap = function() {
        var mutationFunction = function( phenotype ) {        
        return phenotype;
    }

    function crossoverFunction(phenotypeA, phenotypeB) {
        // move, copy, or append some values from a to b and from b to a                
        return [ phenotypeA , phenotypeB ]
    }
    
    var fitnessFunction = function(phenotype) {
        var score = 0        
        // use your phenotype data to figure out a fitness score        

        groupPhenotype = {
            students: 7,
            specialStudents: 0,
            code: "CC8P17",
            name: "Ciencia da computacao",
            category: "Exatas",
            attributes: [
                {
                    attributeName: "",
                    attributeDisplayName: "",
                    attributeValue: ""
                }
            ]
        }

        phenotype = {
            normalSpaces: 7,
            accessibleSpaces: 0,
            code: "F-24",
            name: "Sala de aula",
            assignedGroup: { type: String},
            attributes: [
                {
                    attributeName: "",
                    attributeDisplayName: "",
                    attributeValue: ""
                }
            ]
        };

        if (phenotype.normalSpaces == groupPhenotype.students) {
            
            phenotype.assignedGroup = groupPhenotype.code;
            score = phenotype.normalSpaces;
        }

        console.log(`score value: ${score}`);

        return score
    }
    
    let urlClassrooms = 'https://localhost:3001/api/classrooms';
    let urlGroups = 'https://localhost:3001/api/groups';

    let classRoomPhenotype = null;
    let groupPhenotype = null;

    fetch(urlClassrooms)
    .then(res => res.json()).then((classRoom) => {
        console.log('Checkout this JSON! ', classRoom);
        classRoomPhenotype = classRoom;
    }).catch(err => { throw err });

    fetch(urlGroups)
    .then(res => res.json()).then((groups) => {
        console.log('Checkout this JSON! ', groups);
        groupPhenotype = groups;
    }).catch(err => { throw err });

    var geneticAlgorithm;

    return new Promise (function(resolve, reject) {
        geneticAlgorithm = geneticAlgorithmConstructor({
           mutationFunction: mutationFunction,
           crossoverFunction: crossoverFunction,
           fitnessFunction: fitnessFunction,
           population: [ classRoomPhenotype, groupPhenotype ],
           populationSize:1000
        });

        if (geneticAlgorithm != null)
            resolve()
        else
           reject()

    }).then(() => {
        console.log("Starting with:")
        console.log( groupPhenotype )
        for( var i = 0 ; i < 100 ; i++ ) geneticAlgorithm.evolve()
        var best = geneticAlgorithm.best()
        delete best.score
        console.log("Finished with:")
        console.log(best)
    }).catch((error) => {console.error(error);})
}

module.exports = csap;
