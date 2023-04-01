
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
        novaImagem.width = 400;
        novaImagem.alt = "Foto da noticia"
        cardDireito.appendChild(novaImagem);

        componentRoot.appendChild(cardEsquerdo);
        componentRoot.appendChild(cardDireito);

        return componentRoot;
    }
    // onde será aplicado o estilo do componente
    style(){
        const style = document.createElement("style");
        style.textContent = `
        .card {
            /* caixa principal > ocupar % da tela*/
            width: 80%;
            /* visualizar o tamanho da caixa */
            /* border: 1px solid gray; */
            /* sera usado para dividir e colocar as caixas uma do lado da outra em linha */
            display: flex;
            /* observação sobre o flex-direction: row ; o display flex ja deixa um do lado do outro  >> uma atenção maior sobre o comportamento */
            flex-direction: row;
        
            /* estilização copiada do site https://cssgenerator.org/  */
            box-shadow: 16px 24px 26px -11px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 16px 24px 26px -11px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 16px 24px 26px -11px rgba(0, 0, 0, 0.75);
            /* quero um espaço entre a caixa direita e a caixa esquerda */
            justify-content: space-between;
        
        }
        
        .card__esquerdo {
            /* quero deixar o conteudo um abaixo do outro em coluna e o conteudo no centro */
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* os elementos estão colados a esquerda, eu quero dar um espaçamento entre os elementos da esquer do comput */
            padding-left: 10px;
        }
        
        .card__esquerdo>span {
            /* alterar o peso da fonte do autor */
            font-weight: 300;
        }
        
        .card__esquerdo>a {
            /* eu quero colocar um espaço entre o titulo e o autor ou span */
            margin-top: 15px;
            /* alterar o tamanho do titulo */
            font-size: 25px;
            /* tirar o sumblinhado do link */
            text-decoration: none;
            /* mudar a cor do titulo */
            color: black;
            /* mudar a fonte do titulo */
            font-weight: bold;
        }
        
        .card__esquerdo>p {
            /* eu quero alterar a cor do texto que esta no paragrafo */
            color: gray;
        }
        
        
        `
        return style;
    }
}

customElements.define("card-news", Cardnews)