const readlinesync = require('readline-sync')

exports.read = function (promptString) {
  let resultado = readlinesync.question(promptString)
  return resultado
}

exports.readNumber = function (promptString) {
  let resultado = null
  do {
    resultado = readlinesync.question(promptString)
  } while (isNaN(resultado))
  return resultado
}

exports.write = function (...message) {
  process.stdout.write(message.join(' '))
}

exports.writeln = function (...message) {
  process.stdout.write(message.join(' '))
  process.stdout.write('\n')
}

exports.overwrite = function (...message) {
  process.stdout.write(message.join(' '))
  process.stdout.write('\r')
}
