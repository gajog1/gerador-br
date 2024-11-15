/**
 * Calcula o dígito verificador (DV) para um número de CNPJ.
 *
 * @param {number} dv - O valor a ser calculado.
 * @returns {number} O dígito verificador calculado.
 */
export function cnpjDV(dv) {
  const dvGen = 11 - (dv % 11);
  return (dvGen >= 10) ? 0 : dvGen;
}

/**
 * Gera um número de CNPJ aleatório.
 *
 * @param {boolean} mask - Se `true`, o CNPJ será retornado com a máscara de formatação (xx.xxx.xxx/0001-xx). Se `false`, o CNPJ será retornado apenas com os dígitos.
 * @returns {string} O CNPJ gerado.
 * @example
 * // CNPJ com máscara
 * console.log(cnpj(true)); // "12.345.678/0001-00"
 *
 * // CNPJ sem máscara
 * console.log(cnpj(false)); // "12345678000100"
 */
export function cnpj(mask) {
  let n = () => Math.round(Math.random() * 9);
  let n1 = n();
  let n2 = n();
  let n3 = n();
  let n4 = n();
  let n5 = n();
  let n6 = n();
  let n7 = n();
  let n8 = n();
  let n9 = 0;
  let n10 = 0;
  let n11 = 0;
  let n12 = 1;

  let dv1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
  dv1 = cnpjDV(dv1);

  let dv2 = dv1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
  dv2 = cnpjDV(dv2);

  let cnpjGerado = `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${dv1}${dv2}`;

  return mask ? cnpjGerado : cnpjGerado.replace(/\D/g, '');
}
