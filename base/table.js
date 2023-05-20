var preencherListaId = "preencher-lista"
var dadosKey = "armazemDeCadastro"

function getElementById(id) {
    return document.getElementById(id)
}

function getStorageDados() {
    const storageDados = localStorage.getItem(dadosKey)
    return JSON.parse(storageDados) || []
}
preencherDadosCadastrados()
function preencherDadosCadastrados() {
    getElementById(preencherListaId).innerHTML = ""
    getStorageDados().forEach(function (element, index) {
        getElementById(preencherListaId).innerHTML += '<tr>' +
            '<th scope="row">' + (index + 1) + '</th>' +
            '<td>' + element.username + '</td>' +
            '<td>' + element.email + '</td>' +
            '<td>' + element.status + '</td>' +
            '<td><button class="btn btn-warning rounded-0" onclick="onclickTrocaStaus(' + index + ')">Trocar Status</button></td>' +
            '<td><button class="btn btn-danger rounded-0" onclick="onclickExcluir(' + index + ')">Excluir</button></td>' +
            '</tr>'
    });
}

function onclickTrocaStaus(index) {
    const realocStorage = getStorageDados()
    if (realocStorage[index].status == "Desativado") {
        realocStorage[index].status = "Ativado"
    } else {
        realocStorage[index].status = "Desativado"
    }
    localStorage.setItem(dadosKey, JSON.stringify(realocStorage))
    preencherDadosCadastrados()
}

function onclickExcluir(paramIndex) {
    let realocStorage = getStorageDados()
    realocStorage = realocStorage.filter(function (element, index) {
        return paramIndex != index
    })
    localStorage.setItem(dadosKey, JSON.stringify(realocStorage))
    preencherDadosCadastrados()
}