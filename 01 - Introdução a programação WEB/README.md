

<h1 align=center> BOOTCAMP LAUNCHBASE! </h1>

<p align=justify>Olá! Aqui serão inseridas as informações referentes aos conteúdos abordados no Bootcamp LaunchBase, tentarei ser o mais analítico possível para facilitar o entendimento dos demais. </p>
<br>
<br>
<h1 align=center> O que é programação?</h1>

 Ensinar o computador a trabalhar, passar através de algoritimos(códigos) o que ele deve fazer. Fazemos isso através das linguagens de programação, são elas:
 - Python
 - Java
 - PHP
 - JavaScript
 - Entre outras
<br>
<br>

<h1 align=center> Por que JavaScript?</h1>

 Uma linguagem que está no topo das paradas, super moderna, fácil de se inscrever e possui uma curva de aprendizado bem interessante.

## Principais pontos:
 - Linguagem moderna
 - Comunidade ativa e muito forte, grandes empresas utilizam a linguagem (Youtube, Facebook, Airbnb, entre outros)
<br>
<br>

<h1 align=center> Como programar?</h1>

 - Aprender a linguagem
 - Ter um ambiente de desenvolvimento (VS Code, Chrome, NodeJs, entre outros aplicativos)
 - Codar! (Meter a mão na massa, rsrs)
<br>
<br>

<h1 align=center> Exemplo de código em JavaScript</h1>

 const nome = 'Wellington'
 const idade = '36'

 if (idade < 99) {
return 'Fala ${nome}, você está novo para programar.'
}

// Fala Wellington, você está novo para programa
<br>
<br>



<h1 align=center> Iniciando com JavaScript</h1>

<p align=justify>Para iniciarmos, devemos criar uma pasta em nosso HD, o local e nomenclatura fica por sua conta, pode escolher. Uma vez criada, devemos fazer os seguintes passos:
- No VS Code -> File -> Open Folder, iremos então selecionar a pasta criada.
- Devemos criar um novo arquivo e colocar o nome de index.js (a extensão **.js** é de extrema importância para que o programa reconheça que é um arquivo JavaScript.)

 <p align=justify>Dentro deste arquivo, devemos nos atentar a sintaxe, a sintaxe é a forma de escrita do código, ela deve ser feita de forma correta para que o navegador possa ler essas informações e responder conforme solicitado. Então, segue exemplo de sintaxe:

 - const nome = 'Wellington'
 > const = constante, é a declaração de uma varíavel, esse valor será levado por todo o sistema, até que seja alterado manualmente.

 Para que seja mostrado alguma informação em nosso terminal, devemos usar a sintaxe:

 - console.log (nome)
 >Essa linha de código irá chamar o que está dentro da varíavel para nosso console, desta forma podemos verificar o que está dentro dela.

 Para testarmos, devemos chamar essa linha de código dentro do nosso terminal, utilizando o VS code o atalho para o terminal é **CTRL + SHIFT + '** (Atenção para não abrir vários.)

 Dentro do terminal, devemos chamar da seguinte forma: **node index.js**. Com este comando, será apresentado em tela o conteúdo da varíavel.

 Com isso já temos nossa primeira linha de código criada, já podemos afirmar que estamos **codando em JS!** (Uhuuuuu \o/)
 <br>
 <br>

<h1 align=center>Comentários, Strings e Numbers </h1>
<br>
## Comentários

 <p align=justify>Os comentários no JS ou em qualquer linguagem, serve para que possamos escrever lembretes e comentar linhas de código sem que elas apareçam na tela. (para quem está começando essa é uma boa prática, comentar cada linha para se localizar depois revendo seu código.)

 Para criarmos comentários no JS devemos fazer da seguinte forma:

 - // Comentando o código JS
 > Utilizando essas **//**, tudo que vier após entrará como comentário, e como dito, não aparecerá na tela ou no console.
<br>

## String

 String é um tipo de varíavel, ela recebe qualquer tipo de valor, texto, numero, etc. Veja exemplos de strings:

 - const aluno1 = 'Wellington'
 - const aluno2 = "Tom"
 - const aluno3 = `Rebeca`

 Podemos utilizar essas três formas, as duas primeiras são **aspas simples ou dupla**, não há diferença, entretanto, devemos nos atentar na ultima const.

 A const aluno3 está com a **Template string**, com ela podemos acrescentar outra varíavel dentro dela mesma, como por exemplo:

 - const aluno3 = `Rebeca e ${aluno1}`
 > console.log(aluno3)
 > Resultado: Rebeca e Wellington

 Perceba que, apenas utilizando a crase **``** é possível fazer isso, com as aspas não conseguimos, o resultado será:

 - const aluno1 = 'Wellington e ${aluno2}'
 > console.log (aluno1)
 > Resultado: Wellington e &{aluno2}
<br>
<br>

## Number

<p align=justify> Number também é um tipo de varíavel, porém ela recebe apenas valores numéricos, sejam eles *Inteiros (Int), ou Decimais(Float). Para declará-los, é bem simples, devemos fazer o seguinte:

 - const notaAluno1 = 9.8
 - const notaAluno2 = 10

<p align=justify> Desta forma teremos declarado dois tipo de numbers, tanto inteiro (10), quanto float (9.8)


 Para podermos saber que tipo de varíavel estamos utilizando, podemos utilizar o *typeof*, ele nos dirá qual tipo de varíavel está sendo chamada, como por exemplo:

 - console.log(typeof notaAluno1)
 > Resultado: number

 - console.log(typeof aluno1)
 > Resultado: string
<br>
<br>

<h1 align=center> Fazendo cálculos com JavaScript</h1>

 <p align=justify>Para realizarmos cálculos no JS é bem simples, devemos seguir a lógica matemática, pura e simples, sem mistério. Como podemos fazer isso? Da seguinte forma:
