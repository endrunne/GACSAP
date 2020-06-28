export function settings(settings, defaults) {
    settings = settings || {}

    settings.muttationFunction = settings.muttationFunction || defaults.muttationFunction
    settings.crossoverFunction = settings.crossoverFunction || defaults.crossoverFunction
    settings.fitnessFunction = settings.fitnessFunction || defaults.fitnessFunction

    settings.doABeatBFunction = settings.doABeatBFunction || defaults.doABeatBFunction

    settings.populationFunction = settings.populationFunction || defaults.populationFunction

    settings.population = settings.population || defaults.population

    settings.population = []

    if ( settings.population.length <= 0 ) 
        console.log("population must be an array and contain at least 1 phenotypes")
        // throw Error("population must be an array and contain at least 1 phenotypes")

    settings.populationSize = settings.populationSize || defaults.populationSize
    
    if ( settings.populationSize <= 0 ) 
        throw Error("populationSize must be greater than 0")

    return settings;
}