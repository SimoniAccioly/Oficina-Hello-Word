
let input = document.querySelector("input")
let texto = document.querySelector("h2")
let botao = document.querySelector("button")


function cliquei(){
   event.preventDefault()
   texto.innerHTML = input.value     
    
}
