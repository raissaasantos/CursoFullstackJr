function inserir(valor){
    if(document.formulario.screen.value.length < 14){
        document.formulario.screen.value += valor
    }
}

function limparTela(){
    document.formulario.screen.value = ""
}

function deletar(){
    let expressao = document.formulario.screen.value
    document.formulario.screen.value = expressao.substring(0, expressao.length-1)
}

function calcularTotal(){
    let result = document.formulario.screen.value
    if(result){
        document.formulario.screen.value = eval(result)
    }
}