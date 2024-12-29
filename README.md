# Validador de Cartão de Crédito

Este projeto contém uma função JavaScript que valida números de cartões de crédito e identifica a bandeira do cartão com base no número fornecido.

## Funcionalidade

A função `validarCartaoCredito` recebe um número de cartão de crédito como argumento e retorna a bandeira do cartão se o número corresponder a um dos padrões conhecidos. Caso contrário, retorna "Bandeira desconhecida".

### Estrutura da Função

A função `validarCartaoCredito` utiliza expressões regulares para verificar se o número do cartão corresponde a uma das bandeiras conhecidas:

- **Visa**: /^4[0-9]{12}(?:[0-9]{3})?$/
- **Mastercard**: /^5[1-5][0-9]{14}$/
- **American Express (Amex)**: /^3[47][0-9]{13}$/
- **Discover**: /^6(?:011|5[0-9]{2})[0-9]{12}$/
- **Diners Club**: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
- **JCB**: /^(?:2131|1800|35\d{3})\d{11}$/

### Exemplo de Uso

```javascript
const numeroCartao = "5111111111111111";
const bandeira = validarCartaoCredito(numeroCartao);
console.log(`A bandeira do cartão é: ${bandeira}`);
```
