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
        let promise = Promise.all([getClassroomsPhenotype(), getGroupsPhenotype()]);
        promise.then(([classroomData, groupData]) => {
            let groupPhenotype = [];
            groupPhenotype.push(groupData);
            
            phenotype = [];
            phenotype.push(classroomData);        
                        
            for (var i = 0; i < phenotype[0].length; i++)
            {
                var group = groupPhenotype[0];
                var classroom = phenotype[0];

                // Group local variables
                var code = group[i].code;
                var students = group[i].students;
                var specialStudents = group[i].specialStudents;                

                // Classroom local variables
                var assignedGroup = classroom[i].assignedGroup;
                var normalSpaces = classroom[i].normalSpaces;
                var accessibleSpaces = classroom[i].accessibleSpaces;

                if (normalSpaces == students && accessibleSpaces == specialStudents)
                {    
                    score = 10;
                    assignedGroup = code;
                    groupFuntion(classroom[i]);
                    continue;
                }
                else if (normalSpaces == students && specialStudents <= accessibleSpaces)
                {   
                    score = 8;
                    assignedGroup = code;
                    groupFuntion(classroom[i]);
                    continue;
                }
                else if (students <= normalSpaces && specialStudents <= accessibleSpaces)
                {    
                    score = 5;
                    assignedGroup = code;
                    groupFuntion(classroom[i]);
                    continue;
                }
                else if (normalSpaces > students && accessibleSpaces > specialStudents)
                {    
                    score = 0;
                    assignedGroup = code;
                    groupFuntion(classroom[i]);
                    continue;
                }
            }
        }).catch(err => {throw err});        
        return score
    }

    var groupFuntion = function(phenotype) {
        json.push(phenotype);  
    }            

    var geneticAlgorithm;

    return new Promise (function(resolve, reject) {
        geneticAlgorithm = geneticAlgorithmConstructor({
           mutationFunction: mutationFunction,
           crossoverFunction: crossoverFunction,
           fitnessFunction: fitnessFunction,
           population: [ json ],
           populationSize:3
        });
        if (geneticAlgorithm != null)
            resolve()
        else
           reject()

    }).then(() => {
        for( var i = 0 ; i < json.length ; i++ ) geneticAlgorithm.evolve()
        var best = geneticAlgorithm.best()
        delete best.score        
        return best;
    }).catch((error) => {console.error(error);})
}

module.exports = csap;