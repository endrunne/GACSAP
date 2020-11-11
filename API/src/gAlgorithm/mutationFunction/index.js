const LocalSetting = require("../localSettings.js");

const cloneJSON = require('../services/index.js')

const Mutate = function(phenotype) {
    return LocalSetting.LocalSettings().muttationFunction(cloneJSON(phenotype))
}

module.exports = Mutate;
