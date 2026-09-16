const botaoTema = document.getElementById('botao-tema');
const iconeTema = botaoTema.querySelector('i');
const body = document.body;

// 1. Carrega o tema salvo anteriormente
if (localStorage.getItem('tema') === 'escuro') {
    body.classList.add('dark-mode');
    iconeTema.classList.remove('fa-moon');
    iconeTema.classList.add('fa-sun');
}

// 2. Evento ao clicar no botão da lua/sol
botaoTema.addEventListener('click', (event) => {
    event.preventDefault(); // Evita a página pular para o topo ao clicar no link
    
    body.classList.toggle('dark-mode');

    // Troca o ícone e salva a preferência
    if (body.classList.contains('dark-mode')) {
        iconeTema.classList.remove('fa-moon');
        iconeTema.classList.add('fa-sun');
        localStorage.setItem('tema', 'escuro');
    } else {
        iconeTema.classList.remove('fa-sun');
        iconeTema.classList.add('fa-moon');
        localStorage.setItem('tema', 'claro');
    }
});