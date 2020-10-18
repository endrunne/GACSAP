const LocalSettings = require("../localSettings.js");

const DoesABeatB = function(a, b) {
    var doesABeatB = false;
    if ( LocalSettings().doesABeatBFunction ) {
        return LocalSettings().doesABeatBFunction(a,b)
    } else {
        return LocalSettings().fitnessFunction(a) >= LocalSettings().fitnessFunction(b)
    }
}

module.exports = DoesABeatB;
