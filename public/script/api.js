const apiKey = '6e588772';
const formularioPesquisa = document.getElementById("search");

// A primeira linda de código define um evento  de submissão com o "onsubmit" e atribui a "ev"
formularioPesquisa.onsubmit = (ev) => {
    // Essa parte limita o site a não recarregar quando o formulário for enviado
    ev.preventDefault();
    // Pega o valor inserido dentro do campo "pesquisa" que está no HTML 
    const valorPesquisa = ev.target.pesquisa.value.trim(); //.trim() remove os espaços extras
    // Mostra se o campo de pesquisa está preenchido se não estiver mostra o erro e retorna
    if (valorPesquisa == "") {
        alert('Preencha o campo!');
        return;
    }
    //Essa primeira parte faz a solicitação para o provedor da API
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${valorPesquisa}`)
        // Converte o resultado em json 
        // A segunda linha mostra o resultado no console do inspecionar
        // Terceira linha trata possíveis erros 
        .then(result => result.json())
        .then(json => console.log(json))
        .catch(error => console.error('Erro:', error));
}
