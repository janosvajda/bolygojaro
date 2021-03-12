/**
 * @todo this enum should go to a separated file later
 */
enum Directions {
    North = "N",
    West = "W",
    South = "S",
    East = "E",
}

export class Rover {

    private direction: string;
    private parsedCommands: any; //@todo refactor: this won't be here as it goes to a parser class + its interface
    private y: number;
    private x: number;

    constructor() {
        this.direction = Directions.North;
        this.parsedCommands = {};
        this.y = 0;
        this.x = 0;
    }

    parseCommands(commands: any) {

        return commands
    }

    execute(commands: any) {

        this.parsedCommands = this.parseCommands(commands); //@todo this must be a separated class


        this.y = this.parsedCommands.starting_position.y;
        this.x = this.parsedCommands.starting_position.x;
        this.direction = this.parsedCommands.starting_position.d;

        for (const movement of this.parsedCommands.moving_command) {
            this.move(movement);
        }
        return this.x + ' ' + this.y + ' ' + this.direction;
    }

    /**
     * @param direction String
     */
    move(movement: string) {

        switch (movement) {
            case 'L':
                this.TurnLeft();
                break;
            case 'R':
                this.TurnRight();
                break;
            case 'M':
                this.MoveForward();
                break;
        }

    }

    TurnLeft() {
        switch (this.direction) {
            case Directions.North:
                this.direction = Directions.West;
                break;
            case Directions.West:
                this.direction = Directions.South;
                break;
            case Directions.South:
                this.direction = Directions.East;
                break;
            case Directions.East:
                this.direction = Directions.North;
                break;
        }
    }

    TurnRight() {
        switch (this.direction) {
            case Directions.North:
                this.direction = Directions.East;
                break;
            case Directions.East:
                this.direction = Directions.South;
                break;
            case Directions.South:
                this.direction = Directions.West;
                break;
            case Directions.West:
                this.direction = Directions.North;
                break;
        }
    }

    MoveForward() {
        switch (this.direction) {
            case Directions.North:
                this.y = this.y + 1;
                break;
            case Directions.East:
                this.x = this.x + 1;
                break;
            case Directions.South:
                this.y = this.y - 1;
                break;
            case Directions.West:
                this.x = this.x - 1;
                break;
        }
    }


}
