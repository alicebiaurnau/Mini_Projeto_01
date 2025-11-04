function adicionar() {
    const notaTexto = document.getElementById('nota').value.trim();
    if (!notaTexto) {
        alert('Digite uma nota!');
        return;
    }
    const urgente = document.querySelector('input[name="urgente"]:checked').value;

    const listaId = urgente === 'urgente' ? 'lista_urgente' : 'lista_nao_urgente';

    const lista = document.getElementById(listaId);

    const li = document.createElement('li');

    li.textContent = notaTexto;

    const cores = ['cor-azul', 'cor-verde', 'cor-roxo'];

    li.classList.add(cores[contadorCor % 3]);

    contadorCor++;

    li.classList.add(urgente);

    const btnRemover = document.createElement('button');

    btnRemover.textContent = 'Remover';

    btnRemover.onclick = () => li.remove();

    li.appendChild(btnRemover);

    lista.appendChild(li);
    
    document.getElementById('nota').value = '';
}
function apagarTudo() {
    document.getElementById('lista_nao_urgente').innerHTML = '';
    document.getElementById('lista_urgente').innerHTML = '';
    contadorCor = 0; 
}