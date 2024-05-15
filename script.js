document.addEventListener('DOMContentLoaded', function() {
    let login = document.querySelector('.login');
    let create = document.querySelector('.create');
    let container = document.querySelector('.container');

    login.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar comportamento padrão do link
        window.location.href = "login.html"; // Redirecionar para a página de login
    });

    create.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar comportamento padrão do link
        
        // Adicionar classe de animação de carregamento
        container.classList.add('loading');

        // Simular um tempo de espera (3 segundos) para a criação da conta
        setTimeout(function() {
            // Remover classe de animação de carregamento
            container.classList.remove('loading');
            
            // Mostrar mensagem de conta criada com sucesso
            alert('Conta criada com sucesso!');
        }, 3000);
    });
});
