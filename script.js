const calculadora = new Calculadora()
calculadora.inicia()

function Calculadora () {
this.display = document.querySelector('.display')

this.inicia = function() {
    this.cliqueBotões()
    this.cliqueTeclas()
    this.cliqueNumeros()
}

this.cliqueNumeros = function () {

}
this.simbolos = ['(', ')', '+', '-', '*', '/']
this.ponto = ['.']

this.cliqueTeclas = function () {
    document.addEventListener('keydown', event => {
        const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        this.display.focus();

        const teclaPressionada = event.key;

        if (numeros.includes(teclaPressionada)) {
            this.display.value += teclaPressionada;
            simbolos = ['(', ')', '+', '-', '*', '/']
        } 
        if (this.ponto.includes(teclaPressionada)) {
            this.display.value += teclaPressionada;
            this.ponto = ['']
        } 
        if (simbolos.includes(teclaPressionada)){
            this.display.value += teclaPressionada
            simbolos = ['', '', '', '', '', '']
            this.ponto = ['.']
        }else if (event.keyCode === 8) {
            event.preventDefault(); 
            this.deletarUltimo();
        } else if (event.keyCode === 13) {
            this.resolverConta();
        }
    });
};


this.cliqueBotões = function () {
    document.addEventListener('click', event => {
        const el = event.target
        if (el.classList.contains('btn-num')){
            this.colocarNumero(el)
        }
        if (el.classList.contains('btn-sym')){
            this.colocarSimbolo(el)
        }
        if (el.classList.contains('btn-clear')){
            this.limparDisplay()
        }
        if (el.classList.contains('btn-del')){
            this.deletarUltimo()
        }
        if (el.classList.contains('btn-eq')){
            this.resolverConta()
        }
    this.display.focus()
    })
    }

this.colocarSimbolo = element => {
    if (this.simbolos.includes(element.innerHTML)) {
        this.display.value += element.innerHTML
    }
    this.simbolos = ['', '', '', '', '*', '']
}

this.colocarNumero = element => {
    this.display.value += element.innerHTML
    this.simbolos = ['(', ')', '+', '-', '*', '/']  
}

this.limparDisplay = () => {
    this.display.value = ' '
    this.simbolos = ['(', ')', '+', '-', '*', '/']
    this.ponto = ['.']
}

this.deletarUltimo = () => {
    this.display.value = this.display.value.slice(0, -1)
    this.simbolos = ['(', ')', '+', '-', '*', '/']
}

this.resolverConta = () => {
    let conta = this.display.value
    let resultado = null

    try {
        resultado = eval(conta)
    } catch (error) {
        alert("Insira uma conta válida!")
        this.limparDisplay()
        return
    }
    if (resultado !== null) {
        this.display.value = resultado
    }
    if (resultado === undefined) {
        this.display.value = 0
    }
    this.simbolos = ['(', ')', '+', '-', '*', '/']
    this.ponto = ['.']
}
}
