type Hero = {
    nome: string,
    vulgo: string,
    telefone: string
};

const ligarPara = (heroi: Hero) => {
    console.log(`Ligando para: ${heroi.telefone}`);
}

ligarPara({
    nome: "Lucas",
    vulgo: "dev",
    telefone: "62994923612"
})