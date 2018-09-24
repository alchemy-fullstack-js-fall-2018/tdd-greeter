
function pleasantry(salutation, name) {
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
