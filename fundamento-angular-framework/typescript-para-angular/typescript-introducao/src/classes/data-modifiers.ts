class Charater2 {
    private name: string;// metódos privados só são acessíveis dentro da própria classe
    protected stregth: number;// metódos protegidos são acessíveis dentro da própria classe e das classes que a herdarem.
    public skill: number; // metódos publicos tem visibilidade geral
    readonly defesa: number;
    
    constructor(name: string, stregth: number, skill: number, defesa: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
        this.defesa = defesa;
    }
    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }

    public invocaDefesa() {
        console.log("Defendendo!");
    }


}

const personagem2: Charater2 = new Charater2("Lucas", 10, 98, 60);
console.log(personagem2);
personagem2.attack();
