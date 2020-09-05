const LocalSetting = require("../localSettings.js");

import {cloneJSON} from '../services/index.js'

const Mutate = function(phenotype) {
    return LocalSetting().muttationFunction(cloneJSON(phenotype))
}
