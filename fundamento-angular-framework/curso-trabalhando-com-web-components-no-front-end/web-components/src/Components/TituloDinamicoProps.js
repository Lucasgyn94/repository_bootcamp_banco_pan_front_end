class TituloDinamicoProps extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        // base do component
        const componentRoot = document.createElement("h3");
        componentRoot.textContent = this.getAttribute("titulo");

        // estilo do componente
        const styleComponent = document.createElement("style");
        styleComponent.textContent = `
            h3 {
                background-color: black;
                color: white;
            }
        `;

        // enviar para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(styleComponent);
    }
}

customElements.define("titulo-dinamico-props", TituloDinamicoProps);