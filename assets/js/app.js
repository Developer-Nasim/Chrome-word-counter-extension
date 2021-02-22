"use strict"
class Init{
    constructor(){ 
        this.subtn  = document.querySelector('button')

        this.subtn.addEventListener('click', this.Result)
        window.addEventListener('keyup', this.Result)
    }
    Result(){
        this.char   = document.querySelector('.char b')
        this.word   = document.querySelector('.words b')
        this.spaces = document.querySelector('.spaces b')
        this.all    = document.querySelector('.all b')
        this.input  = document.querySelector('textarea')
        this.vl     = this.input.value
        this.allprg = this.vl;


        this.char.innerHTML   = this.allprg.replace(/ /g,"").length
        this.spaces.innerHTML = this.allprg.replace(/[a-z]/gi,"").length
        this.all.innerHTML    = this.vl.length

        this.resultArray      = []
        this.str = this.vl.replace(/[\t\n\r\.\?\!]/gm,' ');
        this.wordArray = this.str.split(" ");

        this.wordArray.forEach(el => {
            this.itm = el.trim();
            if (this.itm.length > 0) {
                this.resultArray.push(this.item);
            }
        });
 
        this.word.innerHTML      = this.resultArray.length

    


    }

}
new Init()