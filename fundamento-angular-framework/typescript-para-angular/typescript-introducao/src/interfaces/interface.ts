interface robot2 {
    readonly id: number | string,
    name: string
    saudacaoHello(): string;
}

//const bot2: robot2 = {id: 2, name: "Tampinha"};
//console.log(bot2);

class Pessoa implements robot2 {
    id: string | number;
    name: string;
    
    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }

    saudacaoHello(): string {
        return `Hello ${this.name}`;
    }


}

const p1: Pessoa = new Pessoa(1, "Lucas");
console.log(p1.saudacaoHello());