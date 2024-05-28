export class Lampa{
    #allapot
    #id
    #divElem
    constructor(id, allapot, divElem){
        this.#id = id
        this.#allapot = allapot
        this.#divElem = divElem
        this.#megjelenit();
    }
    #megjelenit(){
        let txt = ""
        if(this.#allapot === true){
            txt += `<div id="${this.#id}" class="gombok1"></div>`
        }else{
            txt += `<div id="${this.#id}" class="gombok0"></div>`
        }
        this.#divElem.append(txt)
        this.#divElem.find(`#${this.#id}`).on("click", () => this.#kattintasTrigger());
    }
    #setAllapot(){
        this.#allapot = true;  // Csak akkor változtatjuk meg, ha sárga
        this.#szinBeallit();
    }
    #szinBeallit(){
        const elem = this.#divElem.find(`#${this.#id}`);
        if(this.#allapot){
            elem.removeClass("gombok0").addClass("gombok1");
        } else {
            elem.removeClass("gombok1").addClass("gombok0");
        }
    }
    #kattintasTrigger(){
        if(!this.#allapot){ // Csak akkor állítjuk be, ha most sárga (kikapcsolt)
            this.#setAllapot();
        }
    }
}
