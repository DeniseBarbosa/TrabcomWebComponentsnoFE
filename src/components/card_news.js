
class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    // onde será construido os elementos
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardEsquerdo = document.createElement("div");
        cardEsquerdo.setAttribute("class", "card__esquerdo");

        const cardDireito = document.createElement("div");
        cardDireito.setAttribute("class", "card__direito");

        componentRoot.appendChild(cardEsquerdo);
        componentRoot.appendChild(cardDireito);

        return componentRoot;
    }
    // onde será aplicado o estilo do componente
    style(){

    }
}

customElements.define("card-news", Cardnews)