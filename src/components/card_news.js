
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

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonimos");

        const linkTitulo = document.createElement("a");
        linkTitulo.textContent = this.getAttribute("titulo");
        linkTitulo.href = this.getAttribute("link-url");

        const novoConteudo = document.createElement("p");
        novoConteudo.textContent = this.getAttribute("conteudo");

        cardEsquerdo.appendChild(autor);
        cardEsquerdo.appendChild(linkTitulo);
        cardEsquerdo.appendChild(novoConteudo);

        const cardDireito = document.createElement("div");
        cardDireito.setAttribute("class", "card__direito");

        const novaImagem = document.createElement("img");
        novaImagem.src = this.getAttribute("foto") || "assets/fotodefault.jpg";
        novaImagem.alt = "Foto da noticia"
        cardDireito.appendChild(novaImagem);

        componentRoot.appendChild(cardEsquerdo);
        componentRoot.appendChild(cardDireito);

        return componentRoot;
    }
    // onde será aplicado o estilo do componente
    style(){

    }
}

customElements.define("card-news", Cardnews)