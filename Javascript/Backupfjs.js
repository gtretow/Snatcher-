const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

/* element not aplication */

/* o que o personagem tem */
let state = {};
/* function para começar o jogo */
function startGame() {
  state = {};
  showTextNode(1);
}

/* mostrar o que temos de texto */
function showTextNode(textNodeIndex) {
  /* pegar o textNode, procurar o que tem o Id certo e levar para o lugar certo */
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  /* mostra o texto */
  textElement.innerText = textNode.text;
  /* remove todos os botões, para aparecer somente os que serão utilizados */
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}
function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}
/* function para selecionar opção de escolha */
function selectOption(option) {
  const nextTextNodeId = option.nextText;
  /* casoo dê gameOver, o jogo deve reiniciar */
  if (nextTextNodeId <= 0) {
    return startGame();
  }

  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

/* onde os textos ficarão */

const textNodes = [
  {
    id: 1,
    text: "Abrace a cidade abandonada",
    options: [
      {
        text: "pegar item exemplo",
        setState: { itemexemplo: true },
        nextText: 2,
      },
      {
        text: "leave it",
        nextText: 2,
      },
    ],
  },
  /* id 2 */
  {
    id: 2,
    text: "teste parte 2",
    options: [
      {
        text: "option 1",
        requiredState: (currentState) => currentState.itemexemplo,
        setState: { itemexemplo: false },
        nextText: 3,
      },
      {
        text: "option 2",
        requiredState: (currentState) => currentState.itemexemplo,
        setState: { itemexemplo: false },
        nextText: 3,
      },
      {
        text: "option 3",
        nextText: 3,
      },
    ],
  },
  /* id 3 */
  {
    id: 3,
    text: "teste parte 3",
    options: [
      {
        text: "option 1",

        nextText: 4,
      },
      {
        text: "option 2",

        nextText: 4,
      },
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
];

startGame();
