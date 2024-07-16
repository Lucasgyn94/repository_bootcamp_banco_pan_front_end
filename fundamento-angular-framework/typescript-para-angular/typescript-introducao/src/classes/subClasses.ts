class Magician extends Character {
    magicPoints: number;

    constructor(name: string, stregth: number, skill: number, magicPoints: number) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }

}

const mago: Magician = new Magician("Lucas", 10, 30, 100);
console.log(mago);