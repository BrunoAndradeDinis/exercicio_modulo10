$(document).ready(function () { // ajustes iniciais
    // ajuste no carrossel
  $("#carousel-imagens").slick({
    autoplay: true,
    autoplaySpeed: 1500,
  });
  // mascaras
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(DDD) 12345-6789",
  });

  $("#cpf").mask("000.000.000-00", {
    placeholder: "123.456.789-00",
  });

  $("#cep").mask("00000-000", {
    placeholder: "012345-678",
  });
  // validações
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
      cpf: {
        required: true,
      },
    },
    messages: {
        nome: 'Informe o seu Nome!',
        email: 'Informe o seu Email',
        telefone: 'Informe o seu Telefone',
        cpf: 'Informe o seu CPF',
        endereco: 'Informe seu endereço',
        cep: 'Informe o seu CEP'
      },
    submitHandler: function (form) {
      alert(
        "Sua requisição foi enviada para análise, parabéns pela aquisição!"
      );
      form.reset();
    },
    invalidHandler: function (form, validator) {
      alert("Por favor, preencha os campos para prosseguir com a compra!");
    },
  });
});
