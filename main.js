document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Validar nome
    var nomeInput = document.getElementById("nome");
    var nome = nomeInput.value.trim();
    var nomeRegex = /^[^\d]+$/; // Não contém números
    if (!nomeRegex.test(nome)) {
        alert("O nome não pode conter números.");
        nomeInput.focus();
        return false;
    }

    // Validar email
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        emailInput.focus();
        return false;
    }

    // Validar telefone
    var telefoneInput = document.getElementById("telefone");
    var telefone = telefoneInput.value.trim();
    var telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
        alert("Por favor, insira um número de telefone válido com DDD.");
        telefoneInput.focus();
        return false;
    }

    // Se tudo estiver válido, pode enviar o formulário
    alert("Formulário enviado com sucesso!");
    // Aqui você pode adicionar código para enviar os dados do formulário para onde desejar
});
