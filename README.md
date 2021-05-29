# ALGO

ALGO é um módulo javascript que se destina ao ensino de algoritmos, provendo as funcionalidades básicas de leitura e escrita de valores (read e write) de maneira similar a outras linguagens de programação.

## Motivos para usar ALGO

A linguagem Javascript em toda a sua versatilidade e poder, torna algumas tarefas mais simples - como ler valores do teclado ou escrever rapidamente valores na tela - um pouco complicadas demais para quem está iniciando na programação e não tem nenhum conhecimento da área.

Tendo como objetivo suavizar os passos iniciais em programação, aproximando Javascript de outras linguagens, criamos o ALGO, que é um conjunto de pequenas funções utilitárias para lidar com entrada e saída de dados.

## Porque não usar outra linguagem???

O principal motivo para ensinarmos programação com Javascript é para garantir que os alunos terão, desde o início de seus cursos, contato com uma das linguagens de programação mais usadas no mercado de trabalho. Pascal, C, Java são linguagens muito populares para o ensino de programação, mas são estruturadas demais, ou não tão usadas no mercado. Python seria outra alternativa, mas alguns aspectos do seu estilo de programação podem causar problemas para os iniciantes na área.

Javascript surge como uma alternativa excelente, pois requer pouca estruturação para criar um programa, focando o aluno no aprendizado dos conceitos de programação e não se criou a classe, a função main, se é void ou não. E o grande trunfo é que pode rodar inclusive no browser.

## Vamos a prática!!!

Para utilizar o módulo ALGO é muito simples:

- Se você não tem node ainda em seu computador, instale-o agora: [instalar o node](https://nodejs.org/pt-br/)
- Se já tem o node instalado, agora só precisa instalar o módulo. Para isso, abra um prompt de MSDOS (no Windows) ou um terminal (linux ou mac). É aquela telinha geralmente preta que tem uma linha mais ou menos assim:
  ```cmd
  c:\Users\<Nome do Usuario>\ _
  ```
- Nesta tela, você irá digitar o seguinte comando:
  ```cmd
  npm install -g @wvcode/algo
  ```
- Pronto! tudo instalado. Agora vá para próxima seção e veja como criar o seu primeiro algoritmo!

## Criando o seu primeiro algoritmo!!!

Criar o seu primeiro algoritmo em Javascript é muito simples! É só seguir os passos abaixo:

- Abra novamente um prompt de comando
- Crie uma nova pasta, utilizando o comando `mkdir <nome da pasta>`
- Entre na pasta com o comando `cd <nome da pasta>`
- Crie um arquivo chamado hello.js com o comando `echo > hello.js`
- Agora, edite o conteúdo do arquivo com o comando `notepad hello.js`
- Copie o seguinte conteúdo na janela do notepad:

```javascript
const algo = require('@wvcode/algo')

algo.write('Hello, World!!!')
```

- Salve o conteudo do arquivo e feche o notepad
- De volta ao prompt de comando, digite o comando `node hello.js` e você deve ver o seguinte resultado:

```cmd
C:\users\<nome usuario>\<nome da pasta>\node hello.js

Hello, World!

```

Pronto! Você escreveu o seu primeiro algoritmo em Javascript!!!

Agora é só continuar praticando!!!

**Bom código!!!**

### Autoria:

- Vanessa Stangherlin
- Walter Ritzel
