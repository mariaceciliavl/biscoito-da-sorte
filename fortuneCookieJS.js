var fortuneCookie = document.getElementById("btn-cookie")
const div = document.getElementById("bloco-mensagem")
var frases = [
    "You cannot love life until you live the life you love.",
    "Today it's up to you to create the peacefulness you long for.",
    "If you have something good in your life, don't let it go!",
    "Don't hold onto things that require a tight grip.",
    "Each time you break your own boundaries to ensure thatsomeone else likes you, you like yourself a little less.",
    "Look how far you've come.",
    "Be careful who you trust.",
    "Salt and sugar look the same.",
    "Little by little, one travels far.",
    "Love all, trust a few, do wrong to none.",
    "All we have to decide is what to do with the time that is given to us.",
    "Recognize yourself in other",
    "Change comes from embracing the future, not fighting your past.",
    "Fear will always be a thing. But don't let it get in your way.",
    "Stop saying yes to things you don't want to do.",
    "Be humble and proud of yourself at the same time.",
    "Get lost in the right direction.",
    "Decide for yourself who you are. No one else gets to make that decision for you.",
    "You can't do everything by yourself. It's okay to ask for help."
]

function enviarFrase(){
    
    var fraseRandom = frases[Math.floor(Math.random() * frases.length )] ;
    div.innerHTML = fraseRandom
}

fortuneCookie.addEventListener("click", enviarFrase)


