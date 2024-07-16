class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        linkTitle.target = "_blank"

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = (this.getAttribute("photo") || "./assets/avatar-default.png");
        newsImage.alt = "Imagem Nóticia";
        cardRight.appendChild(newsImage);
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        
        return componentRoot;

    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 80%;
            box-shadow: 9px 8px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 8px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 8px 27px 0px rgba(0,0,0,0.75);
        
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px 10px;
        }
        
        .card__left span {
            font-weight: 500;
        }
        
        
        .card__left a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        
        }
        
        .card__left p {
            color: gray;
            text-align: justify;
            line-height: 1.5rem;
            letter-spacing: 0.15rem;
        }
        
        img {
            width: 100%;
            max-width: 400px;
            height: 100%;
        }

        `;
        return style;
    }
    
}

customElements.define("card-news", CardNews);