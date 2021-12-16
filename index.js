const readlinesync = require('readline-sync')

process.stdin.setEncoding('utf8')

function setCharset(enc) {
  process.stdin.setEncoding(enc)
}

function read(promptString) {
  write(promptString)
  let resultado = readlinesync.question()
  return resultado
}

function readNumber(promptString) {
  let resultado = null
  do {
    write(promptString)
    resultado = readlinesync.question()
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
exports.setCharset = setCharset
