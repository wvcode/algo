const readlinesync = require('readline-sync')

function read(promptString) {
  let resultado = readlinesync.question(promptString)
  return resultado
}

function readNumber(promptString) {
  let resultado = null
  do {
    resultado = readlinesync.question(promptString)
  } while (isNaN(resultado))
  return resultado
}

function write(...message) {
  process.stdout.write(message.join(' '))
}

function writeln(...message) {
  process.stdout.write(message.join(' '))
  process.stdout.write('\n')
}

function overwrite(...message) {
  process.stdout.write(message.join(' '))
  process.stdout.write('\r')
}

exports.read = read
exports.readNumber = readNumber
exports.write = write
exports.writeln = writeln
exports.overwrite = overwrite
