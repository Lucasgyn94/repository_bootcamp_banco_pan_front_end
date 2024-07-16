/**FUNÇÕES */
function retornarSoma(n1: number, n2: number): number {
    return n1 + n2;
}

let soma: number = retornarSoma(2, 3);
//console.log(soma)

function addToHello(name: string): string {
    return `Hello ${name}`
}

let chamadaHello: string = addToHello("Lucas");
//console.log(chamadaHello);



function callToPhone(phone: number | string): string | number {
    return `Ligando para ${phone}`;
}

let ligacao = callToPhone(62994923612);
console.log(ligacao);


// função assincrona
async function getDataBase(id: number): Promise<string>  {
    return `${id}- Lucas`
}

let obterBd = getDataBase(1);
console.log(obterBd);