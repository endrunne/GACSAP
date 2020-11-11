const settings = require('./GASettings');
var getOptions, getSettingsDefaults;

const LocalSettingsSet = function(options, settingsDefaults) {
    getOptions = options;
    getSettingsDefaults = settingsDefaults;
}

const LocalSettings = function() {    
    return settings(getOptions, getSettingsDefaults);
}

module.exports = {LocalSettingsSet, LocalSettings};
