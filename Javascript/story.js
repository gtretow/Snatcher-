const textNodes = [
  {
    id: 1,
    img: "./Imagens/cidade1.gif",
    text: "Astra, 24,07,20xx 10:47",

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
    text:
      "As ruas são escuras parecem um labirinto. De alguma maneira você encontrou uma bifurcação entre as vielas da cidade para sair da zona do bar e precisa escolher para onde seguir",

    options: [
      {
        text: "Escolher esquerda",
        nextText: 8,
      },
      {
        text: "Escolher direita",
        nextText: 7,
      },
    ],
  },

  {
    id: 8,
    text:
      "Ruas sujas, bêbados dormindo na sarjeta e animais estranhos que um dia foram conhecidos como cachorros. Você encontra uma garagem a céu aberto e decide pular a grade. Na esperança de encontrar um amigo policial, um táxi, ou até mesmo um ladrão de carros que possa te dar uma carona. Que diferença faz? Provavelmente seria um plano entre o ladrão e o dono do carro para ganhar dinheiro com seguro.",

    options: [
      {
        text: "Continuar",
        nextText: 9,
      },
    ],
  },

  {
    id: 9,
    text:
      "Ao se aproximar da saída da garagem você escuta um grito. Uma mulher grita por socorro enquanto está sendo roubada a mão armada por um membro de gangue. Todos na cidade conhecem a gangue em questão. “The Rogues”é como eles gostam de serem chamados. A comunidade local sabe que não interagir com eles é a melhor opção. Você não é como todos eles e pode decidir balançar um pouco com a ordem das coisas. Mas você sabe que as consequências de um ato altruísta pode não ser a melhor opção a longo prazo.",

    options: [
      {
        text: "Ajudar",
        nextText: 10,
      },
      {
        text: "Seguir seu caminho",
        nextText: 9,
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
      "A vítima, desesperada, diz que só queria se proteger. Você precisa tirá-la rápido de lá. A partir do momento em que o disparo foi efetuado, você sabia que a noite não seria fácil. Em breve o local estaria repleto de membros da The Rogues e você precisa aproveitar o tempo que tem. Vocês entram no carro da vítima.",

    options: [
      {
        text: "Continuar",
        nextText: 13,
      },
    ],
  },

  {
    id: 13,
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
    text:
      "Parado próximo de um semáforo você percebe que tem algo errado. A cidade está normal. Como seria possível que o fim do mundo estivesse silencioso após a morte de um membro de gangue? Infelizmente a pergunta não permaneceu sem resposta por muito tempo.  Carros aparecem pelas ruas laterais e fecham completamente o seu caminho. A adrenalina já está atingindo ápice dentro de você. Você se sente invencível. Suas escolhes se resumem a duas: ",

    options: [
      {
        text: "Lutar",
        nextText: 14,
      },

      {
        text: "Correr para o metrô",
        nextText: 15,
      },
    ],
  },

  {
    id: 15,
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
    text:
      "Você tem 2 balas. Derrote TODOS os inimigos! Dois homens armados com revólveres. Dois armados com facas e 1 homem com armado molotov. Homens armados com armas de foco e molotovs são mais lentos, mas podem causar um estrago maior. Homens armados com facas são rápido, mas você da conta dos dois sozinho.",

    options: [
      {
        text:
          "Atirar nos homens armados, cuidar do capangas com facas e finalizar o inimigo com molotov.",
        nextText: 18,
      },
      {
        text:
          "Atirar em um homem armado e no inimigo com molotov. Cuidar dos outros desarmado. ",
        nextText: 19,
      },
      {
        text:
          "Atirar nos homens armados com facas e cuidar dos outros desarmado.",
        nextText: 18,
      },
    ],
  },

  {
    id: 19,
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
    text:
      "Infelizmente a viagem não será tranquila. Alguns membros da Rogue conseguiram entrar no metrô com vocês. Você respira fundo e se prepara para enfrentar um vagão inteiro de inimigos que está vindo atrás de você. ",

    options: [
      {
        text: "Escolha a hora certa para fugir e para lutar",
        nextText: 21,
      },
    ],
  },

  {
    id: 22,
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
        nextText: 41,
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
    text:
      " O que você tem a perder? Talvez você só precisar descarregar sua raiva em alguém. Rapidamente você salta no meio dos três enquanto diz para o dono do bar que é a última vez que você o ajuda. ",

    options: [
      {
        text: "Continuar",
        nextText: 47,
      },
    ],
  },

  {
    id: 47,
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
    text:
      "Você sabe que provavelmente foi mais um sequestro que deu errado, afinal, as gangues não consegue chegar nas áreas onde os ricos vivem. Mesmo assim, você tem a opção de ir atrás disso. Vale a pena?",

    options: [
      {
        text: "Ir atrás de pistas",
        nextText: 50,
      },
      {
        text: "Deixar para lá",
        nextText: 2,
      },
    ],
  },

  {
    id: 50,
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
    text:
      "Ao bater na porta para chamar por alguém, você nota que a porta foi arrombada e decide entrar. Ao entrar no local, você percebe que o cheiro estranho era de um corpo que teria morrido há algumas horas.",

    options: [
      {
        text: "Procure TODAS as pistas sobre o acontecido",
        nextText: 54,
      },
    ],
  },

  {
    id: 54,
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
        requiredState: (currentState) => currentState.chaves,
        requiredState: (currentState) => currentState.anotacoes,
        requiredState: (currentState) => currentState.senha,
        setState: { chaves: false },
        setState: { anotacoes: false },
        setState: { senha: false },
        nextText: 64,
      },
    ],
  },

  {
    id: 55,
    text: "A cozinha imunda e cheia de insetos não parece ter muita coisa.",

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
    text:
      "Claro. Como esperar organização de alguém que vive no meio do lixo? Você encontrou a carteira corpo dentro da gelaidera. Nela você encontra a senha para o computador",

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
        requiredState: (currentState) => currentState.chaves,
        requiredState: (currentState) => currentState.anotacoes,
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
    text: "",

    options: [
      {
        img: "./Imagens/andando.gif",
        text: "Acelerar",
        nextText: 68,
      },
    ],
  },

  {
    id: 68,
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
    text: "Passe pelos guardas sem ser percebido",

    options: [
      {
        text: "Continuar",
        nextText: 71,
      },
    ],
  },

  {
    id: 71,
    text:
      "Seu objetivo é segundo andar. A sala principal está cheia de guardas.",

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
        nextText: 75,
      },
    ],
  },

  {
    /* capturado */ id: 73,
    text: "Você foi capturado.",

    options: [
      {
        text: "Continuar",
        nextText: 71,
      },
    ],
  },

  {
    id: 74,
    text: "A sala de máquinas é um local com pouca iluminação. Existem guardas no local.",
  
    options: [
      {
        text: "Continuar",
        nextText: 2,
      },
    ],
  },

  {
    id: 75,
    text: "exemplo",
  
    options: [
      {
        text: "Continuar",
        nextText: 2,
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
