import {settings} from './GASettings.js'

var getOptions, getSettingsDefaults;

export function localSettingsSet(options, settingsDefaults) {   
    getOptions = options;
    getSettingsDefaults = settingsDefaults;
}

export function localSettings() {    
    return settings(getOptions, getSettingsDefaults);
}