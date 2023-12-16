dataSetVersion = "2023-12-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "games",
    tooltip: "Check this to restrict to certain games.",
    checked: false,
    sub: [
	  { name: "Minna de Puyo Puyo", key: "minna" },
	  { name: "Fever 1", key: "fev" },
      { name: "Fever 2", key: "fev2" },
	  { name: "15th Anniversary", key: "15th" },
	  { name: "Puyo 7", key: "7" },
      { name: "20th Anniversary", key: "20th" },
	  { name: "20th Anniversary Skins", key: "20thsk" },
	  { name: "Puyo Tetris", key: "tet" },
	  { name: "Chronicles", key: "chron" },
	  { name: "Chronicles Skill Exclusive", key: "chronsk" },
	  { name: "Champions", key: "champ" },
	  { name: "Puyo Tetris 2", key: "tet2" },
	  { name: "Puyo Tetris 2 DLC", key: "tet2dlc" },
	  { name: "Quest Exclusive", key: "quest" }
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
    name: "Remove Variations",
    key: "variation",
    tooltip: "Check this to remove characters that are just skins unless they're confirmed seperate characters."
  },
  {
    name: "Remove Non-Playable Characters",
    key: "npc",
    tooltip: "Check this to remove characters you can't play as.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
    {
      name: "Arle Nadja",
      img: "arle.png",
      opts: {
        games: ["minna", "fev", "fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["comp"]
      }
    },
	{
      name: "Rulue",
      img: "rulue.png",
      opts: {
        games: ["minna", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["comp"]
      }
    },
	{
      name: "Schezo Wegey",
      img: "schezo.png",
      opts: {
        games: ["minna", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["comp"]
      }
    },
	{
      name: "Carbuncle",
      img: "carbuncle.png",
      opts: {
        games: ["minna", "fev", "fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["comp"]
      }
    },
	{
      name: "Satan(Dark Prince)",
      img: "satan.png",
      opts: {
        games: ["minna", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["comp"]
      }
    },
	{
      name: "Draco Centauros",
      img: "draco.png",
      opts: {
        games: ["minna", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["comp"]
      }
    },
	{
      name: "Witch",
      img: "witch.png",
      opts: {
        games: ["minna", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["comp"]
      }
    },
	{
      name: "Suketoudara",
      img: "suke.png",
      opts: {
        games: ["minna", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["comp"]
      }
    },
	{
      name: "Amitie",
      img: "amitie.png",
      opts: {
        games: ["fev", "fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["fev"]
      }
    },
	{
      name: "Raffina",
      img: "raffina.png",
      opts: {
        games: ["fev", "fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["fev"]
      }
    },
	{
      name: "Sig",
      img: "sig.png",
      opts: {
        games: ["fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["fev"]
      }
    },
	{
      name: "Ms. Accord",
      img: "accord.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc"],
		eras: ["fev"]
      }
    },
	{
      name: "Klug",
      img: "klug.png",
      opts: {
        games: ["fev", "fev2", "15th", "7", "20th", "tet", "chron", "tet2"],
		eras: ["fev"]
      }
    },
	{
      name: "Lidelle",
      img: "lidelle.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc"],
		eras: ["fev"]
      }
    },
	{
      name: "Lemres",
      img: "lemres.png",
      opts: {
        games: ["fev2", "15th", "7", "20th", "tet", "chron", "tet2"],
		eras: ["fev"]
      }
    },
	{
      name: "Feli",
      img: "feli.png",
      opts: {
        games: ["fev2", "15th", "7", "20th", "tet", "chron", "tet2"],
		eras: ["fev"]
      }
    },
	{
      name: "Ocean Prince",
      img: "oceanprince.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc"],
		eras: ["fev"]
      }
    },
	{
      name: "Yu & Rei",
      img: "yurei.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc"],
		eras: ["fev"]
      }
    },
	{
      name: "Onion Pixie",
      img: "onionpixie.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chronsk"],
		eras: ["fev"]
      }
    },
	{
      name: "Donguri Gaeru",
      img: "dongurigaeru.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chronsk"],
		eras: ["fev"]
      }
    },
	{
      name: "Ringo Ando",
      img: "ringo.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Maguro Sasaki",
      img: "maguro.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Risukuma",
      img: "risukuma.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Ecolo",
      img: "ecolo.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Red Amitie",
      img: "redamitie.png",
      opts: {
        games: ["20thsk"],
		eras: ["fev"],
		variation: true
      }
    },
	{
      name: "Black/Dark Sig",
      img: "darksig.png",
      opts: {
        games: ["20thsk"],
		eras: ["fev"],
		variation: true
      }
    },
	{
      name: "Yellow Satan(Onesie Prince)",
      img: "onesieprince.png",
      opts: {
        games: ["20thsk"],
		eras: ["comp"],
		variation: true
      }
    },
	{
      name: "Unusual/Alter Ecolo",
      img: "alterecolo.png",
      opts: {
        games: ["20thsk"],
		eras: ["sega"],
		variation: true
      }
    },
	{
      name: "White/Angelic Feli",
      img: "angelicfeli.png",
      opts: {
        games: ["20thsk"],
		eras: ["fev"],
		variation: true
      }
    },
	{
      name: "Strange/Possessed Klug",
      img: "aya.png",
      opts: {
        games: ["fev2", "20thsk", "tet2dlc"],
		eras: ["fev"]
      }
    },
	{
      name: "Dark Arle",
      img: "darkle.png",
      opts: {
        games: ["7"],
		eras: ["comp", "sega"],
		variation: true
      }
    },
	{
      name: "Nasu Grave",
      img: "nasugrave.png",
      opts: {
        games: ["15th"],
		eras: ["comp"]
      }
    },
	{
      name: "Zoh Daimaoh",
      img: "zohdaimaoh.png",
      opts: {
        games: ["minna", "15th"],
		eras: ["comp"]
      }
    },
	{
      name: "Baldanders",
      img: "baldanders.png",
      opts: {
        games: ["fev2", "15th"],
		eras: ["fev"]
      }
    },
	{
      name: "Dapper/Oshare Bones",
      img: "oshare.png",
      opts: {
        games: ["fev", "fev2", "15th"],
		eras: ["fev"]
      }
    },
	{
      name: "Akuma",
      img: "akuma.png",
      opts: {
        games: ["fev2", "15th"],
		eras: ["fev"]
      }
    },
	{
      name: "Tee",
      img: "tee.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Ess",
      img: "ess.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "O",
      img: "o.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Jay & Elle",
      img: "jayelle.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Zed",
      img: "zed.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Ai",
      img: "ai.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Ex",
      img: "ex.png",
      opts: {
        games: ["tet", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Ally",
      img: "ally.png",
      opts: {
        games: ["chron", "tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Rafisol",
      img: "rafisol.png",
      opts: {
        games: ["chron", "tet2dlc"],
		eras: ["sega"]
      }
    },
	{
      name: "Ragnus",
      img: "ragnus.png",
      opts: {
        games: ["minna", "chronsk", "tet2dlc"],
		eras: ["comp"]
      }
    },
	{
      name: "Harpy",
      img: "harpy.png",
      opts: {
        games: ["minna", "chronsk", "champ", "tet2dlc"],
		eras: ["comp"]
      }
    },
	{
      name: "Serilly",
      img: "serilly.png",
      opts: {
        games: ["minna", "chronsk", "champ", "tet2dlc"],
		eras: ["comp"]
      }
    },
	{
      name: "Alex",
      img: "alex.png",
      opts: {
        games: ["champ"],
		eras: ["quest"]
      }
    },
	{
      name: "Ciel",
      img: "ciel.png",
      opts: {
        games: ["champ"],
		eras: ["quest"]
      }
    },
	{
      name: "Hartmann",
      img: "hartmann.png",
      opts: {
        games: ["champ"],
		eras: ["quest"]
      }
    },
	{
      name: "Hed",
      img: "hed.png",
      opts: {
        games: ["champ"],
		eras: ["quest"]
      }
    },
	{
      name: "Penglai",
      img: "penglai.png",
      opts: {
        games: ["champ"],
		eras: ["quest"]
      }
    },
	{
      name: "Sultana",
      img: "sultana.png",
      opts: {
        games: ["champ"],
		eras: ["quest"]
      }
    },
	{
      name: "Paprisu",
      img: "paprisu.png",
      opts: {
        games: ["champ"],
		eras: ["quest"]
      }
    },
	{
      name: "Valkyrie Arle",
      img: "valkarle.png",
      opts: {
        games: ["champ"],
		eras: ["comp", "quest"],
		variation: true
      }
    },
	{
      name: "Dark Marle",
      img: "darkmarle.png",
      opts: {
        games: ["tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Marle",
      img: "marle.png",
      opts: {
        games: ["tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Squares",
      img: "squares.png",
      opts: {
        games: ["tet2"],
		eras: ["sega"]
      }
    },
	{
      name: "Sonic",
      img: "sonic.png",
      opts: {
        games: ["tet2dlc"],
		eras: ["guest"]
      }
    },
	{
      name: "Legamünt",
      img: "legamunt.png",
      opts: {
        games: ["tet2dlc"]
      }
    },
	{
      name: "Rozatte",
      img: "rozatte.png",
      opts: {
        games: ["tet2dlc"]
      }
    },
	{
      name: "Skeleton T",
      img: "skeletont.png",
      opts: {
        games: ["minna", "7"],
		eras: ["comp"]
      }
    },
	{
      name: "Incubus",
      img: "incubus.png",
      opts: {
        games: ["minna"],
		eras: ["comp"]
      }
    },
	{
      name: "Kikimora",
      img: "kikimora.png",
      opts: {
        games: ["minna"],
		eras: ["comp"]
      }
    },
	{
      name: "Nohoho",
      img: "nohoho.png",
      opts: {
        games: ["minna"],
		eras: ["comp"]
      }
    },
	{
      name: "Minotauros",
      img: "minotaur.png",
      opts: {
        games: ["minna"],
		eras: ["comp"]
      }
    },
	{
      name: "Tartar",
      img: "tartar.png",
      opts: {
        games: ["fev", "fev2"],
		eras: ["fev"]
      }
    },
	{
      name: "Hoho",
      img: "hoho.png",
      opts: {
        games: ["fev", "fev2"],
		eras: ["fev"]
      }
    },
	{
      name: "Frankensteins",
      img: "frankensteins.png",
      opts: {
        games: ["fev", "fev2"],
		eras: ["fev"]
      }
    },
	{
      name: "Black Popoi",
      img: "blackpopoi.png",
      opts: {
        games: ["fev"],
		eras: ["fev"]
      }
    },
	{
      name: "Gogotte",
      img: "gogotte.png",
      opts: {
        games: ["fev2"],
		eras: ["fev"]
      }
    },
	{
      name: "Oniko",
      img: "oniko.png",
      opts: {
        games: ["fev2", "15th", "20th", "tet"],
		eras: ["fev"],
		npc: true
      }
    },
	{
      name: "Otomo",
      img: "otomo.png",
      opts: {
        games: ["fev2", "15th", "20th"],
		eras: ["fev"],
		npc: true
      }
    },
	{
      name: "Puyo",
      img: "puyo.png",
      opts: {
        games: ["minna", "fev", "fev2", "15th", "7", "20th", "tet", "chron", "champ", "tet2"],
		eras: ["comp", "fev", "sega"],
		npc: true
      }
    },
	{
      name: "Popoi",
      img: "popoi.png",
      opts: {
        games: ["fev", "fev2", "15th", "20th", "chron", "tet2dlc"],
		eras: ["fev"],
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
		variation: true
      }
    },
	{
      name: "Atari",
      img: "atari.png",
      opts: {
        games: ["quest"],
		eras: ["quest"]
      }
    },
	{
      name: "Roquier/Rokia",
      img: "rokia.png",
      opts: {
        games: ["quest"],
		eras: ["quest"]
      }
    },
	{
      name: "Seo",
      img: "seo.png",
      opts: {
        games: ["quest"],
		eras: ["quest"]
      }
    },
	{
      name: "Puubot",
      img: "puu.png",
      opts: {
        games: ["quest"],
		eras: ["quest"]
      }
    },
	{
      name: "Zero",
      img: "zero.png",
      opts: {
        games: ["quest"],
		eras: ["quest"]
      }
    },
	{
      name: "Hachi",
      img: "hachi.png",
      opts: {
        games: ["quest"],
		eras: ["quest"]
      }
    }
];
