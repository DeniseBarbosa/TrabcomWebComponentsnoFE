class tituloDinamico extends HTMLElement{
    constructor(){
        super();
        const shadow  = this.attachShadow({mode: "open"});

        //base componente 
        const componenteRoot = document.createElement("h1");
        // prop
        componenteRoot.textContent = this.getAttribute("titulo");
        // estilizar o componente
        const style = document.createElement("style");
        style.textContent =  `h1{ color: red;}`
        // enviar para a shadow
        shadow.appendChild(componenteRoot);
        shadow.appendChild(style);
    }
}
// é obrigatorio sempre colocar um ifem no nome
customElements.define("titulo-dinamico", tituloDinamico);