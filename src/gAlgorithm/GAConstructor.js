const SettingsDefaults = function() {return {

    muttationFunction  :  function(phenotype) {return phenotype},
    crossoverFunction  :  function(a,b) {return [a,b]},
    fitnessFunction    :  function(phenotype) {return 0},
    doesABeatBFunction :  undefined,
    population         :  [],
    populationSize     :  100,
}};

module.exports = SettingsDefaults;
