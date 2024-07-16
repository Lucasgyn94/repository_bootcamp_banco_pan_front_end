// readonly indica que a propriedade não pode pode ser modificada;
type robot = {
    readonly id: number | string,
    name: string
}

const bot: robot = {id: 1, name: 'Lucas'};
bot.name = "zika";
console.log(bot);

