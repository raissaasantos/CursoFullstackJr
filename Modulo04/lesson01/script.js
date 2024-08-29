const conteudos = [
    [
        "JavaScript is not that bad",
        "Iceland is cool",
        "I can speak english"
    ],
    [
        "Scotland reminds me of castles",
        "Italy reminds me of pizza",
        "Norway reminds me of Chris"
    ],
    [
        "Germany reminds me of Maxton Hall",
        "I am learning German",
        "I learned some Norsk words"
    ]
]

const btnTab1 = document.getElementById('btn-tab1')
const btnTab2 = document.getElementById('btn-tab2')
const btnTab3 = document.getElementById('btn-tab3')
const content = document.getElementById('content')

function displayContent(itens){
    let listaConteudo = ""
    for(const item of itens){
        listaConteudo += `<li>${item}</li>`
    }
    const lista = document.createElement('ul')
    content.innerHTML = listaConteudo
    content.append(lista)
}

function activateButton(btn){
    btnTab1.className = ""
    btnTab2.className = ""
    btnTab3.className = ""
    btn.className = 'active'
}

function handleClick(event){
    const btnId = event.target.id 
    activateButton(event.target)

    if (btnId === "btntab1"){
        displayContent(conteudos[0])
    }
    else if (btnId === "btn-tab2"){
        displayContent(conteudos[1])
    }
    else {
        displayContent(conteudos[2])
    }
}

displayContent(conteudos[0])


btnTab1.addEventListener("click", handleClick)
btnTab2.addEventListener("click", handleClick)
btnTab3.addEventListener("click", handleClick)