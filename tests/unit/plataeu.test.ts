const chai = require('chai');
const assert = chai.assert;

import {Plataeu} from '../../src/class/Plataeu';

const P = new Plataeu(5, 5);

describe('Test Plataeu', function () {
    it('Test Rover type', function () {
        assert.strictEqual(typeof Plataeu === 'function', true)
    });

    it('Test Rover getters', function () {
        assert.strictEqual(P.getHeight(), 5)
        assert.strictEqual(P.getWidth(), 5)
    });
})
