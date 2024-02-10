document.addEventListener("DOMContentLoaded", function () {
  // Obter referências aos elementos do HTML
  var messageIn = document.getElementById("messageIn");
  var messageOut = document.getElementById("messageOut");
  var criptografarButton = document.getElementById("criptografarButton");
  var descriptografarButton = document.getElementById("descriptografarButton");

  // Adicionar event listeners aos botões
  criptografarButton.addEventListener("click", function () {
    criptografar(messageIn.value);
  });

  descriptografarButton.addEventListener("click", function () {
    descriptografar(messageIn.value);
  });
});

function removerAcentos(texto) {
  var comAcentos = "áàãâéêíóôõúüç";
  var semAcentos = "aaaaeeiooouuc";
  var resultado = "";

  for (var i = 0; i < texto.length; i++) {
    var caractere = texto[i];
    var index = comAcentos.indexOf(caractere);
    if (index !== -1) {
      resultado += semAcentos[index];
    } else {
      resultado += caractere;
    }
  }

  return resultado;
}

function criptografar(textoOriginal) {
  // Converter o texto para minúsculas
  textoOriginal = textoOriginal.toLowerCase();

  // Remover caracteres especiais e acentos
  textoOriginal = removerAcentos(textoOriginal).replace(/[^a-z\s]/gi, "");

  var textoCriptografado = "";

  for (var i = 0; i < textoOriginal.length; i++) {
    var letra = textoOriginal[i];
    switch (letra) {
      case "e":
        textoCriptografado += "enter";
        break;
      case "i":
        textoCriptografado += "imes";
        break;
      case "a":
        textoCriptografado += "ai";
        break;
      case "o":
        textoCriptografado += "ober";
        break;
      case "u":
        textoCriptografado += "ufat";
        break;
      default:
        textoCriptografado += letra;
    }
  }

  messageOut.value = textoCriptografado;
}

function descriptografar(textoCriptografado) {
  // Remover caracteres especiais e acentos
  textoCriptografado = removerAcentos(textoCriptografado).replace(
    /[^a-z\s]/gi,
    ""
  );

  var textoOriginal = "";

  var partesCriptografadas = textoCriptografado.split(
    /(enter|imes|ai|ober|ufat)/
  );
  partesCriptografadas.forEach(function (part) {
    switch (part) {
      case "enter":
        textoOriginal += "e";
        break;
      case "imes":
        textoOriginal += "i";
        break;
      case "ai":
        textoOriginal += "a";
        break;
      case "ober":
        textoOriginal += "o";
        break;
      case "ufat":
        textoOriginal += "u";
        break;
      default:
        textoOriginal += part;
    }
  });

  messageOut.value = textoOriginal;
}

document.addEventListener("DOMContentLoaded", function () {
  // Obter referências aos elementos do HTML
  var limparButton = document.getElementById("limpar");
  var copiarButton = document.getElementById("copiar");
  var messageIn = document.getElementById("messageIn");
  var messageOut = document.getElementById("messageOut");

  // Adicionar event listener ao botão Limpar
  limparButton.addEventListener("click", function () {
    messageIn.value = "";
    messageOut.value = "";
  });

  // Adicionar event listener ao botão Copiar
  copiarButton.addEventListener("click", function () {
    messageOut.select();
    document.execCommand("copy");
  });
});
