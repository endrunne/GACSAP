import {localSettings} from '../localSettings.js'

export function doesABeatB(a, b) {
    var doesABeatB = false;
    if ( localSettings().doesABeatBFunction ) {
        return localSettings().doesABeatBFunction(a,b)
    } else {
        return localSettings().fitnessFunction(a) >= localSettings().fitnessFunction(b)
    }
}