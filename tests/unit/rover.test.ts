const chai = require('chai');
const assert = chai.assert;

import {Rover} from '../../src/class/Rover';

describe('Test Rover object type', function () {

    it('Test Rover type', function () {
        assert.strictEqual(typeof Rover === 'function', true)
    });

    it('Test Rover move', function () {
        let R1 = new Rover();

        //@todo this will need a proper parser solution
        let command = "5 5\n" + //Size of plateue.
            "1 2 N\n" +         //Start position
            "LMLMLMLMM";        //Moving command.

        let testCommands = {
            'plateau_size': {
                'width': 5,
                'height': 5
            },
            'starting_position': {
                'x': 1,
                'y': 2,
                'd': 'N'
            },
            'moving_command': 'LMLMLMLMM'
        }

        assert.strictEqual('1 3 N', R1.execute(testCommands));


        let R2 = new Rover();

        let testCommands2 = {
            'plateau_size': {
                'width': 5,
                'height': 5
            },
            'starting_position': {
                'x': 3,
                'y': 3,
                'd': 'E'
            },
            'moving_command': 'MMRMMRMRRM'
        }

        assert.strictEqual('5 1 E', R2.execute(testCommands2));



    });

})
