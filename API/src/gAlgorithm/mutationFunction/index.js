const LocalSetting = require("../localSettings.js");

const cloneJSON = require('../services/index.js')

const Mutate = function(phenotype) {
    return LocalSetting().muttationFunction(cloneJSON(phenotype))
}

module.exports = Mutate;
