const LocalSettings = require("../localSettings.js");

const DoesABeatB = function(a, b) {
    var doesABeatB = false;
    var settings = LocalSettings.LocalSettings();
    if (settings.doesABeatBFunction ) {
        return settings.doesABeatBFunction(a,b)
    } else {
        return settings.fitnessFunction(a) >= settings.fitnessFunction(b)
    }
}

module.exports = DoesABeatB;
