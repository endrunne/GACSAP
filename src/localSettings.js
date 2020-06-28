import {settings} from './GASettings.js'

var setSettings = {
    options: function(options) {return options},
    settingsDefaults: function(settingsDefaults) {return settingsDefaults},    
}

var getSettings = {
    options: function() {return this.options},
    settingsDefaults: function() {return this.settingsDefaults}
}

export function localSettingsSet(options, settingsDefaults) {
   setSettings.options(options)
   setSettings.settingsDefaults(settingsDefaults)
}

export function localSettings() {
    return settings(getSettings.options(), getSettings.settingsDefaults())
}