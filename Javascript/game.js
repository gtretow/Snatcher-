const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");
const images = document.getElementById("background");
const gamelogo = document.getElementById("imglogo");
const gamestart = document.getElementById("game");
const music = document.getElementById("audio");

/* element not aplication */

/* o que o personagem tem, caso seja usado */
let state = [];
/* function para começar o jogo */
function startGame() {
  state = [];
  /*   music.play(); */
  showTextNode(1);
}

/* mostrar o que temos de texto */
function showTextNode(textNodeIndex) {
  /* pegar o textNode, procurar o que tem o Id certo e levar para o lugar certo */
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  /* img.src = textNode.img; */
  if (textNode.img) {
    images.style.visibility = "visible";
    images.src = textNode.img;
    console.log(textNode);
  }
  if (!textNode.img) {
    images.style.visibility = "hidden";
    images.src = "";
  }
  if (textNode.msc) {
    music.src = textNode.msc;
  }
  if (!textNode.msc) {
    music.src = "";
  }

  /*  images.appendChild(img); */
  /* mostra o texto */
  textElement.innerText = textNode.text;
  /* remove todos os botões, para aparecer somente os que serão utilizados */
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
  /* checar se é possível mostrar o node */
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
  /* mostrar opções caso tenha itens necessários */
  return option.requiredState == null || option.requiredState(state);
}
/* function para selecionar opção de escolha */
function selectOption(option) {
  const nextTextNodeId = option.nextText;
  /* casoo dê gameOver, o jogo deve reiniciar */
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  /* pega itens e faz a troca */
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}
/* sfx tela inicial */
const gunshot = new Audio();
gunshot.src = "./sounds/gunshot.wav";
gunshot.volume = 0.7;

/*clicar na imagem e remover o resto */
document.getElementById("imglogo").addEventListener("click", () => {
  gamelogo.style.display = "none";
  gamestart.style.display = "block";
  // music.pause();

  gunshot.play();
});

startGame();
