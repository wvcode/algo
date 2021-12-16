const { read, write } = require('../index')

let nome = read('Digite o seu nome: ')

write('Olá,', nome)
