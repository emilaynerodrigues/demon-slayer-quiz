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
    respostas: ["Mitsuri Kanroji", "Muichiro Tokito", "Obanai Iguro"],
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

const corretas = new Set(); //irá guardar a quantidade de repostas corretas
const totalDePerguntas = perguntas.length; //verificando tamanho do array de perguntas, ou seja, quantos item existem no array
const mostrarTotal = document.querySelector("#acertos span"); //selecionando o span
//iniciando mudança de dados do span mostrarTotal de acordo com numero de repostas corretas
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas; 

// laço de repetição para criar o quiz dinamicamente a partir do js
for (const item of perguntas) {
  // para cada item de perguntas
  const quizItem = template.content.cloneNode(true); // irá clonar cada item (filhos) do nó principal (<template>) --> copia
  quizItem.querySelector("h3").textContent = item.pergunta; // mostrando cada pergunta na tela

  for (let resposta of item.respostas) {
    // atribuindo a resposta cada item do sub array de respostas
    const dt = quizItem.querySelector("dl dt").cloneNode(true); // clonando os nós de <dt>
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    ); //vai atribuir o valor da proprodade "name" dentro do html se acordo com o index de cada pergunta, para facilitar a busca pela reposta
    dt.querySelector("input").value = item.respostas.indexOf(resposta); //vai setar a valor atribuido a cada reposta de acordo como seu index;

    //verificando se a reposta é a correta
    // --> verificando se houve alguma mudança nos inputs quando o usuario selecionar algum input de reposta
    dt.querySelector("input").onchange = (event) => {
      //verifica se a reposta selecionada está correta, comparando os valores da resposta selecionada com o reposta correta do array de perguntas (item of respostas) atraves de seus indexes
      const estaCorreta = event.target.value == item.correta;

      //caso usuario clique em uma reposta errada, será subtraido do resultado, ou seja, se o usuario responder a resposta correta e mudar de opção, será retirado o item do set() corretas
      corretas.delete(item);
      //se a reposta estiver correta, o programa seguirá
      if (estaCorreta) {
        //se usuario selecionar resposta correta será adicionado a contagem de repostas corretas -- o item será adicionado ao Set()
        corretas.add(item);
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas; //mudando dados do span mostrarTotal de acordo com numero de repostas corretas apos usuario selecionar repostas
    };
    quizItem.querySelector("dl").appendChild(dt); // mostrando cada resposta da pergunta --> mostrando cada reposta do array[item] -- adicionando filhos
  }
  quizItem.querySelector("dl dt").remove(); // removendo primeiro item do quiz --> modelo de resposta usado ('Resposta A')

  quiz.appendChild(quizItem);
}
