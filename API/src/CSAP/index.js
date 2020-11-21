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
        .then((classroomData) => {
            classroomData.map( (classroom) => { delete classroom.assignedGroup}) //remove a turma atribuida para o funcionamento total da rotina para todos os classrooms
            return classroomData;
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

            let result = [];
            
            phenotype = [];
            phenotype.push(classroomData);
            
            /*Ordenando os grupos pela quantidade total de alunos, priorizando turmas maiores primeiro*/
            groupPhenotype.sort( (a, b) => {
                    if(a.students + a.specialStudents < b.students + b.specialStudents )
                        return -1
                    if(a.students + a.specialStudents > b.students + b.specialStudents )
                        return 1
                    
                    return 0
                }
            )

            groupPhenotype.map( group => {
                /*verificar se grupo tem um possivel lugar nas classes*/
                let possibleAssigns = []
                phenotype.map( (classroom, index) => {
                    if(!classroom.assignedGroup)
                        continue

                    if( classroom.spaces >= group.students && classroom.specialSpaces >= group.specialStudents){
                        possibleAssigns.push({index})
                    }
                })

                /*Se não tiver possibilidade nem tenta */
                if(possibleAssigns.length === 0){
                    continue
                }
                /*Atribui já a turma a sala disponível, uma vez que já ordenado as turmas */
                if( possibleAssigns.length === 1 ){
                    phenotype[possibleAssigns[0].index].assignedGroup = group.code
                    continue
                }

                /* faz o score de cada uma das atribuicoes e armazena no array. Quanto menor, melhor*/
                possibleAssigns.map( possibleAssign => {
                    possibleAssign.score = (phenotype[possibleAssign.index].normalSpaces - group.students)
                    possibleAssign.score += (phenotype[possibleAssign.index].specialSpaces - group.specialStudents)
                })

                /* Ordenando desc o array atraves do score */
                possibleAssigns.sort( (a, b) => {
                        if(a.score < b.score )
                            return 1
                        if( a.score > b.score )
                            return -1
                        
                        return 0
                    }
                )

                /* pega o menor score e atribui a turma*/
                phenotype[possibleAssigns[0].index].assignedGroup = group.code

                /* Persistencia da turma atribuida*/
                UpdateClassroom(phenotype[possibleAssigns[0].index])
                
            })
        }).catch(err => {throw err});        
        return score
    }

    function UpdateClassroom(classroom) {
        const data = classroom;
        fetch('http://localhost:3000/api/classrooms' + "/" + classroom._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
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