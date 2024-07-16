// decorators
function ExibirNome(target: any) {
    console.log(`Chamada vindo de ${target}`);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Tampinha {}