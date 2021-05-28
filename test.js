const { read, overwrite } = require('./index')

var n1 = parseInt(read('Digite um numero: '))
var n2 = parseInt(read('Digite outro numero: '))

for (var i = 0; i < n1; i++) {
  overwrite(i)
}
