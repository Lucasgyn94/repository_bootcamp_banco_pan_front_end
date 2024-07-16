class CardNews extends HTMLElement {
    constructor() {
        super(); // com o super() estamos inicializando o construtor de HTMLElement

        const shadow = this.attachShadow({mode: "open"});

        shadow.innerHTML = "<h1> Hello World </h1>";
    }
}
// definindo o nome de uso do componente para card-news

customElements.define('card-news', CardNews);