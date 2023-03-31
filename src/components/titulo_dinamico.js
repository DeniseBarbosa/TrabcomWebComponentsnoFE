class tituloDinamico extends HTMLElement{
    constructor(){
        super();
        const shadow  = this.attachShadow({mode: "open"});

        //base componente <h1>Denise</h1>
        const componenteRoot = document.createElement("h2");
        componenteRoot.textContent = "Aqui é um componente shadow";
        // estilizar o componente
        const style = document.createElement("style");
        style.textContent =  `h2{ color: red;}`
        // enviar para a shadow
        shadow.appendChild(componenteRoot);
        shadow.appendChild(style);
    }
}
// é obrigatorio sempre colocar um ifem no nome
customElements.define('titulo-dinamico', tituloDinamico);