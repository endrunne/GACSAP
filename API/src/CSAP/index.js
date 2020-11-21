const fetch = require("node-fetch");

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
    var fitnessFunction = async function() {
        // use your phenotype data to figure out a fitness score
        let promise = Promise.all([getClassroomsPhenotype(), getGroupsPhenotype()]);
        promise.then(([classroomData, groupData]) => {
            let groupPhenotype = groupData;
            let phenotype = classroomData;
            
            /*Ordenando os grupos pela quantidade total de alunos, priorizando turmas maiores primeiro*/
            groupPhenotype.sort( (a, b) => {
                    if((a.students + a.specialStudents) < (b.students + b.specialStudents)){
                        return 1
                    }
                    if((a.students + a.specialStudents) > (b.students + b.specialStudents)){
                        return -1
                    }

                    return 0
                }
            )
            
            groupPhenotype.map( group => {
                let possibleAssigns = []
                /*verificar se grupo tem um possivel lugar nas classes*/
                phenotype.map( (classroom, index) => {
                    if(!classroom.assignedGroup){
                        if( classroom.normalSpaces >= group.students && classroom.accessibleSpaces >= group.specialStudents){
                            possibleAssigns.push({index})
                        }
                    }
                })

                /*Se não tiver possibilidade nem tenta */
                if(possibleAssigns.length !== 0){
                    if( possibleAssigns.length !== 1 ){
                        /* faz o score de cada uma das atribuicoes e armazena no array. Quanto menor, melhor*/
                        possibleAssigns.map( possibleAssign => {
                            possibleAssign.score = (phenotype[possibleAssign.index].normalSpaces - group.students)
                            possibleAssign.score += (phenotype[possibleAssign.index].accessibleSpaces - group.specialStudents)
                        }
                    )
        
                        /* Ordenando desc o array atraves do score */
                        possibleAssigns.sort( (a, b) => {
                                if(a.score < b.score )
                                    return -1
                                if( a.score > b.score )
                                    return 1
                                
                                return 0
                            }
                        )
                    }
                    
                    phenotype[possibleAssigns[0].index].assignedGroup = group.code

                    /* pega o menor score e atribui a turma*/
                    return UpdateClassroom(phenotype[possibleAssigns[0].index])
                }
                else{
                    console.log(group.code + ': no match!')
                }
            })
        }).catch(err => {throw err});        
    }

    async function UpdateClassroom(classroom) {
        const data = classroom;
        await fetch('http://localhost:3000/api/classrooms' + "/" + classroom._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return new Promise (function(resolve, reject) {
        resolve()
    }).then(() => {
        fitnessFunction();
    }).catch((error) => {console.error(error);})
}

module.exports = csap;