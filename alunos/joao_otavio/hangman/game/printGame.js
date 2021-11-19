const desenho = [`
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

export const printGame = (word, errorsList, countErrors) => {
  console.log(desenho[countErrors]);
  console.log(word.join(',').replace(/,/g, ' '), '\n');
  console.log(`[${countErrors}] Erros: ${errorsList}`);
}
