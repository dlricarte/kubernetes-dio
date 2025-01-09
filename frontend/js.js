$(document).ready(function () {
  $("#button-blue").on("click", function (event) {
    event.preventDefault();

    // Capturar os valores do formulário
    var txt_nome = $("#name").val();
    var txt_email = $("#email").val();
    var txt_comentario = $("#comment").val();

    // Validar se os campos estão preenchidos
    if (!txt_nome || !txt_email || !txt_comentario) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Enviar os dados via AJAX para o backend
    $.ajax({
      url: "http://localhost:30081", // Substitua pela URL do serviço PHP
      type: "POST",
      data: {
        nome: txt_nome,
        email: txt_email,
        comentario: txt_comentario,
      },
      beforeSend: function () {
        console.log("Tentando enviar os dados...");
      },
    })
      .done(function (response) {
        console.log("Resposta do servidor:", response);
        alert("Dados enviados com sucesso!");
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Erro ao enviar os dados:", textStatus, errorThrown);
        alert("Erro ao enviar os dados. Verifique o backend.");
      });
  });
});
