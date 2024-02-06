// array de perguntas sobre Demon Slayer
const perguntas = [
  // pergunta 0
  {
    pergunta: "Qual é o nome do protagonista de Demon Slayer?",
    respostas: ["Tanjiro Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"],
    correta: 0,
  },
  // pergunta 1
  {
    pergunta: "Qual é o nome da irmã de Tanjiro, que se transforma em demônio?",
    respostas: ["Nezuko Kamado", "Kanao Tsuyuri", "Shinobu Kocho"],
    correta: 0,
  },
  // pergunta 2
  {
    pergunta: "Qual é a respiração principal de Tanjiro?",
    respostas: [
      "Respiração da Água",
      "Respiração do Fogo",
      "Respiração do Trovão",
    ],
    correta: 0,
  },
  // pergunta 3
  {
    pergunta: "Quem é o Hashira das Serpentes em Demon Slayer?",
    respostas: ["Mitsuri Kanroji", "Muichiro Tokito", "Tengen Uzui"],
    correta: 2,
  },
  // pergunta 4
  {
    pergunta: "Qual é a arma principal de Zenitsu Agatsuma?",
    respostas: ["Katana", "Espada Nichirin", "Espada Eletrificada"],
    correta: 2,
  },
  // pergunta 5
  {
    pergunta: "O que representa a marca na testa de Tanjiro?",
    respostas: ["Marca de Demônio", "Marca de Proteção", "Marca de Respiração"],
    correta: 2,
  },
  // pergunta 6
  {
    pergunta: "Quem é o Hashira das Borboletas em Demon Slayer?",
    respostas: ["Shinobu Kocho", "Kanao Tsuyuri", "Mitsuri Kanroji"],
    correta: 0,
  },
  // pergunta 7
  {
    pergunta: "Qual é o nome do mentor de Tanjiro, que é um Hashira?",
    respostas: ["Giyu Tomioka", "Kyojuro Rengoku", "Sanemi Shinazugawa"],
    correta: 0,
  },
  // pergunta 8
  {
    pergunta: "Qual é o nome da técnica de respiração de Inosuke Hashibira?",
    respostas: [
      "Respiração da Besta",
      "Respiração do Trovão",
      "Respiração do Fogo",
    ],
    correta: 0,
  },
  // pergunta 9
  {
    pergunta: "Quem é o Hashira das Chamas em Demon Slayer?",
    respostas: ["Sanemi Shinazugawa", "Gyomei Himejima", "Kyojuro Rengoku"],
    correta: 2,
  },
];

// selecionando elementos html
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

// laço de repetição para criar o quiz dinamicamente a partir do js
for (const item of perguntas) {
  // para cada item de perguntas
  const quizItem = template.content.cloneNode(true); // irá clonar cada item (filhos) do nó principal (<template>) --> copia
  quizItem.querySelector("h3").textContent = item.pergunta; // mostrando cada pergunta na tela

  for (let reposta of item.respostas) {
    // atribuindo a resposta cada item do sub array de respostas
    const dt = quizItem.querySelector("dl dt").cloneNode(true); // clonando os nós de <dt>
    dt.querySelector("span").textContent = reposta;

    quizItem.querySelector("dl").appendChild(dt); // mostrando cada resposta da pergunta --> mostrando cada reposta do array[item]
  }
  quizItem.querySelector("dl dt").remove(); // removendo primeiro item do quiz --> modelo de resposta usado ('Resposta A')

  quiz.appendChild(quizItem);
}
