const clJSON = function cloneJSON(object) {
    return JSON.parse(JSON.stringify(object))
}

module.exports = clJSON;
