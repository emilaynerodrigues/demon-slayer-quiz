// array de perguntas
const perguntas = [
  // pergunta 0
  {
    pergunta: "Qual é a função principal do JavaScript?",
    respostas: [
      "Manipular o design da página",
      "Controlar o comportamento da página",
      "Armazenar dados no servidor",
    ],
    correta: 1,
  },
  // pergunta 1
  {
    pergunta:
      "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    respostas: ["var", "variable", "vrb"],
    correta: 0,
  },
  // pergunta 2
  {
    pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
    respostas: ["Array", "Object", "Number"],
    correta: 2,
  },
  // pergunta 3
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um objeto",
      "Um bloco de construção fundamental",
      "Um comentário",
    ],
    correta: 1,
  },
  // pergunta 4
  {
    pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
    respostas: ["+", "*", "-"],
    correta: 0,
  },
  // pergunta 5
  {
    pergunta: "O que é um loop 'for' usado para?",
    respostas: [
      "Criar condições",
      "Executar um bloco de código repetidamente",
      "Definir funções",
    ],
    correta: 1,
  },
  // pergunta 6
  {
    pergunta:
      "Qual método é usado para adicionar um elemento ao final de um array?",
    respostas: ["push()", "append()", "addToEnd()"],
    correta: 0,
  },
  // pergunta 7
  {
    pergunta: "O que é 'NaN' em JavaScript?",
    respostas: ["Não é nada", "Número negativo", "Not a Number"],
    correta: 2,
  },
  // pergunta 8
  {
    pergunta: "O que é 'DOM' em JavaScript?",
    respostas: [
      "Diretório de Operações Móveis",
      "Documento de Objeto Móvel",
      "Modelo de Objeto de Documento",
    ],
    correta: 2,
  },
  // pergunta 9
  {
    pergunta:
      "Qual é o método usado para imprimir algo no console em JavaScript?",
    respostas: ["console.out()", "log.print()", "console.log()"],
    correta: 2,
  },
];

//selecionando elementos html
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

// laço de repetição para criar o quiz dinamicamente a partir do js
for (const item of perguntas) {
  //para cada item de perguntas
  const quizItem = template.content.cloneNode(true); //irá clonar cada item (filhos) do nó principal (<template>) --> copia
  quizItem.querySelector("h3").textContent = item.pergunta; //mostrando cada pergunta na tela

  for (let reposta of item.respostas) {
    //atribuindo a resposta cada item do sub array de respostas
    const dt = quizItem.querySelector("dl dt").cloneNode(true); //clocando os nós de <dt>
    dt.querySelector("span").textContent = reposta;

    quizItem.querySelector("dl").appendChild(dt); //mostrando cada resposta da pergunta --> mostrando cada reposta do array[item]
  }
  quizItem.querySelector("dl dt").remove(); // removendo primeiro item do quiz --> modelo de resposta usado ('Resposta A')

  quiz.appendChild(quizItem);
}
