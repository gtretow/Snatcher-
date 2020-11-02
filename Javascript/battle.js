/* //<==== PLAYER INFORMATION =====>
let player = {
  name: "Gillian",

  location: battle,

  health: 100,

  strength: 6,

  hasHealth: function () {
    if (this.health < 0) {
      this.health = 0;
    }
  },
};

//<===== Inimigos ======>
enemies = [
  {
    idtag: 0,
    name: "Capanga bêbado",

    health: 25,
    power: 2,
    strength: 1,
    speech: "Você vai pagar!!",
  },
  {
    idtag: 1,
    name: "Capanga com faca",

    health: 50,
    power: 3,
    strength: 3,

    speech: "Vou te arrebentar!",
  },
  {
    idtag: 2,
    name: "Capanga com metralhadora",

    health: 30,
    power: 4,
    strength: 4,

    speech: "Tu vai virar peneira!!",
  },
  {
    idtag: 3,
    name: "Capanga com molotov",

    health: 30,
    power: 5,
    strength: 5,

    speech: "Vai pro inferno!!",
  },
  {
    idtag: 4,
    name: "Pigma",

    health: 50,
    power: 5,
    strength: 5,

    speech: "Acabou pra você *ronc*",
  },
];
 */