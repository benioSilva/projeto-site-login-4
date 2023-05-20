function onclickRegister(){
    window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20login%20projeto%204/coreui-free-bootstrap-admin-template-main/dist/register.html"
}

var usernameLoginId = "username-login"
var passwordLoginId = "password-login"
var dadosKey = "armazemDeCadastro"

function getElementById(id) {
    return document.getElementById(id)
}

function getStorageDados() {
    const storageDados = localStorage.getItem(dadosKey)
    return JSON.parse(storageDados) || []
}

function checkValueNull(){
    if(!getElementById(usernameLoginId).value){
        alert("preencher campo username")
        return false
    }
    if(!getElementById(passwordLoginId).value){
        alert("preencher campo password")
        return false
    }
    return true
}

function login(){
    if(!checkValueNull()){
        return
    }
    analisarDados()
}

function analisarDados(){
    let realocandoStorage = getStorageDados()
    realocandoStorage = realocandoStorage.filter(function(element){
        console.log(element)
        return element.username == getElementById(usernameLoginId).value
    })
    if(realocandoStorage.length == 1){
        if(realocandoStorage[0].password == getElementById(passwordLoginId).value){
            window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20login%20projeto%204/coreui-free-bootstrap-admin-template-main/dist/base/tables.html" 
            return
        }
    }
    alert("Usuario ou senha não confere")
    getElementById(usernameLoginId).value = ""
    getElementById(passwordLoginId).value = ""
}