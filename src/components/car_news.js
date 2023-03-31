
class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = "<h1>Ola Denise</h1>";
    }
}

customElements.define("car-news", CardNews);