const LocalSettings = require("../localSettings.js");

const DoesABeatB = function(a, b) {
    var doesABeatB = false;
    if ( LocalSettings.LocalSettings().doesABeatBFunction ) {
        return LocalSettings.LocalSettings().doesABeatBFunction(a,b)
    } else {
        return LocalSettings.LocalSettings().fitnessFunction(a) >= LocalSettings.LocalSettings().fitnessFunction(b)
    }
}

module.exports = DoesABeatB;
