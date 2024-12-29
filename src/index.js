function validarCartaoCredito(numeroCartao) {
  const bandeiras = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  };

  for (let bandeira in bandeiras) {
    if (bandeiras[bandeira].test(numeroCartao)) {
      return bandeira;
    }
  }

  return "Bandeira desconhecida";
}

// Exemplo de uso
const numeroCartao = "5111111111111111";
const bandeira = validarCartaoCredito(numeroCartao);
console.log(`A bandeira do cartão é: ${bandeira}`);
