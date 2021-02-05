// All species, generated from pokemon.csv.
const SPECIES = [
    {
        dexNumber: "001",
        gen: 1,
        name: "Bulbasaur",
        baseStats: [53, 45, 49, 49, 65, 65, 45],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "002",
        gen: 1,
        name: "Ivysaur",
        baseStats: [67.5, 60, 62, 63, 80, 80, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "003",
        gen: 1,
        name: "Venusaur",
        baseStats: [87.5, 80, 82, 83, 100, 100, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "003.1",
        gen: 1,
        name: "Mega Venusaur",
        baseStats: [104.1666667, 80, 100, 123, 122, 120, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: true
    },
    {
        dexNumber: "004",
        gen: 1,
        name: "Charmander",
        baseStats: [51.5, 39, 52, 43, 60, 50, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "005",
        gen: 1,
        name: "Charmeleon",
        baseStats: [67.5, 58, 64, 58, 80, 65, 80],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "006",
        gen: 1,
        name: "Charizard",
        baseStats: [89, 78, 84, 78, 109, 85, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "006.1",
        gen: 1,
        name: "Mega Charizard X",
        baseStats: [105.6666667, 78, 130, 111, 130, 85, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: true
    },
    {
        dexNumber: "006.2",
        gen: 1,
        name: "Mega Charizard Y",
        baseStats: [105.6666667, 78, 104, 78, 159, 115, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: true
    },
    {
        dexNumber: "007",
        gen: 1,
        name: "Squirtle",
        baseStats: [52.33333333, 44, 48, 65, 50, 64, 43],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "008",
        gen: 1,
        name: "Wartortle",
        baseStats: [67.5, 59, 63, 80, 65, 80, 58],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "009",
        gen: 1,
        name: "Blastoise",
        baseStats: [88.33333333, 79, 83, 100, 85, 105, 78],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "009.1",
        gen: 1,
        name: "Mega Blastoise",
        baseStats: [105, 79, 103, 120, 135, 115, 78],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "010",
        gen: 1,
        name: "Caterpie",
        baseStats: [32.5, 45, 30, 35, 20, 20, 45],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "011",
        gen: 1,
        name: "Metapod",
        baseStats: [34.16666667, 50, 20, 55, 25, 25, 30],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "012",
        gen: 1,
        name: "Butterfree",
        baseStats: [64.16666667, 60, 45, 50, 80, 80, 70],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "013",
        gen: 1,
        name: "Weedle",
        baseStats: [32.5, 40, 35, 30, 20, 20, 50],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "014",
        gen: 1,
        name: "Kakuna",
        baseStats: [34.16666667, 45, 25, 50, 25, 25, 35],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "015",
        gen: 1,
        name: "Beedrill",
        baseStats: [64.16666667, 65, 80, 40, 45, 80, 75],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "016",
        gen: 1,
        name: "Pidgey",
        baseStats: [41.83333333, 40, 45, 40, 35, 35, 56],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "017",
        gen: 1,
        name: "Pidgeotto",
        baseStats: [58.16666667, 63, 60, 55, 50, 50, 71],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "018",
        gen: 1,
        name: "Pidgeot",
        baseStats: [78.16666667, 83, 80, 75, 70, 70, 91],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "019",
        gen: 1,
        name: "Rattata",
        baseStats: [42.16666667, 30, 56, 35, 25, 35, 72],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "020",
        gen: 1,
        name: "Raticate",
        baseStats: [68.83333333, 55, 81, 60, 50, 70, 97],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "021",
        gen: 1,
        name: "Spearow",
        baseStats: [43.66666667, 40, 60, 30, 31, 31, 70],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "022",
        gen: 1,
        name: "Fearow",
        baseStats: [73.66666667, 65, 90, 65, 61, 61, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "023",
        gen: 1,
        name: "Ekans",
        baseStats: [48, 35, 60, 44, 40, 54, 55],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "024",
        gen: 1,
        name: "Arbok",
        baseStats: [73, 60, 85, 69, 65, 79, 80],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "025",
        gen: 1,
        name: "Pikachu",
        baseStats: [50, 35, 55, 30, 50, 40, 90],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "026",
        gen: 1,
        name: "Raichu",
        baseStats: [79.16666667, 60, 90, 55, 90, 80, 100],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "027",
        gen: 1,
        name: "Sandshrew",
        baseStats: [50, 50, 75, 85, 20, 30, 40],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "028",
        gen: 1,
        name: "Sandslash",
        baseStats: [75, 75, 100, 110, 45, 55, 65],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "029",
        gen: 1,
        name: "Nidoran-F",
        baseStats: [45.83333333, 55, 47, 52, 40, 40, 41],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "030",
        gen: 1,
        name: "Nidorina",
        baseStats: [60.83333333, 70, 62, 67, 55, 55, 56],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "031",
        gen: 1,
        name: "Nidoqueen",
        baseStats: [82.5, 90, 82, 87, 75, 85, 76],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "032",
        gen: 1,
        name: "Nidoran-M",
        baseStats: [45.5, 46, 57, 40, 40, 40, 50],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "033",
        gen: 1,
        name: "Nidorino",
        baseStats: [60.83333333, 61, 72, 57, 55, 55, 65],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "034",
        gen: 1,
        name: "Nidoking",
        baseStats: [82.5, 81, 92, 77, 85, 75, 85],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "035",
        gen: 1,
        name: "Clefairy",
        baseStats: [53.83333333, 70, 45, 48, 60, 65, 35],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "036",
        gen: 1,
        name: "Clefable",
        baseStats: [78.83333333, 95, 70, 73, 85, 90, 60],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "037",
        gen: 1,
        name: "Vulpix",
        baseStats: [49.83333333, 38, 41, 40, 50, 65, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "038",
        gen: 1,
        name: "Ninetales",
        baseStats: [84.16666667, 73, 76, 75, 81, 100, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "039",
        gen: 1,
        name: "Jigglypuff",
        baseStats: [45, 115, 45, 20, 45, 25, 20],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "040",
        gen: 1,
        name: "Wigglytuff",
        baseStats: [70.83333333, 140, 70, 45, 75, 50, 45],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "041",
        gen: 1,
        name: "Zubat",
        baseStats: [40.83333333, 40, 45, 35, 30, 40, 55],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "042",
        gen: 1,
        name: "Golbat",
        baseStats: [75.83333333, 75, 80, 70, 65, 75, 90],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "043",
        gen: 1,
        name: "Oddish",
        baseStats: [53.33333333, 45, 50, 55, 75, 65, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "044",
        gen: 1,
        name: "Gloom",
        baseStats: [65.83333333, 60, 65, 70, 85, 75, 40],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "045",
        gen: 1,
        name: "Vileplume",
        baseStats: [80, 75, 80, 85, 100, 90, 50],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "046",
        gen: 1,
        name: "Paras",
        baseStats: [47.5, 35, 70, 55, 45, 55, 25],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "047",
        gen: 1,
        name: "Parasect",
        baseStats: [67.5, 60, 95, 80, 60, 80, 30],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "048",
        gen: 1,
        name: "Venonat",
        baseStats: [50.83333333, 60, 55, 50, 40, 55, 45],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "049",
        gen: 1,
        name: "Venomoth",
        baseStats: [75, 70, 65, 60, 90, 75, 90],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "050",
        gen: 1,
        name: "Diglett",
        baseStats: [44.16666667, 10, 55, 25, 35, 45, 95],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "051",
        gen: 1,
        name: "Dugtrio",
        baseStats: [67.5, 35, 80, 50, 50, 70, 120],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "052",
        gen: 1,
        name: "Meowth",
        baseStats: [48.33333333, 40, 45, 35, 40, 40, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "053",
        gen: 1,
        name: "Persian",
        baseStats: [73.33333333, 65, 70, 60, 65, 65, 115],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "054",
        gen: 1,
        name: "Psyduck",
        baseStats: [53.33333333, 50, 52, 48, 65, 50, 55],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "055",
        gen: 1,
        name: "Golduck",
        baseStats: [83.33333333, 80, 82, 78, 95, 80, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "056",
        gen: 1,
        name: "Mankey",
        baseStats: [50.83333333, 40, 80, 35, 35, 45, 70],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "057",
        gen: 1,
        name: "Primeape",
        baseStats: [75.83333333, 65, 105, 60, 60, 70, 95],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "058",
        gen: 1,
        name: "Growlithe",
        baseStats: [58.33333333, 55, 70, 45, 70, 50, 60],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "059",
        gen: 1,
        name: "Arcanine",
        baseStats: [92.5, 90, 110, 80, 100, 80, 95],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "060",
        gen: 1,
        name: "Poliwag",
        baseStats: [50, 40, 50, 40, 40, 40, 90],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "061",
        gen: 1,
        name: "Poliwhirl",
        baseStats: [64.16666667, 65, 65, 65, 50, 50, 90],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "062",
        gen: 1,
        name: "Poliwrath",
        baseStats: [83.33333333, 90, 85, 95, 70, 90, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "063",
        gen: 1,
        name: "Abra",
        baseStats: [51.66666667, 25, 20, 15, 105, 55, 90],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "064",
        gen: 1,
        name: "Kadabra",
        baseStats: [66.66666667, 40, 35, 30, 120, 70, 105],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "065",
        gen: 1,
        name: "Alakazam",
        baseStats: [81.66666667, 55, 50, 45, 135, 85, 120],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "065.1",
        gen: 1,
        name: "Mega Alakazam",
        baseStats: [98.33333333, 55, 50, 65, 175, 95, 150],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "066",
        gen: 1,
        name: "Machop",
        baseStats: [50.83333333, 70, 80, 50, 35, 35, 35],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "067",
        gen: 1,
        name: "Machoke",
        baseStats: [67.5, 80, 100, 70, 50, 60, 45],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "068",
        gen: 1,
        name: "Machamp",
        baseStats: [84.16666667, 90, 130, 80, 65, 85, 55],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "069",
        gen: 1,
        name: "Bellsprout",
        baseStats: [50, 50, 75, 35, 70, 30, 40],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "070",
        gen: 1,
        name: "Weepinbell",
        baseStats: [65, 65, 90, 50, 85, 45, 55],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "071",
        gen: 1,
        name: "Victreebel",
        baseStats: [80, 80, 105, 65, 100, 60, 70],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "072",
        gen: 1,
        name: "Tentacool",
        baseStats: [55.83333333, 40, 40, 35, 50, 100, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "073",
        gen: 1,
        name: "Tentacruel",
        baseStats: [85.83333333, 80, 70, 65, 80, 120, 100],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "074",
        gen: 1,
        name: "Geodude",
        baseStats: [50, 40, 80, 100, 30, 30, 20],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "075",
        gen: 1,
        name: "Graveler",
        baseStats: [65, 55, 95, 115, 45, 45, 35],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "076",
        gen: 1,
        name: "Golem",
        baseStats: [80.83333333, 80, 110, 130, 55, 65, 45],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "077",
        gen: 1,
        name: "Ponyta",
        baseStats: [68.33333333, 50, 85, 55, 65, 65, 90],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "078",
        gen: 1,
        name: "Rapidash",
        baseStats: [83.33333333, 65, 100, 70, 80, 80, 105],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "079",
        gen: 1,
        name: "Slowpoke",
        baseStats: [52.5, 90, 65, 65, 40, 40, 15],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "080",
        gen: 1,
        name: "Slowbro",
        baseStats: [81.66666667, 95, 75, 110, 100, 80, 30],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "081",
        gen: 1,
        name: "Magnemite",
        baseStats: [54.16666667, 25, 35, 70, 95, 55, 45],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "082",
        gen: 1,
        name: "Magneton",
        baseStats: [77.5, 50, 60, 95, 120, 70, 70],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "083",
        gen: 1,
        name: "Farfetch'd",
        baseStats: [58.66666667, 52, 65, 55, 58, 62, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "084",
        gen: 1,
        name: "Doduo",
        baseStats: [51.66666667, 35, 85, 45, 35, 35, 75],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "085",
        gen: 1,
        name: "Dodrio",
        baseStats: [76.66666667, 60, 110, 70, 60, 60, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "086",
        gen: 1,
        name: "Seel",
        baseStats: [54.16666667, 65, 45, 55, 45, 70, 45],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "087",
        gen: 1,
        name: "Dewgong",
        baseStats: [79.16666667, 90, 70, 80, 70, 95, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "088",
        gen: 1,
        name: "Grimer",
        baseStats: [54.16666667, 80, 80, 50, 40, 50, 25],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "089",
        gen: 1,
        name: "Muk",
        baseStats: [83.33333333, 105, 105, 75, 65, 100, 50],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "090",
        gen: 1,
        name: "Shellder",
        baseStats: [50.83333333, 30, 65, 100, 45, 25, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "091",
        gen: 1,
        name: "Cloyster",
        baseStats: [87.5, 50, 95, 180, 85, 45, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "092",
        gen: 1,
        name: "Gastly",
        baseStats: [51.66666667, 30, 35, 30, 100, 35, 80],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "093",
        gen: 1,
        name: "Haunter",
        baseStats: [67.5, 45, 50, 45, 115, 55, 95],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "094",
        gen: 1,
        name: "Gengar",
        baseStats: [83.33333333, 60, 65, 60, 130, 75, 110],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "094.1",
        gen: 1,
        name: "Mega Gengar",
        baseStats: [100, 60, 65, 80, 170, 95, 130],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: true
    },
    {
        dexNumber: "095",
        gen: 1,
        name: "Onix",
        baseStats: [64.16666667, 35, 45, 160, 30, 45, 70],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "096",
        gen: 1,
        name: "Drowzee",
        baseStats: [54.66666667, 60, 48, 45, 43, 90, 42],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "097",
        gen: 1,
        name: "Hypno",
        baseStats: [80.5, 85, 73, 70, 73, 115, 67],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "098",
        gen: 1,
        name: "Krabby",
        baseStats: [54.16666667, 30, 105, 90, 25, 25, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "099",
        gen: 1,
        name: "Kingler",
        baseStats: [79.16666667, 55, 130, 115, 50, 50, 75],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "100",
        gen: 1,
        name: "Voltorb",
        baseStats: [55, 40, 30, 50, 55, 55, 100],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "101",
        gen: 1,
        name: "Electrode",
        baseStats: [80, 60, 50, 70, 80, 80, 140],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "102",
        gen: 1,
        name: "Exeggcute",
        baseStats: [54.16666667, 60, 40, 80, 60, 45, 40],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "103",
        gen: 1,
        name: "Exeggutor",
        baseStats: [86.66666667, 95, 95, 85, 125, 65, 55],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "104",
        gen: 1,
        name: "Cubone",
        baseStats: [53.33333333, 50, 50, 95, 40, 50, 35],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "105",
        gen: 1,
        name: "Marowak",
        baseStats: [70.83333333, 60, 80, 110, 50, 80, 45],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "106",
        gen: 1,
        name: "Hitmonlee",
        baseStats: [75.83333333, 50, 120, 53, 35, 110, 87],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "107",
        gen: 1,
        name: "Hitmonchan",
        baseStats: [75.83333333, 50, 105, 79, 35, 110, 76],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "108",
        gen: 1,
        name: "Lickitung",
        baseStats: [64.16666667, 90, 55, 75, 60, 75, 30],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "109",
        gen: 1,
        name: "Koffing",
        baseStats: [56.66666667, 40, 65, 95, 60, 45, 35],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "110",
        gen: 1,
        name: "Weezing",
        baseStats: [81.66666667, 65, 90, 120, 85, 70, 60],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "111",
        gen: 1,
        name: "Rhyhorn",
        baseStats: [57.5, 80, 85, 95, 30, 30, 25],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "112",
        gen: 1,
        name: "Rhydon",
        baseStats: [80.83333333, 105, 130, 120, 45, 45, 40],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "113",
        gen: 1,
        name: "Chansey",
        baseStats: [75, 250, 5, 5, 35, 105, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "114",
        gen: 1,
        name: "Tangela",
        baseStats: [72.5, 65, 55, 115, 100, 40, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "115",
        gen: 1,
        name: "Kangaskhan",
        baseStats: [81.66666667, 105, 95, 80, 40, 80, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "115.1",
        gen: 1,
        name: "Mega Kangaskhan",
        baseStats: [98.33333333, 105, 125, 100, 60, 100, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "116",
        gen: 1,
        name: "Horsea",
        baseStats: [49.16666667, 30, 40, 70, 70, 25, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "117",
        gen: 1,
        name: "Seadra",
        baseStats: [73.33333333, 55, 65, 95, 95, 45, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "118",
        gen: 1,
        name: "Goldeen",
        baseStats: [53.33333333, 45, 67, 60, 35, 50, 63],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "119",
        gen: 1,
        name: "Seaking",
        baseStats: [75, 80, 92, 65, 65, 80, 68],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "120",
        gen: 1,
        name: "Staryu",
        baseStats: [56.66666667, 30, 45, 55, 70, 55, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "121",
        gen: 1,
        name: "Starmie",
        baseStats: [86.66666667, 60, 75, 85, 100, 85, 115],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "122",
        gen: 1,
        name: "Mr. Mime",
        baseStats: [76.66666667, 40, 45, 65, 100, 120, 90],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "123",
        gen: 1,
        name: "Scyther",
        baseStats: [83.33333333, 70, 110, 80, 55, 80, 105],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "124",
        gen: 1,
        name: "Jynx",
        baseStats: [75.83333333, 65, 50, 35, 115, 95, 95],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "125",
        gen: 1,
        name: "Electabuzz",
        baseStats: [81.66666667, 65, 83, 57, 95, 85, 105],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "126",
        gen: 1,
        name: "Magmar",
        baseStats: [82.5, 65, 95, 57, 100, 85, 93],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "127",
        gen: 1,
        name: "Pinsir",
        baseStats: [83.33333333, 65, 125, 100, 55, 70, 85],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "127.1",
        gen: 1,
        name: "Mega Pinsir",
        baseStats: [100, 65, 155, 120, 65, 90, 105],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: true
    },
    {
        dexNumber: "128",
        gen: 1,
        name: "Tauros",
        baseStats: [81.66666667, 75, 100, 95, 40, 70, 110],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "129",
        gen: 1,
        name: "Magikarp",
        baseStats: [33.33333333, 20, 10, 55, 15, 20, 80],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "130",
        gen: 1,
        name: "Gyarados",
        baseStats: [90, 95, 125, 79, 60, 100, 81],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "130.1",
        gen: 1,
        name: "Mega Gyarados",
        baseStats: [106.6666667, 95, 155, 109, 70, 130, 81],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: true
    },
    {
        dexNumber: "131",
        gen: 1,
        name: "Lapras",
        baseStats: [89.16666667, 130, 85, 80, 85, 95, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "132",
        gen: 1,
        name: "Ditto",
        baseStats: [48, 48, 48, 48, 48, 48, 48],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "133",
        gen: 1,
        name: "Eevee",
        baseStats: [54.16666667, 55, 55, 50, 45, 65, 55],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "134",
        gen: 1,
        name: "Vaporeon",
        baseStats: [87.5, 130, 65, 60, 110, 95, 65],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "135",
        gen: 1,
        name: "Jolteon",
        baseStats: [87.5, 65, 65, 60, 110, 95, 130],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "136",
        gen: 1,
        name: "Flareon",
        baseStats: [87.5, 65, 130, 60, 95, 110, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "137",
        gen: 1,
        name: "Porygon",
        baseStats: [65.83333333, 65, 60, 70, 85, 75, 40],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "138",
        gen: 1,
        name: "Omanyte",
        baseStats: [59.16666667, 35, 40, 100, 90, 55, 35],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "139",
        gen: 1,
        name: "Omastar",
        baseStats: [82.5, 70, 60, 125, 115, 70, 55],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "140",
        gen: 1,
        name: "Kabuto",
        baseStats: [59.16666667, 30, 80, 90, 55, 45, 55],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "141",
        gen: 1,
        name: "Kabutops",
        baseStats: [82.5, 60, 115, 105, 65, 70, 80],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "142",
        gen: 1,
        name: "Aerodactyl",
        baseStats: [85.83333333, 80, 105, 65, 60, 75, 130],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "142.1",
        gen: 1,
        name: "Mega Aerodactyl",
        baseStats: [102.5, 80, 135, 85, 70, 95, 150],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: true
    },
    {
        dexNumber: "143",
        gen: 1,
        name: "Snorlax",
        baseStats: [90, 160, 110, 65, 65, 110, 30],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "144",
        gen: 1,
        name: "Articuno",
        baseStats: [96.66666667, 90, 85, 100, 95, 125, 85],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "145",
        gen: 1,
        name: "Zapdos",
        baseStats: [96.66666667, 90, 90, 85, 125, 90, 100],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "146",
        gen: 1,
        name: "Moltres",
        baseStats: [96.66666667, 90, 100, 90, 125, 85, 90],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "147",
        gen: 1,
        name: "Dratini",
        baseStats: [50, 41, 64, 45, 50, 50, 50],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "148",
        gen: 1,
        name: "Dragonair",
        baseStats: [70, 61, 84, 65, 70, 70, 70],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "149",
        gen: 1,
        name: "Dragonite",
        baseStats: [100, 91, 134, 95, 100, 100, 80],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "150",
        gen: 1,
        name: "Mewtwo",
        baseStats: [113.3333333, 106, 110, 90, 154, 90, 130],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "150.1",
        gen: 1,
        name: "Mega Mewtwo X",
        baseStats: [130, 106, 190, 100, 154, 100, 130],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: true
    },
    {
        dexNumber: "150.2",
        gen: 1,
        name: "Mega Mewtwo Y",
        baseStats: [130, 106, 150, 70, 194, 120, 140],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "151",
        gen: 1,
        name: "Mew",
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    }
];
