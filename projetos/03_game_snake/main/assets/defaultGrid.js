// primeiro quadrado da primeira linha = emptyGrid[29]
// último quadrado da primeira linha = emptyGrid[40]
// primeiro quadrado da segunda linha = emptyGrid[44]
// último quadrado da segunda linha = emptyGrid[55]
// linha = início da linha -- ATÉ -- início da linha + 11
//
// 8 linhas e 12 colunas
// Linhas:
// 1 - 29 - 40
// 2 - 44 - 55
// 3 - 59 - 70
// 4 - 74 - 85
// 5 - 89 - 100
// 6 - 104 - 115
// 7 - 119 - 130
// 8 - 134 - 145

export const gridFromLeft = `
╔════════════════════════╗
║🐰⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
╚════════════════════════╝
`

export const gridFromRight = `
╔════════════════════════╗
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🐰║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
╚════════════════════════╝
`

export const gridFromBottom = `
╔════════════════════════╗
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║🐰⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
╚════════════════════════╝
`
export const emptyGrid = `
╔════════════════════════╗
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
╚════════════════════════╝
`

export const gridTest = `
╔════════════════════════╗
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║🐰⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║🥕⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
╚════════════════════════╝
`
export const carrotTest = `
╔════════════════════════╗
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛🥕⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
║⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛║
╚════════════════════════╝
`
