const form = document.getElementById('formulario-agenda');
const nomeContatos = [];
const telContatos = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
})

function atualizaAgenda(){
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}

function adicionaContato(){
    const nomeContato = document.getElementById('nome-contato');
    const telefoneContato = document.getElementById('telefone-contato');

    if(telContatos.includes (telefoneContato.value)){
        alert(`O número ${telefoneContato} já está na sua lista.`);
    }else{
        nomeContatos.push = nomeContato.value;
        telContatos.push = telefoneContato.value;

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telefoneContato.value}</td>`;
        linha += `</tr>`;

        linhas +=linha;
    }

    nomeContato.value = '';
    telefoneContato.value = '';
}