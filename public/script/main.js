// DARK MODE E LIGHT MODE DO SITE 

// Essa parte do código pega o checkbox do input e usa como uma forma de retirar o atributo do html "data-bs-theme" ========
// Pega o atributo e o click do checkbox e adiciona um evento + função =====================================================
document.getElementById('checkbox').addEventListener('change', function () {
    // Serve para poder usar o checkbox e ver se ele está marcado ou não sem ter que usar o "document.getElementById" ======
    var checkbox = this;
    // Essas variáveis a baixo pega o id da tag "html" para poder excluir e adicionar os atributos =========================
    var modeTheme = document.getElementById('mainTheme');
    var elemento = document.getElementById('buttonTheme')

    // Verifica se o checkbox está marcado =================================================================================
    if (checkbox.checked) {
        // Remove o atributo e pode ser vários tipo até imagens ============================================================
        modeTheme.removeAttribute('data-bs-theme');
        elemento.classList.remove('toggleDark');
    } else {
        // Se o checkbox estiver desmarcado, adiciona o atributo novamente =================================================
        modeTheme.setAttribute('data-bs-theme', 'dark');
        elemento.classList.add('toggleDark');
    }
})