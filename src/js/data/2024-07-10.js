dataSetVersion = "2023-12-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "games",
    tooltip: "Check this to restrict to certain games.",
    checked: false,
    sub: [
	  { name: "OPP", key: "opp" },
	  { name: "Tsu", key: "tsu" },
	  { name: "Tsu Saturn/Kettaiban/Perfect Set", key: "tsuex" },
	  { name: "Sun", key: "sun" },
	  { name: "Pocket Sun", key: "pocksun" },
	  { name: "Puyo~n", key: "yon" },
	  { name: "Pocket Puyo~n", key: "pockyon" },
	  { name: "Box", key: "box" },
	  { name: "Minna de Puyo", key: "minna" },
	  { name: "Fever 1", key: "fev" },
      { name: "Fever 2", key: "fev2" },
	  { name: "15th Anniversary", key: "15th" },
	  { name: "Puyo 7", key: "7" },
      { name: "20th Anniversary", key: "20th" },
	  { name: "20th Anniversary Skins", key: "20thsk" },
	  { name: "Tetris", key: "tet" },
	  { name: "Chronicles", key: "chron" },
	  { name: "Chronicles Skill Exclusive", key: "chronsk" },
	  { name: "Champions", key: "champ" },
	  { name: "Tetris 2", key: "tet2" },
	  { name: "Tetris 2 DLC", key: "tet2dlc" },
	  { name: "Puzzle Pop", key: "puzpop" },
	  { name: "Super Puyo Puyo Quest", key: "sppq" }
    ]
  },
  {
    name: "Filter by Eras",
    key: "eras",
    tooltip: "Check this to restrict to eras.",
    checked: false,
    sub: [
	  { name: "Compile/Madou", key: "comp" },
	  { name: "Fever", key: "fev" },
      { name: "7/Chronicles/Tetris", key: "sega" },
	  { name: "Quest", key: "quest" },
	  { name: "Guest Characters", key: "guest" }
    ]
  },
  {
    name: "Filter by Card Color",
    key: "color",
    tooltip: "Check this to restrict to their card colors in Quest.",
    checked: false,
    sub: [
	  { name: "Red", key: "red" },
	  { name: "Blue", key: "blue" },
      { name: "Yellow", key: "yellow" },
	  { name: "Green", key: "green" },
	  { name: "Purple", key: "purple" },
	  { name: "Cardless", key: "cardless" }
    ]
  },
  {
    name: "Remove Variations",
    key: "variation",
    tooltip: "Check this to remove characters that are just skins unless they're confirmed seperate characters.",
    checked: false
  },
  {
    name: "Remove Non-Playable Characters",
    key: "npc",
    tooltip: "Check this to remove characters you can't play as."
  }
];

