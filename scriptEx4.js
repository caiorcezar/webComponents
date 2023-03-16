class MeuRologio extends HTMLElement{
    constructor(){
        super();

        console.log('constructor')
        this.attachShadow({mode:'open'});
        this.spanEl = document.createElement('span');
        this.spanEl.textContent = getHMS();
        this.shadowRoot.append(this.spanEl);
    }
    connectedCallback(){
        this.timer = setInterval(() =>{
            this.spanEl.textContent=getHMS();
            console.log('setInterval executou!')
        }, 1000)
    }
    disconnectedCallback(){
        clearInterval(this.timer);
    }
}

function getHMS(){
    const dh = new Date();
    const h = formatNumber(dh.getHours());
    const m = formatNumber(dh.getMinutes());
    const s = formatNumber(dh.getSeconds());
    return `${h}:${m}:${s}`;
}

function formatNumber(n){
    return String(n).padStart(2, '0')
}

customElements.define('meu-relogio', MeuRologio)