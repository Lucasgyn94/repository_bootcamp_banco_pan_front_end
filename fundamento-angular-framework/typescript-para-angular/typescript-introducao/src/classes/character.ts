class Character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

const personagem: Character = new Character("Lucas", 10, 98);
console.log(personagem);
personagem.attack();

