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
	  { name: "Puyo Tetris 2 DLC", key: "tet2dlc" }
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
    tooltip: "Check this to remove characters that are just skins unless they're confirmed seperate characters.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
    {
      name: "Arle Nadja",
      img: "arle.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Rulue",
      img: "rulue.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Schezo Wegey",
      img: "schezo.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Carbuncle",
      img: "carbuncle.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Satan(Dark Prince)",
      img: "satan.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Draco Centauros",
      img: "draco.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Witch",
      img: "witch.png",
      opts: {
        games: ["20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Suketoudara",
      img: "suke.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Amitie",
      img: "amitie.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Raffina",
      img: "raffina.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Sig",
      img: "sig.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Ms. Accord",
      img: "accord.png",
      opts: {
        games: ["15th", "20th", "chron", "tet2dlc"]
      }
    },
	{
      name: "Klug",
      img: "klug.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "tet2"]
      }
    },
	{
      name: "Lidelle",
      img: "lidelle.png",
      opts: {
        games: ["15th", "20th", "chron", "tet2dlc"]
      }
    },
	{
      name: "Lemres",
      img: "lemres.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "tet2"]
      }
    },
	{
      name: "Feli",
      img: "feli.png",
      opts: {
        games: ["15th", "7", "20th", "tet", "chron", "tet2"]
      }
    },
	{
      name: "Ocean Prince",
      img: "oceanprince.png",
      opts: {
        games: ["15th", "20th", "chron", "tet2dlc"]
      }
    },
	{
      name: "Yu & Rei",
      img: "yurei.png",
      opts: {
        games: ["15th", "20th", "chron", "tet2dlc"]
      }
    },
	{
      name: "Onion Pixie",
      img: "onionpixie.png",
      opts: {
        games: ["15th", "20th", "chronsk"]
      }
    },
	{
      name: "Donguri Gaeru",
      img: "dongurigaeru.png",
      opts: {
        games: ["15th", "20th", "chronsk"]
      }
    },
	{
      name: "Ringo Ando",
      img: "ringo.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Maguro Sasaki",
      img: "maguro.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Risukuma",
      img: "risukuma.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "champ", "tet2"]
      }
    },
	{
      name: "Ecolo",
      img: "ecolo.png",
      opts: {
        games: ["7", "20th", "tet", "chron", "tet2"]
      }
    },
	{
      name: "Red Amitie",
      img: "redamitie.png",
      opts: {
        games: ["20thsk"]
      }
    },
	{
      name: "Black/Dark Sig",
      img: "darksig.png",
      opts: {
        games: ["20thsk"]
      }
    },
	{
      name: "Yellow Satan(Onesie Prince)",
      img: "onesieprince.png",
      opts: {
        games: ["20thsk"]
      }
    },
	{
      name: "Unusual/Alter Ecolo",
      img: "alterecolo.png",
      opts: {
        games: ["20thsk"]
      }
    },
	{
      name: "White/Angelic Feli",
      img: "angelicfeli.png",
      opts: {
        games: ["20thsk"]
      }
    },
	{
      name: "Strange/Possessed Klug",
      img: "aya.png",
      opts: {
        games: ["20thsk", "tet2dlc"]
      }
    },
	{
      name: "Dark Arle",
      img: "darkle.png",
      opts: {
        games: ["7"]
      }
    },
	{
      name: "Nasu Grave",
      img: "nasugrave.png",
      opts: {
        games: ["15th"]
      }
    },
	{
      name: "Zoh Daimaoh",
      img: "zohdaimaoh.png",
      opts: {
        games: ["15th"]
      }
    },
	{
      name: "Baldanders",
      img: "baldanders.png",
      opts: {
        games: ["15th"]
      }
    },
	{
      name: "Dapper/Oshare Bones",
      img: "oshare.png",
      opts: {
        games: ["15th"]
      }
    },
	{
      name: "Akuma",
      img: "akuma.png",
      opts: {
        games: ["15th"]
      }
    },
	{
      name: "Tee",
      img: "tee.png",
      opts: {
        games: ["tet", "tet2"]
      }
    },
	{
      name: "Ess",
      img: "ess.png",
      opts: {
        games: ["tet", "tet2"]
      }
    },
	{
      name: "O",
      img: "o.png",
      opts: {
        games: ["tet", "tet2"]
      }
    },
	{
      name: "Jay & Elle",
      img: "jayelle.png",
      opts: {
        games: ["tet", "tet2"]
      }
    },
	{
      name: "Zed",
      img: "zed.png",
      opts: {
        games: ["tet", "tet2"]
      }
    },
	{
      name: "Ai",
      img: "ai.png",
      opts: {
        games: ["tet", "tet2"]
      }
    },
	{
      name: "Ex",
      img: "ex.png",
      opts: {
        games: ["tet", "tet2"]
      }
    },
	{
      name: "Ally",
      img: "ally.png",
      opts: {
        games: ["chron", "tet2"]
      }
    },
	{
      name: "Rafisol",
      img: "rafisol.png",
      opts: {
        games: ["chron", "tet2dlc"]
      }
    },
	{
      name: "Ragnus",
      img: "ragnus.png",
      opts: {
        games: ["chronsk", "tet2dlc"]
      }
    },
	{
      name: "Harpy",
      img: "harpy.png",
      opts: {
        games: ["chronsk", "champ", "tet2dlc"]
      }
    },
	{
      name: "Serilly",
      img: "serilly.png",
      opts: {
        games: ["chronsk", "champ", "tet2dlc"]
      }
    },
	{
      name: "Alex",
      img: "alex.png",
      opts: {
        games: ["champ"]
      }
    },
	{
      name: "Ciel",
      img: "ciel.png",
      opts: {
        games: ["champ"]
      }
    },
	{
      name: "Hartmann",
      img: "hartmann.png",
      opts: {
        games: ["champ"]
      }
    },
	{
      name: "Hed",
      img: "hed.png",
      opts: {
        games: ["champ"]
      }
    },
	{
      name: "Penglai",
      img: "penglai.png",
      opts: {
        games: ["champ"]
      }
    },
	{
      name: "Sultana",
      img: "sultana.png",
      opts: {
        games: ["champ"]
      }
    },
	{
      name: "Paprisu",
      img: "paprisu.png",
      opts: {
        games: ["champ"]
      }
    },
	{
      name: "Valkyrie Arle",
      img: "valkarle.png",
      opts: {
        games: ["champ"]
      }
    },
	{
      name: "Dark Marle",
      img: "darkmarle.png",
      opts: {
        games: ["tet2"]
      }
    },
	{
      name: "Marle",
      img: "marle.png",
      opts: {
        games: ["tet2"]
      }
    },
	{
      name: "Squares",
      img: "squares.png",
      opts: {
        games: ["tet2"]
      }
    },
	{
      name: "Sonic",
      img: "sonic.png",
      opts: {
        games: ["tet2dlc"]
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
        games: ["7"]
      }
    }
];
