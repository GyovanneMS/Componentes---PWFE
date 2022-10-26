

class card extends HTMLElement {
    constructor () {
        super();
        this.shadow  = this.attachShadow({mode:'open'});
        this.nome = 'Nome do Aluno'
        this.bgcolor = 'pink'
        this.classe = 'Nothing'
        this.image = 'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2020/04/girafa-caracteristicas-e-comportamento-da-especie-1.jpg'
    }
    static get observedAttributes() {
        return ['nome', 'bgcolor', 'classe', 'image']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue

        // if(name == 'nome'){
        //     this.nome = newValue
        // } else if (name == 'bgcolor'){
        //     this.bgcolor = newValue
        // }
    }


    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
            .card{
                width: 400px;
                height: 400px;
                background-color: ${this.bgcolor};
                display: grid;
                grid-template-rows: 20% 60% 20%;
                place-items: center;
            }
            .card__title{
                color: chocolate;
                font-size:3rem;
            }
            .card__image{
                width: 100%;
                height: 100%;
                background-image: url(${this.image});
                background-size: cover;
                backgorund-color: cyan;
                background-position: center;
            }
            .card__class{
                color: black;
            }
        `
        return style
    }

    component() {
        const card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
            <div class="card__title"> ${this.nome} </div>
            <div class="card__image"></div>
            <div class="card__class">${this.classe}</div>
        `
        return card
    }
}

customElements.define('card-aluno', card)