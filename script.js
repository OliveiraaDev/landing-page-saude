// Validação simples do formulário
const form = document.getElementById("form-contato");
const msgSucesso = document.getElementById("msg-sucesso");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  if (nome && email && telefone) {
    msgSucesso.style.display = "block";
    msgSucesso.textContent = "✅ Obrigado! Sua consulta foi solicitada com sucesso.";
    form.reset();
  } else {
    msgSucesso.style.display = "block";
    msgSucesso.style.color = "red";
    msgSucesso.textContent = "⚠️ Por favor, preencha todos os campos.";
  }
});
