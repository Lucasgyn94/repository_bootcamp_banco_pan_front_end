/*Variáveis */

// TIpos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Lucas";
let idade: number = 29;
let altura: number = 1.80;

/*
==> Tipos especiais
null
undefined
*/
let nulo: null = null;
let indefinido: undefined = undefined;

/**
 Tipos Abrangentes: any, void 
 */

let retorno: void;
let retornoView: any = false;

// objeto - sem previsibilidade
let produto: object = {
    "nome": "Laranja", 
    "preco": 1.99
}

//console.log(produto);

// objeto com previsibilidade
type ProdutoLoja = {
    nome: string,
    preco: number,
    unidades: number
};

let meuProduto: ProdutoLoja = {
    "nome": "Tênis",
    "preco": 99.99,
    "unidades": 5

}




