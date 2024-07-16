type heroi = {
    name: string,
    vulgo: string
}

function printaObjetos(pessoa: heroi) {
    console.log(pessoa.name);
}

printaObjetos({
    name: "Bruce Wayne",
    vulgo: "batman"
});