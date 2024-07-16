// Função decorator que valida o comprimento mínimo da propriedade
function minLenght(length: number): (target: ApiDecoratorAttribute, propertyKey: "name") => void {
    // O decorator retorna uma função que recebe informações sobre a classe e a propriedade
    return (target: any, key: string) => {
        // Armazena o valor original da propriedade
        let _value = target[key];

        // Define um getter que retorna o valor atual da propriedade
        const getter = () => _value;

        // Define um setter que valida o comprimento mínimo antes de atribuir o valor
        const setter = (value: string) => {
            if (value.length < length) {
                // Se o comprimento for menor que o especificado, lança um erro
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                // Caso contrário, atribui o valor à propriedade
                _value = value;
            }
        };

        // Substitui a propriedade original pelo getter e setter personalizados
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

// Classe com uma propriedade "name" decorada com o decorator de comprimento mínimo
class ApiDecoratorAttribute {
    @minLenght(3) // Aplica o decorator à propriedade "name" com comprimento mínimo 3
    name: string; // Declaração da propriedade

    // Construtor que inicializa a propriedade "name"
    constructor(name: string) {
        this.name = name;
    }
}

// Cria uma instância da classe com um nome inicial
const apiDecoratorAttribute = new ApiDecoratorAttribute("Tampinha");

// Exibe o valor da propriedade "name" após a aplicação do decorator
console.log(apiDecoratorAttribute.name);
