const textNodes = [
  {
    id: 1,
    img: "./Imagens/cidade1.gif",
    msc: "./sounds/chuva.mp3",

    text: "Cidade de Astra. Data: 24.07.20xx Horário: 22:47",

    options: [
      {
        text: "Continuar",
        nextText: 2,
      },
    ],
  },
  /* id 2 */
  {
    id: 2,

    img: "./Imagens/cityfront.gif",
    msc: "./sounds/chuva.mp3",

    text:
      "Mais um dia onde suas noites terminam em um bar. Acontece que não importa o que aconteça, todo esforço é inútil quando se vive em uma cidade que já desistiu de lutar.",

    options: [
      {
        text: "Continuar",
        nextText: 3,
      },
    ],
  },
  /* id 3 */
  {
    id: 3,

    img: "./Imagens/bar2.gif",
    msc: "./sounds/bar.mp3",
    text:
      "Dessa vez você foi informado que deveria abandonar mais um caso. O motivo? Você estava chegando perto de desmascarar uma das famílias mais ricas da cidade. Tanto esforço para nada. Você está no “Bueiro”, bar localizado no “fim do mundo”. Local conhecido por ser um dos pontos de informação mais confiáveis da cidade.",
    options: [
      {
        text: "Continuar",

        nextText: 4,
      },
    ],
  },
  /* id 4 */
  {
    id: 4,
    img: "./Imagens/bar2.gif",
    msc: "./sounds/bar2.mp3",
    text:
      "Você balança a cabeça e pensa se realmente vale a pena continuar usando um distintivo. Em uma cidade perdida como Astra, você acha que estaria melhor vivendo como pescador ao Sul do país.",

    options: [
      {
        text: "Escolher beber Whisky",
        nextText: 5,
      },
      {
        text: "Escolher beber Vodka",
        nextText: 5,
      },
    ],
  },
  /* id 5 */
  {
    id: 5,
    img: "./Imagens/bar2.gif",
    msc: "./sounds/bar.mp3",
    text:
      "Após uma garrafa de sua bebida favorita você nota que uma briga está prestes a acontecer no bar. O dono do bar é um idiota, mas você deve uma a ele. Talvez seja a hora de pagar? Embora você ache que não valha a pena se meter no meio de três possíveis membros de gangue.",

    options: [
      {
        text: "Brigar",
        nextText: 46,
      },
      {
        text: "Deixar para lá",
        nextText: 6,
      },
    ],
  },

  {
    id: 6,
    img: "./Imagens/bar2.gif",
    msc: "./sounds/bar2.mp3",
    text:
      "Você se diverte assistindo amadores brigarem como crianças. Eles estão tão bêbados que nem ao menos seriam capazes de notarem a própria morte. Você abandona o bar e vai em busca de uma maneira de voltar para casa. Tanto tempo infiltrado no mundo do crime acabou te levando mais longe do que deveria. ",

    options: [
      {
        text: "Continuar",
        nextText: 7,
      },
    ],
  },

  {
    id: 7,
    img: "./Imagens/escolhas.gif",
    msc: "./sounds/andandochuva.mp3",
    text:
      "As ruas são escuras e parecem um labirinto. De alguma maneira você encontrou uma bifurcação entre as vielas da cidade para sair da zona do bar e precisa escolher para onde seguir",

    options: [
      {
        text: "Escolher esquerda",
        nextText: 8,
      },
      {
        text: "Escolher direita",
        nextText: 125,
      },
    ],
  },

  {
    id: 8,

    msc: "./sounds/andandochuva.mp3",

    text:
      "Ruas sujas, poucas luz e animais estranhos que um dia foram conhecidos como cachorros. Você encontra uma garagem a céu aberto e decide pular a grade. Na esperança de encontrar um amigo policial, um táxi, ou até mesmo um ladrão de carros que possa te dar uma carona. Que diferença faz? Provavelmente seria um plano entre o ladrão e o dono do carro para ganhar dinheiro com seguro.",
    msc: "./sounds/andandochuva.mp3",
    options: [
      {
        text: "Continuar",
        nextText: 9,
      },
    ],
  },

  {
    id: 9,
    msc: "./sounds/gscream.wav",
    text:
      "Ao se aproximar da saída da garagem você escuta um grito. Uma mulher grita por socorro enquanto está sendo roubada por um membro de gangue. Todos na cidade conhecem a gangue em questão. “The Rogues”é como eles gostam de serem chamados. A comunidade local sabe que não interagir com eles é a melhor opção. Você não é como todos eles e pode decidir balançar um pouco com a ordem das coisas. Mas você sabe que as consequências de um ato altruísta pode não ser a melhor opção a longo prazo.",

    options: [
      {
        text: "Ajudar",
        nextText: 10,
      },
      {
        text: "Seguir seu caminho",
        nextText: 129,
      },
    ],
  },

  {
    id: 10,

    text:
      "Você se aproxima lentamente por trás do assaltante e pede para que a vítima mantenha a calma. Ele ainda não te percebeu. Você pode escolher o melhor método para lidar com ele.",

    options: [
      {
        text: "Atire nele",
        nextText: 41,
      },
      {
        text: "Nocaute",
        nextText: 11,
      },
    ],
  },

  {
    id: 11,
    msc: "./sounds/gunshot.wav",
    text:
      "O som do disparo de uma bala ecoa por toda rua enquanto você imobiliza o ladrão. Você questiona de onde ela veio e logo nota que o disparo foi efetuado pela própria vítima do crime.",

    options: [
      {
        text: "Continuar",
        nextText: 12,
      },
    ],
  },

  {
    id: 12,

    text:
      "Desesperada, a vitima diz que só queria se proteger. Você precisa tirá-la rápido de lá. A partir do momento em que o disparo foi efetuado, você sabia que a noite não seria fácil. Em breve o local estaria repleto de membros da The Rogues e você precisa aproveitar o tempo que tem. Vocês entram no carro da vítima.",

    options: [
      {
        text: "Continuar",
        nextText: 13,
      },
    ],
  },

  {
    id: 13,
    img: "./Imagens/carrun.gif",

    text:
      "No caminho para fora da cidade vocês conversam brevemente. A mulher (que se chama Lígia) conta que estava trabalhando em seu emprego noturno. Ela precisa do dinheiro pois tem uma criança em sua proteção. O pai abandonou a família para ganhar dinheiro em outro país. Você começa a questionar suas escolhas, afinal, ao intervir no assalto, o resultado de suas ações colocou a mulher em risco de vida. Você pode ser o responsável por uma criança acordar sem família nas próximas horas.",

    options: [
      {
        text: "Continuar",
        nextText: 14,
      },
    ],
  },
  /*parte do metrô */
  {
    id: 14,
    img: "./Imagens/cidade.gif",
    msc: "./sounds/revcock.wav",

    text:
      "Parado próximo de um semáforo, você percebe que tem algo errado. A cidade está normal. Como seria possível que o fim do mundo estivesse silencioso após a morte de um membro de gangue? Infelizmente a pergunta não permaneceu sem resposta por muito tempo.  Carros aparecem pelas ruas laterais e fecham completamente o seu caminho. A adrenalina já está atingindo ápice dentro de você. Você se sente invencível. Suas escolhes se resumem a duas: ",

    options: [
      {
        text: "Lutar",
        nextText: 28,
      },

      {
        text: "Correr para o metrô",
        nextText: 15,
      },
    ],
  },

  {
    id: 15,
    img: "./Imagens/cidade.gif",
    text:
      "Apenas heróis em quadrinhos são invencíveis. Você sabe que não importa o quão bom você seja, não pode cuidar de todos eles. Pelo menos não aqui. ",

    options: [
      {
        text: "Continuar",
        nextText: 16,
      },
    ],
  },

  {
    id: 16,
    img: "./Imagens/cidade.gif",
    msc: "./sounds/gbattle.wav",

    text:
      "Você agarra a mão de Lígia e bola seu plano de fuga. Infelizmente o plano é correr o mais rápido que puder e contar com a sorte de que Deus não tenha abandonado aqueles que ainda tentam fazer o bem. Vocês correm entre balas e carros estacionados, enquanto um musical feito de pistolas e metralhadoras ecoa pela cidade. Felizmente uma bala sua equivale a pelo menos 20 balas inimigas. Afinal, você aprendeu a atirar na academia de polícia. Você consegue chegar na entrada do metrô mas sabe que logo será encurralado. Sua única chance é chegar até a linha amarela do metrô, local onde as gangues estão controladas e a ordem ainda não é sinônimo de caos.",

    options: [
      {
        text: "Continuar",
        nextText: 17,
      },
    ],
  },

  {
    id: 17,
    img: "./Imagens/metropj.png",
    msc: "./sounds/correndo.wav",

    text:
      "Entre corredores e tiros, você encontra a plataforma de embarque do metrô com conexão para a linha amarela. Nas escadas de acesso, você encontra parte dos membros que conseguiram te encontrar. O local está vazio, afinal, é tarde e a maioria das pessoas não se atreve a andar pelas ruas a essa hora. Você deve lutar ao mesmo tempo que protege Lígia.",

    options: [
      {
        text: "Continuar",
        nextText: 18,
      },
    ],
  },

  {
    id: 18,
    img: "./Imagens/metropj.png",
    msc: "./sounds/metro2.wav",
    text:
      "Você tem 2 balas. Derrote TODOS os inimigos! Dois homens armados com revólveres. Dois armados com facas e 1 homem com armado molotov. Pense rápido",

    options: [
      {
        text:
          "Atirar nos homens armados, cuidar do capangas com facas e finalizar o inimigo com molotov.",
        nextText: 28,
      },
      {
        text:
          "Atirar em um homem armado e no molotov. Cuidar dos outros desarmado. ",
        nextText: 147,
      },
      {
        text:
          "Atirar nos homens armados com facas e cuidar dos outros desarmado.",
        nextText: 28,
      },
    ],
  },
  /*obs aqui */
  {
    id: 147,
    img: "./Imagens/metropj.png",
    msc: "./sounds/2shots.wav",

    text:
      "Pensando rápidamente você dispara contra o molotov e um dos homens armados. A explosão da bomba caseira acaba matando o inimigo com a bomba e o segundo homem armado. Você cuida rápidamente dos homens com as facas.",

    options: [
      {
        text: "Continuar",
        nextText: 19,
      },
    ],
  },

  {
    id: 19,
    img: "./Imagens/subway.gif",
    text:
      "Não foi fácil, mas você conseguiu vencer todos os inimigos bem a tempo de fugir do restante dos membros que estavam para chegar. Você e Lígia fogem para dentro do metro. Você usa o telefone de emergência do metrô e pede reforço para uma emboscada. Lígia questiona o motivo dos policias da cidade se darem ao trabalho de ajudar duas pessoas vindas do fim do mundo ao mesmo tempo em que arriscam suas vidas. Você sabe que a resposta é simples. As famílias mais ricas da cidade vivem na linha amarela. ",

    options: [
      {
        text: "Continuar",
        nextText: 20,
      },
    ],
  },

  {
    id: 20,
    img: "./Imagens/subway.gif",
    text:
      "Infelizmente a viagem não será tranquila. Alguns membros da Rogue conseguiram entrar no metrô com vocês. Você respira fundo e se prepara para enfrentar um vagão inteiro de inimigos que está vindo atrás de você. ",

    options: [
      {
        text: "Escolha a hora certa para fugir e para lutar",
        nextText: 22,
      },
    ],
  },

  {
    id: 22,
    img: "./Imagens/subway.gif",

    text: "Os inimigos estão acumulando aos poucos",

    options: [
      {
        text: "Enfrentar alguns inimigos",
        nextText: 23,
      },

      {
        text: "Fugir para o próximo vagão",
        nextText: 27,
      },
    ],
  },

  {
    id: 23,
    img: "./Imagens/subway.gif",
    msc: "./sounds/soco.wav",
    text: "Você deteu alguns inimigos, mas agora o vagão ficou lotado.",

    options: [
      {
        text: "Enfrentar mais inimigos",
        nextText: 28,
      },

      {
        text: "Fugir para o próximo vagão",
        nextText: 24,
      },
    ],
  },

  {
    id: 24,
    img: "./Imagens/subway.gif",
    msc: "./sounds/soco.wav",
    text: "Alguns inimigos cairam, ainda existem muitos, mas você ganhou tempo",

    options: [
      {
        text: "Pegar bastão",
        nextText: 25,
      },

      {
        text: "Enfrentar mais inimigos",
        nextText: 25,
      },

      {
        text: "Fugir para último vagão",
        nextText: 29,
      },
    ],
  },

  {
    id: 25,
    img: "./Imagens/subway.gif",
    msc: "./sounds/soco.wav",
    text: "Os inimigos estão na sua cola",

    options: [
      {
        text: "Enfrentar mais inimigos com a ajuda do bastão",
        nextText: 2,
      },
      {
        text: "Fugir e guardar o bastão",
        nextText: 28,
      },
      {
        text: "Fugir para o próximo vagão e travar a porta com o bastão",
        nextText: 26,
      },
    ],
  },

  {
    id: 26,
    img: "./Imagens/subway.gif",
    msc: "./sounds/soco.wav",
    text: "Alguns poucos inimigos já estavam a sua espera no vagão",

    options: [
      {
        text: "Finalize eles",
        nextText: 31,
      },
    ],
  },

  {
    id: 27,
    img: "./Imagens/subway.gif",
    text: "Existem muitos inimigos no local",

    options: [
      {
        text: "Lutar",
        nextText: 30,
      },

      {
        text: "Fugir para o próximo vagão",
        nextText: 28,
      },
    ],
  },

  {
    id: 28,
    img: "./Imagens/subway.gif",
    text:
      "Você foi surprendido por mais inimigos do que podia aguentar. Com um golpe em sua nuca, seus ultimos suspiros também são os ultimos de Lígia",

    options: [
      {
        text: "Reiniciar",
        nextText: -1,
      },
    ],
  },

  {
    id: 29,
    img: "./Imagens/subway.gif",
    text:
      "Os inimigos te alcançaram pois você não tinha como para-los. Acabou.",

    options: [
      {
        text: "Reiniciar",
        nextText: -1,
      },
    ],
  },

  {
    id: 30,
    img: "./Imagens/subway.gif",
    text:
      "O calor do momento era tanto que você acabou esquecendo de quem deveria proteger. Lígia foi pega e você não conseguiu prevenir a morte da garota.",

    options: [
      {
        text: "Fugir",
        nextText: 32,
      },

      {
        text: "Usar as armas no chão e enfrentar os outros inimigos",
        nextText: 28,
      },
    ],
  },

  {
    id: 31,
    img: "./Imagens/metro.png",
    msc: "./sounds/correndo.wav",
    text:
      "Ao chegar na conexão para a linha amarela, seus inimigos começam a se aglomerar nas portas de saída dos vagões. Você está muito cansado para lutar, mas felizmente os seus planos costumam ser infalíveis e como você previu, a polícia logo apareceu para ajudar no confronto.",

    options: [
      {
        text: "Continuar",
        nextText: 33,
      },
    ],
  },

  {
    id: 32,
    img: "./Imagens/metro.png",
    msc: "./sounds/heart.wav",
    text:
      "Adrenalina, sangue e suor. Você não consegue mais distinguir o certo do errado. Inimigos sendo mortos brutalmente e inocentes sendo machucados. A pessoa que tentava fazer o certo morreu no momento em que Lígia foi morta",

    options: [
      {
        text: "Continuar",
        nextText: 34,
      },
    ],
  },

  {
    id: 33,
    img: "./Imagens/metro.png",
    msc: "./sounds/2shots.wav",
    text:
      "Apenas 10 minutos foram necessários para tudo acabar. Há quem diga que a brutalidade policial ganhou. Mas o que é brutalidade em uma cidade como Astra? Entre feridos, mortos e presos, você se encontra cansado. Lígia respira aliviada pois sabe que acabou. A garota treme de medo enquanto tenta planejar uma maneira de buscar sua filha e se mudar dessa cidade infernal amanhã mesmo. ",

    options: [
      {
        text: "Continuar",
        nextText: 35,
      },
    ],
  },

  {
    id: 34,
    img: "./Imagens/metro.png",
    text:
      "Apenas 10 minutos foram necessários para tudo acabar. Há quem diga que a brutalidade policial ganhou. Mas o que é brutalidade em uma cidade como Astra? Entre feridos, mortos e presos, você ainda sente o gosto de sangue dos inimigos na sua boca.",

    options: [
      {
        text: "Continuar",
        nextText: 36,
      },
    ],
  },

  {
    id: 35,
    img: "./Imagens/metro.png",
    text:
      "Após os agradecimentos você deixa Lígia aos cuidados dos médicos e sai do metrô para buscar um táxi e finalmente retornar para casa. O Taxista é um falastrão mas dessa vez você não quer papo. Ele deve achar que você é uma pessoa horrível. ",

    options: [
      {
        text: "Continuar",
        nextText: 37,
      },
    ],
  },

  {
    id: 36,
    img: "./Imagens/taxi.jpg",

    text:
      "Ao chegar em casa você encontra um gato próximo a sua porta. Deseja convidá-lo para entrar?",

    options: [
      {
        text: "Sim",
        nextText: 38,
      },

      {
        text: "Não",
        nextText: 39,
      },
    ],
  },

  {
    id: 37,
    text:
      "Acabou. Tudo começou com você decidindo ser herói. Agora a garota está morta. Você deixa o metrô e parte a vagar pela cidade em busca de uma maneira de diminuir sua dor. Milhares de vidas foram perdidas hoje e você não consegue deixar de se sentir culpado. Valeu a pena?",

    options: [
      {
        text: "Continuar",
        nextText: 40,
      },
    ],
  },

  {
    id: 38,
    msc: "./sounds/cat.wav",
    img: "./Imagens/room.gif",
    text:
      "Depois de um dia como esses, você bem que precisa de um amigo para conversar. Você abre a porta para o gato e ele aceita seu convite. Em meio a tanto caos, pelo menos uma coisa essa cidade conseguiu te oferecer: Alguém para conversar.",

    options: [
      {
        text: "Continuar",
        nextText: 40,
      },
    ],
  },

  {
    id: 39,
    msc: "./sounds/cat.wav",
    img: "./Imagens/room.gif",
    text:
      "Você cumprimenta o gato e entra dentro de casa. O gato observa e logo depois decide tomar o seu caminho. Provavelmente ele pertence a alguém. Embora sejam animais incríveis, você só deseja um pouco de paz.",

    options: [
      {
        text: "Continuar",
        nextText: 40,
      },
    ],
  },

  {
    id: 40,
    text: "Fim",

    options: [
      {
        text: "Créditos",
        nextText: -1,
      },
    ],
  },

  {
    id: 41,

    text:
      "O som do disparo de uma bala ecoa por toda rua logo após o seu disparo. Como ultimo suspiro o membro da gangue atirou e matou a garota. Você não tem tempo para lamentar. Você precisa fugir pois os tiros alertaram os outros membros de gangue que estavam na área. ",

    options: [
      {
        text: "Fugir com o carro",
        nextText: 42,
      },
    ],
  },

  {
    id: 42,
    img: "./Imagens/cidade.gif",
    text:
      "Parado próximo de um semáforo você percebe que tem algo errado. A cidade está normal. Como seria possível que o fim do mundo estivesse silencioso após a morte de um membro de gangue? Infelizmente a pergunta não permaneceu sem resposta por muito tempo.  Carros aparecem pelas ruas laterais e fecham completamente o seu caminho. A adrenalina já está atingindo ápice dentro de você. Você se sente invencível. Suas escolhes se resumem a duas: ",

    options: [
      {
        text: "Lutar",
        nextText: 44,
      },

      {
        text: "Correr para o metrô",
        nextText: 43,
      },
    ],
  },

  {
    id: 44,
    img: "./Imagens/cidade.gif",
    text:
      "Você foi surprendido por mais inimigos do que podia aguentar. Ao tentar revidar, uma chuva de tiros encontrou o caminho até seu corpo. É o fim.",

    options: [
      {
        text: "Reiniciar",
        nextText: -1,
      },
    ],
  },

  {
    id: 43,
    text:
      "Entre corredores e tiros, você encontra a plataforma de embarque do metrô com conexão para a linha amarela. Nas escadas de acesso, você encontra parte dos membros que conseguiram te encontrar. O local está vazio, afinal, é tarde e a maioria das pessoas não se atreve a andar pelas ruas a essa hora.",

    options: [
      {
        text: "Continuar",
        nextText: 44,
      },
    ],
  },

  {
    id: 44,
    text:
      "Você consegue passar por todos fácilmente. É muito mais fácil lutar quando você luta sem precisar proteger alguém.",

    options: [
      {
        text:
          "Atirar nos homens armados, cuidar do capangas com facas e finalizar o inimigo com molotov.",
        nextText: 45,
      },
    ],
  },

  {
    id: 45,
    text:
      "Você conseguiu. Nenhum deles viu você fugir e agora você só precisa usar o telefone de emergencia do vagão para avisar a polícia sobre o que aconteceu. Ainda existem muitos inimigos nos outros vagões, mas você está seguro. Você combina uma emboscada com a ajuda da polícia na conexão da linha amarela.",

    options: [
      {
        text: "Continuar",
        nextText: 32,
      },
    ],
  },

  /* fim da primeira hostória */

  /*  Caminho 2  */

  {
    id: 46,
    img: "./Imagens/bar2.gif",
    msc: "./sounds/bar.mp3",
    text:
      " O que você tem a perder? Você só precisa descarregar suas frustrações em alguém. Rapidamente você salta no meio dos três enquanto diz para o dono do bar que é a última vez que você o ajuda. ",

    options: [
      {
        text: "Continuar",
        nextText: 47,
      },
    ],
  },

  {
    id: 47,
    img: "./Imagens/bar2.gif",
    msc: "./sounds/brigadebar.wav",
    text:
      "Você pula no meio dos três bêbados e acaba com eles sem muita dificuldade. No meio da confusão você nota que um dos membros deixou cair uma foto de uma jovem garota e informações sobre onde encontrá-la. Você sabe onde isso vai dar. Sabe que essas gangues são conhecidas por tentativas de sequestro das famílias ricas da cidade. ",

    options: [
      {
        text: "Continuar",
        nextText: 48,
      },
    ],
  },

  {
    id: 48,
    img: "./Imagens/bar2.gif",
    msc: "./sounds/soco2.wav",
    text:
      "Você pressiona o sujeito que tinha as informações da garota mas ele jura que não tem nada a ver com aquilo. Sua única missão foi passar as informações para outros membros. Após uma curta conversa envolvendo dedos quebrados e dentes arrancados, você consegue informações sobre onde o encarregado do sequestro estaria.",

    options: [
      {
        text: "Continuar",
        nextText: 49,
      },
    ],
  },

  {
    id: 49,
    img: "./Imagens/bar2.gif",

    text:
      "Você sabe que provavelmente foi mais um sequestro que deu errado, afinal, as gangues não consegue chegar nas áreas onde os ricos vivem. Mesmo assim, você tem a opção de ir atrás disso. Vale a pena?",

    options: [
      {
        text: "Ir atrás de pistas",
        nextText: 50,
      },
      {
        text: "Deixar para lá",
        nextText: 124,
      },
    ],
  },

  {
    id: 50,
    img: "./Imagens/bar2.gif",
    msc: "./sounds/doors.mp3",
    text:
      "Você está cansado, mas sabe que algo não está certo nessa história. Você deixa os membros da gangue para trás e vai em busca de informações sobre o que aconteceu. Você sabe exatamente como chegar lá.",

    options: [
      {
        text: "Continuar",
        nextText: 51,
      },
    ],
  },

  {
    id: 51,
    text:
      "Ao chegar  no apartamento apontado pelo capanga, você nota um cheiro estranho por trás da porta.",

    options: [
      {
        text: "Arrombar a porta",
        nextText: 52,
      },

      {
        text: "Bater na porta",
        nextText: 53,
      },
    ],
  },

  {
    id: 52,

    text:
      "Você sabe que esses lugares sempre são barulhentos. Sem perder tempo, você lança seu corpo contra a porta e encontra um corpo sem vida (aparentemente a mais de 2 horas). Alguém teve o trabalho de cobrir os rastros, mas porque?",

    options: [
      {
        text: "Procure pistas sobre o acontecido",
        nextText: 54,
      },
    ],
  },

  {
    id: 53,
    msc: "./sounds/slam.wav",
    text:
      "Ao bater na porta para chamar por alguém, você nota que a porta foi arrombada e decide entrar rápidamente. Ao entrar no local, você percebe que o cheiro estranho era de um corpo que teria morrido há algumas horas.",

    options: [
      {
        text: "Procure TODAS as pistas sobre o acontecido",
        nextText: 54,
      },
    ],
  },

  {
    id: 54,
    img: "./Imagens/quarto.png",
    text: "Escolha onde verificar",

    options: [
      {
        text: "Cozinha",
        nextText: 55,
      },

      {
        text: "Chão do quarto",
        nextText: 56,
      },

      {
        text: "Corpo",
        nextText: 57,
      },

      {
        text: "Computador",
        requiredState: (currentState) => currentState.senha,

        setState: { senha: false },
        nextText: 64,
      },
    ],
  },

  {
    id: 55,
    img: "./Imagens/quarto.png",
    text: "A cozinha cheia de insetos não parece ter muita coisa.",

    options: [
      {
        text: "Voltar para o quarto",
        nextText: 54,
      },

      {
        text: "Olhar armário",
        nextText: 59,
      },

      {
        text: "Olhar geladeira",
        nextText: 60,
      },
    ],
  },

  {
    id: 56,
    img: "./Imagens/quarto.png",
    text:
      "Você encontra anotações sobre onde a garota seria encontrada. Nenhuma informação util, já que agora a garota já está nas mãos deles.",

    options: [
      {
        text: "Continuar",
        setState: { anotacoes: true },
        nextText: 54,
      },
    ],
  },

  {
    id: 57,
    img: "./Imagens/quarto.png",
    text: "O corpo não foi tocado. Ele simplesmete foi morto e deixado ai",

    options: [
      {
        text: "Procurar no bolso",
        nextText: 62,
      },
    ],
  },

  {
    id: 58,
    img: "./Imagens/quarto.png",
    text: "O computador precisa de senha para ser utilizado",

    options: [
      {
        text: "Continuar",
        nextText: 54,
      },
    ],
  },

  {
    id: 59,
    img: "./Imagens/quarto.png",
    text: "Você não encontrou nada",

    options: [
      {
        text: "Voltar para quarto",
        nextText: 55,
      },
    ],
  },

  {
    id: 60,
    img: "./Imagens/quarto.png",
    text:
      "Claro. Como esperar organização de alguém que desse jeito? Você encontrou a carteira corpo dentro da gelaidera. Nela você encontra a senha para o computador",

    options: [
      {
        text: "Continuar",
        setState: { senha: true },
        nextText: 54,
      },
    ],
  },
  /* achou carteira */
  {
    id: 61,
    img: "./Imagens/quarto.png",
    text: "Escolha onde verificar",

    options: [
      {
        text: "Chão do quarto",
        nextText: 63,
      },

      {
        text: "Corpo",
        nextText: 62,
      },

      {
        text: "Computador",
        requiredState: (currentState) => currentState.senha,
        chaves: false,
        anotacoes: false,
        senha: false,
        nextText: 64,
      },
    ],
  },
  /*achou chave do carro */
  {
    id: 62,
    img: "./Imagens/quarto.png",
    text: "Você encontra as chaves do carro.",

    options: [
      {
        text: "Continuar",
        setState: { chaves: true },
        nextText: 55,
      },
    ],
  },

  {
    id: 63,
    img: "./Imagens/quarto.png",
    text:
      "Você encontra anotações sobre onde a garota seria encontrada. Nenhuma informação util, já que agora a garota já está nas mãos deles.",

    options: [
      {
        text: "Continuar",
        setState: { anotacoes: true },
        nextText: 61,
      },
    ],
  },

  {
    id: 64,
    img: "./Imagens/quarto.png",
    text:
      "Ao logar no computador, você procura as ultimas horas da filmagem da câmera de segurança. Nela você descobre que o homem foi porto por um membro da própria gangue. 'The Orphans', como eles gostam de ser chamados. O vídeo revela que o capanga foi morto por não estar de acordo com o sequestro. Aparentemente, a garota sequestrada mora aqui na região. Por que motivo eles se dariam ao trabalho de sequestrar uma moradora de um bairro pobre? As coisas andam estranhas...",

    options: [
      {
        text: "Sair do local",
        nextText: 65,
      },
    ],
  },

  {
    id: 65,
    msc: "./sounds/doors.mp3",

    text:
      "Recapitulando: Mensagens em redes sociais, o nome da garota e para onde levá-la após o sequestro. Parece que esse sequestro já aconteceu. O homem no quarto não foi morto como queima de arquivo, e sim porque era contra o sequestro. Aparentemente sequestraram uma moça que vive aqui, na parte mais pobre da cidade. Porque fariam isso? ",

    options: [
      {
        text: "Continuar",
        nextText: 66,
      },
    ],
  },

  {
    id: 66,

    text:
      "Sem pensar muito, você vai em direção ao carro do membro da Orphan. Ele não vai precisar mais de um carro. Você liga para o serviço médico e avisa sobre o corpo dele. Que ele seja mais sortudo na próxima vida.",

    options: [
      {
        text: "Não posso perder tempo",
        nextText: 67,
      },
    ],
  },

  {
    id: 67,
    msc: "./sounds/carengine.wav",
    text: "",

    options: [
      {
        text: "Acelerar",
        nextText: 68,
      },
    ],
  },

  {
    id: 68,
    img: "./Imagens/fabrica.jpg",
    text:
      "As horas passam e você finalmente encontra a antiga fábrica. Um dos pontos secretos para onde os inimigos da  gangue Orphans são levados.",

    options: [
      {
        text: "Continuar",
        nextText: 69,
      },
    ],
  },

  {
    id: 69,
    img: "./Imagens/fabrica.jpg",

    text:
      "Através de um buraco pela grade, você encontra uma passagem para dentro da fábrica. Você não pode voltar atrás. É hora de agir!",

    options: [
      {
        text: "Continuar",
        nextText: 70,
      },
    ],
  },

  {
    id: 70,
    img: "./Imagens/fabrica.jpg",

    text: "Passe pelos guardas sem ser percebido",

    options: [
      {
        text: "Continuar",
        nextText: 71,
      },
    ],
  },

  {
    /* escolha para onde ir */ id: 71,
    img: "./Imagens/fabrica.jpg",

    text:
      "Seu objetivo é o segundo andar. A sala principal está cheia de guardas.",

    options: [
      {
        text: "Enfrentar guardas",
        nextText: 73,
      },

      {
        text: "Entrar no corredor esquerdo",
        nextText: 74,
      },

      {
        text: "Entrar no corredor direito",
        nextText: 77,
      },
    ],
  },

  {
    /* capturado */ id: 73,
    img: "./Imagens/fabrica.jpg",

    text:
      "Parece que você foi surpreendido por mais guardas do que você pode dar conta. Você foi capturado.",

    options: [
      {
        text: "Continuar",
        nextText: 80,
      },
    ],
  },

  {
    id: 74,
    img: "./Imagens/fabrica.jpg",

    text:
      "A sala de máquinas é um local com pouca iluminação. Existem guardas no local.",

    options: [
      {
        text: "Nocautear alguns guardas",
        nextText: 75,
      },

      {
        text: "Atravessar a sala com calma",
        nextText: 76,
      },

      {
        text: "Voltar por onde veio",
        nextText: 73,
      },
    ],
  },

  {
    id: 75,
    img: "./Imagens/fabrica.jpg",

    text:
      "Ao nocautear os guardas você consegue um soco inglês que um deles carregava",

    options: [
      {
        text: "Continuar o caminho",
        setState: { soco: true },
        nextText: 76,
      },
    ],
  },

  {
    id: 76,
    img: "./Imagens/fabrica.jpg",

    text: "Você está quase lá! Existem alguns guardas em frente a escadaria.",

    options: [
      {
        text: "Nocautear os guardas",
        nextText: 999,
      },

      {
        text: "Esperar",
        nextText: 73,
      },
    ],
  },

  {
    id: 999,
    img: "./Imagens/fabrica.jpg",

    text:
      "Você conseguiu! Você sobe as escadas com calma e chega na sala principal onde acredita que a vítima esteja. Você entra e rápidamente tranca a porta com uma barra de ferro",

    options: [
      {
        text: "Continuar",
        nextText: 94,
      },
    ],
  },

  {
    id: 77,
    img: "./Imagens/fabrica.jpg",

    text:
      "O corredor não tem muito movimento. Como a vítima do sequestro é uma garota pobre, eles não esperam que algum louco tente alguma coisa.",

    options: [
      {
        text: "Seguir em frente",
        nextText: 78,
      },

      {
        text: "Voltar",
        nextText: 71,
      },

      {
        text: "Gritar??",
        nextText: 73,
      },
    ],
  },

  {
    id: 78,
    img: "./Imagens/fabrica.jpg",

    text: "Você está quase lá. Só há um guarda na escadaria próxima.",

    options: [
      {
        text: "Atacar o guarda sorrateiramente e subir",
        nextText: 76,
      },

      {
        text: "Voltar para a porta da fábrica??",
        nextText: 71,
      },
    ],
  },

  {
    id: 79,
    img: "./Imagens/fabrica.jpg",

    text:
      "Você conseguiu! Você sobe as escadas com calma e chega na sala principal onde acredita que a vítima esteja. Você entra e rápidamente tranca a porta com uma barra de ferro",

    options: [
      {
        text: "Continuar",
        nextText: 94,
      },
    ],
  },

  {
    id: 80,
    img: "./Imagens/fabrica.jpg",

    text:
      "Você é bom. Muito bom. Mas até os melhores cometem erros. Você foi capturado. Após alguns socos no estomago para descobrir quem você é e o motivo de estar na fábrica, os membros da Orphans te jogam dentro de uma sala e vão atrás do chefe da gangue para descobrir o que fazer com você.",

    options: [
      {
        text: "Continuar",
        nextText: 81,
      },
    ],
  },

  {
    id: 81,
    text: "Descubra como sair da sala (você não tem muito tempo).",

    options: [
      {
        text: "Se aproximar da janela",
        nextText: 82,
      },

      {
        text: "Olhar a mesa com comida",
        nextText: 83,
      },

      {
        text: "Bater na porta",
        nextText: 84,
      },
    ],
  },

  {
    id: 82,
    text:
      "É possível abrir a janela, mas o caminho até o chão não parece dos mais favoráveis. O que você tem a perder?",

    options: [
      {
        text: "Pular",
        nextText: 84,
      },

      {
        text: "Voltar para onde estava",
        nextText: 83,
      },
    ],
  },

  {
    id: 83,
    text: "Descubra como sair da sala (o tempo está acabando)",

    options: [
      {
        text: "Se aproximar da janela",
        nextText: 82,
      },

      {
        text: "Olhar a mesa com comida",
        nextText: 86,
      },

      {
        text: "Bater na porta",
        nextText: 87,
      },
    ],
  },

  {
    id: 84,
    text:
      "A respiração é ofegante e o tempo é curso. Você corre em direção a janela e salta para sua liberdade!",

    options: [
      {
        text: "Continuar",
        nextText: 85,
      },
    ],
  },

  {
    id: 85,
    text:
      "Infelizmente a gravidade não foi gentil com você. O encontro com o chão foi mais grave do que você calculou. Você está morto.",

    options: [
      {
        text: "Reiniciar",
        nextText: -1,
      },
    ],
  },

  {
    id: 86,
    text:
      "Na mesa você encontra uma pilha de lixo, um pote de ketchup, um garfo e capacete. PENSE RÁPIDO!",

    options: [
      {
        text: "Pegar o garfo e armar uma emboscada para o guarda da porta",
        nextText: 88,
      },

      {
        text: "Pegar o ketchup",
        nextText: 90,
      },

      {
        text: "Usar o capacete para se proteger ao pular pela janela",
        nextText: 84,
      },
    ],
  },

  {
    id: 87,
    text: "O guarda ameaça entrar e te matar caso você faça isso mais uma vez.",
    sound: "./sounds/shutup.mp3",

    options: [
      {
        text: "Recuar",
        nextText: 83,
      },

      {
        text: "Bater na porta outra vez",
        nextText: 88,
      },
    ],
  },

  {
    id: 88,
    text:
      "Você irrita o guarda e o convida a entrar e terminar o serviço dele. O idiota morde a ísca, mas no fim, quem vai rir por ultimo?",

    options: [
      {
        text: "Continuar",
        nextText: 89,
      },
    ],
  },

  {
    id: 89,
    text:
      "Embora você tenha preparado um plano, o revolver carregado foi mais forte do que você. O guarda foi morto, mas enquanto o sangue dele banha o chão da cozinha, você da seus útimos suspiros.",

    options: [
      {
        text: "Reiniciar",
        nextText: -1,
      },
    ],
  },

  {
    id: 90,
    text:
      "Do lado de fora da prisão o soldado escuta um grito de pavor seguido de um corpo estatelado no chão. Ao olhar pela janela da porta, ele nota seu corpo caído ao lado de uma poça de sangue.",

    options: [
      {
        text: "Continuar",
        nextText: 92,
      },
    ],
  },

  {
    id: 92,
    text:
      "O inimigo se preocupa e corre para ver o que aconteceu com você. Logo em seguida o som de sua voz abafada é tudo que ecoa pelo quarto. Você levanta e enforca o soldado até ele perder os sentidos.",

    options: [
      {
        text: "Continuar",
        nextText: 93,
      },
    ],
  },

  {
    id: 93,
    text:
      "Desesperado, o soldado acaba derrubando sua arma por um buraco estreito localizado no canto da sala e logo em seguida desmaia. Você venceu a briga. Quem diria que a liberdade custaria apenas sua camisa favorita?",

    options: [
      {
        text: "Continuar",
        nextText: 79,
      },
    ],
  },

  {
    id: 94,
    text:
      "O chefe da gangue e a garota estão em uma área enorme. Você já não aguenta mais e quer que o dia de hoje simplesmente acabe.",

    options: [
      {
        text: "Continuar",
        nextText: 95,
      },
    ],
  },

  {
    id: 95,
    text:
      "Pigm é o chefe da gangue. Aparentemente ele saiu de seu buraco para encontrar a garota pessoalmente. Mas por quê?",
    images: "./Imagens/pigma.png",

    options: [
      {
        text: "Continuar",
        nextText: 96,
      },
    ],
  },

  {
    id: 96,
    text:
      "É claro que se trata de amor não correspondido. O porco não suporta ser rejeitado pela mulher que ele ama. Se ele não pode ter a mão da garota, ninguém poderá. Seu destino será o fundo de um lago.",

    options: [
      {
        text: "Continuar",
        nextText: 97,
      },
    ],
  },

  {
    id: 97,
    text:
      "A essa altura ele não quer nem saber os seus motivos. Ele te dá a opção de virar as costas e ir embora, ou ficar e morrer.",

    options: [
      {
        text: "Ficar",
        nextText: 101,
      },

      {
        text: "Fugir",
        nextText: 99,
      },
    ],
  },

  {
    id: 99,
    text:
      "Pensando bem, você já está cansado de arriscar sua vida pelos outros. Você só quer paz. Você dá adeus a Pigma e a garota desmaiada e parte em direção a saída da fábrica. ",

    options: [
      {
        text: "Continuar",
        nextText: 100,
      },
    ],
  },

  {
    id: 100,
    text:
      "Antes mesmo de abrir a porta, o disparo de um revolver rasga o silencio da sala. Com o sangue na garganta, você lamenta suas escolhas e reza que tenha uma vida com um pouco mais de paz na próxima encarnação. É o fim.",

    options: [
      {
        text: "Continuar",
        nextText: 40,
      },
    ],
  },

  {
    id: 101,
    text:
      "Você sabe que não tem mais volta. Monstros como esse cara precisam ser parados. ",

    options: [
      {
        text: "Lutar",
        nextText: 103,
      },

      {
        text: "Conversar",
        nextText: 102,
      },
    ],
  },

  {
    id: 102,
    text:
      "Não há diálogo possível entre vocês dois. A fera já não pensa com clareza. Pigma rapidamente atira em você! O tiro pegou no ombro, você acabou derrubando alguns itens que estavam guardados",

    options: [
      {
        text: "Partir para a luta",
        requiredState: (currentState) => currentState.soco,
        setState: { soco: false },
        nextText: 103,
      },
    ],
  },

  {
    id: 103,
    text:
      "Escolha seus movimentos. Pigma é grande e seu ponto fraco é na cabeça. Ele possui uma péssima mira (porcos não sabem atirar bem).",

    options: [
      {
        text: "Continuar",
        nextText: 104,
      },

      {
        text: "Utilizar soco inglês",
        requiredState: (currentState) => currentState.soco,
        setState: { soco: false },
        nextText: 105,
      },
    ],
  },

  {
    id: 104,
    text: "Lute",

    options: [
      {
        text: "Esconder-se",
        nextText: 107,
      },

      {
        text: "Correr em direção ao rosto",
        nextText: 108,
      },

      {
        text: "Rasteira",
        nextText: 106,
      },
    ],
  },

  {
    id: 105,
    text:
      "Você lembrou do soco inglês e o utilizou para acertar a perna de Pigma. O porco tomba e derruba a arma",
    music: "./sounds/soco.wav",
    options: [
      {
        text: "Acertar o rosto",
        nextText: 110,
      },

      {
        text: "Tentar pegar a arma",

        nextText: 114,
      },
    ],
  },

  {
    id: 106,
    text:
      "As pernas do porco são pesadas. Você acaba não conseguindo derruba-lo. A arma está mirada em você.",

    options: [
      {
        text: "Puxar arma",
        nextText: 109,
      },

      {
        text: "Rolar",
        nextText: 110,
      },
    ],
  },

  {
    id: 107,
    text:
      "Você se esconde atrás das pilatras do prédio. Cuidado com os barris explosivo.",

    options: [
      {
        text: "Chutar Barril",
        nextText: 111,
      },

      {
        text: "Correr em direção as pernas do inimigo",
        nextText: 106,
      },
    ],
  },

  {
    id: 108,
    text:
      "Ao se apróximar você percebe que Pigma é maior que parece. Você não consegue alcançar o rosto e acaba sendo derrubado. Com um sorriso no rosto, Pigma alerta que avisou sobre o seu destino. É seu último suspiro.",

    options: [
      {
        text: "Reiniciar",
        nextText: -1,
      },
    ],
  },

  {
    id: 109,
    text:
      "Parece que o porco tem mais força que você. Você não foi capaz de desarma-lo e acabou encontrando seu fim. Acabou para você.",

    options: [
      {
        text: "Reiniciar",
        nextText: -1,
      },
    ],
  },

  {
    id: 110,
    text: "O porco está ferido, mas ainda não foi derrubado",

    options: [
      {
        text: "Se esconder nas pilastras ",
        nextText: 113,
      },

      {
        text: "Correr em direção as pernas",
        nextText: 112,
      },

      {
        text: "Correr em direção ao rosto",
        nextText: 108,
      },
    ],
  },

  {
    id: 111,
    text:
      "Ao chutar o barril, Pigma atira sem pensar. A explosão é gigante e acaba pegando todos. É o fim da linha.",
    msc: "./sounds/explosao.mp3",

    options: [
      {
        text: "Reiniciar",
        nextText: -1,
      },
    ],
  },

  {
    id: 112,
    text:
      "Você deveria saber que a mesma tática não funcionaria duas vezes com o mesmo porco. Pigma estava preparado para o seu golpe e contra-atacou sem piedade. É o fim.",
    msc: "./sounds/seeya.wav",

    options: [
      {
        text: "Reiniciar",
        nextText: -1,
      },
    ],
  },

  {
    id: 113,
    text:
      "Você se esconde atrás das pilatras do prédio. Cuidado com os barris explosivo.",

    options: [
      {
        text: "Chutar o barril no porco",
        nextText: 115,
      },

      {
        text: "Correr em direção as pernas do porco",
        nextText: 112,
      },
    ],
  },

  {
    id: 114,
    text: "A arma está em suas mãos. Finalize o porco.",
    sound: "./sounds/seeya.mp3",

    options: [
      {
        text: "ATIRAR!",
        nextText: 116,
      },
    ],
  },

  {
    id: 115,
    text:
      "Sem pensar, Pigma atira no Barril que vem em direção a ele e acaba sendo atingido pela explosão. A arma é atirada em direção ao chão",
    msc: "./sounds/explosao.mp3",

    options: [
      {
        text: "Pegue a arma",
        nextText: 114,
      },
    ],
  },

  {
    id: 116,
    text:
      "Seus últimos golpes desarmam o chefe de toda noção a realidade que lhe resta. Ele sabe que é seu fim. O resultado da briga acabou gerando faíscas e poças de gasolina. Você percebe o que ele quer, mas já é tarde. Se ele não pode ter a mulher que ama, ninguém mais tera. Foi necessário um isqueiro para transformar o local em um inferno. ",

    options: [
      {
        text: "Continuar",
        nextText: 117,
      },
    ],
  },

  {
    id: 117,
    text:
      "Você agarra a garota desacordada e corre em direção ao sistema de tubos que levam os minérios da fábrica direto para a parte externa do local. Vocês pulam no sistema de tubos e esperam pelo melhor.",

    options: [
      {
        text: "Continuar",
        nextText: 118,
      },
    ],
  },

  {
    id: 118,
    text: "A fábrica está em chamas",

    options: [
      {
        text: "Continuar",
        nextText: 120,
      },
    ],
  },

  {
    id: 120,
    text:
      "A garota desacordada dorme no banco passageiro do carro. Quem poderia imaginar? Ela poderia estar morta e nem ao menos tem consciência disso. O dia foi terrível, mas você conseguiu tirar algo bom disso tudo (embora esteja pensando em como vai explicar a situação quando a garota acordar).",
    img: "./Imagens/andando.gif",
    options: [
      {
        text: "Continuar",
        nextText: 122,
      },
    ],
  },

  {
    id: 122,
    text:
      "Nunca se sabe como pequenos atos podem mudar uma vida inteira. Essa noite você mudou o rumo de uma vida, mas o que poderia ter acontecido se você tivesse feito outras escolhas?",
    img: "./Imagens/andando.gif",

    options: [
      {
        text: "Continuar",
        nextText: 123,
      },
    ],
  },
  {
    id: 123,
    text: "Só o tempo dirá.",
    img: "./Imagens/andando.gif",

    options: [
      {
        text: "Continuar",
        nextText: 40,
      },
    ],
  },

  /* FIM 2*/
  /* COMEÇO LINHA 3 */

  {
    id: 124,
    text:
      "Você sabe que provavelmente é mais uma tentativa fracassada de sequestro. Eles nunca conseguem chegar perto da área dos ricos. Você levanta e decide voltar para casa. Você já está cansado de ter seus planos frustrados e não precisa de outro problema na vida.",

    options: [
      {
        text: "Continuar",
        nextText: 125,
      },
    ],
  },

  {
    id: 125,
    text:
      "Ruas imundas e pessoas dormindo na sarjeta. Será que um dia foi diferente? Animais estranhos rondam pelo caminho. Contam por aí que um dia já foram conhecidos como o melhor amigo do homem. Você encontra uma garagem a céu aberto e decide pular a grade. ",

    options: [
      {
        text: "Continuar",
        nextText: 127,
      },
    ],
  },

  {
    id: 127,
    text:
      "Ao se aproximar da saída da garagem você escuta um grito. Uma mulher grita por socorro enquanto está sendo roubada a mão armada por um membro da gangue intitulada “The Warriors”. Todos na cidade conhecem a gangue e sabem que não interagir com eles é a melhor opção. Você não é como todos eles e pode decidir balançar um pouco com a ordem das coisas. Mas você sabe que as consequências de um ato altruísta pode não ser a melhor opção a longo prazo.",
    msc: "./sounds/gscream.wav",
    options: [
      {
        text: "Ajudar",
        nextText: 128,
      },

      {
        text: "Ignorar",
        nextText: 129,
      },
    ],
  },

  {
    id: 128,
    text:
      "O bandido foi facilmente derrotado. Ele não conseguiu nem ao menos levantar o punho antes de ser apagado por você. A mulher tenta agradecer enquanto segura o nervosismo.",
    msc: "./sounds/soco2.wav",
    options: [
      {
        text: "Continuar",
        nextText: 130,
      },
    ],
  },

  {
    id: 129,
    text:
      "Você não aguenta mais essa cidade. Quer saber? Não ajudar deve ser o melhor a se fazer. Você ignora a cena e continua seu caminho de paz em direção a sua casa. Talvez você esteja morto por dentro.",

    options: [
      {
        text: "Continuar",
        nextText: 40,
      },
    ],
  },

  {
    id: 130,
    text:
      "Ela parece cansada, falou que só estava procurando um lugar para comer, pois trabalhava em uma fábrica e não voltava para casa havia 4 dias. A mulher está perdida e não sabe para onde ir. ",

    options: [
      {
        text: "Ajudar",
        nextText: 131,
      },

      {
        text: "Boa sorte",
        nextText: 40,
      },
    ],
  },

  {
    id: 131,
    text:
      "Você sabe como a vida aqui é difícil. Acabou decidindo levá-la a um lugar para comer. Pelo menos assim você teria cumprido a sua cota de boas ações da semana.",

    options: [
      {
        text: "Continuar",
        nextText: 132,
      },
    ],
  },

  {
    id: 132,
    text:
      "Entre pratos de comida e xícaras quentes de café, vocês acabam notando que ambos viveram vidas muito semelhantes. Ambos vem de uma família controladora, que sempre queria decidir o que era melhor para quem. Na verdade, faz muito tempo que você não conhece alguém assim.",
    img: "./Imanges/dinner.png",
    options: [
      {
        text: "Continuar",
        nextText: 133,
      },
    ],
  },

  {
    id: 133,
    text:
      "Tudo está ótimo, mas o momento só dura até o um celular tocar (quem ainda usa celular nesses tempos? Alguém aqui está sendo rastreada). É a polícia. Após uma breve conversa a mulher é informada que há algum tempo o carro da filha foi encontrado destruído e a garota estava desaparecida.",
    img: "./Imanges/dinner.png",
    options: [
      {
        text: "Continuar",
        nextText: 135,
      },
    ],
  },

  {
    id: 135,
    text:
      "O ar fica carregado. Entre choros de desespero e tentativas para acalmar uma mãe sem esperanças, você acaba pedindo uma foto da garota. ",
    img: "./Imanges/dinner.png",
    options: [
      {
        text: "Continuar",
        nextText: 136,
      },
    ],
  },

  {
    id: 136,
    text:
      "No momento em que a mãe mostra a foto, você lamenta não poder voltar no tempo. Todas as descrições da menina do bar batem com a foto. Mas por quê sequestrariam uma mulher da zona pobre da cidade? Você lamenta as escolhas erradas que fez nessa noite.",
    img: "./Imanges/dinner.png",
    options: [
      {
        text: "Continuar",
        nextText: 137,
      },
    ],
  },

  {
    id: 137,
    text:
      "Você decide tenta ajudar e explica para a mulher que pode ter uma pista de onde a garota esteja.",
    img: "./Imanges/dinner.png",
    options: [
      {
        text: "Investigar",
        nextText: 138,
      },
    ],
  },

  {
    id: 138,
    text:
      "Após ser questionado sobre como isso seria possível, você responde a verdade. Você teve a chance de prevenir isso mas acabou deixando a chance passar. Você explica o ocorrido.",
    img: "./Imanges/dinner.png",
    options: [
      {
        text: "Continuar",
        nextText: 139,
      },
    ],
  },

  {
    id: 139,
    text:
      "A mulher está arrasada. Ao escutar todas as palavras que ela tem a dizer sobre você e seu caráter, você decide procurar pistas.",
    img: "./Imanges/dinner.png",
    options: [
      {
        text: "Continuar",
        nextText: 141,
      },
    ],
  },

  {
    id: 141,
    text:
      "Depois de 4 horas você consegue rastrear os bêbados do bar e usa as informações deles para chegar em um apartamento.",
    img: "./Imanges/quarto.png",
    options: [
      {
        text: "Continuar",
        nextText: 142,
      },
    ],
  },

  {
    id: 142,
    text:
      "A polícia está no local. Já é tarde demais. Os inexperientes investigadores da polícia estão tomando conta do lugar e você não tem a autorização necessária para entrar. Parece que houve um assassinato lá dentro e a casa já foi revirada pela própria polícia para procurar pistas.",
    img: "./Imanges/quarto.png",
    options: [
      {
        text: "Continuar",
        nextText: 143,
      },
    ],
  },

  {
    id: 143,
    text:
      "Infeliz por descobrir o resultado de seus atos, você caminha pelas sombras da cidade, bêbado e sem esperanças.",
    img: "./Imanges/quarto.png",
    options: [
      {
        text: "Continuar",
        nextText: 144,
      },
    ],
  },

  {
    id: 144,
    text:
      "Como o fim de um filme trágico, você acaba não percebendo as luzes fortes que vem da estrada e é atropelado.",
    sound: "./sounds/batida.wav",

    options: [
      {
        text: "Continuar",
        nextText: 145,
      },
    ],
  },

  {
    id: 145,
    text:
      "É o fim. Entre todas as escolhas disponíveis, você tomou as piores possíveis.",

    options: [
      {
        text: "Continuar",
        nextText: 146,
      },
    ],
  },

  {
    id: 146,
    text: "Descanse em paz.",

    options: [
      {
        text: "Fim",
        nextText: -1,
      },
    ],
  },
];

/* {
  id: 1,
  text: "exemplo",

  options: [
    {
      text: "Continuar",
      nextText: 2,
    },
  ],
}, */
