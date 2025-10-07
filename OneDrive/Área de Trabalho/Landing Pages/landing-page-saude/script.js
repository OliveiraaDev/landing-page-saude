document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;

  // Envio para WhatsApp
  const telefoneClinica = "5588999999999"; // coloque o número da clínica com DDI (55 para Brasil)
  const mensagem = `Olá, meu nome é ${nome}. Quero agendar uma consulta.%0A
📧 Email: ${email}%0A
📱 Telefone: ${telefone}%0A
🏠 Endereço: ${endereco}`;
  
  window.open(`https://wa.me/${telefoneClinica}?text=${mensagem}`, "_blank");

  // Envio para e-mail usando FormSubmit
  fetch("https://formsubmit.co/ajax/SEU_EMAIL_AQUI", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, telefone, endereco })
  });

  document.getElementById("msg-sucesso").innerText = "Mensagem enviada com sucesso!";
  document.getElementById("form-contato").reset();
});
