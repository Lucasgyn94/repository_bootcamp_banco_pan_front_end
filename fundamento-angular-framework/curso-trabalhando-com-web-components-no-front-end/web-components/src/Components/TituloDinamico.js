class TituloDinamico extends HTMLElement{
    
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        // criando a base
        const componentRoot = document.createElement("h2");
        componentRoot.textContent = "Lucas Dev!";

        // criando estilo
        const componentStyle = document.createElement("style");
        componentStyle.textContent = `
            h2 {
                color: blue;
            }
        `;
        // enviando dados para shadow

        shadow.appendChild(componentRoot);
        shadow.appendChild(componentStyle);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);
