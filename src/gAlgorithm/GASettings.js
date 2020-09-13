const Settings = function(settings, defaults) {
    settings = settings || {}

    settings.muttationFunction    =   settings.muttationFunction  || defaults.muttationFunction
    settings.crossoverFunction    =   settings.crossoverFunction  || defaults.crossoverFunction
    settings.fitnessFunction      =   settings.fitnessFunction    || defaults.fitnessFunction
    settings.doABeatBFunction     =   settings.doABeatBFunction   || defaults.doABeatBFunction
    settings.populationFunction   =   settings.populationFunction || defaults.populationFunction
    settings.population           =   settings.population         || defaults.population

    if ( settings.population.length <= 0 )
        throw Error("population must be an array and contain at least 1 phenotypes")

    settings.populationSize = settings.populationSize || defaults.populationSize

    if ( settings.populationSize <= 0 )
        throw Error("populationSize must be greater than 0")

    return settings;
};

module.exports = Settings;