dataSet[dataSetVersion].characterData = [
    {
      name: "Arle Nadja",
      img: "arle.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "sun", "pocksun", "yon", "pockyon", "box", "minna", "fev", "fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["comp"],
		color: ["blue"]
      }
    },
	{
      name: "Rulue",
      img: "rulue.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "sun", "pocksun", "yon", "pockyon", "box", "minna", "15th", "7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["comp"],
		color: ["red"]
      }
    },
	{
      name: "Schezo Wegey",
      img: "schezo.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "sun", "pocksun", "yon", "pockyon", "box", "minna", "15th", "7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["comp"],
		color: ["purple"]
      }
    },
	{
      name: "Carbuncle",
      img: "carbuncle.png",
      opts: {
        games: ["sun", "pocksun", "yon", "pockyon", "box", "minna", "fev", "fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2", "puzpop", "puzpop"],
		eras: ["comp"],
		color: ["yellow"]
      }
    },
	{
      name: "Satan(Dark Prince)",
      img: "satan.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "sun", "pocksun", "yon", "pockyon", "box", "minna", "15th", "7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["comp"],
		color: ["green"]
      }
    },
	{
      name: "Draco Centauros",
      img: "draco.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "sun", "pocksun", "yon", "pockyon", "box", "minna", "7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["comp"],
		color: ["green"]
      }
    },
	{
      name: "Witch",
      img: "witch.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "sun", "pocksun", "yon", "pockyon", "box", "minna", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["comp"],
		color: ["yellow"]
      }
    },
	{
      name: "Suketoudara",
      img: "suke.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "sun", "pocksun", "yon", "pockyon", "box", "minna", "15th", "7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["comp"],
		color: ["red"]
      }
    },
	{
      name: "Amitie",
      img: "amitie.png",
      opts: {
        games: ["fev", "fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["fev"],
		color: ["red"]
      }
    },
	{
      name: "Raffina",
      img: "raffina.png",
      opts: {
        games: ["fev", "fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["fev"],
		color: ["yellow"]
      }
    },
	{
      name: "Sig",
      img: "sig.png",
      opts: {
        games: ["fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["fev"],
		color: ["blue"]
      }
    },
	{
      name: "Ms. Accord",
      img: "accord.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc", "puzpop"],
		eras: ["fev"],
		color: ["blue"]
      }
    },
	{
      name: "Klug",
      img: "klug.png",
      opts: {
        games: ["fev", "fev2", "15th", "7", "20th", "tet", "chron", "tet2", "puzpop"],
		eras: ["fev"],
		color: ["purple"]
      }
    },
	{
      name: "Lidelle",
      img: "lidelle.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc", "puzpop"],
		eras: ["fev"],
		color: ["green"]
      }
    },
	{
      name: "Lemres",
      img: "lemres.png",
      opts: {
        games: ["fev2", "15th", "7", "20th", "tet", "chron", "tet2", "puzpop"],
		eras: ["fev"],
		color: ["green"]
      }
    },
	{
      name: "Feli",
      img: "feli.png",
      opts: {
        games: ["fev2", "15th", "7", "20th", "tet", "chron", "tet2", "puzpop"],
		eras: ["fev"],
		color: ["purple"]
      }
    },
	{
      name: "Ocean Prince",
      img: "oceanprince.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc", "puzpop"],
		eras: ["fev"],
		color: ["yellow"]
      }
    },
	{
      name: "Yu & Rei",
      img: "yurei.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc", "puzpop"],
		eras: ["fev"],
		color: ["purple"]
      }
    },
	{
      name: "Onion Pixie",
      img: "onionpixie.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chronsk"],
		eras: ["fev"],
		color: ["yellow"]
      }
    },
	{
      name: "Donguri Gaeru",
      img: "dongurigaeru.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chronsk"],
		eras: ["fev"],
		color: ["green"]
      }
    },
	{
      name: "Ringo Ando",
      img: "ringo.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["sega"],
		color: ["red"]
      }
    },
	{
      name: "Maguro Sasaki",
      img: "maguro.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["sega"],
		color: ["blue"]
      }
    },
	{
      name: "Risukuma",
      img: "risukuma.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "champ", "tet2", "puzpop"],
		eras: ["sega"],
		color: ["yellow"]
      }
    },
	{
      name: "Ecolo",
      img: "ecolo.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "tet2", "puzpop"],
		eras: ["sega"],
		color: ["yellow"]
      }
    },
	{
      name: "Red Amitie",
      img: "redamitie.png",
      opts: {
        games: ["20thsk"],
		eras: ["fev"],
		color: ["red", "yellow"],
		variation: true
      }
    },
	{
      name: "Black/Dark Sig",
      img: "darksig.png",
      opts: {
        games: ["20thsk"],
		eras: ["fev"],
		color: ["blue", "red"],
		variation: true
      }
    },
	{
      name: "Yellow Satan(Onesie Prince)",
      img: "onesieprince.png",
      opts: {
        games: ["20thsk"],
		eras: ["comp"],
		color: ["yellow", "green"],
		variation: true
      }
    },
	{
      name: "Unusual/Alter Ecolo",
      img: "alterecolo.png",
      opts: {
        games: ["20thsk"],
		eras: ["sega"],
		color: ["purple", "blue"],
		variation: true
      }
    },
	{
      name: "White/Angelic Feli",
      img: "angelicfeli.png",
      opts: {
        games: ["20thsk"],
		eras: ["fev"],
		color: ["red", "purple"],
		variation: true
      }
    },
	{
      name: "Strange/Possessed Klug",
      img: "aya.png",
      opts: {
        games: ["fev2", "20thsk", "tet2dlc"],
		eras: ["fev"],
		color: ["red"]
      }
    },
	{
      name: "Dark Arle",
      img: "darkle.png",
      opts: {
        games: ["7"],
		eras: ["comp", "sega"],
		color: ["purple"]
      }
    },
	{
      name: "Nasu Grave",
      img: "nasugrave.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "box", "15th"],
		eras: ["comp"],
		color: ["purple"]
      }
    },
	{
      name: "Zoh Daimaoh",
      img: "zohdaimaoh.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "sun", "pocksun", "box", "minna", "15th"],
		eras: ["comp"],
		color: ["yellow"]
      }
    },
	{
      name: "Baldanders",
      img: "baldanders.png",
      opts: {
        games: ["fev2", "15th"],
		eras: ["fev"],
		color: ["blue"]
      }
    },
	{
      name: "Dapper/Oshare Bones",
      img: "oshare.png",
      opts: {
        games: ["fev", "fev2", "15th"],
		eras: ["fev"],
		color: ["red"]
      }
    },
	{
      name: "Akuma",
      img: "akuma.png",
      opts: {
        games: ["fev2", "15th"],
		eras: ["fev"],
		color: ["purple"]
      }
    },
	{
      name: "Tee",
      img: "tee.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"],
		color: ["purple"]
      }
    },
	{
      name: "Ess",
      img: "ess.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"],
		color: ["green"]
      }
    },
	{
      name: "O",
      img: "o.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"],
		color: ["yellow"]
      }
    },
	{
      name: "Jay & Elle",
      img: "jayelle.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"],
		color: ["purple"]
      }
    },
	{
      name: "Zed",
      img: "zed.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"],
		color: ["red"]
      }
    },
	{
      name: "Ai",
      img: "ai.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"],
		color: ["blue"]
      }
    },
	{
      name: "Ex",
      img: "ex.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"],
		color: ["yellow"]
      }
    },
	{
      name: "Ally",
      img: "ally.png",
      opts: {
        games: ["chron", "tet2", "puzpop"],
		eras: ["sega"],
		color: ["green"]
      }
    },
	{
      name: "Rafisol",
      img: "rafisol.png",
      opts: {
        games: ["chron", "tet2dlc", "puzpop"],
		eras: ["sega"],
		color: ["purple", "blue"]
      }
    },
	{
      name: "Ragnus",
      img: "ragnus.png",
      opts: {
        games: ["sun", "pocksun", "pockyon", "box", "minna", "chronsk", "tet2dlc"],
		eras: ["comp"],
		color: ["purple"]
      }
    },
	{
      name: "Harpy",
      img: "harpy.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "sun", "pocksun", "yon", "pockyon", "box", "minna", "chronsk", "champ", "tet2dlc"],
		eras: ["comp"],
		color: ["green"]
      }
    },
	{
      name: "Serilly",
      img: "serilly.png",
      opts: {
        games: ["tsu", "tsuex", "pocksun", "yon", "pockyon", "box", "minna", "chronsk", "champ", "tet2dlc"],
		eras: ["comp"],
		color: ["blue"]
      }
    },
	{
      name: "Alex",
      img: "alex.png",
      opts: {
        games: ["champ"],
		eras: ["quest"],
		color: ["yellow"]
      }
    },
	{
      name: "Ciel",
      img: "ciel.png",
      opts: {
        games: ["champ"],
		eras: ["quest"],
		color: ["blue"]
      }
    },
	{
      name: "Hartmann",
      img: "hartmann.png",
      opts: {
        games: ["champ"],
		eras: ["quest"],
		color: ["green", "red"]
      }
    },
	{
      name: "Hed",
      img: "hed.png",
      opts: {
        games: ["champ"],
		eras: ["quest"],
		color: ["red"]
      }
    },
	{
      name: "Penglai",
      img: "penglai.png",
      opts: {
        games: ["champ"],
		eras: ["quest"],
		color: ["green"]
      }
    },
	{
      name: "Sultana",
      img: "sultana.png",
      opts: {
        games: ["champ"],
		eras: ["quest"],
		color: ["purple", "green"]
      }
    },
	{
      name: "Paprisu",
      img: "paprisu.png",
      opts: {
        games: ["champ"],
		eras: ["quest"],
		color: ["red"]
      }
    },
	{
      name: "Valkyrie Arle",
      img: "valkarle.png",
      opts: {
        games: ["champ"],
		eras: ["comp", "quest"],
		color: ["yellow"],
		variation: true
      }
    },
	{
      name: "Dark Marle",
      img: "darkmarle.png",
      opts: {
        games: ["tet2"],
		eras: ["sega"],
		color: ["blue", "purple"],
		variation: true
      }
    },
	{
      name: "Marle",
      img: "marle.png",
      opts: {
        games: ["tet2"],
		eras: ["sega"],
		color: ["blue", "yellow"]
      }
    },
	{
      name: "Squares",
      img: "squares.png",
      opts: {
        games: ["tet2"],
		eras: ["sega"],
		color: ["purple", "red"]
      }
    },
	{
      name: "Sonic",
      img: "sonic.png",
      opts: {
        games: ["tet2dlc"],
		eras: ["guest"],
		color: ["blue"]
      }
    },
	{
      name: "Legamünt",
      img: "legamunt.png",
      opts: {
        games: ["tet2dlc"],
		color: ["yellow", "purple"]
      }
    },
	{
      name: "Rozatte",
      img: "rozatte.png",
      opts: {
        games: ["tet2dlc"],
		color: ["yellow", "blue"]
      }
    },
	{
      name: "Skeleton T",
      img: "skeletont.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "sun", "pocksun", "yon", "pockyon", "box", "minna", "7"],
		eras: ["comp"],
		color: ["blue"]
      }
    },
	{
      name: "Incubus",
      img: "incubus.png",
      opts: {
        games: ["tsuex", "sun", "pocksun", "pockyon", "box", "minna"],
		eras: ["comp"],
		color: ["purple"]
      }
    },
	{
      name: "Kikimora",
      img: "kikimora.png",
      opts: {
        games: ["sun", "pocksun", "yon", "pockyon", "box", "minna"],
		eras: ["comp"],
		color: ["red"]
      }
    },
	{
      name: "Nohoho",
      img: "nohoho.png",
      opts: {
        games: ["tsu", "tsuex", "sun", "pocksun", "yon", "pockyon", "box", "minna"],
		eras: ["comp"],
		color: ["green"]
      }
    },
	{
      name: "Minotauros",
      img: "minotaur.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "pocksun", "pockyon", "box", "minna"],
		eras: ["comp"],
		color: ["green"]
      }
    },
	{
      name: "Tartar",
      img: "tartar.png",
      opts: {
        games: ["fev", "fev2"],
		eras: ["fev"],
		color: ["blue"]
      }
    },
	{
      name: "Hoho",
      img: "hoho.png",
      opts: {
        games: ["fev", "fev2"],
		eras: ["fev"],
		color: ["red"]
      }
    },
	{
      name: "Frankensteins",
      img: "frankensteins.png",
      opts: {
        games: ["fev", "fev2"],
		eras: ["fev"],
		color: ["yellow"]
      }
    },
	{
      name: "Black Popoi",
      img: "blackpopoi.png",
      opts: {
        games: ["fev"],
		eras: ["fev"],
		color: ["purple"]
      }
    },
	{
      name: "Gogotte",
      img: "gogotte.png",
      opts: {
        games: ["fev2"],
		eras: ["fev"],
		color: ["red"]
      }
    },
	{
      name: "Oniko",
      img: "oniko.png",
      opts: {
        games: ["fev2", "15th", "20th", "tet"],
		eras: ["fev"],
		color: ["red"],
		npc: true
      }
    },
	{
      name: "Otomo",
      img: "otomo.png",
      opts: {
        games: ["fev2", "15th", "20th"],
		eras: ["fev"],
		color: ["green"],
		npc: true
      }
    },
	{
      name: "Puyo",
      img: "puyo.png",
      opts: {
        games: ["minna", "fev", "fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["comp", "fev", "sega"],
		color: ["green"],
		npc: true
      }
    },
	{
      name: "Popoi",
      img: "popoi.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc"],
		eras: ["fev"],
		color: ["purple"],
		variation: true,
		npc: true
      }
    },
	{
      name: "Prince Salde",
      img: "salde.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc"],
		eras: ["fev"],
		color: ["yellow"],
		variation: true
      }
    },
	{
      name: "Atari",
      img: "atari.png",
      opts: {
        games: ["sppq"],
		eras: ["quest"],
		color: ["yellow"]
      }
    },
	{
      name: "Roquier",
      img: "rokia.png",
      opts: {
        games: ["sppq"],
		eras: ["quest"],
		color: ["purple"]
      }
    },
	{
      name: "Seo",
      img: "seo.png",
      opts: {
        games: ["sppq"],
		eras: ["quest"],
		color: ["green"]
      }
    },
	{
      name: "Puubot",
      img: "puu.png",
      opts: {
        games: ["sppq"],
		eras: ["quest"],
		color: ["blue"]
      }
    },
	{
      name: "Zero",
      img: "zero.png",
      opts: {
        games: ["sppq"],
		eras: ["quest"],
		color: ["red"]
      }
    },
	{
      name: "Hachi",
      img: "hachi.png",
      opts: {
        games: ["sppq"],
		eras: ["quest"],
		color: ["blue"]
      }
    },
	{
      name: "Archan",
      img: "archan.png",
      opts: {
        games: ["yon", "pockyon"],
		eras: ["comp"],
		color: ["red"]
      }
    },
	{
      name: "Chico",
      img: "chico.png",
      opts: {
        games: ["yon", "pockyon"],
		eras: ["comp"],
		color: ["yellow"]
      }
    },
	{
      name: "Pierrot",
      img: "pierrot.png",
      opts: {
        games: ["pockyon"],
		eras: ["comp"],
		color: ["red"],
		variation: true
      }
    },
	{
      name: "Doppelganger Arle",
      img: "doppel.png",
      opts: {
        games: ["yon", "pockyon", "box"],
		eras: ["comp"],
		color: ["red"]
      }
    },
	{
      name: "Panotty",
      img: "panotty.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "yon", "pockyon", "box"],
		eras: ["comp"],
		color: ["green"]
      }
    },
	{
      name: "Dragon",
      img: "dragon.png",
      opts: {
        games: ["tsu", "tsuex", "yon", "pockyon", "box"],
		eras: ["comp"],
		color: ["cardless"]
      }
    },
	{
      name: "Choppun",
      img: "choppun.png",
      opts: {
        games: ["sun", "pocksun", "box"],
		eras: ["comp"],
		color: ["cardless"]
      }
    },
	{
      name: "Kodomo Dragon",
      img: "kodomo.png",
      opts: {
        games: ["sun", "pocksun", "box"],
		eras: ["comp"],
		color: ["blue"]
      }
    },
	{
      name: "Honey Bee",
      img: "bee.png",
      opts: {
        games: ["sun", "pocksun", "pockyon", "box"],
		eras: ["comp"],
		color: ["yellow"]
      }
    },
	{
      name: "Scylla",
      img: "scylla.png",
      opts: {
        games: ["tsuex", "pocksun", "box"],
		eras: ["comp"],
		color: ["red"]
      }
    },
	{
      name: "Cait Sith",
      img: "cait.png",
      opts: {
        games: ["tsu", "tsuex", "pocksun", "box"],
		eras: ["comp"],
		color: ["yellow"]
      }
    },
	{
      name: "Will-O-Wisp",
      img: "wisp.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["purple"]
      }
    },
	{
      name: "Sukiya Podes",
      img: "sukiyapodes.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["cardless"]
      }
    },
	{
      name: "Banshee Trio",
      img: "banshee.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["purple"]
      }
    },
	{
      name: "Nomi",
      img: "nomi.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["cardless"]
      }
    },
	{
      name: "Momomo",
      img: "momomo.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["yellow"]
      }
    },
	{
      name: "Baromett",
      img: "baromett.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["red"]
      }
    },
	{
      name: "Mini Zombie",
      img: "minizombie.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["cardless"]
      }
    },
	{
      name: "Fufufu",
      img: "fu.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["green"]
      }
    },
	{
      name: "Mummy",
      img: "mummy.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["yellow"]
      }
    },
	{
      name: "Owlbear",
      img: "owlbear.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["blue"]
      }
    },
	{
      name: "Sasori Man",
      img: "sasori.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["red"]
      }
    },
	{
      name: "Samurai Mole",
      img: "samurai.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["green"]
      }
    },
	{
      name: "Parara",
      img: "parara.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["blue"]
      }
    },
	{
      name: "Zombie",
      img: "zombie.png",
      opts: {
        games: ["opp", "tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["cardless"]
      }
    },
	{
      name: "Pakista",
      img: "pakista.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["blue"]
      }
    },
	{
      name: "Masked Satan",
      img: "maskedsatan.png",
      opts: {
        games: ["tsu", "tsuex", "box"],
		eras: ["comp"],
		color: ["purple", "blue"],
		variation: true
      }
    },
	{
      name: "Lycanthrope",
      img: "lycanthrope.png",
      opts: {
        games: ["tsuex", "box"],
		eras: ["comp"],
		color: ["blue"]
      }
    },
	{
      name: "Cockatrice",
      img: "cockatrice.png",
      opts: {
        games: ["tsuex", "box"],
		eras: ["comp"],
		color: ["purple"]
      }
    },
	{
      name: "Dark Witch",
      img: "darkwitch.png",
      opts: {
        games: ["box"],
		eras: ["comp"],
		color: ["cardless"]
      }
    },
	{
      name: "Doppelganger Schezo",
      img: "doppelschezo.png",
      opts: {
        games: ["box"],
		eras: ["comp"],
		color: ["purple", "red"]
      }
    },
	{
      name: "Succubus",
      img: "succubus.png",
      opts: {
        games: ["box"],
		eras: ["comp"],
		color: ["purple"]
      }
    },
	{
      name: "Black Kikimora",
      img: "blackkikimora.png",
      opts: {
        games: ["box"],
		eras: ["comp"],
		color: ["red"]
      }
    },
	{
      name: "Meena",
      img: "meena.png",
      opts: {
        games: ["puzpop"],
		eras: ["sega"],
		color: ["cardless"]
      }
    },
	{
      name: "Issen",
      img: "issen.png",
      opts: {
        games: ["sppq"],
		eras: ["quest"],
		color: ["purple"]
      }
    }
];
