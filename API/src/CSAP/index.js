    const geneticAlgorithmConstructor = require('../index.js')
    const fetch = require("node-fetch");
    
    let json = [];

    var getGroupsPhenotype = async function() {
        let url = 'http://localhost:3000/api/groups';        
        return await fetch(url)
        .then(res => res.json())
        .then((groupData) => {            
            return groupData;
        })
        .catch(err => {throw err});
    }

    var getClassroomsPhenotype = async function() {        
        let url = 'http://localhost:3000/api/classrooms';        
        return await fetch(url)
        .then(res => res.json())
        .then((groupData) => {            
            return groupData;
        })
        .catch(err => {throw err});
    }

    const csap = function() {
        var mutationFunction = function( phenotype ) {
        return phenotype;
    }

    function crossoverFunction(phenotypeA, phenotypeB) {
        // move, copy, or append some values from a to b and from b to a
        return [ phenotypeA , phenotypeB ]
    }

    var fitnessFunction = async function(phenotype) {
        var score = 0
        // use your phenotype data to figure out a fitness score

        // Mock for tests
        // var groupPhenotype = 
        // [
        //     {
        //         students: 6,
        //         specialStudents: 2,
        //         code: "CC7P17",
        //         name: "Ciência da computação",
        //         category: "Exatas"
        //     },
        //     {
        //         students: 7,
        //         specialStudents: 2,
        //         code: "CC8P17",
        //         name: "Ciencia da computacao",
        //         category: "Exatas"                
        //     },
        //     {
        //         students: 10,
        //         specialStudents: 5,
        //         code: "CC5P18",
        //         name: "Ciência da computação",
        //         category: "Exatas"
        //     }
        // ]               

        // phenotype = {
        //     normalSpaces: 7,
        //     accessibleSpaces: 2,
        //     code: "F-24",
        //     name: "Sala de aula",
        //     assignedGroup: { type: String},
        //     attributes: [
        //         {
        //             attributeName: "",
        //             attributeDisplayName: "",
        //             attributeValue: ""
        //         }
        //     ]
        // };

        let promise = Promise.all([getClassroomsPhenotype(), getGroupsPhenotype()]);

        promise.then(([classroomData, groupData]) => {
            let groupPhenotype = [];
            groupPhenotype.push(groupData);
            
            phenotype = [];
            phenotype.push(classroomData);

            for (var i = 0; i < groupPhenotype.length; i++)
            {
                var students = groupPhenotype[i].students;
                var specialStudents = groupPhenotype[i].specialStudents;

                if (phenotype[i].normalSpaces == students && phenotype[i].accessibleSpaces == specialStudents)
                {    
                    score = 10;
                    phenotype[i].assignedGroup = groupPhenotype[i].code;
                    groupFuntion(phenotype[i]);
                    continue;
                }
                else if (phenotype[i].normalSpaces == students && phenotype[i].accessibleSpaces <= specialStudents)
                {   
                    score = 8;
                    phenotype[i].assignedGroup = groupPhenotype[i].code;
                    groupFuntion(phenotype[i]);
                    continue;
                }
                else if (phenotype[i].normalSpaces <= students && phenotype[i].accessibleSpaces <= specialStudents)
                {    
                    score = 5;
                    phenotype[i].assignedGroup = groupPhenotype[i].code;
                    groupFuntion(phenotype[i])
                }
                else if (phenotype[i].normalSpaces > students && phenotype[i].accessibleSpaces > specialStudents)
                {    
                    score = 0;
                    phenotype[i].assignedGroup = groupPhenotype[i].code;
                    groupFuntion(phenotype[i]);
                }
            }
        }).catch(err => {throw err});        
        return score
    }

    var groupFuntion = function(phenotype) {
        json.push(phenotype);
        console.log(JSON.stringify(json));
    }            

    var geneticAlgorithm;

    return new Promise (function(resolve, reject) {
        geneticAlgorithm = geneticAlgorithmConstructor({
           mutationFunction: mutationFunction,
           crossoverFunction: crossoverFunction,
           fitnessFunction: fitnessFunction,
           population: [ json ],
           populationSize:100
        });
        if (geneticAlgorithm != null)
            resolve()
        else
           reject()

    }).then(() => {
        for( var i = 0 ; i < 100 ; i++ ) geneticAlgorithm.evolve()
        var best = geneticAlgorithm.best()
        delete best.score
        return best;
    }).catch((error) => {console.error(error);})
}

module.exports = csap;