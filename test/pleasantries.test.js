const assert = require('assert');
const { greet, farewell } = require('../lib/pleasantries');

describe('pleasantries', () => {

    it('greets supplied name', () => {
        const greeting = greet('world');
        assert.equal(greeting, 'hello world!');
    });

    it('greets with "stranger" when no name provided', () => {
        const greeting = greet();
        assert.equal(greeting, 'hello stranger!');
    });

    it('greets with "stranger" when empty string provided', () => {
        const greeting = greet('');
        assert.equal(greeting, 'hello stranger!');
    });
});

describe('farewell', () => {
    it('says goodbye to name', () => {
        const leaveTaking = farewell('world');
        assert.equal(leaveTaking, 'goodbye world!');
    });

    it('says goodbye to stranger when no name', () => {
        const leaveTaking = farewell();
        assert.equal(leaveTaking, 'goodbye stranger!');
    });
});
