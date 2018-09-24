
function pleasantry(salutation, name) {
    if(name !== undefined && typeof name !== 'string') {
        throw new Error('supplied name must be a string');
    }
    name = name || 'stranger';
    return `${salutation} ${name}!`;
}

function greet(name) {
    return pleasantry('hello', name);
}

function farewell(name) {
    return pleasantry('goodbye', name);
}

module.exports = {
    greet,
    farewell
};
