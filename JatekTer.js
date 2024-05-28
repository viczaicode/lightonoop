import { Lampa } from "./Lampa.js"

export class JatekTer{
    #db
    #allapotLista
    #meret
    #lepes
    constructor(){
        this.#allapotLista = []
        this.#meret = 3
        this.#lepes = 0
        this.#setAllapotLista()
        this.#init()
        this.#ellenorzes()
        this.#ujJatekGomb()
    }
    #setAllapotLista(){
        this.#allapotLista = [];
        for(let i = 0; i<this.#meret*this.#meret; i++){
            if(Math.random() < .2){
                this.#allapotLista[i] = true
            }else{
                this.#allapotLista[i] = false
            }
        }
    }
    #szomszedokKeresese(id){

    }
    #init(){
        const jatekter = $("#jatekter")
        jatekter.empty();
        for(let i = 0; i<this.#allapotLista.length; i++ ){
            let elem = new Lampa(i, this.#allapotLista[i], jatekter)
        }
    }
    #ellenorzes(){
        this.#db = 0;  // Reset db counter
        for(let i = 0; i<this.#allapotLista.length; i++){
            if(this.#allapotLista[i] === true){
                this.#db++
            }
        }
        const divElem = $(".maradt")
        divElem.html(this.#db)
    }
    #ujJatekGomb(){
        $(".ujJatek").on("click", () => this.#ujJatek());
    }
    #ujJatek(){
        this.#setAllapotLista();
        this.#init();
        this.#ellenorzes();
    }
}
