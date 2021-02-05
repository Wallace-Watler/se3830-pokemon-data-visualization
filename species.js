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
    },
    {
        dexNumber: "152",
        gen: 2,
        name: "Chikorita",
        baseStats: [53, 45, 49, 65, 49, 65, 45],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "153",
        gen: 2,
        name: "Bayleef",
        baseStats: [67.5, 60, 62, 80, 63, 80, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "154",
        gen: 2,
        name: "Meganium",
        baseStats: [87.5, 80, 82, 100, 83, 100, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "155",
        gen: 2,
        name: "Cyndaquil",
        baseStats: [51.5, 39, 52, 43, 60, 50, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "156",
        gen: 2,
        name: "Quilava",
        baseStats: [67.5, 58, 64, 58, 80, 65, 80],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "157",
        gen: 2,
        name: "Typhlosion",
        baseStats: [89, 78, 84, 78, 109, 85, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "158",
        gen: 2,
        name: "Totodile",
        baseStats: [52.33333333, 50, 65, 64, 44, 48, 43],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "159",
        gen: 2,
        name: "Croconaw",
        baseStats: [67.5, 65, 80, 80, 59, 63, 58],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "160",
        gen: 2,
        name: "Feraligatr",
        baseStats: [88.33333333, 85, 105, 100, 79, 83, 78],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "161",
        gen: 2,
        name: "Sentret",
        baseStats: [35.83333333, 35, 46, 34, 35, 45, 20],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "162",
        gen: 2,
        name: "Furret",
        baseStats: [69.16666667, 85, 76, 64, 45, 55, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "163",
        gen: 2,
        name: "Hoothoot",
        baseStats: [43.66666667, 60, 30, 30, 36, 56, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "164",
        gen: 2,
        name: "Noctowl",
        baseStats: [73.66666667, 100, 50, 50, 76, 96, 70],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "165",
        gen: 2,
        name: "Ledyba",
        baseStats: [44.16666667, 40, 20, 30, 40, 80, 55],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "166",
        gen: 2,
        name: "Ledian",
        baseStats: [65, 55, 35, 50, 55, 110, 85],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "167",
        gen: 2,
        name: "Spinarak",
        baseStats: [41.66666667, 40, 60, 40, 40, 40, 30],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "168",
        gen: 2,
        name: "Ariados",
        baseStats: [65, 70, 90, 70, 60, 60, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "169",
        gen: 2,
        name: "Crobat",
        baseStats: [89.16666667, 85, 90, 80, 70, 80, 130],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "170",
        gen: 2,
        name: "Chinchou",
        baseStats: [55, 75, 38, 38, 56, 56, 67],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "171",
        gen: 2,
        name: "Lanturn",
        baseStats: [76.66666667, 125, 58, 58, 76, 76, 67],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "172",
        gen: 2,
        name: "Pichu",
        baseStats: [34.16666667, 20, 40, 15, 35, 35, 60],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "173",
        gen: 2,
        name: "Cleffa",
        baseStats: [36.33333333, 50, 25, 28, 45, 55, 15],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "174",
        gen: 2,
        name: "Igglybuff",
        baseStats: [35, 90, 30, 15, 40, 20, 15],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "175",
        gen: 2,
        name: "Togepi",
        baseStats: [40.83333333, 35, 20, 65, 40, 65, 20],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "176",
        gen: 2,
        name: "Togetic",
        baseStats: [67.5, 55, 40, 85, 80, 105, 40],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "177",
        gen: 2,
        name: "Natu",
        baseStats: [53.33333333, 40, 50, 45, 70, 45, 70],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "178",
        gen: 2,
        name: "Xatu",
        baseStats: [78.33333333, 65, 75, 70, 95, 70, 95],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "179",
        gen: 2,
        name: "Mareep",
        baseStats: [46.66666667, 55, 40, 40, 65, 45, 35],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "180",
        gen: 2,
        name: "Flaaffy",
        baseStats: [60.83333333, 70, 55, 55, 80, 60, 45],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "181",
        gen: 2,
        name: "Ampharos",
        baseStats: [83.33333333, 90, 75, 75, 115, 90, 55],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "181.1",
        gen: 2,
        name: "Mega Ampharos",
        baseStats: [101.6666667, 90, 95, 105, 165, 110, 45],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: true
    },
    {
        dexNumber: "182",
        gen: 2,
        name: "Bellossom",
        baseStats: [80, 75, 80, 85, 90, 100, 50],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "183",
        gen: 2,
        name: "Marill",
        baseStats: [41.66666667, 70, 20, 50, 20, 50, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "184",
        gen: 2,
        name: "Azumarill",
        baseStats: [68.33333333, 100, 50, 80, 50, 80, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "185",
        gen: 2,
        name: "Sudowoodo",
        baseStats: [68.33333333, 70, 100, 115, 30, 65, 30],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "186",
        gen: 2,
        name: "Politoed",
        baseStats: [83.33333333, 90, 75, 75, 90, 100, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "187",
        gen: 2,
        name: "Hoppip",
        baseStats: [41.66666667, 35, 35, 40, 35, 55, 50],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "188",
        gen: 2,
        name: "Skiploom",
        baseStats: [56.66666667, 55, 45, 50, 45, 65, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "189",
        gen: 2,
        name: "Jumpluff",
        baseStats: [75, 75, 55, 70, 55, 85, 110],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "190",
        gen: 2,
        name: "Aipom",
        baseStats: [60, 55, 70, 55, 40, 55, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "191",
        gen: 2,
        name: "Sunkern",
        baseStats: [30, 30, 30, 30, 30, 30, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "192",
        gen: 2,
        name: "Sunflora",
        baseStats: [70.83333333, 75, 75, 55, 105, 85, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "193",
        gen: 2,
        name: "Yanma",
        baseStats: [65, 65, 65, 45, 75, 45, 95],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "194",
        gen: 2,
        name: "Wooper",
        baseStats: [35, 55, 45, 45, 25, 25, 15],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "195",
        gen: 2,
        name: "Quagsire",
        baseStats: [71.66666667, 95, 85, 85, 65, 65, 35],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "196",
        gen: 2,
        name: "Espeon",
        baseStats: [87.5, 65, 65, 60, 130, 95, 110],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "197",
        gen: 2,
        name: "Umbreon",
        baseStats: [87.5, 95, 65, 110, 60, 130, 65],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "198",
        gen: 2,
        name: "Murkrow",
        baseStats: [67.5, 60, 85, 42, 85, 42, 91],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "199",
        gen: 2,
        name: "Slowking",
        baseStats: [81.66666667, 95, 75, 80, 100, 110, 30],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "200",
        gen: 2,
        name: "Misdreavus",
        baseStats: [72.5, 60, 60, 60, 85, 85, 85],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "201",
        gen: 2,
        name: "Unown",
        baseStats: [56, 48, 72, 48, 72, 48, 48],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "202",
        gen: 2,
        name: "Wobbuffet",
        baseStats: [67.5, 190, 33, 58, 33, 58, 33],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "203",
        gen: 2,
        name: "Girafarig",
        baseStats: [75.83333333, 70, 80, 65, 90, 65, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "204",
        gen: 2,
        name: "Pineco",
        baseStats: [48.33333333, 50, 65, 90, 35, 35, 15],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "205",
        gen: 2,
        name: "Forretress",
        baseStats: [77.5, 75, 90, 140, 60, 60, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "206",
        gen: 2,
        name: "Dunsparce",
        baseStats: [69.16666667, 100, 70, 70, 65, 65, 45],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "207",
        gen: 2,
        name: "Gligar",
        baseStats: [71.66666667, 65, 75, 105, 35, 65, 85],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "208",
        gen: 2,
        name: "Steelix",
        baseStats: [85, 75, 85, 200, 55, 65, 30],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "209",
        gen: 2,
        name: "Snubbull",
        baseStats: [50, 60, 80, 50, 40, 40, 30],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "210",
        gen: 2,
        name: "Granbull",
        baseStats: [75, 90, 120, 75, 60, 60, 45],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "211",
        gen: 2,
        name: "Qwilfish",
        baseStats: [71.66666667, 65, 95, 75, 55, 55, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "212",
        gen: 2,
        name: "Scizor",
        baseStats: [83.33333333, 70, 130, 100, 55, 80, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "212.1",
        gen: 2,
        name: "Mega Scizor",
        baseStats: [100, 70, 150, 140, 65, 100, 75],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: true
    },
    {
        dexNumber: "213",
        gen: 2,
        name: "Shuckle",
        baseStats: [84.16666667, 20, 10, 230, 10, 230, 5],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "214",
        gen: 2,
        name: "Heracross",
        baseStats: [83.33333333, 80, 125, 75, 40, 95, 85],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "214.1",
        gen: 2,
        name: "Mega Heracross",
        baseStats: [100, 80, 185, 115, 40, 105, 75],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: true
    },
    {
        dexNumber: "215",
        gen: 2,
        name: "Sneasel",
        baseStats: [71.66666667, 55, 95, 55, 35, 75, 115],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "216",
        gen: 2,
        name: "Teddiursa",
        baseStats: [55, 60, 80, 50, 50, 50, 40],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "217",
        gen: 2,
        name: "Ursaring",
        baseStats: [83.33333333, 90, 130, 75, 75, 75, 55],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "218",
        gen: 2,
        name: "Slugma",
        baseStats: [41.66666667, 40, 40, 40, 70, 40, 20],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "219",
        gen: 2,
        name: "Magcargo",
        baseStats: [68.33333333, 50, 50, 120, 80, 80, 30],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "220",
        gen: 2,
        name: "Swinub",
        baseStats: [41.66666667, 50, 50, 40, 30, 30, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "221",
        gen: 2,
        name: "Piloswine",
        baseStats: [75, 100, 100, 80, 60, 60, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "222",
        gen: 2,
        name: "Corsola",
        baseStats: [63.33333333, 55, 55, 85, 65, 85, 35],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "223",
        gen: 2,
        name: "Remoraid",
        baseStats: [50, 35, 65, 35, 65, 35, 65],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "224",
        gen: 2,
        name: "Octillery",
        baseStats: [80, 75, 105, 75, 105, 75, 45],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "225",
        gen: 2,
        name: "Delibird",
        baseStats: [55, 45, 55, 45, 65, 45, 75],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "226",
        gen: 2,
        name: "Mantine",
        baseStats: [77.5, 65, 40, 70, 80, 140, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "227",
        gen: 2,
        name: "Skarmory",
        baseStats: [77.5, 65, 80, 140, 40, 70, 70],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "228",
        gen: 2,
        name: "Houndour",
        baseStats: [55, 45, 60, 30, 80, 50, 65],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "229",
        gen: 2,
        name: "Houndoom",
        baseStats: [83.33333333, 75, 90, 50, 110, 80, 95],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "229.1",
        gen: 2,
        name: "Mega Houndoom",
        baseStats: [100, 75, 90, 90, 140, 90, 115],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: true
    },
    {
        dexNumber: "230",
        gen: 2,
        name: "Kingdra",
        baseStats: [90, 75, 95, 95, 95, 95, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "231",
        gen: 2,
        name: "Phanpy",
        baseStats: [55, 90, 60, 60, 40, 40, 40],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "232",
        gen: 2,
        name: "Donphan",
        baseStats: [83.33333333, 90, 120, 120, 60, 60, 50],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "233",
        gen: 2,
        name: "Porygon2",
        baseStats: [85.83333333, 85, 80, 90, 105, 95, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "234",
        gen: 2,
        name: "Stantler",
        baseStats: [77.5, 73, 95, 62, 85, 65, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "235",
        gen: 2,
        name: "Smeargle",
        baseStats: [41.66666667, 55, 20, 35, 20, 45, 75],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "236",
        gen: 2,
        name: "Tyrogue",
        baseStats: [35, 35, 35, 35, 35, 35, 35],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "237",
        gen: 2,
        name: "Hitmontop",
        baseStats: [75.83333333, 50, 95, 95, 35, 110, 70],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "238",
        gen: 2,
        name: "Smoochum",
        baseStats: [50.83333333, 45, 30, 15, 85, 65, 65],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "239",
        gen: 2,
        name: "Elekid",
        baseStats: [60, 45, 63, 37, 65, 55, 95],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "240",
        gen: 2,
        name: "Magby",
        baseStats: [60.83333333, 45, 75, 37, 70, 55, 83],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "241",
        gen: 2,
        name: "Miltank",
        baseStats: [81.66666667, 95, 80, 105, 40, 70, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "242",
        gen: 2,
        name: "Blissey",
        baseStats: [90, 255, 10, 10, 75, 135, 55],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "243",
        gen: 2,
        name: "Raikou",
        baseStats: [96.66666667, 90, 85, 75, 115, 100, 115],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "244",
        gen: 2,
        name: "Entei",
        baseStats: [96.66666667, 115, 115, 85, 90, 75, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "245",
        gen: 2,
        name: "Suicune",
        baseStats: [96.66666667, 100, 75, 115, 90, 115, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "246",
        gen: 2,
        name: "Larvitar",
        baseStats: [50, 50, 64, 50, 45, 50, 41],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "247",
        gen: 2,
        name: "Pupitar",
        baseStats: [68.33333333, 70, 84, 70, 65, 70, 51],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "248",
        gen: 2,
        name: "Tyranitar",
        baseStats: [100, 100, 134, 110, 95, 100, 61],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "248.1",
        gen: 2,
        name: "Mega Tyranitar",
        baseStats: [116.6666667, 100, 164, 150, 95, 120, 71],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: true
    },
    {
        dexNumber: "249",
        gen: 2,
        name: "Lugia",
        baseStats: [113.3333333, 106, 90, 130, 90, 154, 110],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "250",
        gen: 2,
        name: "Ho-oh",
        baseStats: [113.3333333, 106, 130, 90, 110, 154, 90],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "251",
        gen: 2,
        name: "Celebi",
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "252",
        gen: 3,
        name: "Treecko",
        baseStats: [51.66666667, 40, 45, 35, 65, 55, 70],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "253",
        gen: 3,
        name: "Grovyle",
        baseStats: [67.5, 50, 65, 45, 85, 65, 95],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "254",
        gen: 3,
        name: "Sceptile",
        baseStats: [88.33333333, 70, 85, 65, 105, 85, 120],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "255",
        gen: 3,
        name: "Torchic",
        baseStats: [51.66666667, 45, 60, 40, 70, 50, 45],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "256",
        gen: 3,
        name: "Combusken",
        baseStats: [67.5, 60, 85, 60, 85, 60, 55],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "257",
        gen: 3,
        name: "Blaziken",
        baseStats: [88.33333333, 80, 120, 70, 110, 70, 80],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "257.1",
        gen: 3,
        name: "Mega Blaziken",
        baseStats: [105, 80, 160, 80, 130, 80, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: true
    },
    {
        dexNumber: "258",
        gen: 3,
        name: "Mudkip",
        baseStats: [51.66666667, 50, 70, 50, 50, 50, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "259",
        gen: 3,
        name: "Marshtomp",
        baseStats: [67.5, 70, 85, 70, 60, 70, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "260",
        gen: 3,
        name: "Swampert",
        baseStats: [89.16666667, 100, 110, 90, 85, 90, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "261",
        gen: 3,
        name: "Poochyena",
        baseStats: [36.66666667, 35, 55, 35, 30, 30, 35],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "262",
        gen: 3,
        name: "Mightyena",
        baseStats: [70, 70, 90, 70, 60, 60, 70],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "263",
        gen: 3,
        name: "Zigzagoon",
        baseStats: [40, 38, 30, 41, 30, 41, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "264",
        gen: 3,
        name: "Linoone",
        baseStats: [70, 78, 70, 61, 50, 61, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "265",
        gen: 3,
        name: "Wurmple",
        baseStats: [32.5, 45, 45, 35, 20, 30, 20],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "266",
        gen: 3,
        name: "Silcoon",
        baseStats: [34.16666667, 50, 35, 55, 25, 25, 15],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "267",
        gen: 3,
        name: "Beautifly",
        baseStats: [64.16666667, 60, 70, 50, 90, 50, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "268",
        gen: 3,
        name: "Cascoon",
        baseStats: [34.16666667, 50, 35, 55, 25, 25, 15],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "269",
        gen: 3,
        name: "Dustox",
        baseStats: [64.16666667, 60, 50, 70, 50, 90, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "270",
        gen: 3,
        name: "Lotad",
        baseStats: [36.66666667, 40, 30, 30, 40, 50, 30],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "271",
        gen: 3,
        name: "Lombre",
        baseStats: [56.66666667, 60, 50, 50, 60, 70, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "272",
        gen: 3,
        name: "Ludicolo",
        baseStats: [80, 80, 70, 70, 90, 100, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "273",
        gen: 3,
        name: "Seedot",
        baseStats: [36.66666667, 40, 40, 50, 30, 30, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "274",
        gen: 3,
        name: "Nuzleaf",
        baseStats: [56.66666667, 70, 70, 40, 60, 40, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "275",
        gen: 3,
        name: "Shiftry",
        baseStats: [80, 90, 100, 60, 90, 60, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "276",
        gen: 3,
        name: "Taillow",
        baseStats: [45, 40, 55, 30, 30, 30, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "277",
        gen: 3,
        name: "Swellow",
        baseStats: [71.66666667, 60, 85, 60, 50, 50, 125],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "278",
        gen: 3,
        name: "Wingull",
        baseStats: [45, 40, 30, 30, 55, 30, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "279",
        gen: 3,
        name: "Pelipper",
        baseStats: [71.66666667, 60, 50, 100, 85, 70, 65],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "280",
        gen: 3,
        name: "Ralts",
        baseStats: [33, 28, 25, 25, 45, 35, 40],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "281",
        gen: 3,
        name: "Kirlia",
        baseStats: [46.33333333, 38, 35, 35, 65, 55, 50],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "282",
        gen: 3,
        name: "Gardevoir",
        baseStats: [86.33333333, 68, 65, 65, 125, 115, 80],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "282.1",
        gen: 3,
        name: "Mega Gardevoir",
        baseStats: [103, 68, 85, 65, 165, 135, 100],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: true
    },
    {
        dexNumber: "283",
        gen: 3,
        name: "Surskit",
        baseStats: [44.83333333, 40, 30, 32, 50, 52, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "284",
        gen: 3,
        name: "Masquerain",
        baseStats: [69, 70, 60, 62, 80, 82, 60],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "285",
        gen: 3,
        name: "Shroomish",
        baseStats: [49.16666667, 60, 40, 60, 40, 60, 35],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "286",
        gen: 3,
        name: "Breloom",
        baseStats: [76.66666667, 60, 130, 80, 60, 60, 70],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "287",
        gen: 3,
        name: "Slakoth",
        baseStats: [46.66666667, 60, 60, 60, 35, 35, 30],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "288",
        gen: 3,
        name: "Vigoroth",
        baseStats: [73.33333333, 80, 80, 80, 55, 55, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "289",
        gen: 3,
        name: "Slaking",
        baseStats: [111.6666667, 150, 160, 100, 95, 65, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "290",
        gen: 3,
        name: "Nincada",
        baseStats: [44.33333333, 31, 45, 90, 30, 30, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "291",
        gen: 3,
        name: "Ninjask",
        baseStats: [76, 61, 90, 45, 50, 50, 160],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "292",
        gen: 3,
        name: "Shedinja",
        baseStats: [39.33333333, 1, 90, 45, 30, 30, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "293",
        gen: 3,
        name: "Whismur",
        baseStats: [40, 64, 51, 23, 51, 23, 28],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "294",
        gen: 3,
        name: "Loudred",
        baseStats: [60, 84, 71, 43, 71, 43, 48],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "295",
        gen: 3,
        name: "Exploud",
        baseStats: [80, 104, 91, 63, 91, 63, 68],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "296",
        gen: 3,
        name: "Makuhita",
        baseStats: [39.5, 72, 60, 30, 20, 30, 25],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "297",
        gen: 3,
        name: "Hariyama",
        baseStats: [79, 144, 120, 60, 40, 60, 50],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "298",
        gen: 3,
        name: "Azurill",
        baseStats: [31.66666667, 50, 20, 40, 20, 40, 20],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "299",
        gen: 3,
        name: "Nosepass",
        baseStats: [62.5, 30, 45, 135, 45, 90, 30],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "300",
        gen: 3,
        name: "Skitty",
        baseStats: [43.33333333, 50, 45, 45, 35, 35, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "301",
        gen: 3,
        name: "Delcatty",
        baseStats: [63.33333333, 70, 65, 65, 55, 55, 70],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "302",
        gen: 3,
        name: "Sableye",
        baseStats: [63.33333333, 50, 75, 75, 65, 65, 50],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "303",
        gen: 3,
        name: "Mawile",
        baseStats: [63.33333333, 50, 85, 85, 55, 55, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "303.1",
        gen: 3,
        name: "Mega Mawile",
        baseStats: [86.66666667, 50, 105, 125, 55, 95, 90],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: true
    },
    {
        dexNumber: "304",
        gen: 3,
        name: "Aron",
        baseStats: [55, 50, 70, 100, 40, 40, 30],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "305",
        gen: 3,
        name: "Lairon",
        baseStats: [71.66666667, 60, 90, 140, 50, 50, 40],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "306",
        gen: 3,
        name: "Aggron",
        baseStats: [88.33333333, 70, 110, 180, 60, 60, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "306.1",
        gen: 3,
        name: "Mega Aggron",
        baseStats: [105, 70, 140, 230, 60, 80, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "307",
        gen: 3,
        name: "Meditite",
        baseStats: [46.66666667, 30, 40, 55, 40, 55, 60],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "308",
        gen: 3,
        name: "Medicham",
        baseStats: [68.33333333, 60, 60, 75, 60, 75, 80],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "308.1",
        gen: 3,
        name: "Mega Medicham",
        baseStats: [85, 60, 100, 85, 80, 85, 100],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: true
    },
    {
        dexNumber: "309",
        gen: 3,
        name: "Electrike",
        baseStats: [49.16666667, 40, 45, 40, 65, 40, 65],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "310",
        gen: 3,
        name: "Manectric",
        baseStats: [79.16666667, 70, 75, 60, 105, 60, 105],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "310.1",
        gen: 3,
        name: "Mega Manectric",
        baseStats: [95.83333333, 70, 75, 80, 135, 80, 135],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "311",
        gen: 3,
        name: "Plusle",
        baseStats: [67.5, 60, 50, 40, 85, 75, 95],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "312",
        gen: 3,
        name: "Minun",
        baseStats: [67.5, 60, 40, 50, 75, 85, 95],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "313",
        gen: 3,
        name: "Volbeat",
        baseStats: [66.66666667, 65, 73, 55, 47, 75, 85],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "314",
        gen: 3,
        name: "Illumise",
        baseStats: [66.66666667, 65, 47, 55, 73, 75, 85],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "315",
        gen: 3,
        name: "Roselia",
        baseStats: [66.66666667, 50, 60, 45, 100, 80, 65],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "316",
        gen: 3,
        name: "Gulpin",
        baseStats: [50.33333333, 70, 43, 53, 43, 53, 40],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "317",
        gen: 3,
        name: "Swalot",
        baseStats: [77.83333333, 100, 73, 83, 73, 83, 55],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "318",
        gen: 3,
        name: "Carvanha",
        baseStats: [50.83333333, 45, 90, 20, 65, 20, 65],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "319",
        gen: 3,
        name: "Sharpedo",
        baseStats: [76.66666667, 70, 120, 40, 95, 40, 95],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "320",
        gen: 3,
        name: "Wailmer",
        baseStats: [66.66666667, 130, 70, 35, 70, 35, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "321",
        gen: 3,
        name: "Wailord",
        baseStats: [83.33333333, 170, 90, 45, 90, 45, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "322",
        gen: 3,
        name: "Numel",
        baseStats: [50.83333333, 60, 60, 40, 65, 45, 35],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "323",
        gen: 3,
        name: "Camerupt",
        baseStats: [76.66666667, 70, 100, 70, 105, 75, 40],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "324",
        gen: 3,
        name: "Torkoal",
        baseStats: [78.33333333, 70, 85, 140, 85, 70, 20],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "325",
        gen: 3,
        name: "Spoink",
        baseStats: [55, 60, 25, 35, 70, 80, 60],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "326",
        gen: 3,
        name: "Grumpig",
        baseStats: [78.33333333, 80, 45, 65, 90, 110, 80],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "327",
        gen: 3,
        name: "Spinda",
        baseStats: [60, 60, 60, 60, 60, 60, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "328",
        gen: 3,
        name: "Trapinch",
        baseStats: [48.33333333, 45, 100, 45, 45, 45, 10],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "329",
        gen: 3,
        name: "Vibrava",
        baseStats: [56.66666667, 50, 70, 50, 50, 50, 70],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "330",
        gen: 3,
        name: "Flygon",
        baseStats: [86.66666667, 80, 100, 80, 80, 80, 100],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "331",
        gen: 3,
        name: "Cacnea",
        baseStats: [55.83333333, 50, 85, 40, 85, 40, 35],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "332",
        gen: 3,
        name: "Cacturne",
        baseStats: [79.16666667, 70, 115, 60, 115, 60, 55],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "333",
        gen: 3,
        name: "Swablu",
        baseStats: [51.66666667, 45, 40, 60, 40, 75, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "334",
        gen: 3,
        name: "Altaria",
        baseStats: [81.66666667, 75, 70, 90, 70, 105, 80],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "335",
        gen: 3,
        name: "Zangoose",
        baseStats: [76.33333333, 73, 115, 60, 60, 60, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "336",
        gen: 3,
        name: "Seviper",
        baseStats: [76.33333333, 73, 100, 60, 100, 60, 65],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "337",
        gen: 3,
        name: "Lunatone",
        baseStats: [73.33333333, 70, 55, 65, 95, 85, 70],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "338",
        gen: 3,
        name: "Solrock",
        baseStats: [73.33333333, 70, 95, 85, 55, 65, 70],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "339",
        gen: 3,
        name: "Barboach",
        baseStats: [48, 50, 48, 43, 46, 41, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "340",
        gen: 3,
        name: "Whiscash",
        baseStats: [78, 110, 78, 73, 76, 71, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "341",
        gen: 3,
        name: "Corphish",
        baseStats: [51.33333333, 43, 80, 65, 50, 35, 35],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "342",
        gen: 3,
        name: "Crawdaunt",
        baseStats: [78, 63, 120, 85, 90, 55, 55],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "343",
        gen: 3,
        name: "Baltoy",
        baseStats: [50, 40, 40, 55, 40, 70, 55],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "344",
        gen: 3,
        name: "Claydol",
        baseStats: [83.33333333, 60, 70, 105, 70, 120, 75],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "345",
        gen: 3,
        name: "Lileep",
        baseStats: [59.16666667, 66, 41, 77, 61, 87, 23],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "346",
        gen: 3,
        name: "Cradily",
        baseStats: [82.5, 86, 81, 97, 81, 107, 43],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "347",
        gen: 3,
        name: "Anorith",
        baseStats: [59.16666667, 45, 95, 50, 40, 50, 75],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "348",
        gen: 3,
        name: "Armaldo",
        baseStats: [82.5, 75, 125, 100, 70, 80, 45],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "349",
        gen: 3,
        name: "Feebas",
        baseStats: [33.33333333, 20, 15, 20, 10, 55, 80],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "350",
        gen: 3,
        name: "Milotic",
        baseStats: [90, 95, 60, 79, 100, 125, 81],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "351",
        gen: 3,
        name: "Castform",
        baseStats: [70, 70, 70, 70, 70, 70, 70],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "352",
        gen: 3,
        name: "Kecleon",
        baseStats: [73.33333333, 60, 90, 70, 60, 120, 40],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "353",
        gen: 3,
        name: "Shuppet",
        baseStats: [49.16666667, 44, 75, 35, 63, 33, 45],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "354",
        gen: 3,
        name: "Banette",
        baseStats: [75.83333333, 64, 115, 65, 83, 63, 65],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "354.1",
        gen: 3,
        name: "Mega Banette",
        baseStats: [92.5, 64, 165, 75, 93, 83, 75],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "355",
        gen: 3,
        name: "Duskull",
        baseStats: [49.16666667, 20, 40, 90, 30, 90, 25],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "356",
        gen: 3,
        name: "Dusclops",
        baseStats: [75.83333333, 40, 70, 130, 60, 130, 25],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "357",
        gen: 3,
        name: "Tropius",
        baseStats: [76.66666667, 99, 68, 83, 72, 87, 51],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "358",
        gen: 3,
        name: "Chimecho",
        baseStats: [70.83333333, 65, 50, 70, 95, 80, 65],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "359",
        gen: 3,
        name: "Absol",
        baseStats: [77.5, 65, 130, 60, 75, 60, 75],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "359.1",
        gen: 3,
        name: "Mega Absol",
        baseStats: [94.16666667, 65, 150, 60, 115, 60, 115],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "360",
        gen: 3,
        name: "Wynaut",
        baseStats: [43.33333333, 95, 23, 48, 23, 48, 23],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "361",
        gen: 3,
        name: "Snorunt",
        baseStats: [50, 50, 50, 50, 50, 50, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "362",
        gen: 3,
        name: "Glalie",
        baseStats: [80, 80, 80, 80, 80, 80, 80],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "363",
        gen: 3,
        name: "Spheal",
        baseStats: [48.33333333, 70, 40, 50, 55, 50, 25],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "364",
        gen: 3,
        name: "Sealeo",
        baseStats: [68.33333333, 90, 60, 70, 75, 70, 45],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "365",
        gen: 3,
        name: "Walrein",
        baseStats: [88.33333333, 110, 80, 90, 95, 90, 65],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "366",
        gen: 3,
        name: "Clamperl",
        baseStats: [57.5, 35, 64, 85, 74, 55, 32],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "367",
        gen: 3,
        name: "Huntail",
        baseStats: [80.83333333, 55, 104, 105, 94, 75, 52],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "368",
        gen: 3,
        name: "Gorebyss",
        baseStats: [80.83333333, 55, 84, 105, 114, 75, 52],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "369",
        gen: 3,
        name: "Relicanth",
        baseStats: [80.83333333, 100, 90, 130, 45, 65, 55],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "370",
        gen: 3,
        name: "Luvdisc",
        baseStats: [55, 43, 30, 55, 40, 65, 97],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "371",
        gen: 3,
        name: "Bagon",
        baseStats: [50, 45, 75, 60, 40, 30, 50],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "372",
        gen: 3,
        name: "Shelgon",
        baseStats: [70, 65, 95, 100, 60, 50, 50],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "373",
        gen: 3,
        name: "Salamence",
        baseStats: [100, 95, 135, 80, 110, 80, 100],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "374",
        gen: 3,
        name: "Beldum",
        baseStats: [50, 40, 55, 80, 35, 60, 30],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "375",
        gen: 3,
        name: "Metang",
        baseStats: [70, 60, 75, 100, 55, 80, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "376",
        gen: 3,
        name: "Metagross",
        baseStats: [100, 80, 135, 130, 95, 90, 70],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "377",
        gen: 3,
        name: "Regirock",
        baseStats: [96.66666667, 80, 100, 200, 50, 100, 50],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "378",
        gen: 3,
        name: "Regice",
        baseStats: [96.66666667, 80, 50, 100, 100, 200, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "379",
        gen: 3,
        name: "Registeel",
        baseStats: [96.66666667, 80, 75, 150, 75, 150, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "380",
        gen: 3,
        name: "Latias",
        baseStats: [100, 80, 80, 90, 110, 130, 110],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "381",
        gen: 3,
        name: "Latios",
        baseStats: [100, 80, 90, 80, 130, 110, 110],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "382",
        gen: 3,
        name: "Kyogre",
        baseStats: [111.6666667, 100, 100, 90, 150, 140, 90],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "383",
        gen: 3,
        name: "Groudon",
        baseStats: [111.6666667, 100, 150, 140, 100, 90, 90],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "384",
        gen: 3,
        name: "Rayquaza",
        baseStats: [113.3333333, 105, 150, 90, 150, 90, 95],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "385",
        gen: 3,
        name: "Jirachi",
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "386",
        gen: 3,
        name: "Deoxys - Normal Forme",
        baseStats: [100, 50, 150, 50, 150, 50, 150],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "386.1",
        gen: 3,
        name: "Deoxys - Attack Forme",
        baseStats: [100, 50, 180, 20, 180, 20, 150],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "386.2",
        gen: 3,
        name: "Deoxys - Defense Forme",
        baseStats: [100, 50, 70, 160, 70, 160, 90],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "386.3",
        gen: 3,
        name: "Deoxys - Speed Forme",
        baseStats: [100, 50, 95, 90, 95, 90, 180],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "387",
        gen: 4,
        name: "Turtwig",
        baseStats: [53, 55, 68, 64, 45, 55, 31],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "388",
        gen: 4,
        name: "Grotle",
        baseStats: [67.5, 75, 89, 85, 55, 65, 36],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "389",
        gen: 4,
        name: "Torterra",
        baseStats: [87.5, 95, 109, 105, 75, 85, 56],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "390",
        gen: 4,
        name: "Chimchar",
        baseStats: [51.5, 44, 58, 44, 58, 44, 61],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "391",
        gen: 4,
        name: "Monferno",
        baseStats: [67.5, 64, 78, 52, 78, 52, 81],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "392",
        gen: 4,
        name: "Infernape",
        baseStats: [89, 76, 104, 71, 104, 71, 108],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "393",
        gen: 4,
        name: "Piplup",
        baseStats: [52.33333333, 53, 51, 53, 61, 56, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "394",
        gen: 4,
        name: "Prinplup",
        baseStats: [67.5, 64, 66, 68, 81, 76, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "395",
        gen: 4,
        name: "Empoleon",
        baseStats: [88.33333333, 84, 86, 88, 111, 101, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "396",
        gen: 4,
        name: "Starly",
        baseStats: [40.83333333, 40, 55, 30, 30, 30, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "397",
        gen: 4,
        name: "Staravia",
        baseStats: [56.66666667, 55, 75, 50, 40, 40, 80],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "398",
        gen: 4,
        name: "Staraptor",
        baseStats: [79.16666667, 85, 120, 70, 50, 50, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "399",
        gen: 4,
        name: "Bidoof",
        baseStats: [41.66666667, 59, 45, 40, 35, 40, 31],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "400",
        gen: 4,
        name: "Bibarel",
        baseStats: [68.33333333, 79, 85, 60, 55, 60, 71],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "401",
        gen: 4,
        name: "Kricketot",
        baseStats: [32.33333333, 37, 25, 41, 25, 41, 25],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "402",
        gen: 4,
        name: "Kricketune",
        baseStats: [64, 77, 85, 51, 55, 51, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "403",
        gen: 4,
        name: "Shinx",
        baseStats: [43.83333333, 45, 65, 34, 40, 34, 45],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "404",
        gen: 4,
        name: "Luxio",
        baseStats: [60.5, 60, 85, 49, 60, 49, 60],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "405",
        gen: 4,
        name: "Luxray",
        baseStats: [87.16666667, 80, 120, 79, 95, 79, 70],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "406",
        gen: 4,
        name: "Budew",
        baseStats: [46.66666667, 40, 30, 35, 50, 70, 55],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "407",
        gen: 4,
        name: "Roserade",
        baseStats: [84.16666667, 60, 70, 55, 125, 105, 90],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "408",
        gen: 4,
        name: "Cranidos",
        baseStats: [58.33333333, 67, 125, 40, 30, 30, 58],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "409",
        gen: 4,
        name: "Rampardos",
        baseStats: [82.5, 97, 165, 60, 65, 50, 58],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "410",
        gen: 4,
        name: "Shieldon",
        baseStats: [58.33333333, 30, 42, 118, 42, 88, 30],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "411",
        gen: 4,
        name: "Bastiodon",
        baseStats: [82.5, 60, 52, 168, 47, 138, 30],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "412",
        gen: 4,
        name: "Burmy",
        baseStats: [37.33333333, 40, 29, 45, 29, 45, 36],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "413",
        gen: 4,
        name: "Wormadam - Plant Cloak",
        baseStats: [70.66666667, 60, 59, 85, 79, 105, 36],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "413.1",
        gen: 4,
        name: "Wormadam - Sandy Cloak",
        baseStats: [70.66666667, 60, 79, 105, 59, 85, 36],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "413.2",
        gen: 4,
        name: "Wormadam - Trash Cloak",
        baseStats: [70.66666667, 60, 69, 95, 69, 95, 36],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "414",
        gen: 4,
        name: "Mothim",
        baseStats: [70.66666667, 70, 94, 50, 94, 50, 66],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "415",
        gen: 4,
        name: "Combee",
        baseStats: [40.66666667, 30, 30, 42, 30, 42, 70],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "416",
        gen: 4,
        name: "Vespiquen",
        baseStats: [79, 70, 80, 102, 80, 102, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "417",
        gen: 4,
        name: "Pachirisu",
        baseStats: [67.5, 60, 45, 70, 45, 90, 95],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "418",
        gen: 4,
        name: "Buizel",
        baseStats: [55, 55, 65, 35, 60, 30, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "419",
        gen: 4,
        name: "Floatzel",
        baseStats: [82.5, 85, 105, 55, 85, 50, 115],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "420",
        gen: 4,
        name: "Cherubi",
        baseStats: [45.83333333, 45, 35, 45, 62, 53, 35],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "421",
        gen: 4,
        name: "Cherrim",
        baseStats: [75, 70, 60, 70, 87, 78, 85],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "422",
        gen: 4,
        name: "Shellos",
        baseStats: [54.16666667, 76, 48, 48, 57, 62, 34],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "423",
        gen: 4,
        name: "Gastrodon",
        baseStats: [79.16666667, 111, 83, 68, 92, 82, 39],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "424",
        gen: 4,
        name: "Ambipom",
        baseStats: [80.33333333, 75, 100, 66, 60, 66, 115],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "425",
        gen: 4,
        name: "Drifloon",
        baseStats: [58, 90, 50, 34, 60, 44, 70],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "426",
        gen: 4,
        name: "Drifblim",
        baseStats: [83, 150, 80, 44, 90, 54, 80],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "427",
        gen: 4,
        name: "Buneary",
        baseStats: [58.33333333, 55, 66, 44, 44, 56, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "428",
        gen: 4,
        name: "Lopunny",
        baseStats: [80, 65, 76, 84, 54, 96, 105],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "429",
        gen: 4,
        name: "Mismagius",
        baseStats: [82.5, 60, 60, 60, 105, 105, 105],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "430",
        gen: 4,
        name: "Honchkrow",
        baseStats: [84.16666667, 100, 125, 52, 105, 52, 71],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "431",
        gen: 4,
        name: "Glameow",
        baseStats: [51.66666667, 49, 55, 42, 42, 37, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "432",
        gen: 4,
        name: "Purugly",
        baseStats: [75.33333333, 71, 82, 64, 64, 59, 112],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "433",
        gen: 4,
        name: "Chingling",
        baseStats: [47.5, 45, 30, 50, 65, 50, 45],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "434",
        gen: 4,
        name: "Stunky",
        baseStats: [54.83333333, 63, 63, 47, 41, 41, 74],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "435",
        gen: 4,
        name: "Skuntank",
        baseStats: [79.83333333, 103, 93, 67, 71, 61, 84],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "436",
        gen: 4,
        name: "Bronzor",
        baseStats: [50, 57, 24, 86, 24, 86, 23],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "437",
        gen: 4,
        name: "Bronzong",
        baseStats: [83.33333333, 67, 89, 116, 79, 116, 33],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "438",
        gen: 4,
        name: "Bonsly",
        baseStats: [48.33333333, 50, 80, 95, 10, 45, 10],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "439",
        gen: 4,
        name: "Mime Jr.",
        baseStats: [51.66666667, 20, 25, 45, 70, 90, 60],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "440",
        gen: 4,
        name: "Happiny",
        baseStats: [36.66666667, 100, 5, 5, 15, 65, 30],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "441",
        gen: 4,
        name: "Chatot",
        baseStats: [68.5, 76, 65, 45, 92, 42, 91],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "442",
        gen: 4,
        name: "Spiritomb",
        baseStats: [80.83333333, 50, 92, 108, 92, 108, 35],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "443",
        gen: 4,
        name: "Gible",
        baseStats: [50, 58, 70, 45, 40, 45, 42],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "444",
        gen: 4,
        name: "Gabite",
        baseStats: [68.33333333, 68, 90, 65, 50, 55, 82],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "445",
        gen: 4,
        name: "Garchomp",
        baseStats: [100, 108, 130, 95, 80, 85, 102],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "445.1",
        gen: 4,
        name: "Mega Garchomp",
        baseStats: [116.6666667, 108, 170, 115, 120, 95, 92],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: true
    },
    {
        dexNumber: "446",
        gen: 4,
        name: "Munchlax",
        baseStats: [65, 135, 85, 40, 40, 85, 5],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "447",
        gen: 4,
        name: "Riolu",
        baseStats: [47.5, 40, 70, 40, 35, 40, 60],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "448",
        gen: 4,
        name: "Lucario",
        baseStats: [87.5, 70, 110, 70, 115, 70, 90],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "448.1",
        gen: 4,
        name: "Mega Lucario",
        baseStats: [104.1666667, 70, 145, 88, 140, 70, 112],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: true
    },
    {
        dexNumber: "449",
        gen: 4,
        name: "Hippopotas",
        baseStats: [55, 68, 72, 78, 38, 42, 32],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "450",
        gen: 4,
        name: "Hippowdon",
        baseStats: [87.5, 108, 112, 118, 68, 72, 47],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "451",
        gen: 4,
        name: "Skorupi",
        baseStats: [55, 40, 50, 90, 30, 55, 65],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "452",
        gen: 4,
        name: "Drapion",
        baseStats: [83.33333333, 70, 90, 110, 60, 75, 95],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "453",
        gen: 4,
        name: "Croagunk",
        baseStats: [50, 48, 61, 40, 61, 40, 50],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "454",
        gen: 4,
        name: "Toxicroak",
        baseStats: [81.66666667, 83, 106, 65, 86, 65, 85],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "455",
        gen: 4,
        name: "Carnivine",
        baseStats: [75.66666667, 74, 100, 72, 90, 72, 46],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "456",
        gen: 4,
        name: "Finneon",
        baseStats: [55, 49, 49, 56, 49, 61, 66],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "457",
        gen: 4,
        name: "Lumineon",
        baseStats: [76.66666667, 69, 69, 76, 69, 86, 91],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "458",
        gen: 4,
        name: "Mantyke",
        baseStats: [57.5, 45, 20, 50, 60, 120, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "459",
        gen: 4,
        name: "Snover",
        baseStats: [55.66666667, 60, 62, 50, 62, 60, 40],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "460",
        gen: 4,
        name: "Abomasnow",
        baseStats: [82.33333333, 90, 92, 75, 92, 85, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "460.1",
        gen: 4,
        name: "Mega Abomasnow",
        baseStats: [99, 90, 132, 105, 132, 105, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: true
    },
    {
        dexNumber: "461",
        gen: 4,
        name: "Weavile",
        baseStats: [85, 70, 120, 65, 45, 85, 125],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "462",
        gen: 4,
        name: "Magnezone",
        baseStats: [89.16666667, 70, 70, 115, 130, 90, 60],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "463",
        gen: 4,
        name: "Lickilicky",
        baseStats: [85.83333333, 110, 85, 95, 80, 95, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "464",
        gen: 4,
        name: "Rhyperior",
        baseStats: [89.16666667, 115, 140, 130, 55, 55, 40],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "465",
        gen: 4,
        name: "Tangrowth",
        baseStats: [89.16666667, 100, 100, 125, 110, 50, 50],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "466",
        gen: 4,
        name: "Electivire",
        baseStats: [90, 75, 123, 67, 95, 85, 95],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "467",
        gen: 4,
        name: "Magmortar",
        baseStats: [90, 75, 95, 67, 125, 95, 83],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "468",
        gen: 4,
        name: "Togekiss",
        baseStats: [90.83333333, 85, 50, 95, 120, 115, 80],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "469",
        gen: 4,
        name: "Yanmega",
        baseStats: [85.83333333, 86, 76, 86, 116, 56, 95],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "470",
        gen: 4,
        name: "Leafeon",
        baseStats: [87.5, 65, 110, 130, 60, 65, 95],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "471",
        gen: 4,
        name: "Glaceon",
        baseStats: [87.5, 65, 60, 110, 130, 95, 65],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "472",
        gen: 4,
        name: "Gliscor",
        baseStats: [85, 75, 95, 125, 45, 75, 95],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "473",
        gen: 4,
        name: "Mamoswine",
        baseStats: [88.33333333, 110, 130, 80, 70, 60, 80],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "474",
        gen: 4,
        name: "Porygon-Z",
        baseStats: [89.16666667, 85, 80, 70, 135, 75, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "475",
        gen: 4,
        name: "Gallade",
        baseStats: [86.33333333, 68, 125, 65, 65, 115, 80],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "476",
        gen: 4,
        name: "Probopass",
        baseStats: [87.5, 60, 55, 145, 75, 150, 40],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "477",
        gen: 4,
        name: "Dusknoir",
        baseStats: [87.5, 45, 100, 135, 65, 135, 45],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "478",
        gen: 4,
        name: "Froslass",
        baseStats: [80, 70, 80, 70, 80, 70, 110],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "479",
        gen: 4,
        name: "Rotom",
        baseStats: [73.33333333, 50, 50, 77, 95, 77, 91],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "479.1",
        gen: 4,
        name: "Heat Rotom",
        baseStats: [86.66666667, 50, 65, 107, 105, 107, 86],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "479.2",
        gen: 4,
        name: "Wash Rotom",
        baseStats: [86.66666667, 50, 65, 107, 105, 107, 86],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "479.3",
        gen: 4,
        name: "Frost Rotom",
        baseStats: [86.66666667, 50, 65, 107, 105, 107, 86],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "479.4",
        gen: 4,
        name: "Fan Rotom",
        baseStats: [86.66666667, 50, 65, 107, 105, 107, 86],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "479.5",
        gen: 4,
        name: "Mow Rotom",
        baseStats: [86.66666667, 50, 65, 107, 105, 107, 86],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "480",
        gen: 4,
        name: "Uxie",
        baseStats: [96.66666667, 75, 75, 130, 75, 130, 95],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "481",
        gen: 4,
        name: "Mesprit",
        baseStats: [96.66666667, 80, 105, 105, 105, 105, 80],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "482",
        gen: 4,
        name: "Azelf",
        baseStats: [96.66666667, 75, 125, 70, 125, 70, 115],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "483",
        gen: 4,
        name: "Dialga",
        baseStats: [113.3333333, 100, 120, 120, 150, 100, 90],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "484",
        gen: 4,
        name: "Palkia",
        baseStats: [113.3333333, 90, 120, 100, 150, 120, 100],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "485",
        gen: 4,
        name: "Heatran",
        baseStats: [100, 91, 90, 106, 130, 106, 77],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "486",
        gen: 4,
        name: "Regigigas",
        baseStats: [111.6666667, 110, 160, 110, 80, 110, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "487",
        gen: 4,
        name: "Giratina - Altered Forme",
        baseStats: [113.3333333, 150, 100, 120, 100, 120, 90],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "487.1",
        gen: 4,
        name: "Giratina - Origin Forme",
        baseStats: [113.3333333, 150, 120, 100, 120, 100, 90],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "488",
        gen: 4,
        name: "Cresselia",
        baseStats: [100, 120, 70, 120, 75, 130, 85],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "489",
        gen: 4,
        name: "Phione",
        baseStats: [80, 80, 80, 80, 80, 80, 80],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "490",
        gen: 4,
        name: "Manaphy",
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "491",
        gen: 4,
        name: "Darkrai",
        baseStats: [100, 70, 90, 90, 135, 90, 125],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "492",
        gen: 4,
        name: "Shaymin - Land Forme",
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "492.1",
        gen: 4,
        name: "Shaymin - Sky Forme",
        baseStats: [100, 100, 103, 75, 120, 75, 127],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "493",
        gen: 4,
        name: "Arceus",
        baseStats: [120, 120, 120, 120, 120, 120, 120],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "494",
        gen: 4,
        name: "Victini",
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "495",
        gen: 5,
        name: "Snivy",
        baseStats: [51.33333333, 45, 45, 55, 45, 55, 63],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "496",
        gen: 5,
        name: "Servine",
        baseStats: [68.83333333, 60, 60, 75, 60, 75, 83],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "497",
        gen: 5,
        name: "Serperior",
        baseStats: [88, 75, 75, 95, 75, 95, 113],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "498",
        gen: 5,
        name: "Tepig",
        baseStats: [51.33333333, 65, 63, 45, 45, 45, 45],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "499",
        gen: 5,
        name: "Pignite",
        baseStats: [69.66666667, 90, 93, 55, 70, 55, 55],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "500",
        gen: 5,
        name: "Emboar",
        baseStats: [88, 110, 123, 65, 100, 65, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "501",
        gen: 5,
        name: "Oshawott",
        baseStats: [51.33333333, 55, 55, 45, 63, 45, 45],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "502",
        gen: 5,
        name: "Dewott",
        baseStats: [68.83333333, 75, 75, 60, 83, 60, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "503",
        gen: 5,
        name: "Samurott",
        baseStats: [88, 95, 100, 85, 108, 70, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "504",
        gen: 5,
        name: "Patrat",
        baseStats: [42.5, 45, 55, 39, 35, 39, 42],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "505",
        gen: 5,
        name: "Watchog",
        baseStats: [70, 60, 85, 69, 60, 69, 77],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "506",
        gen: 5,
        name: "Lillipup",
        baseStats: [45.83333333, 45, 60, 45, 25, 45, 55],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "507",
        gen: 5,
        name: "Herdier",
        baseStats: [61.66666667, 65, 80, 65, 35, 65, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "508",
        gen: 5,
        name: "Stoutland",
        baseStats: [81.66666667, 85, 100, 90, 45, 90, 80],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "509",
        gen: 5,
        name: "Purrloin",
        baseStats: [46.83333333, 41, 50, 37, 50, 37, 66],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "510",
        gen: 5,
        name: "Liepard",
        baseStats: [74.33333333, 64, 88, 50, 88, 50, 106],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "511",
        gen: 5,
        name: "Pansage",
        baseStats: [52.66666667, 50, 53, 48, 53, 48, 64],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "512",
        gen: 5,
        name: "Simisage",
        baseStats: [83, 75, 98, 63, 98, 63, 101],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "513",
        gen: 5,
        name: "Pansear",
        baseStats: [52.66666667, 50, 53, 48, 53, 48, 64],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "514",
        gen: 5,
        name: "Simisear",
        baseStats: [83, 75, 98, 63, 98, 63, 101],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "515",
        gen: 5,
        name: "Panpour",
        baseStats: [52.66666667, 50, 53, 48, 53, 48, 64],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "516",
        gen: 5,
        name: "Simipour",
        baseStats: [83, 75, 98, 63, 98, 63, 101],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "517",
        gen: 5,
        name: "Munna",
        baseStats: [48.66666667, 76, 25, 45, 67, 55, 24],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "518",
        gen: 5,
        name: "Musharna",
        baseStats: [81.16666667, 116, 55, 85, 107, 95, 29],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "519",
        gen: 5,
        name: "Pidove",
        baseStats: [44, 50, 55, 50, 36, 30, 43],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "520",
        gen: 5,
        name: "Tranquill",
        baseStats: [59.66666667, 62, 77, 62, 50, 42, 65],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "521",
        gen: 5,
        name: "Unfezant",
        baseStats: [79.66666667, 80, 105, 80, 65, 55, 93],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "522",
        gen: 5,
        name: "Blitzle",
        baseStats: [49.16666667, 45, 60, 32, 50, 32, 76],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "523",
        gen: 5,
        name: "Zebstrika",
        baseStats: [82.83333333, 75, 100, 63, 80, 63, 116],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "524",
        gen: 5,
        name: "Roggenrola",
        baseStats: [46.66666667, 55, 75, 85, 25, 25, 15],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "525",
        gen: 5,
        name: "Boldore",
        baseStats: [65, 70, 105, 105, 50, 40, 20],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "526",
        gen: 5,
        name: "Gigalith",
        baseStats: [84.16666667, 85, 135, 130, 60, 70, 25],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "527",
        gen: 5,
        name: "Woobat",
        baseStats: [52.16666667, 55, 45, 43, 55, 43, 72],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "528",
        gen: 5,
        name: "Swoobat",
        baseStats: [70.83333333, 67, 57, 55, 77, 55, 114],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "529",
        gen: 5,
        name: "Drilbur",
        baseStats: [54.66666667, 60, 85, 40, 30, 45, 68],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "530",
        gen: 5,
        name: "Excadrill",
        baseStats: [84.66666667, 110, 135, 60, 50, 65, 88],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "531",
        gen: 5,
        name: "Audino",
        baseStats: [74.16666667, 103, 60, 86, 60, 86, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "532",
        gen: 5,
        name: "Timburr",
        baseStats: [50.83333333, 75, 80, 55, 25, 35, 35],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "533",
        gen: 5,
        name: "Gurdurr",
        baseStats: [67.5, 85, 105, 85, 40, 50, 40],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "534",
        gen: 5,
        name: "Conkeldurr",
        baseStats: [84.16666667, 105, 140, 95, 55, 65, 45],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "535",
        gen: 5,
        name: "Tympole",
        baseStats: [49, 50, 50, 40, 50, 40, 64],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "536",
        gen: 5,
        name: "Palpitoad",
        baseStats: [64, 75, 65, 55, 65, 55, 69],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "537",
        gen: 5,
        name: "Seismitoad",
        baseStats: [83.16666667, 105, 85, 75, 85, 75, 74],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "538",
        gen: 5,
        name: "Throh",
        baseStats: [77.5, 120, 100, 85, 30, 85, 45],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "539",
        gen: 5,
        name: "Sawk",
        baseStats: [77.5, 75, 125, 75, 30, 75, 85],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "540",
        gen: 5,
        name: "Sewaddle",
        baseStats: [51.66666667, 45, 53, 70, 40, 60, 42],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "541",
        gen: 5,
        name: "Swadloon",
        baseStats: [63.33333333, 55, 63, 90, 50, 80, 42],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "542",
        gen: 5,
        name: "Leavanny",
        baseStats: [81.66666667, 75, 103, 80, 70, 70, 92],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "543",
        gen: 5,
        name: "Venipede",
        baseStats: [43.33333333, 30, 45, 59, 30, 39, 57],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "544",
        gen: 5,
        name: "Whirlipede",
        baseStats: [60, 40, 55, 99, 40, 79, 47],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "545",
        gen: 5,
        name: "Scolipede",
        baseStats: [79.16666667, 60, 90, 89, 55, 69, 112],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "546",
        gen: 5,
        name: "Cottonee",
        baseStats: [46.66666667, 40, 27, 60, 37, 50, 66],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "547",
        gen: 5,
        name: "Whimsicott",
        baseStats: [80, 60, 67, 85, 77, 75, 116],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "548",
        gen: 5,
        name: "Petilil",
        baseStats: [46.66666667, 45, 35, 50, 70, 50, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "549",
        gen: 5,
        name: "Lilligant",
        baseStats: [80, 70, 60, 75, 110, 75, 90],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "550",
        gen: 5,
        name: "Basculin",
        baseStats: [76.66666667, 70, 92, 65, 80, 55, 98],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "551",
        gen: 5,
        name: "Sandile",
        baseStats: [48.66666667, 50, 72, 35, 35, 35, 65],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "552",
        gen: 5,
        name: "Krokorok",
        baseStats: [58.5, 60, 82, 45, 45, 45, 74],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "553",
        gen: 5,
        name: "Krookodile",
        baseStats: [84.83333333, 95, 117, 70, 65, 70, 92],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "554",
        gen: 5,
        name: "Darumaka",
        baseStats: [52.5, 70, 90, 45, 15, 45, 50],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "555",
        gen: 5,
        name: "Darmanitan - Standard Mode",
        baseStats: [80, 105, 140, 55, 30, 55, 95],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "555.1",
        gen: 5,
        name: "Darmanitan - Zen Mode",
        baseStats: [90, 105, 30, 105, 140, 105, 55],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "556",
        gen: 5,
        name: "Maractus",
        baseStats: [76.83333333, 75, 86, 67, 106, 67, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "557",
        gen: 5,
        name: "Dwebble",
        baseStats: [54.16666667, 50, 65, 85, 35, 35, 55],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "558",
        gen: 5,
        name: "Crustle",
        baseStats: [79.16666667, 70, 95, 125, 65, 75, 45],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "559",
        gen: 5,
        name: "Scraggy",
        baseStats: [58, 50, 75, 70, 35, 70, 48],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "560",
        gen: 5,
        name: "Scrafty",
        baseStats: [81.33333333, 65, 90, 115, 45, 115, 58],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "561",
        gen: 5,
        name: "Sigilyph",
        baseStats: [81.66666667, 72, 58, 80, 103, 80, 97],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "562",
        gen: 5,
        name: "Yamask",
        baseStats: [50.5, 38, 30, 85, 55, 65, 30],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "563",
        gen: 5,
        name: "Cofagrigus",
        baseStats: [80.5, 58, 50, 145, 95, 105, 30],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "564",
        gen: 5,
        name: "Tirtouga",
        baseStats: [59.16666667, 54, 78, 103, 53, 45, 22],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "565",
        gen: 5,
        name: "Carracosta",
        baseStats: [82.5, 74, 108, 133, 83, 65, 32],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "566",
        gen: 5,
        name: "Archen",
        baseStats: [66.83333333, 55, 112, 45, 74, 45, 70],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "567",
        gen: 5,
        name: "Archeops",
        baseStats: [94.5, 75, 140, 65, 112, 65, 110],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "568",
        gen: 5,
        name: "Trubbish",
        baseStats: [54.83333333, 50, 50, 62, 40, 62, 65],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "569",
        gen: 5,
        name: "Garbodor",
        baseStats: [79, 80, 95, 82, 60, 82, 75],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "570",
        gen: 5,
        name: "Zorua",
        baseStats: [55, 40, 65, 40, 80, 40, 65],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "571",
        gen: 5,
        name: "Zoroark",
        baseStats: [85, 60, 105, 60, 120, 60, 105],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "572",
        gen: 5,
        name: "Minccino",
        baseStats: [50, 55, 50, 40, 40, 40, 75],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "573",
        gen: 5,
        name: "Cinccino",
        baseStats: [78.33333333, 75, 95, 60, 65, 60, 115],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "574",
        gen: 5,
        name: "Gothita",
        baseStats: [48.33333333, 45, 30, 50, 55, 65, 45],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "575",
        gen: 5,
        name: "Gothorita",
        baseStats: [65, 60, 45, 70, 75, 85, 55],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "576",
        gen: 5,
        name: "Gothitelle",
        baseStats: [81.66666667, 70, 55, 95, 95, 110, 65],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "577",
        gen: 5,
        name: "Solosis",
        baseStats: [48.33333333, 45, 30, 40, 105, 50, 20],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "578",
        gen: 5,
        name: "Duosion",
        baseStats: [61.66666667, 65, 40, 50, 125, 60, 30],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "579",
        gen: 5,
        name: "Reuniclus",
        baseStats: [81.66666667, 110, 65, 75, 125, 85, 30],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "580",
        gen: 5,
        name: "Ducklett",
        baseStats: [50.83333333, 62, 44, 50, 44, 50, 55],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "581",
        gen: 5,
        name: "Swanna",
        baseStats: [78.83333333, 75, 87, 63, 87, 63, 98],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "582",
        gen: 5,
        name: "Vanillite",
        baseStats: [50.83333333, 36, 50, 50, 65, 60, 44],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "583",
        gen: 5,
        name: "Vanillish",
        baseStats: [65.83333333, 51, 65, 65, 80, 75, 59],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "584",
        gen: 5,
        name: "Vanilluxe",
        baseStats: [89.16666667, 71, 95, 85, 110, 95, 79],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "585",
        gen: 5,
        name: "Deerling",
        baseStats: [55.83333333, 60, 60, 50, 40, 50, 75],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "586",
        gen: 5,
        name: "Sawsbuck",
        baseStats: [79.16666667, 80, 100, 70, 60, 70, 95],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "587",
        gen: 5,
        name: "Emolga",
        baseStats: [71.33333333, 55, 75, 60, 75, 60, 103],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "588",
        gen: 5,
        name: "Karrablast",
        baseStats: [52.5, 50, 75, 45, 40, 45, 60],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "589",
        gen: 5,
        name: "Escavalier",
        baseStats: [82.5, 70, 135, 105, 60, 105, 20],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "590",
        gen: 5,
        name: "Foongus",
        baseStats: [49, 69, 55, 45, 55, 55, 15],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "591",
        gen: 5,
        name: "Amoonguss",
        baseStats: [77.33333333, 114, 85, 70, 85, 80, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "592",
        gen: 5,
        name: "Frillish",
        baseStats: [55.83333333, 55, 40, 50, 65, 85, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "593",
        gen: 5,
        name: "Jellicent",
        baseStats: [80, 100, 60, 70, 85, 105, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "594",
        gen: 5,
        name: "Alomomola",
        baseStats: [78.33333333, 165, 75, 80, 40, 45, 65],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "595",
        gen: 5,
        name: "Joltik",
        baseStats: [53.16666667, 50, 47, 50, 57, 50, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "596",
        gen: 5,
        name: "Galvantula",
        baseStats: [78.66666667, 70, 77, 60, 97, 60, 108],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "597",
        gen: 5,
        name: "Ferroseed",
        baseStats: [50.83333333, 44, 50, 91, 24, 86, 10],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "598",
        gen: 5,
        name: "Ferrothorn",
        baseStats: [81.5, 74, 94, 131, 54, 116, 20],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "599",
        gen: 5,
        name: "Klink",
        baseStats: [50, 40, 55, 70, 45, 60, 30],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "600",
        gen: 5,
        name: "Klang",
        baseStats: [73.33333333, 60, 80, 95, 70, 85, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "601",
        gen: 5,
        name: "Klinklang",
        baseStats: [86.66666667, 60, 100, 115, 70, 85, 90],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "602",
        gen: 5,
        name: "Tynamo",
        baseStats: [45.83333333, 35, 55, 40, 45, 40, 60],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "603",
        gen: 5,
        name: "Eelektrik",
        baseStats: [67.5, 65, 85, 70, 75, 70, 40],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "604",
        gen: 5,
        name: "Eelektross",
        baseStats: [85.83333333, 85, 115, 80, 105, 80, 50],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "605",
        gen: 5,
        name: "Elgyem",
        baseStats: [55.83333333, 55, 55, 55, 85, 55, 30],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "606",
        gen: 5,
        name: "Beheeyem",
        baseStats: [80.83333333, 75, 75, 75, 125, 95, 40],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "607",
        gen: 5,
        name: "Litwick",
        baseStats: [45.83333333, 50, 30, 55, 65, 55, 20],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "608",
        gen: 5,
        name: "Lampent",
        baseStats: [61.66666667, 60, 40, 60, 95, 60, 55],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "609",
        gen: 5,
        name: "Chandelure",
        baseStats: [86.66666667, 60, 55, 90, 145, 90, 80],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "610",
        gen: 5,
        name: "Axew",
        baseStats: [53.33333333, 46, 87, 60, 30, 40, 57],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "611",
        gen: 5,
        name: "Fraxure",
        baseStats: [68.33333333, 66, 117, 70, 40, 50, 67],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "612",
        gen: 5,
        name: "Haxorus",
        baseStats: [90, 76, 147, 90, 60, 70, 97],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "613",
        gen: 5,
        name: "Cubchoo",
        baseStats: [50.83333333, 55, 70, 40, 60, 40, 40],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "614",
        gen: 5,
        name: "Beartic",
        baseStats: [80.83333333, 95, 110, 80, 70, 80, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "615",
        gen: 5,
        name: "Cryogonal",
        baseStats: [80.83333333, 70, 50, 30, 95, 135, 105],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "616",
        gen: 5,
        name: "Shelmet",
        baseStats: [50.83333333, 50, 40, 85, 40, 65, 25],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "617",
        gen: 5,
        name: "Accelgor",
        baseStats: [82.5, 80, 70, 40, 100, 60, 145],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "618",
        gen: 5,
        name: "Stunfisk",
        baseStats: [78.5, 109, 66, 84, 81, 99, 32],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "619",
        gen: 5,
        name: "Mienfoo",
        baseStats: [58.33333333, 45, 85, 50, 55, 50, 65],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "620",
        gen: 5,
        name: "Mienshao",
        baseStats: [85, 65, 125, 60, 95, 60, 105],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "621",
        gen: 5,
        name: "Druddigon",
        baseStats: [80.83333333, 77, 120, 90, 60, 90, 48],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "622",
        gen: 5,
        name: "Golett",
        baseStats: [50.5, 59, 74, 50, 35, 50, 35],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "623",
        gen: 5,
        name: "Golurk",
        baseStats: [80.5, 89, 124, 80, 55, 80, 55],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "624",
        gen: 5,
        name: "Pawniard",
        baseStats: [56.66666667, 45, 85, 70, 40, 40, 60],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "625",
        gen: 5,
        name: "Bisharp",
        baseStats: [81.66666667, 65, 125, 100, 60, 70, 70],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "626",
        gen: 5,
        name: "Bouffalant",
        baseStats: [81.66666667, 95, 110, 95, 40, 95, 55],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "627",
        gen: 5,
        name: "Rufflet",
        baseStats: [58.33333333, 70, 83, 50, 37, 50, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "628",
        gen: 5,
        name: "Braviary",
        baseStats: [85, 100, 123, 75, 57, 75, 80],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "629",
        gen: 5,
        name: "Vullaby",
        baseStats: [61.66666667, 70, 55, 75, 45, 65, 60],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "630",
        gen: 5,
        name: "Mandibuzz",
        baseStats: [85, 110, 65, 105, 55, 95, 80],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "631",
        gen: 5,
        name: "Heatmor",
        baseStats: [80.66666667, 85, 97, 66, 105, 66, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "632",
        gen: 5,
        name: "Durant",
        baseStats: [80.66666667, 58, 109, 112, 48, 48, 109],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "633",
        gen: 5,
        name: "Deino",
        baseStats: [50, 52, 65, 50, 45, 50, 38],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "634",
        gen: 5,
        name: "Zweilous",
        baseStats: [70, 72, 85, 70, 65, 70, 58],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "635",
        gen: 5,
        name: "Hydreigon",
        baseStats: [100, 92, 105, 90, 125, 90, 98],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "636",
        gen: 5,
        name: "Larvesta",
        baseStats: [60, 55, 85, 55, 50, 55, 60],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "637",
        gen: 5,
        name: "Volcarona",
        baseStats: [91.66666667, 85, 60, 65, 135, 105, 100],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "638",
        gen: 5,
        name: "Cobalion",
        baseStats: [96.66666667, 91, 90, 129, 90, 72, 108],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "639",
        gen: 5,
        name: "Terrakion",
        baseStats: [96.66666667, 91, 129, 90, 72, 90, 108],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "640",
        gen: 5,
        name: "Virizion",
        baseStats: [96.66666667, 91, 90, 72, 90, 129, 108],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "641",
        gen: 5,
        name: "Tornadus - Incarnate Forme",
        baseStats: [96.66666667, 79, 115, 70, 125, 80, 111],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "641.1",
        gen: 5,
        name: "Tornadus - Therian Forme",
        baseStats: [96.66666667, 79, 100, 80, 110, 90, 121],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "642",
        gen: 5,
        name: "Thundurus - Incarnate Forme",
        baseStats: [96.66666667, 79, 115, 70, 125, 80, 111],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "642.1",
        gen: 5,
        name: "Thundurus - Therian Forme",
        baseStats: [96.66666667, 79, 105, 70, 145, 80, 101],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "643",
        gen: 5,
        name: "Reshiram",
        baseStats: [113.3333333, 100, 120, 100, 150, 120, 90],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "644",
        gen: 5,
        name: "Zekrom",
        baseStats: [113.3333333, 100, 150, 120, 120, 100, 90],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "645",
        gen: 5,
        name: "Landorus - Incarnate Forme",
        baseStats: [100, 89, 125, 90, 115, 80, 101],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "645.1",
        gen: 5,
        name: "Landorus - Therian Forme",
        baseStats: [100, 89, 145, 90, 105, 80, 91],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "646",
        gen: 5,
        name: "Kyurem",
        baseStats: [110, 125, 130, 90, 130, 90, 95],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "646.1",
        gen: 5,
        name: "White Kyurem",
        baseStats: [116.6666667, 125, 120, 90, 170, 100, 95],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "646.2",
        gen: 5,
        name: "Black Kyurem",
        baseStats: [116.6666667, 125, 170, 100, 120, 90, 95],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "647",
        gen: 5,
        name: "Keldeo - Ordinary Forme",
        baseStats: [96.66666667, 91, 72, 90, 129, 90, 108],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "647.1",
        gen: 5,
        name: "Keldeo - Resolute Forme",
        baseStats: [96.66666667, 91, 72, 90, 129, 90, 108],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "648",
        gen: 5,
        name: "Meloetta - Aria Forme",
        baseStats: [100, 100, 77, 77, 128, 128, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "648.1",
        gen: 5,
        name: "Meloetta - Pirouette Forme",
        baseStats: [100, 100, 77, 77, 128, 128, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "649",
        gen: 5,
        name: "Genesect",
        baseStats: [100, 71, 120, 95, 120, 95, 99],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "650",
        gen: 6,
        name: "Chespin",
        baseStats: [52.16666667, 56, 61, 65, 48, 45, 38],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "651",
        gen: 6,
        name: "Quilladin",
        baseStats: [67.5, 61, 78, 95, 56, 58, 57],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "652",
        gen: 6,
        name: "Chesnaught",
        baseStats: [88.33333333, 88, 107, 122, 74, 75, 64],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "653",
        gen: 6,
        name: "Fennekin",
        baseStats: [51.16666667, 40, 45, 40, 62, 60, 60],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "654",
        gen: 6,
        name: "Braixen",
        baseStats: [68.16666667, 59, 59, 58, 90, 70, 73],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "655",
        gen: 6,
        name: "Delphox",
        baseStats: [89, 75, 69, 72, 114, 100, 104],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "656",
        gen: 6,
        name: "Froakie",
        baseStats: [52.33333333, 41, 56, 40, 62, 44, 71],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "657",
        gen: 6,
        name: "Frogadier",
        baseStats: [67.5, 54, 63, 52, 83, 56, 97],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "658",
        gen: 6,
        name: "Greninja",
        baseStats: [88.33333333, 72, 95, 67, 103, 71, 122],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "659",
        gen: 6,
        name: "Bunnelby",
        baseStats: [39.5, 38, 36, 38, 32, 36, 57],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "660",
        gen: 6,
        name: "Diggersby",
        baseStats: [70.5, 85, 56, 77, 50, 77, 78],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "661",
        gen: 6,
        name: "Fletchling",
        baseStats: [46.33333333, 45, 50, 43, 40, 38, 62],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "662",
        gen: 6,
        name: "Fletchinder",
        baseStats: [63.66666667, 62, 73, 55, 56, 52, 84],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "663",
        gen: 6,
        name: "Talonflame",
        baseStats: [83.16666667, 78, 81, 71, 74, 69, 126],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "664",
        gen: 6,
        name: "Scatterbug",
        baseStats: [33.33333333, 38, 35, 40, 27, 25, 35],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "665",
        gen: 6,
        name: "Spewpa",
        baseStats: [35.5, 45, 22, 60, 27, 30, 29],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "666",
        gen: 6,
        name: "Vivillon",
        baseStats: [68.5, 80, 52, 50, 90, 50, 89],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "667",
        gen: 6,
        name: "Litleo",
        baseStats: [61.5, 62, 50, 58, 73, 54, 72],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "668",
        gen: 6,
        name: "Pyroar",
        baseStats: [84.5, 86, 68, 72, 109, 66, 106],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "669",
        gen: 6,
        name: "Flabébé",
        baseStats: [50.5, 44, 38, 39, 61, 79, 42],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "670",
        gen: 6,
        name: "Floette",
        baseStats: [61.83333333, 54, 45, 47, 75, 98, 52],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "671",
        gen: 6,
        name: "Florges",
        baseStats: [92, 78, 65, 68, 112, 154, 75],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "672",
        gen: 6,
        name: "Skiddo",
        baseStats: [58.33333333, 66, 65, 48, 62, 57, 52],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "673",
        gen: 6,
        name: "Gogoat",
        baseStats: [88.5, 123, 100, 62, 97, 81, 68],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "674",
        gen: 6,
        name: "Pancham",
        baseStats: [58, 67, 82, 62, 46, 48, 43],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "675",
        gen: 6,
        name: "Pangoro",
        baseStats: [82.5, 95, 124, 78, 69, 71, 58],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "676",
        gen: 6,
        name: "Furfrou",
        baseStats: [78.66666667, 75, 80, 60, 65, 90, 102],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "677",
        gen: 6,
        name: "Espurr",
        baseStats: [59.16666667, 62, 48, 54, 63, 60, 68],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "678",
        gen: 6,
        name: "Meowstic",
        baseStats: [77.66666667, 74, 48, 76, 83, 81, 104],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "679",
        gen: 6,
        name: "Honedge",
        baseStats: [54.16666667, 45, 80, 100, 35, 37, 28],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "680",
        gen: 6,
        name: "Doublade",
        baseStats: [74.66666667, 59, 110, 150, 45, 49, 35],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "681",
        gen: 6,
        name: "Aegislash - Blade Forme",
        baseStats: [86.66666667, 60, 150, 50, 150, 50, 60],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "681.1",
        gen: 6,
        name: "Aegislash - Shield Forme",
        baseStats: [86.66666667, 60, 50, 150, 50, 150, 60],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "682",
        gen: 6,
        name: "Spritzee",
        baseStats: [56.83333333, 78, 52, 60, 63, 65, 23],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "683",
        gen: 6,
        name: "Aromatisse",
        baseStats: [77, 101, 72, 72, 99, 89, 29],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "684",
        gen: 6,
        name: "Swirlix",
        baseStats: [56.83333333, 62, 48, 66, 59, 57, 49],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "685",
        gen: 6,
        name: "Slurpuff",
        baseStats: [80, 82, 80, 86, 85, 75, 72],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "686",
        gen: 6,
        name: "Inkay",
        baseStats: [48, 53, 54, 53, 37, 46, 45],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "687",
        gen: 6,
        name: "Malamar",
        baseStats: [80.33333333, 86, 92, 88, 68, 75, 73],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "688",
        gen: 6,
        name: "Binacle",
        baseStats: [51, 42, 52, 67, 39, 56, 50],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "689",
        gen: 6,
        name: "Barbaracle",
        baseStats: [83.33333333, 72, 105, 115, 54, 86, 68],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "690",
        gen: 6,
        name: "Skrelp",
        baseStats: [53.33333333, 50, 60, 60, 60, 60, 30],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "691",
        gen: 6,
        name: "Dragalge",
        baseStats: [82.33333333, 65, 75, 90, 97, 123, 44],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "692",
        gen: 6,
        name: "Clauncher",
        baseStats: [55, 50, 53, 62, 58, 63, 44],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "693",
        gen: 6,
        name: "Clawitzer",
        baseStats: [83.33333333, 71, 73, 88, 120, 89, 59],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "694",
        gen: 6,
        name: "Helioptile",
        baseStats: [48.16666667, 44, 38, 33, 61, 43, 70],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "695",
        gen: 6,
        name: "Heliolisk",
        baseStats: [80.16666667, 62, 55, 52, 109, 94, 109],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "696",
        gen: 6,
        name: "Tyrunt",
        baseStats: [60.33333333, 58, 89, 77, 45, 45, 48],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "697",
        gen: 6,
        name: "Tyrantrum",
        baseStats: [86.83333333, 82, 121, 119, 69, 59, 71],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "698",
        gen: 6,
        name: "Amaura",
        baseStats: [60.33333333, 77, 59, 50, 67, 63, 46],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "699",
        gen: 6,
        name: "Aurorus",
        baseStats: [86.83333333, 123, 77, 72, 99, 92, 58],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "700",
        gen: 6,
        name: "Sylveon",
        baseStats: [87.5, 95, 65, 65, 110, 130, 60],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "701",
        gen: 6,
        name: "Hawlucha",
        baseStats: [83.33333333, 78, 92, 75, 74, 63, 118],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "702",
        gen: 6,
        name: "Dedenne",
        baseStats: [71.83333333, 67, 58, 57, 81, 67, 101],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "703",
        gen: 6,
        name: "Carbink",
        baseStats: [83.33333333, 50, 50, 150, 50, 150, 50],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "704",
        gen: 6,
        name: "Goomy",
        baseStats: [50, 45, 50, 35, 55, 75, 40],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "705",
        gen: 6,
        name: "Sliggoo",
        baseStats: [75.33333333, 68, 75, 53, 83, 113, 60],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "706",
        gen: 6,
        name: "Goodra",
        baseStats: [100, 90, 100, 70, 110, 150, 80],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "707",
        gen: 6,
        name: "Klefki",
        baseStats: [78.33333333, 57, 80, 91, 80, 87, 75],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "708",
        gen: 6,
        name: "Phantump",
        baseStats: [51.5, 43, 70, 48, 50, 60, 38],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "709",
        gen: 6,
        name: "Trevenant",
        baseStats: [79, 85, 110, 76, 65, 82, 56],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "710",
        gen: 6,
        name: "Pumpkaboo - Average Size",
        baseStats: [55.83333333, 49, 66, 70, 44, 55, 51],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "710.1",
        gen: 6,
        name: "Pumpkaboo - Small Size",
        baseStats: [55.83333333, 44, 66, 70, 44, 55, 56],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "710.2",
        gen: 6,
        name: "Pumpkaboo - Large Size",
        baseStats: [55.83333333, 54, 66, 70, 44, 55, 46],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "710.3",
        gen: 6,
        name: "Pumpkaboo - Super Size",
        baseStats: [55.83333333, 59, 66, 70, 44, 55, 41],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "711",
        gen: 6,
        name: "Gourgeist - Average Size",
        baseStats: [82.33333333, 65, 90, 122, 58, 75, 84],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "711.1",
        gen: 6,
        name: "Gourgeist - Small Size",
        baseStats: [82.33333333, 55, 85, 122, 58, 75, 99],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "711.2",
        gen: 6,
        name: "Gourgeist - Large Size",
        baseStats: [82.33333333, 75, 95, 122, 58, 75, 69],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "711.3",
        gen: 6,
        name: "Gourgeist -Super Size",
        baseStats: [82.33333333, 85, 100, 122, 58, 75, 54],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "712",
        gen: 6,
        name: "Bergmite",
        baseStats: [50.66666667, 55, 69, 85, 32, 35, 28],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "713",
        gen: 6,
        name: "Avalugg",
        baseStats: [85.66666667, 95, 117, 184, 44, 46, 28],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "714",
        gen: 6,
        name: "Noibat",
        baseStats: [40.83333333, 40, 30, 35, 45, 40, 55],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "715",
        gen: 6,
        name: "Noivern",
        baseStats: [89.16666667, 85, 70, 80, 97, 80, 123],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "716",
        gen: 6,
        name: "Xerneas",
        baseStats: [113.3333333, 126, 131, 95, 131, 98, 99],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "717",
        gen: 6,
        name: "Yveltal",
        baseStats: [113.3333333, 126, 131, 95, 131, 98, 99],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "718",
        gen: 6,
        name: "Zygarde",
        baseStats: [100, 108, 100, 121, 81, 95, 95],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    }
];
