export const productsPattern = /<table.*?>(.*?)<\/table>/;

export const productPattern = (index) => new RegExp(String.raw`Item.*?\s${index}">(.*?)<\/tr>`);

export const qtyPattern = /Qtde.*?<\/strong>(.*?)\s*<\/span>/;

export const codePattern = /Código:\s(.*?)\)/;

export const unityPattern = /UN.*?<\/strong>(.*?)\s*<\/span>/

export const productNamePattern = /<span class="txtTit2">(.*?)<\/span>/;

export const totalAmountPattern = /<span class="valor">(.*?)<\/span>/;

export const valuePattern = /Unit.*?<\/strong>\s(.*?)\s*<\/span>/;