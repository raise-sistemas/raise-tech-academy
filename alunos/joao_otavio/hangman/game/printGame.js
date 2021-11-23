const drawing = [`
    ┏━━┑
    ┃  │
    ┃  ╰
    ┃
    ┃
    ┃
    ┃
    ┃
    ┃
    ┃
    ┗━━━━━━━┛`, `
    ┏━━┑
    ┃  │
    ┃  ╰█
    ┃  
    ┃  
    ┃  
    ┃  
    ┃  
    ┃  
    ┃ 
    ┗━━━━━━━┛`, `
    ┏━━┑
    ┃  │
    ┃  ╰█
    ┃  ┍┻┑
    ┃   ┃ 
    ┃   ┃
    ┃  
    ┃  
    ┃  
    ┃  
    ┗━━━━━━━┛`, `
    ┏━━┑
    ┃  │
    ┃  ╰█
    ┃  ┍┻┑
    ┃  │┃
    ┃  ┘┃
    ┃  
    ┃  
    ┃  
    ┃  
    ┗━━━━━━━┛`, `
    ┏━━┑
    ┃  │
    ┃  ╰█
    ┃  ┍┻┑
    ┃  │┃│
    ┃  ┘┃└
    ┃  
    ┃  
    ┃  
    ┃  
    ┗━━━━━━━┛`, `
    ┏━━┑
    ┃  │
    ┃  ╰█
    ┃  ┍┻┑
    ┃  │┃│
    ┃  ┘┃└
    ┃  ┏┻
    ┃  ┃ 
    ┃  ┃ 
    ┃  ┗ 
    ┗━━━━━━━┛`, `
    ┏━━┑
    ┃  │
    ┃  ╰█
    ┃  ┍┻┑
    ┃  │┃│
    ┃  ┘┃└
    ┃  ┏┻┓
    ┃  ┃ ┃
    ┃  ┃ ┃
    ┃  ┗ ┗
    ┗━━━━━━━┛
    `
];

export const printGame = (word, errorsList, countErrors, message) => {
  console.clear();
  console.log("//-=-=- JOGO DA FORCA -=-=-//");
  console.log(drawing[countErrors]);
  console.log(word.join(',').replace(/,/g, ' '), '\n');
  console.log(`[${countErrors}] Erros: ${errorsList}`);
  if (message.length > 0) {
    console.log(message);
  }
}
