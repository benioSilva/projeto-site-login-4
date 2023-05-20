function onclickLogin(){
    window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20login%20projeto%204/coreui-free-bootstrap-admin-template-main/dist/login.html"
}
var usernameId = "username"
var emailId = "email"
var passwordId = "password"
var repeatPasswordId = "repeat-password"
var btnCadastroId = "btn-cadastro"
var dadosKey = "armazemDeCadastro"

function getElementById(id) {
    return document.getElementById(id)
}

function getStorageDados() {
    const storageDados = localStorage.getItem(dadosKey)
    return JSON.parse(storageDados) || []
}

function checkValueNull() {
    if (!getElementById(usernameId).value) {
        alert("preencher campo username")
        return false
    }
    if (!getElementById(emailId).value) {
        alert("preencher campo email")
        return false
    }
    if (!getElementById(passwordId).value) {
        alert("preencher campo password")
        return false
    }
    if (!getElementById(repeatPasswordId).value) {
        alert("preencher campo repeat password")
        return false
    }
    return true
}
function checkSpace() {

    if (!getElementById(usernameId).value.trim()) {
        alert("campo username vazio")
        return false
    }
    if (!getElementById(emailId).value.trim()) {
        alert("campo email vazio")
        return false
    }
    if (!getElementById(passwordId).value.trim()) {
        alert("campo password vazio")
        return false
    }
    if (!getElementById(repeatPasswordId).value.trim()) {
        alert("campo repeat password vazio")
        return false
    }
    return true

}

function validacaoCadastro() {
    if (!checkValueNull()) {
        return
    }
    if (!checkSpace() == true) {
        return
    }
    if (getElementById(passwordId).value != getElementById(repeatPasswordId).value) {
        return alert("senhas nao conferem")

    } else if (compararUsername() == true) {
        return alert("Username ja cadastrado")

    } else {
        let dadosCadastrais = {
            username: getElementById(usernameId).value,
            email: getElementById(emailId).value,
            password: getElementById(passwordId).value,
            status: "Desativado"
        }
        const realocandoStorage = getStorageDados()
        realocandoStorage.push(dadosCadastrais)
        localStorage.setItem(dadosKey, JSON.stringify(realocandoStorage))
        getElementById(usernameId).value = ""
        getElementById(emailId).value = ""
        getElementById(passwordId).value = ""
        getElementById(repeatPasswordId).value = ""
    }
}

function compararUsername() {
    let realocandoStorage = getStorageDados()
    realocandoStorage = realocandoStorage.filter(function (element) {
        return element.username == getElementById(usernameId).value
    })
    if (realocandoStorage.length == 1) {
        if (realocandoStorage[0].username == getElementById(usernameId).value) {
            return true
        }
    }
}