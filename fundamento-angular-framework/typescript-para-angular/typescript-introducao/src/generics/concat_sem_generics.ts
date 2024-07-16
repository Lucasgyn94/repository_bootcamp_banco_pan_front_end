/* */
function concaterArrays(...itens: any[]): any[] {
    return new Array().concat(...itens);
}

const numerosArray = concaterArrays([1, 3], [5]);
numerosArray.push("Lucas"); // com arrays do tipo any, podemos injetar qualquer tipo de dados.


const nomesArray = concaterArrays(["Goku", "Vegeta", "Gohan"]);
nomesArray.push(1);

console.log(numerosArray);
console.log(nomesArray);
