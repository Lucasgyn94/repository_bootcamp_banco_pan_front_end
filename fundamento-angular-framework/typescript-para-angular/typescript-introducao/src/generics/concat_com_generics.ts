// APLICANDO GENERICS
function concatenarArraysGenerics<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numerosArrayGenerics = concatenarArraysGenerics<number[]>([1, 3, 5], [7]);
//numerosArrayGenerics.push("Lucas"); // Agora que utilizamos generics para especificar a saída do nosso tipo de dados, não é possível adicionar um tipo diferente.
numerosArrayGenerics.push([9]);
console.log(numerosArrayGenerics);

const nomesArrayGenerics = concatenarArraysGenerics<string[]>(["Goku", "Vegeta", "Piccolo"]);
console.log(nomesArrayGenerics);
