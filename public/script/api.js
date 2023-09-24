// Constantes do site que tem a chave da API e que armazena o que foi inserido no formulário de pesquisa ==
const apiKey = '6e588772';
const formulaPesquisa = document.getElementById("search");
// adiciona um evento "ev" a const do formulário ==========================================================
formulaPesquisa.onsubmit = (ev) => {
    ev.preventDefault();
    // Armazena o que foi escrito na barra de pesquisa e retorna uma msg se nada foi achado ===============
    const valorPesquisa = ev.target.pesquisa.value.trim();
    if (valorPesquisa == "") {
        alert('Preencha o campo!');
        return;
    }

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${valorPesquisa}`)
        .then(result => result.json())
        .then(json => carregaLista(json))
        .catch(error => console.error('Erro:', error));
}

const carregaLista = (json) => {
    const lista = document.querySelector("div#list")
    lista.innerHTML = "";

    if (json.Error) {
        console.error('Erro na resposta da API:', json.Error);
        return;
    }

    // Verifique se a resposta da API possui resultados ===================================================
    if (json.Search && json.Search.length > 0) {
        json.Search.forEach(movie => {
            let item = document.createElement("div");
            item.classList.add("col-md-4", "mb-4", "w-25");
            // Coloca os atributos dentro do HTML =========================================================
            item.innerHTML = `<div class="card" style="width: 18rem; height: 700px;">
                                <img src="${movie.Poster}" class="card-img-top img-fluid" id="card-image" style="height: 70%; object-fit: cover;" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">${movie.Title}</h5>
                                    <p class="card-text">Diretor: ${movie.Directo}</p>
                                    <p class="card-text">Ano: ${movie.Year}</p>
                                    <p class="card-text">Tipo: ${movie.Type}</p>
                                </div>
                             </div>`;
            lista.appendChild(item);
        });
    } else {
        console.log('Nenhum resultado encontrado.');
    }
}
