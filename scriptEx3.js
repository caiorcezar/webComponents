class ContadorElement extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        let contador = 0;

        const spanEl = document.createElement('span');
        spanEl.textContent= contador;

        const divEl = document.createElement('div')

        const incrementEl = document.createElement('button');
        incrementEl.textContent='Incrementar';
        incrementEl.addEventListener('click', () =>{
            contador++;
            spanEl.textContent = contador;
        })
        
        const decrementEl = document.createElement('button');
        decrementEl.textContent='Decrementar';
        decrementEl.addEventListener('click', () =>{
            contador--;
            spanEl.textContent = contador;
        });

        divEl.append(incrementEl, decrementEl)

        const linkEl = document.createElement('link');
        linkEl.setAttribute('href', 'estilosEx3.css');
        linkEl.setAttribute('rel', 'stylesheet');

        this.shadowRoot.append(linkEl, spanEl, divEl);
    }
}

customElements.define('meu-contador', ContadorElement);