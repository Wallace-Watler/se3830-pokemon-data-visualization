// All species, generated from pokemon.csv.
const SPECIES = [
    {
        dexNumber: "001",
        name: "Bulbasaur",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [53, 45, 49, 49, 65, 65, 45],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "002",
        name: "Ivysaur",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [67.5, 60, 62, 63, 80, 80, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "003",
        name: "Venusaur",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [87.5, 80, 82, 83, 100, 100, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "003.1",
        name: "Mega Venusaur",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [104.1666667, 80, 100, 123, 122, 120, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: true
    },
    {
        dexNumber: "004",
        name: "Charmander",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [51.5, 39, 52, 43, 60, 50, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "005",
        name: "Charmeleon",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [67.5, 58, 64, 58, 80, 65, 80],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "006",
        name: "Charizard",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [89, 78, 84, 78, 109, 85, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "006.1",
        name: "Mega Charizard X",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [105.6666667, 78, 130, 111, 130, 85, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: true
    },
    {
        dexNumber: "006.2",
        name: "Mega Charizard Y",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [105.6666667, 78, 104, 78, 159, 115, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: true
    },
    {
        dexNumber: "007",
        name: "Squirtle",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [52.33333333, 44, 48, 65, 50, 64, 43],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "008",
        name: "Wartortle",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [67.5, 59, 63, 80, 65, 80, 58],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "009",
        name: "Blastoise",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [88.33333333, 79, 83, 100, 85, 105, 78],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "009.1",
        name: "Mega Blastoise",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [105, 79, 103, 120, 135, 115, 78],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "010",
        name: "Caterpie",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [32.5, 45, 30, 35, 20, 20, 45],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "011",
        name: "Metapod",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [34.16666667, 50, 20, 55, 25, 25, 30],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "012",
        name: "Butterfree",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [64.16666667, 60, 45, 50, 80, 80, 70],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "013",
        name: "Weedle",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [32.5, 40, 35, 30, 20, 20, 50],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "014",
        name: "Kakuna",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [34.16666667, 45, 25, 50, 25, 25, 35],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "015",
        name: "Beedrill",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [64.16666667, 65, 80, 40, 45, 80, 75],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "016",
        name: "Pidgey",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [41.83333333, 40, 45, 40, 35, 35, 56],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "017",
        name: "Pidgeotto",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [58.16666667, 63, 60, 55, 50, 50, 71],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "018",
        name: "Pidgeot",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [78.16666667, 83, 80, 75, 70, 70, 91],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "018.1",
        name: "Mega Pidgeot",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [96.5, 83, 80, 80, 135, 80, 121],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: true
    },
    {
        dexNumber: "019",
        name: "Rattata",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [42.16666667, 30, 56, 35, 25, 35, 72],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "019.1",
        name: "Alolan Rattata",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [42.16666667, 30, 56, 35, 25, 35, 72],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "020",
        name: "Raticate",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [68.83333333, 55, 81, 60, 50, 70, 97],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "020.1",
        name: "Alolan Raticate",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [68.83333333, 75, 71, 70, 40, 80, 77],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "021",
        name: "Spearow",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [43.66666667, 40, 60, 30, 31, 31, 70],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "022",
        name: "Fearow",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [73.66666667, 65, 90, 65, 61, 61, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "023",
        name: "Ekans",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [48, 35, 60, 44, 40, 54, 55],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "024",
        name: "Arbok",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [73, 60, 85, 69, 65, 79, 80],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "025",
        name: "Pikachu",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [50, 35, 55, 30, 50, 40, 90],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "025.1",
        name: "Partner Pikachu",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [71.66666667, 45, 80, 50, 75, 60, 120],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "026",
        name: "Raichu",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [80.83333333, 60, 90, 55, 90, 80, 110],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "026.1",
        name: "Alolan Raichu",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [80.83333333, 60, 85, 50, 95, 85, 110],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "027",
        name: "Sandshrew",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [50, 50, 75, 85, 20, 30, 40],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "027.1",
        name: "Alolan Sandshrew",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [50, 50, 75, 90, 10, 35, 40],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "028",
        name: "Sandslash",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [75, 75, 100, 110, 45, 55, 65],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "028.1",
        name: "Alolan Sandslash",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [75, 75, 100, 120, 25, 65, 65],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "029",
        name: "Nidoran-F",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [45.83333333, 55, 47, 52, 40, 40, 41],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "030",
        name: "Nidorina",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [60.83333333, 70, 62, 67, 55, 55, 56],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "031",
        name: "Nidoqueen",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [82.5, 90, 82, 87, 75, 85, 76],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "032",
        name: "Nidoran-M",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [45.5, 46, 57, 40, 40, 40, 50],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "033",
        name: "Nidorino",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [60.83333333, 61, 72, 57, 55, 55, 65],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "034",
        name: "Nidoking",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [82.5, 81, 92, 77, 85, 75, 85],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "035",
        name: "Clefairy",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [53.83333333, 70, 45, 48, 60, 65, 35],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "036",
        name: "Clefable",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [78.83333333, 95, 70, 73, 85, 90, 60],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "037",
        name: "Vulpix",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [49.83333333, 38, 41, 40, 50, 65, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "037.1",
        name: "Alolan Vulpix",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [49.83333333, 38, 41, 40, 50, 65, 65],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "038",
        name: "Ninetales",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [84.16666667, 73, 76, 75, 81, 100, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "038.1",
        name: "Alolan Ninetales",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [84.16666667, 73, 67, 75, 81, 100, 109],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "039",
        name: "Jigglypuff",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [45, 115, 45, 20, 45, 25, 20],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "040",
        name: "Wigglytuff",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [70.83333333, 140, 70, 45, 75, 50, 45],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "041",
        name: "Zubat",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [40.83333333, 40, 45, 35, 30, 40, 55],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "042",
        name: "Golbat",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [75.83333333, 75, 80, 70, 65, 75, 90],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "043",
        name: "Oddish",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [53.33333333, 45, 50, 55, 75, 65, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "044",
        name: "Gloom",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [65.83333333, 60, 65, 70, 85, 75, 40],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "045",
        name: "Vileplume",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [80, 75, 80, 85, 100, 90, 50],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "046",
        name: "Paras",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [47.5, 35, 70, 55, 45, 55, 25],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "047",
        name: "Parasect",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [67.5, 60, 95, 80, 60, 80, 30],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "048",
        name: "Venonat",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [50.83333333, 60, 55, 50, 40, 55, 45],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "049",
        name: "Venomoth",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [75, 70, 65, 60, 90, 75, 90],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "050",
        name: "Diglett",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [44.16666667, 10, 55, 25, 35, 45, 95],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "050.1",
        name: "Alolan Diglett",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [44.16666667, 10, 55, 30, 35, 45, 90],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "051",
        name: "Dugtrio",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [70.83333333, 35, 100, 50, 50, 70, 120],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "051.1",
        name: "Alolan Dugtrio",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [70.83333333, 35, 100, 60, 50, 70, 110],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "052",
        name: "Meowth",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [48.33333333, 40, 45, 35, 40, 40, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "052.1",
        name: "Alolan Meowth",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [48.33333333, 40, 35, 35, 50, 40, 90],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "052.2",
        name: "Galarian Meowth",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [48.33333333, 50, 65, 55, 40, 40, 40],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "053",
        name: "Persian",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [73.33333333, 65, 70, 60, 65, 65, 115],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "053.1",
        name: "Alolan Persian",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [73.33333333, 65, 60, 60, 75, 65, 115],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "054",
        name: "Psyduck",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [53.33333333, 50, 52, 48, 65, 50, 55],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "055",
        name: "Golduck",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [83.33333333, 80, 82, 78, 95, 80, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "056",
        name: "Mankey",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [50.83333333, 40, 80, 35, 35, 45, 70],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "057",
        name: "Primeape",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [75.83333333, 65, 105, 60, 60, 70, 95],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "058",
        name: "Growlithe",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [58.33333333, 55, 70, 45, 70, 50, 60],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "059",
        name: "Arcanine",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [92.5, 90, 110, 80, 100, 80, 95],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "060",
        name: "Poliwag",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [50, 40, 50, 40, 40, 40, 90],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "061",
        name: "Poliwhirl",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [64.16666667, 65, 65, 65, 50, 50, 90],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "062",
        name: "Poliwrath",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [83.33333333, 90, 85, 95, 70, 90, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "063",
        name: "Abra",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [51.66666667, 25, 20, 15, 105, 55, 90],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "064",
        name: "Kadabra",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [66.66666667, 40, 35, 30, 120, 70, 105],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "065",
        name: "Alakazam",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [81.66666667, 55, 50, 45, 135, 85, 120],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "065.1",
        name: "Mega Alakazam",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [98.33333333, 55, 50, 65, 175, 95, 150],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "066",
        name: "Machop",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [50.83333333, 70, 80, 50, 35, 35, 35],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "067",
        name: "Machoke",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [67.5, 80, 100, 70, 50, 60, 45],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "068",
        name: "Machamp",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [84.16666667, 90, 130, 80, 65, 85, 55],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "069",
        name: "Bellsprout",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [50, 50, 75, 35, 70, 30, 40],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "070",
        name: "Weepinbell",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [65, 65, 90, 50, 85, 45, 55],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "071",
        name: "Victreebel",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [80, 80, 105, 65, 100, 60, 70],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "072",
        name: "Tentacool",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [55.83333333, 40, 40, 35, 50, 100, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "073",
        name: "Tentacruel",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [85.83333333, 80, 70, 65, 80, 120, 100],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "074",
        name: "Geodude",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [50, 40, 80, 100, 30, 30, 20],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "074.1",
        name: "Alolan Geodude",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [50, 40, 80, 100, 30, 30, 20],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "075",
        name: "Graveler",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [65, 55, 95, 115, 45, 45, 35],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "075.1",
        name: "Alolan Graveler",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [65, 55, 95, 115, 45, 45, 35],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "076",
        name: "Golem",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [82.5, 80, 120, 130, 55, 65, 45],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "076.1",
        name: "Alolan Golem",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [82.5, 80, 120, 130, 55, 65, 45],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "077",
        name: "Ponyta",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [68.33333333, 50, 85, 55, 65, 65, 90],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "077.1",
        name: "Galarian Ponyta",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [68.33333333, 50, 85, 55, 65, 65, 90],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "078",
        name: "Rapidash",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [83.33333333, 65, 100, 70, 80, 80, 105],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "078.1",
        name: "Galarian Rapidash",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [83.33333333, 65, 100, 70, 80, 80, 105],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "079",
        name: "Slowpoke",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [52.5, 90, 65, 65, 40, 40, 15],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "079.1",
        name: "Galarian Slowpoke",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [52.5, 90, 65, 65, 40, 40, 15],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "080",
        name: "Slowbro",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [81.66666667, 95, 75, 110, 100, 80, 30],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "080.1",
        name: "Mega Slowbro",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [98.33333333, 95, 75, 180, 130, 80, 30],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: true
    },
    {
        dexNumber: "080.2",
        name: "Galarian Slowbro",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [81.66666667, 95, 100, 95, 100, 70, 30],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "081",
        name: "Magnemite",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [54.16666667, 25, 35, 70, 95, 55, 45],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "082",
        name: "Magneton",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [77.5, 50, 60, 95, 120, 70, 70],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "083",
        name: "Farfetch'd",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [58.66666667, 52, 65, 55, 58, 62, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "083.1",
        name: "Galarian Farfetch'd",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [62.83333333, 52, 95, 55, 58, 62, 55],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "084",
        name: "Doduo",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [51.66666667, 35, 85, 45, 35, 35, 75],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "085",
        name: "Dodrio",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [76.66666667, 60, 110, 70, 60, 60, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "086",
        name: "Seel",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [54.16666667, 65, 45, 55, 45, 70, 45],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "087",
        name: "Dewgong",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [79.16666667, 90, 70, 80, 70, 95, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "088",
        name: "Grimer",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [54.16666667, 80, 80, 50, 40, 50, 25],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "088.1",
        name: "Alolan Grimer",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [54.16666667, 80, 80, 50, 40, 50, 25],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "089",
        name: "Muk",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [83.33333333, 105, 105, 75, 65, 100, 50],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "089.1",
        name: "Alolan Muk",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [83.33333333, 105, 105, 75, 65, 100, 50],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "090",
        name: "Shellder",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [50.83333333, 30, 65, 100, 45, 25, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "091",
        name: "Cloyster",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [87.5, 50, 95, 180, 85, 45, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "092",
        name: "Gastly",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [51.66666667, 30, 35, 30, 100, 35, 80],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "093",
        name: "Haunter",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [67.5, 45, 50, 45, 115, 55, 95],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "094",
        name: "Gengar",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [83.33333333, 60, 65, 60, 130, 75, 110],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "094.1",
        name: "Mega Gengar",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [100, 60, 65, 80, 170, 95, 130],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: true
    },
    {
        dexNumber: "095",
        name: "Onix",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [64.16666667, 35, 45, 160, 30, 45, 70],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "096",
        name: "Drowzee",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [54.66666667, 60, 48, 45, 43, 90, 42],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "097",
        name: "Hypno",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [80.5, 85, 73, 70, 73, 115, 67],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "098",
        name: "Krabby",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [54.16666667, 30, 105, 90, 25, 25, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "099",
        name: "Kingler",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [79.16666667, 55, 130, 115, 50, 50, 75],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "100",
        name: "Voltorb",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [55, 40, 30, 50, 55, 55, 100],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "101",
        name: "Electrode",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [80, 60, 50, 70, 80, 80, 140],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "102",
        name: "Exeggcute",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [54.16666667, 60, 40, 80, 60, 45, 40],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "103",
        name: "Exeggutor",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [88.33333333, 95, 95, 85, 125, 75, 55],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "103.1",
        name: "Alolan Exeggutor",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [88.33333333, 95, 105, 85, 125, 75, 45],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "104",
        name: "Cubone",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [53.33333333, 50, 50, 95, 40, 50, 35],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "105",
        name: "Marowak",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [70.83333333, 60, 80, 110, 50, 80, 45],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "105.1",
        name: "Alolan Marowak",
        gen: 1,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [70.83333333, 60, 80, 110, 50, 80, 45],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "106",
        name: "Hitmonlee",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [75.83333333, 50, 120, 53, 35, 110, 87],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "107",
        name: "Hitmonchan",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [75.83333333, 50, 105, 79, 35, 110, 76],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "108",
        name: "Lickitung",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [64.16666667, 90, 55, 75, 60, 75, 30],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "109",
        name: "Koffing",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [56.66666667, 40, 65, 95, 60, 45, 35],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "110",
        name: "Weezing",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [81.66666667, 65, 90, 120, 85, 70, 60],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "110.1",
        name: "Galarian Weezing",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [81.66666667, 65, 90, 120, 85, 70, 60],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "111",
        name: "Rhyhorn",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [57.5, 80, 85, 95, 30, 30, 25],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "112",
        name: "Rhydon",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [80.83333333, 105, 130, 120, 45, 45, 40],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "113",
        name: "Chansey",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [75, 250, 5, 5, 35, 105, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "114",
        name: "Tangela",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [72.5, 65, 55, 115, 100, 40, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "115",
        name: "Kangaskhan",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [81.66666667, 105, 95, 80, 40, 80, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "115.1",
        name: "Mega Kangaskhan",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [98.33333333, 105, 125, 100, 60, 100, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "116",
        name: "Horsea",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [49.16666667, 30, 40, 70, 70, 25, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "117",
        name: "Seadra",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [73.33333333, 55, 65, 95, 95, 45, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "118",
        name: "Goldeen",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [53.33333333, 45, 67, 60, 35, 50, 63],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "119",
        name: "Seaking",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [75, 80, 92, 65, 65, 80, 68],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "120",
        name: "Staryu",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [56.66666667, 30, 45, 55, 70, 55, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "121",
        name: "Starmie",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [86.66666667, 60, 75, 85, 100, 85, 115],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "122",
        name: "Mr. Mime",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [76.66666667, 40, 45, 65, 100, 120, 90],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "122.1",
        name: "Galarian Mr. Mime",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [76.66666667, 50, 65, 65, 90, 90, 100],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "123",
        name: "Scyther",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [83.33333333, 70, 110, 80, 55, 80, 105],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "124",
        name: "Jynx",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [75.83333333, 65, 50, 35, 115, 95, 95],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "125",
        name: "Electabuzz",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [81.66666667, 65, 83, 57, 95, 85, 105],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "126",
        name: "Magmar",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [82.5, 65, 95, 57, 100, 85, 93],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "127",
        name: "Pinsir",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [83.33333333, 65, 125, 100, 55, 70, 85],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "127.1",
        name: "Mega Pinsir",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [100, 65, 155, 120, 65, 90, 105],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: true
    },
    {
        dexNumber: "128",
        name: "Tauros",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [81.66666667, 75, 100, 95, 40, 70, 110],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "129",
        name: "Magikarp",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [33.33333333, 20, 10, 55, 15, 20, 80],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "130",
        name: "Gyarados",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [90, 95, 125, 79, 60, 100, 81],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "130.1",
        name: "Mega Gyarados",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [106.6666667, 95, 155, 109, 70, 130, 81],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: true
    },
    {
        dexNumber: "131",
        name: "Lapras",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [89.16666667, 130, 85, 80, 85, 95, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "132",
        name: "Ditto",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [48, 48, 48, 48, 48, 48, 48],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "133",
        name: "Eevee",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [54.16666667, 55, 55, 50, 45, 65, 55],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "133.1",
        name: "Partner Eevee",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [72.5, 65, 75, 70, 65, 85, 75],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "134",
        name: "Vaporeon",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [87.5, 130, 65, 60, 110, 95, 65],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "135",
        name: "Jolteon",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [87.5, 65, 65, 60, 110, 95, 130],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "136",
        name: "Flareon",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [87.5, 65, 130, 60, 95, 110, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "137",
        name: "Porygon",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [65.83333333, 65, 60, 70, 85, 75, 40],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "138",
        name: "Omanyte",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [59.16666667, 35, 40, 100, 90, 55, 35],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "139",
        name: "Omastar",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [82.5, 70, 60, 125, 115, 70, 55],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "140",
        name: "Kabuto",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [59.16666667, 30, 80, 90, 55, 45, 55],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "141",
        name: "Kabutops",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [82.5, 60, 115, 105, 65, 70, 80],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "142",
        name: "Aerodactyl",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [85.83333333, 80, 105, 65, 60, 75, 130],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "142.1",
        name: "Mega Aerodactyl",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [102.5, 80, 135, 85, 70, 95, 150],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: true
    },
    {
        dexNumber: "143",
        name: "Snorlax",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [90, 160, 110, 65, 65, 110, 30],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "144",
        name: "Articuno",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [96.66666667, 90, 85, 100, 95, 125, 85],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "144.1",
        name: "Galarian Articuno",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [96.66666667, 90, 85, 85, 125, 100, 95],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "145",
        name: "Zapdos",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [96.66666667, 90, 90, 85, 125, 90, 100],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "145.1",
        name: "Galarian Zapdos",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [96.66666667, 90, 125, 90, 85, 90, 100],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "146",
        name: "Moltres",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [96.66666667, 90, 100, 90, 125, 85, 90],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "146.1",
        name: "Galarian Moltres",
        gen: 1,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [96.66666667, 90, 85, 90, 100, 125, 90],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "147",
        name: "Dratini",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [50, 41, 64, 45, 50, 50, 50],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "148",
        name: "Dragonair",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [70, 61, 84, 65, 70, 70, 70],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "149",
        name: "Dragonite",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [100, 91, 134, 95, 100, 100, 80],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "150",
        name: "Mewtwo",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [113.3333333, 106, 110, 90, 154, 90, 130],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "150.1",
        name: "Mega Mewtwo X",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [130, 106, 190, 100, 154, 100, 130],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: true
    },
    {
        dexNumber: "150.2",
        name: "Mega Mewtwo Y",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [130, 106, 150, 70, 194, 120, 140],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "151",
        name: "Mew",
        gen: 1,
        region: REGION_NAMES.indexOf("Kanto"),
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "152",
        name: "Chikorita",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [53, 45, 49, 65, 49, 65, 45],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "153",
        name: "Bayleef",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [67.5, 60, 62, 80, 63, 80, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "154",
        name: "Meganium",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [87.5, 80, 82, 100, 83, 100, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "155",
        name: "Cyndaquil",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [51.5, 39, 52, 43, 60, 50, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "156",
        name: "Quilava",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [67.5, 58, 64, 58, 80, 65, 80],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "157",
        name: "Typhlosion",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [89, 78, 84, 78, 109, 85, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "158",
        name: "Totodile",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [52.33333333, 50, 65, 64, 44, 48, 43],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "159",
        name: "Croconaw",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [67.5, 65, 80, 80, 59, 63, 58],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "160",
        name: "Feraligatr",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [88.33333333, 85, 105, 100, 79, 83, 78],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "161",
        name: "Sentret",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [35.83333333, 35, 46, 34, 35, 45, 20],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "162",
        name: "Furret",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [69.16666667, 85, 76, 64, 45, 55, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "163",
        name: "Hoothoot",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [43.66666667, 60, 30, 30, 36, 56, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "164",
        name: "Noctowl",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [73.66666667, 100, 50, 50, 76, 96, 70],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "165",
        name: "Ledyba",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [44.16666667, 40, 20, 30, 40, 80, 55],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "166",
        name: "Ledian",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [65, 55, 35, 50, 55, 110, 85],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "167",
        name: "Spinarak",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [41.66666667, 40, 60, 40, 40, 40, 30],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "168",
        name: "Ariados",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [65, 70, 90, 70, 60, 60, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "169",
        name: "Crobat",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [89.16666667, 85, 90, 80, 70, 80, 130],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "170",
        name: "Chinchou",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [55, 75, 38, 38, 56, 56, 67],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "171",
        name: "Lanturn",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [76.66666667, 125, 58, 58, 76, 76, 67],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "172",
        name: "Pichu",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [34.16666667, 20, 40, 15, 35, 35, 60],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "173",
        name: "Cleffa",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [36.33333333, 50, 25, 28, 45, 55, 15],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "174",
        name: "Igglybuff",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [35, 90, 30, 15, 40, 20, 15],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "175",
        name: "Togepi",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [40.83333333, 35, 20, 65, 40, 65, 20],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "176",
        name: "Togetic",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [67.5, 55, 40, 85, 80, 105, 40],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "177",
        name: "Natu",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [53.33333333, 40, 50, 45, 70, 45, 70],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "178",
        name: "Xatu",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [78.33333333, 65, 75, 70, 95, 70, 95],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "179",
        name: "Mareep",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [46.66666667, 55, 40, 40, 65, 45, 35],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "180",
        name: "Flaaffy",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [60.83333333, 70, 55, 55, 80, 60, 45],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "181",
        name: "Ampharos",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [83.33333333, 90, 75, 75, 115, 90, 55],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "181.1",
        name: "Mega Ampharos",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [101.6666667, 90, 95, 105, 165, 110, 45],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: true
    },
    {
        dexNumber: "182",
        name: "Bellossom",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [80, 75, 80, 85, 90, 100, 50],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "183",
        name: "Marill",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [41.66666667, 70, 20, 50, 20, 50, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "184",
        name: "Azumarill",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [68.33333333, 100, 50, 80, 50, 80, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "185",
        name: "Sudowoodo",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [68.33333333, 70, 100, 115, 30, 65, 30],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "186",
        name: "Politoed",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [83.33333333, 90, 75, 75, 90, 100, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "187",
        name: "Hoppip",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [41.66666667, 35, 35, 40, 35, 55, 50],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "188",
        name: "Skiploom",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [56.66666667, 55, 45, 50, 45, 65, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "189",
        name: "Jumpluff",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [75, 75, 55, 70, 55, 85, 110],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "190",
        name: "Aipom",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [60, 55, 70, 55, 40, 55, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "191",
        name: "Sunkern",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [30, 30, 30, 30, 30, 30, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "192",
        name: "Sunflora",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [70.83333333, 75, 75, 55, 105, 85, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "193",
        name: "Yanma",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [65, 65, 65, 45, 75, 45, 95],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "194",
        name: "Wooper",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [35, 55, 45, 45, 25, 25, 15],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "195",
        name: "Quagsire",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [71.66666667, 95, 85, 85, 65, 65, 35],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "196",
        name: "Espeon",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [87.5, 65, 65, 60, 130, 95, 110],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "197",
        name: "Umbreon",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [87.5, 95, 65, 110, 60, 130, 65],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "198",
        name: "Murkrow",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [67.5, 60, 85, 42, 85, 42, 91],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "199",
        name: "Slowking",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [81.66666667, 95, 75, 80, 100, 110, 30],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "199.1",
        name: "Galarian Slowking",
        gen: 2,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [81.66666667, 95, 65, 80, 110, 110, 30],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "200",
        name: "Misdreavus",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [72.5, 60, 60, 60, 85, 85, 85],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "201",
        name: "Unown",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [56, 48, 72, 48, 72, 48, 48],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "202",
        name: "Wobbuffet",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [67.5, 190, 33, 58, 33, 58, 33],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "203",
        name: "Girafarig",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [75.83333333, 70, 80, 65, 90, 65, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "204",
        name: "Pineco",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [48.33333333, 50, 65, 90, 35, 35, 15],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "205",
        name: "Forretress",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [77.5, 75, 90, 140, 60, 60, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "206",
        name: "Dunsparce",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [69.16666667, 100, 70, 70, 65, 65, 45],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "207",
        name: "Gligar",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [71.66666667, 65, 75, 105, 35, 65, 85],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "208",
        name: "Steelix",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [85, 75, 85, 200, 55, 65, 30],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "208.1",
        name: "Mega Steelix",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [101.6666667, 75, 125, 230, 55, 95, 30],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: true
    },
    {
        dexNumber: "209",
        name: "Snubbull",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [50, 60, 80, 50, 40, 40, 30],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "210",
        name: "Granbull",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [75, 90, 120, 75, 60, 60, 45],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "211",
        name: "Qwilfish",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [71.66666667, 65, 95, 75, 55, 55, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "212",
        name: "Scizor",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [83.33333333, 70, 130, 100, 55, 80, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "212.1",
        name: "Mega Scizor",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [100, 70, 150, 140, 65, 100, 75],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: true
    },
    {
        dexNumber: "213",
        name: "Shuckle",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [84.16666667, 20, 10, 230, 10, 230, 5],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "214",
        name: "Heracross",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [83.33333333, 80, 125, 75, 40, 95, 85],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "214.1",
        name: "Mega Heracross",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [100, 80, 185, 115, 40, 105, 75],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: true
    },
    {
        dexNumber: "215",
        name: "Sneasel",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [71.66666667, 55, 95, 55, 35, 75, 115],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "216",
        name: "Teddiursa",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [55, 60, 80, 50, 50, 50, 40],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "217",
        name: "Ursaring",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [83.33333333, 90, 130, 75, 75, 75, 55],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "218",
        name: "Slugma",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [41.66666667, 40, 40, 40, 70, 40, 20],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "219",
        name: "Magcargo",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [68.33333333, 50, 50, 120, 80, 80, 30],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "220",
        name: "Swinub",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [41.66666667, 50, 50, 40, 30, 30, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "221",
        name: "Piloswine",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [75, 100, 100, 80, 60, 60, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "222",
        name: "Corsola",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [68.33333333, 65, 55, 95, 65, 95, 35],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "222.1",
        name: "Galarian Corsola",
        gen: 2,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [68.33333333, 60, 55, 100, 65, 100, 30],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "223",
        name: "Remoraid",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [50, 35, 65, 35, 65, 35, 65],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "224",
        name: "Octillery",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [80, 75, 105, 75, 105, 75, 45],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "225",
        name: "Delibird",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [55, 45, 55, 45, 65, 45, 75],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "226",
        name: "Mantine",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [77.5, 65, 40, 70, 80, 140, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "227",
        name: "Skarmory",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [77.5, 65, 80, 140, 40, 70, 70],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "228",
        name: "Houndour",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [55, 45, 60, 30, 80, 50, 65],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "229",
        name: "Houndoom",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [83.33333333, 75, 90, 50, 110, 80, 95],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "229.1",
        name: "Mega Houndoom",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [100, 75, 90, 90, 140, 90, 115],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: true
    },
    {
        dexNumber: "230",
        name: "Kingdra",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [90, 75, 95, 95, 95, 95, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "231",
        name: "Phanpy",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [55, 90, 60, 60, 40, 40, 40],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "232",
        name: "Donphan",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [83.33333333, 90, 120, 120, 60, 60, 50],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "233",
        name: "Porygon2",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [85.83333333, 85, 80, 90, 105, 95, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "234",
        name: "Stantler",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [77.5, 73, 95, 62, 85, 65, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "235",
        name: "Smeargle",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [41.66666667, 55, 20, 35, 20, 45, 75],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "236",
        name: "Tyrogue",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [35, 35, 35, 35, 35, 35, 35],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "237",
        name: "Hitmontop",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [75.83333333, 50, 95, 95, 35, 110, 70],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "238",
        name: "Smoochum",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [50.83333333, 45, 30, 15, 85, 65, 65],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "239",
        name: "Elekid",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [60, 45, 63, 37, 65, 55, 95],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "240",
        name: "Magby",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [60.83333333, 45, 75, 37, 70, 55, 83],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "241",
        name: "Miltank",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [81.66666667, 95, 80, 105, 40, 70, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "242",
        name: "Blissey",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [90, 255, 10, 10, 75, 135, 55],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "243",
        name: "Raikou",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [96.66666667, 90, 85, 75, 115, 100, 115],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "244",
        name: "Entei",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [96.66666667, 115, 115, 85, 90, 75, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "245",
        name: "Suicune",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [96.66666667, 100, 75, 115, 90, 115, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "246",
        name: "Larvitar",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [50, 50, 64, 50, 45, 50, 41],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "247",
        name: "Pupitar",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [68.33333333, 70, 84, 70, 65, 70, 51],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "248",
        name: "Tyranitar",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [100, 100, 134, 110, 95, 100, 61],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "248.1",
        name: "Mega Tyranitar",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [116.6666667, 100, 164, 150, 95, 120, 71],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: true
    },
    {
        dexNumber: "249",
        name: "Lugia",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [113.3333333, 106, 90, 130, 90, 154, 110],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "250",
        name: "Ho-oh",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [113.3333333, 106, 130, 90, 110, 154, 90],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "251",
        name: "Celebi",
        gen: 2,
        region: REGION_NAMES.indexOf("Johto"),
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "252",
        name: "Treecko",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [51.66666667, 40, 45, 35, 65, 55, 70],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "253",
        name: "Grovyle",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [67.5, 50, 65, 45, 85, 65, 95],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "254",
        name: "Sceptile",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [88.33333333, 70, 85, 65, 105, 85, 120],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "254.1",
        name: "Mega Sceptile",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [105, 70, 110, 75, 145, 85, 145],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: true
    },
    {
        dexNumber: "255",
        name: "Torchic",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [51.66666667, 45, 60, 40, 70, 50, 45],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "256",
        name: "Combusken",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [67.5, 60, 85, 60, 85, 60, 55],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "257",
        name: "Blaziken",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [88.33333333, 80, 120, 70, 110, 70, 80],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "257.1",
        name: "Mega Blaziken",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [105, 80, 160, 80, 130, 80, 100],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: true
    },
    {
        dexNumber: "258",
        name: "Mudkip",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [51.66666667, 50, 70, 50, 50, 50, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "259",
        name: "Marshtomp",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [67.5, 70, 85, 70, 60, 70, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "260",
        name: "Swampert",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [89.16666667, 100, 110, 90, 85, 90, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "260.1",
        name: "Mega Swampert",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [105.8333333, 100, 150, 110, 95, 110, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: true
    },
    {
        dexNumber: "261",
        name: "Poochyena",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [36.66666667, 35, 55, 35, 30, 30, 35],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "262",
        name: "Mightyena",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [70, 70, 90, 70, 60, 60, 70],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "263",
        name: "Zigzagoon",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [40, 38, 30, 41, 30, 41, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "263.1",
        name: "Galarian Zigzagoon",
        gen: 3,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [40, 38, 30, 41, 30, 41, 60],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "264",
        name: "Linoone",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [70, 78, 70, 61, 50, 61, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "264.1",
        name: "Galarian Linoone",
        gen: 3,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [70, 78, 70, 61, 50, 61, 100],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "265",
        name: "Wurmple",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [32.5, 45, 45, 35, 20, 30, 20],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "266",
        name: "Silcoon",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [34.16666667, 50, 35, 55, 25, 25, 15],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "267",
        name: "Beautifly",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [64.16666667, 60, 70, 50, 90, 50, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "268",
        name: "Cascoon",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [34.16666667, 50, 35, 55, 25, 25, 15],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "269",
        name: "Dustox",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [64.16666667, 60, 50, 70, 50, 90, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "270",
        name: "Lotad",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [36.66666667, 40, 30, 30, 40, 50, 30],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "271",
        name: "Lombre",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [56.66666667, 60, 50, 50, 60, 70, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "272",
        name: "Ludicolo",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [80, 80, 70, 70, 90, 100, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "273",
        name: "Seedot",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [36.66666667, 40, 40, 50, 30, 30, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "274",
        name: "Nuzleaf",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [56.66666667, 70, 70, 40, 60, 40, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "275",
        name: "Shiftry",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [80, 90, 100, 60, 90, 60, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "276",
        name: "Taillow",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [45, 40, 55, 30, 30, 30, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "277",
        name: "Swellow",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [71.66666667, 60, 85, 60, 50, 50, 125],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "278",
        name: "Wingull",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [45, 40, 30, 30, 55, 30, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "279",
        name: "Pelipper",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [71.66666667, 60, 50, 100, 85, 70, 65],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "280",
        name: "Ralts",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [33, 28, 25, 25, 45, 35, 40],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "281",
        name: "Kirlia",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [46.33333333, 38, 35, 35, 65, 55, 50],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "282",
        name: "Gardevoir",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [86.33333333, 68, 65, 65, 125, 115, 80],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "282.1",
        name: "Mega Gardevoir",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [103, 68, 85, 65, 165, 135, 100],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: true
    },
    {
        dexNumber: "283",
        name: "Surskit",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [44.83333333, 40, 30, 32, 50, 52, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "284",
        name: "Masquerain",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [69, 70, 60, 62, 80, 82, 60],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "285",
        name: "Shroomish",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [49.16666667, 60, 40, 60, 40, 60, 35],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "286",
        name: "Breloom",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [76.66666667, 60, 130, 80, 60, 60, 70],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "287",
        name: "Slakoth",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [46.66666667, 60, 60, 60, 35, 35, 30],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "288",
        name: "Vigoroth",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [73.33333333, 80, 80, 80, 55, 55, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "289",
        name: "Slaking",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [111.6666667, 150, 160, 100, 95, 65, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "290",
        name: "Nincada",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [44.33333333, 31, 45, 90, 30, 30, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "291",
        name: "Ninjask",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [76, 61, 90, 45, 50, 50, 160],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "292",
        name: "Shedinja",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [39.33333333, 1, 90, 45, 30, 30, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "293",
        name: "Whismur",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [40, 64, 51, 23, 51, 23, 28],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "294",
        name: "Loudred",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [60, 84, 71, 43, 71, 43, 48],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "295",
        name: "Exploud",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [80, 104, 91, 63, 91, 63, 68],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "296",
        name: "Makuhita",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [39.5, 72, 60, 30, 20, 30, 25],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "297",
        name: "Hariyama",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [79, 144, 120, 60, 40, 60, 50],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "298",
        name: "Azurill",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [31.66666667, 50, 20, 40, 20, 40, 20],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "299",
        name: "Nosepass",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [62.5, 30, 45, 135, 45, 90, 30],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "300",
        name: "Skitty",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [43.33333333, 50, 45, 45, 35, 35, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "301",
        name: "Delcatty",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [63.33333333, 70, 65, 65, 55, 55, 70],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "302",
        name: "Sableye",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [63.33333333, 50, 75, 75, 65, 65, 50],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "302.1",
        name: "Mega Sableye",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [80, 50, 85, 125, 85, 115, 20],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: true
    },
    {
        dexNumber: "303",
        name: "Mawile",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [63.33333333, 50, 85, 85, 55, 55, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "303.1",
        name: "Mega Mawile",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [86.66666667, 50, 105, 125, 55, 95, 90],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: true
    },
    {
        dexNumber: "304",
        name: "Aron",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [55, 50, 70, 100, 40, 40, 30],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "305",
        name: "Lairon",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [71.66666667, 60, 90, 140, 50, 50, 40],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "306",
        name: "Aggron",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [88.33333333, 70, 110, 180, 60, 60, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "306.1",
        name: "Mega Aggron",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [105, 70, 140, 230, 60, 80, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "307",
        name: "Meditite",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [46.66666667, 30, 40, 55, 40, 55, 60],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "308",
        name: "Medicham",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [68.33333333, 60, 60, 75, 60, 75, 80],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "308.1",
        name: "Mega Medicham",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [85, 60, 100, 85, 80, 85, 100],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: true
    },
    {
        dexNumber: "309",
        name: "Electrike",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [49.16666667, 40, 45, 40, 65, 40, 65],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "310",
        name: "Manectric",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [79.16666667, 70, 75, 60, 105, 60, 105],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "310.1",
        name: "Mega Manectric",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [95.83333333, 70, 75, 80, 135, 80, 135],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "311",
        name: "Plusle",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [67.5, 60, 50, 40, 85, 75, 95],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "312",
        name: "Minun",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [67.5, 60, 40, 50, 75, 85, 95],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "313",
        name: "Volbeat",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [66.66666667, 65, 73, 55, 47, 75, 85],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "314",
        name: "Illumise",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [66.66666667, 65, 47, 55, 73, 75, 85],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "315",
        name: "Roselia",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [66.66666667, 50, 60, 45, 100, 80, 65],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "316",
        name: "Gulpin",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [50.33333333, 70, 43, 53, 43, 53, 40],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "317",
        name: "Swalot",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [77.83333333, 100, 73, 83, 73, 83, 55],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "318",
        name: "Carvanha",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [50.83333333, 45, 90, 20, 65, 20, 65],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "319",
        name: "Sharpedo",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [76.66666667, 70, 120, 40, 95, 40, 95],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "319.1",
        name: "Mega Sharpedo",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [93.33333333, 70, 140, 70, 110, 65, 105],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: true
    },
    {
        dexNumber: "320",
        name: "Wailmer",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [66.66666667, 130, 70, 35, 70, 35, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "321",
        name: "Wailord",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [83.33333333, 170, 90, 45, 90, 45, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "322",
        name: "Numel",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [50.83333333, 60, 60, 40, 65, 45, 35],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "323",
        name: "Camerupt",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [76.66666667, 70, 100, 70, 105, 75, 40],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "323.1",
        name: "Mega Camerupt",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [93.33333333, 70, 120, 100, 145, 105, 20],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: true
    },
    {
        dexNumber: "324",
        name: "Torkoal",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [78.33333333, 70, 85, 140, 85, 70, 20],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "325",
        name: "Spoink",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [55, 60, 25, 35, 70, 80, 60],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "326",
        name: "Grumpig",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [78.33333333, 80, 45, 65, 90, 110, 80],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "327",
        name: "Spinda",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [60, 60, 60, 60, 60, 60, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "328",
        name: "Trapinch",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [48.33333333, 45, 100, 45, 45, 45, 10],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "329",
        name: "Vibrava",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [56.66666667, 50, 70, 50, 50, 50, 70],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "330",
        name: "Flygon",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [86.66666667, 80, 100, 80, 80, 80, 100],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "331",
        name: "Cacnea",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [55.83333333, 50, 85, 40, 85, 40, 35],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "332",
        name: "Cacturne",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [79.16666667, 70, 115, 60, 115, 60, 55],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "333",
        name: "Swablu",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [51.66666667, 45, 40, 60, 40, 75, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "334",
        name: "Altaria",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [81.66666667, 75, 70, 90, 70, 105, 80],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "334.1",
        name: "Mega Altaria",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [98.33333333, 75, 110, 110, 110, 105, 80],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: true
    },
    {
        dexNumber: "335",
        name: "Zangoose",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [76.33333333, 73, 115, 60, 60, 60, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "336",
        name: "Seviper",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [76.33333333, 73, 100, 60, 100, 60, 65],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "337",
        name: "Lunatone",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [73.33333333, 70, 55, 65, 95, 85, 70],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "338",
        name: "Solrock",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [73.33333333, 70, 95, 85, 55, 65, 70],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "339",
        name: "Barboach",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [48, 50, 48, 43, 46, 41, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "340",
        name: "Whiscash",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [78, 110, 78, 73, 76, 71, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "341",
        name: "Corphish",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [51.33333333, 43, 80, 65, 50, 35, 35],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "342",
        name: "Crawdaunt",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [78, 63, 120, 85, 90, 55, 55],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "343",
        name: "Baltoy",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [50, 40, 40, 55, 40, 70, 55],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "344",
        name: "Claydol",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [83.33333333, 60, 70, 105, 70, 120, 75],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "345",
        name: "Lileep",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [59.16666667, 66, 41, 77, 61, 87, 23],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "346",
        name: "Cradily",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [82.5, 86, 81, 97, 81, 107, 43],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "347",
        name: "Anorith",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [59.16666667, 45, 95, 50, 40, 50, 75],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "348",
        name: "Armaldo",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [82.5, 75, 125, 100, 70, 80, 45],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "349",
        name: "Feebas",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [33.33333333, 20, 15, 20, 10, 55, 80],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "350",
        name: "Milotic",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [90, 95, 60, 79, 100, 125, 81],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "351",
        name: "Castform",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [70, 70, 70, 70, 70, 70, 70],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "351.1",
        name: "Castform - Sunny Form",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [70, 70, 70, 70, 70, 70, 70],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "351.2",
        name: "Castform - Rainy Form",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [70, 70, 70, 70, 70, 70, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "351.3",
        name: "Castform - Snowy Form",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [70, 70, 70, 70, 70, 70, 70],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "352",
        name: "Kecleon",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [73.33333333, 60, 90, 70, 60, 120, 40],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "353",
        name: "Shuppet",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [49.16666667, 44, 75, 35, 63, 33, 45],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "354",
        name: "Banette",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [75.83333333, 64, 115, 65, 83, 63, 65],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "354.1",
        name: "Mega Banette",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [92.5, 64, 165, 75, 93, 83, 75],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "355",
        name: "Duskull",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [49.16666667, 20, 40, 90, 30, 90, 25],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "356",
        name: "Dusclops",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [75.83333333, 40, 70, 130, 60, 130, 25],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "357",
        name: "Tropius",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [76.66666667, 99, 68, 83, 72, 87, 51],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "358",
        name: "Chimecho",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [70.83333333, 65, 50, 70, 95, 80, 65],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "359",
        name: "Absol",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [77.5, 65, 130, 60, 75, 60, 75],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "359.1",
        name: "Mega Absol",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [94.16666667, 65, 150, 60, 115, 60, 115],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "360",
        name: "Wynaut",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [43.33333333, 95, 23, 48, 23, 48, 23],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "361",
        name: "Snorunt",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [50, 50, 50, 50, 50, 50, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "362",
        name: "Glalie",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [80, 80, 80, 80, 80, 80, 80],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "362.1",
        name: "Mega Glalie",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [96.66666667, 80, 120, 80, 120, 80, 100],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: true
    },
    {
        dexNumber: "363",
        name: "Spheal",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [48.33333333, 70, 40, 50, 55, 50, 25],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "364",
        name: "Sealeo",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [68.33333333, 90, 60, 70, 75, 70, 45],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "365",
        name: "Walrein",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [88.33333333, 110, 80, 90, 95, 90, 65],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "366",
        name: "Clamperl",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [57.5, 35, 64, 85, 74, 55, 32],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "367",
        name: "Huntail",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [80.83333333, 55, 104, 105, 94, 75, 52],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "368",
        name: "Gorebyss",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [80.83333333, 55, 84, 105, 114, 75, 52],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "369",
        name: "Relicanth",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [80.83333333, 100, 90, 130, 45, 65, 55],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "370",
        name: "Luvdisc",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [55, 43, 30, 55, 40, 65, 97],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "371",
        name: "Bagon",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [50, 45, 75, 60, 40, 30, 50],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "372",
        name: "Shelgon",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [70, 65, 95, 100, 60, 50, 50],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "373",
        name: "Salamence",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [100, 95, 135, 80, 110, 80, 100],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "373.1",
        name: "Mega Salamence",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [116.6666667, 95, 145, 130, 120, 90, 120],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: true
    },
    {
        dexNumber: "374",
        name: "Beldum",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [50, 40, 55, 80, 35, 60, 30],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "375",
        name: "Metang",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [70, 60, 75, 100, 55, 80, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "376",
        name: "Metagross",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [100, 80, 135, 130, 95, 90, 70],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "376.1",
        name: "Mega Metagross",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [116.6666667, 80, 145, 150, 105, 110, 110],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: true
    },
    {
        dexNumber: "377",
        name: "Regirock",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [96.66666667, 80, 100, 200, 50, 100, 50],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "378",
        name: "Regice",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [96.66666667, 80, 50, 100, 100, 200, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "379",
        name: "Registeel",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [96.66666667, 80, 75, 150, 75, 150, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "380",
        name: "Latias",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [100, 80, 80, 90, 110, 130, 110],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "380.1",
        name: "Mega Latias",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [116.6666667, 80, 100, 120, 140, 150, 110],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: true
    },
    {
        dexNumber: "381",
        name: "Latios",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [100, 80, 90, 80, 130, 110, 110],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "381.1",
        name: "Mega Latios",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [116.6666667, 80, 100, 120, 140, 150, 110],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: true
    },
    {
        dexNumber: "382",
        name: "Kyogre",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [111.6666667, 100, 100, 90, 150, 140, 90],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "382.1",
        name: "Primal Kyogre",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [128.3333333, 100, 150, 90, 180, 160, 90],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "383",
        name: "Groudon",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [111.6666667, 100, 150, 140, 100, 90, 90],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "383.1",
        name: "Primal Groudon",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [128.3333333, 100, 180, 160, 150, 90, 90],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "384",
        name: "Rayquaza",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [113.3333333, 105, 150, 90, 150, 90, 95],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "384.1",
        name: "Mega Rayquaza",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [130, 105, 180, 100, 180, 100, 115],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: true
    },
    {
        dexNumber: "385",
        name: "Jirachi",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "386",
        name: "Deoxys - Normal Forme",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [100, 50, 150, 50, 150, 50, 150],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "386.1",
        name: "Deoxys - Attack Forme",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [100, 50, 180, 20, 180, 20, 150],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "386.2",
        name: "Deoxys - Defense Forme",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [100, 50, 70, 160, 70, 160, 90],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "386.3",
        name: "Deoxys - Speed Forme",
        gen: 3,
        region: REGION_NAMES.indexOf("Hoenn"),
        baseStats: [100, 50, 95, 90, 95, 90, 180],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "387",
        name: "Turtwig",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [53, 55, 68, 64, 45, 55, 31],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "388",
        name: "Grotle",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [67.5, 75, 89, 85, 55, 65, 36],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "389",
        name: "Torterra",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [87.5, 95, 109, 105, 75, 85, 56],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "390",
        name: "Chimchar",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [51.5, 44, 58, 44, 58, 44, 61],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "391",
        name: "Monferno",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [67.5, 64, 78, 52, 78, 52, 81],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "392",
        name: "Infernape",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [89, 76, 104, 71, 104, 71, 108],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "393",
        name: "Piplup",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [52.33333333, 53, 51, 53, 61, 56, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "394",
        name: "Prinplup",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [67.5, 64, 66, 68, 81, 76, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "395",
        name: "Empoleon",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [88.33333333, 84, 86, 88, 111, 101, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "396",
        name: "Starly",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [40.83333333, 40, 55, 30, 30, 30, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "397",
        name: "Staravia",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [56.66666667, 55, 75, 50, 40, 40, 80],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "398",
        name: "Staraptor",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [79.16666667, 85, 120, 70, 50, 50, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "399",
        name: "Bidoof",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [41.66666667, 59, 45, 40, 35, 40, 31],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "400",
        name: "Bibarel",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [68.33333333, 79, 85, 60, 55, 60, 71],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "401",
        name: "Kricketot",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [32.33333333, 37, 25, 41, 25, 41, 25],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "402",
        name: "Kricketune",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [64, 77, 85, 51, 55, 51, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "403",
        name: "Shinx",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [43.83333333, 45, 65, 34, 40, 34, 45],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "404",
        name: "Luxio",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [60.5, 60, 85, 49, 60, 49, 60],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "405",
        name: "Luxray",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [87.16666667, 80, 120, 79, 95, 79, 70],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "406",
        name: "Budew",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [46.66666667, 40, 30, 35, 50, 70, 55],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "407",
        name: "Roserade",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [84.16666667, 60, 70, 55, 125, 105, 90],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "408",
        name: "Cranidos",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [58.33333333, 67, 125, 40, 30, 30, 58],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "409",
        name: "Rampardos",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [82.5, 97, 165, 60, 65, 50, 58],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "410",
        name: "Shieldon",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [58.33333333, 30, 42, 118, 42, 88, 30],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "411",
        name: "Bastiodon",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [82.5, 60, 52, 168, 47, 138, 30],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "412",
        name: "Burmy",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [37.33333333, 40, 29, 45, 29, 45, 36],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "413",
        name: "Wormadam - Plant Cloak",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [70.66666667, 60, 59, 85, 79, 105, 36],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "413.1",
        name: "Wormadam - Sandy Cloak",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [70.66666667, 60, 79, 105, 59, 85, 36],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "413.2",
        name: "Wormadam - Trash Cloak",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [70.66666667, 60, 69, 95, 69, 95, 36],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "414",
        name: "Mothim",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [70.66666667, 70, 94, 50, 94, 50, 66],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "415",
        name: "Combee",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [40.66666667, 30, 30, 42, 30, 42, 70],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "416",
        name: "Vespiquen",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [79, 70, 80, 102, 80, 102, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "417",
        name: "Pachirisu",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [67.5, 60, 45, 70, 45, 90, 95],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "418",
        name: "Buizel",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [55, 55, 65, 35, 60, 30, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "419",
        name: "Floatzel",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [82.5, 85, 105, 55, 85, 50, 115],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "420",
        name: "Cherubi",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [45.83333333, 45, 35, 45, 62, 53, 35],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "421",
        name: "Cherrim",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [75, 70, 60, 70, 87, 78, 85],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "422",
        name: "Shellos",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [54.16666667, 76, 48, 48, 57, 62, 34],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "423",
        name: "Gastrodon",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [79.16666667, 111, 83, 68, 92, 82, 39],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "424",
        name: "Ambipom",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [80.33333333, 75, 100, 66, 60, 66, 115],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "425",
        name: "Drifloon",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [58, 90, 50, 34, 60, 44, 70],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "426",
        name: "Drifblim",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [83, 150, 80, 44, 90, 54, 80],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "427",
        name: "Buneary",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [58.33333333, 55, 66, 44, 44, 56, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "428",
        name: "Lopunny",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [80, 65, 76, 84, 54, 96, 105],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "428.1",
        name: "Mega Lopunny",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [96.66666667, 65, 136, 94, 54, 96, 135],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: true
    },
    {
        dexNumber: "429",
        name: "Mismagius",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [82.5, 60, 60, 60, 105, 105, 105],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "430",
        name: "Honchkrow",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [84.16666667, 100, 125, 52, 105, 52, 71],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "431",
        name: "Glameow",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [51.66666667, 49, 55, 42, 42, 37, 85],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "432",
        name: "Purugly",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [75.33333333, 71, 82, 64, 64, 59, 112],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "433",
        name: "Chingling",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [47.5, 45, 30, 50, 65, 50, 45],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "434",
        name: "Stunky",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [54.83333333, 63, 63, 47, 41, 41, 74],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "435",
        name: "Skuntank",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [79.83333333, 103, 93, 67, 71, 61, 84],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "436",
        name: "Bronzor",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [50, 57, 24, 86, 24, 86, 23],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "437",
        name: "Bronzong",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [83.33333333, 67, 89, 116, 79, 116, 33],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "438",
        name: "Bonsly",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [48.33333333, 50, 80, 95, 10, 45, 10],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "439",
        name: "Mime Jr.",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [51.66666667, 20, 25, 45, 70, 90, 60],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "440",
        name: "Happiny",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [36.66666667, 100, 5, 5, 15, 65, 30],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "441",
        name: "Chatot",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [68.5, 76, 65, 45, 92, 42, 91],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "442",
        name: "Spiritomb",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [80.83333333, 50, 92, 108, 92, 108, 35],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "443",
        name: "Gible",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [50, 58, 70, 45, 40, 45, 42],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "444",
        name: "Gabite",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [68.33333333, 68, 90, 65, 50, 55, 82],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "445",
        name: "Garchomp",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [100, 108, 130, 95, 80, 85, 102],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "445.1",
        name: "Mega Garchomp",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [116.6666667, 108, 170, 115, 120, 95, 92],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: true
    },
    {
        dexNumber: "446",
        name: "Munchlax",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [65, 135, 85, 40, 40, 85, 5],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "447",
        name: "Riolu",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [47.5, 40, 70, 40, 35, 40, 60],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "448",
        name: "Lucario",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [87.5, 70, 110, 70, 115, 70, 90],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "448.1",
        name: "Mega Lucario",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [104.1666667, 70, 145, 88, 140, 70, 112],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: true
    },
    {
        dexNumber: "449",
        name: "Hippopotas",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [55, 68, 72, 78, 38, 42, 32],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "450",
        name: "Hippowdon",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [87.5, 108, 112, 118, 68, 72, 47],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "451",
        name: "Skorupi",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [55, 40, 50, 90, 30, 55, 65],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "452",
        name: "Drapion",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [83.33333333, 70, 90, 110, 60, 75, 95],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "453",
        name: "Croagunk",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [50, 48, 61, 40, 61, 40, 50],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "454",
        name: "Toxicroak",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [81.66666667, 83, 106, 65, 86, 65, 85],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "455",
        name: "Carnivine",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [75.66666667, 74, 100, 72, 90, 72, 46],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "456",
        name: "Finneon",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [55, 49, 49, 56, 49, 61, 66],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "457",
        name: "Lumineon",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [76.66666667, 69, 69, 76, 69, 86, 91],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "458",
        name: "Mantyke",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [57.5, 45, 20, 50, 60, 120, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "459",
        name: "Snover",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [55.66666667, 60, 62, 50, 62, 60, 40],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "460",
        name: "Abomasnow",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [82.33333333, 90, 92, 75, 92, 85, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "460.1",
        name: "Mega Abomasnow",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [99, 90, 132, 105, 132, 105, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: true
    },
    {
        dexNumber: "461",
        name: "Weavile",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [85, 70, 120, 65, 45, 85, 125],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "462",
        name: "Magnezone",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [89.16666667, 70, 70, 115, 130, 90, 60],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "463",
        name: "Lickilicky",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [85.83333333, 110, 85, 95, 80, 95, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "464",
        name: "Rhyperior",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [89.16666667, 115, 140, 130, 55, 55, 40],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "465",
        name: "Tangrowth",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [89.16666667, 100, 100, 125, 110, 50, 50],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "466",
        name: "Electivire",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [90, 75, 123, 67, 95, 85, 95],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "467",
        name: "Magmortar",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [90, 75, 95, 67, 125, 95, 83],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "468",
        name: "Togekiss",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [90.83333333, 85, 50, 95, 120, 115, 80],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "469",
        name: "Yanmega",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [85.83333333, 86, 76, 86, 116, 56, 95],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "470",
        name: "Leafeon",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [87.5, 65, 110, 130, 60, 65, 95],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "471",
        name: "Glaceon",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [87.5, 65, 60, 110, 130, 95, 65],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "472",
        name: "Gliscor",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [85, 75, 95, 125, 45, 75, 95],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "473",
        name: "Mamoswine",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [88.33333333, 110, 130, 80, 70, 60, 80],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "474",
        name: "Porygon-Z",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [89.16666667, 85, 80, 70, 135, 75, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "475",
        name: "Gallade",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [86.33333333, 68, 125, 65, 65, 115, 80],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "475.1",
        name: "Mega Gallade",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [103, 68, 165, 95, 65, 115, 110],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: true
    },
    {
        dexNumber: "476",
        name: "Probopass",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [87.5, 60, 55, 145, 75, 150, 40],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "477",
        name: "Dusknoir",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [87.5, 45, 100, 135, 65, 135, 45],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "478",
        name: "Froslass",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [80, 70, 80, 70, 80, 70, 110],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "479",
        name: "Rotom",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [73.33333333, 50, 50, 77, 95, 77, 91],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "479.1",
        name: "Heat Rotom",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [86.66666667, 50, 65, 107, 105, 107, 86],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "479.2",
        name: "Wash Rotom",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [86.66666667, 50, 65, 107, 105, 107, 86],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "479.3",
        name: "Frost Rotom",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [86.66666667, 50, 65, 107, 105, 107, 86],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "479.4",
        name: "Fan Rotom",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [86.66666667, 50, 65, 107, 105, 107, 86],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "479.5",
        name: "Mow Rotom",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [86.66666667, 50, 65, 107, 105, 107, 86],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "480",
        name: "Uxie",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [96.66666667, 75, 75, 130, 75, 130, 95],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "481",
        name: "Mesprit",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [96.66666667, 80, 105, 105, 105, 105, 80],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "482",
        name: "Azelf",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [96.66666667, 75, 125, 70, 125, 70, 115],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "483",
        name: "Dialga",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [113.3333333, 100, 120, 120, 150, 100, 90],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "484",
        name: "Palkia",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [113.3333333, 90, 120, 100, 150, 120, 100],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "485",
        name: "Heatran",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [100, 91, 90, 106, 130, 106, 77],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "486",
        name: "Regigigas",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [111.6666667, 110, 160, 110, 80, 110, 100],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "487",
        name: "Giratina - Altered Forme",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [113.3333333, 150, 100, 120, 100, 120, 90],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "487.1",
        name: "Giratina - Origin Forme",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [113.3333333, 150, 120, 100, 120, 100, 90],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "488",
        name: "Cresselia",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [100, 120, 70, 120, 75, 130, 85],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "489",
        name: "Phione",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [80, 80, 80, 80, 80, 80, 80],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "490",
        name: "Manaphy",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "491",
        name: "Darkrai",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [100, 70, 90, 90, 135, 90, 125],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "492",
        name: "Shaymin - Land Forme",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "492.1",
        name: "Shaymin - Sky Forme",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [100, 100, 103, 75, 120, 75, 127],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "493",
        name: "Arceus",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [120, 120, 120, 120, 120, 120, 120],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "494",
        name: "Victini",
        gen: 4,
        region: REGION_NAMES.indexOf("Sinnoh"),
        baseStats: [100, 100, 100, 100, 100, 100, 100],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "495",
        name: "Snivy",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [51.33333333, 45, 45, 55, 45, 55, 63],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "496",
        name: "Servine",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [68.83333333, 60, 60, 75, 60, 75, 83],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "497",
        name: "Serperior",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [88, 75, 75, 95, 75, 95, 113],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "498",
        name: "Tepig",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [51.33333333, 65, 63, 45, 45, 45, 45],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "499",
        name: "Pignite",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [69.66666667, 90, 93, 55, 70, 55, 55],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "500",
        name: "Emboar",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [88, 110, 123, 65, 100, 65, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "501",
        name: "Oshawott",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [51.33333333, 55, 55, 45, 63, 45, 45],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "502",
        name: "Dewott",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [68.83333333, 75, 75, 60, 83, 60, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "503",
        name: "Samurott",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [88, 95, 100, 85, 108, 70, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "504",
        name: "Patrat",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [42.5, 45, 55, 39, 35, 39, 42],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "505",
        name: "Watchog",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [70, 60, 85, 69, 60, 69, 77],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "506",
        name: "Lillipup",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [45.83333333, 45, 60, 45, 25, 45, 55],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "507",
        name: "Herdier",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [61.66666667, 65, 80, 65, 35, 65, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "508",
        name: "Stoutland",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [81.66666667, 85, 100, 90, 45, 90, 80],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "509",
        name: "Purrloin",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [46.83333333, 41, 50, 37, 50, 37, 66],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "510",
        name: "Liepard",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [74.33333333, 64, 88, 50, 88, 50, 106],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "511",
        name: "Pansage",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [52.66666667, 50, 53, 48, 53, 48, 64],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "512",
        name: "Simisage",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [83, 75, 98, 63, 98, 63, 101],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "513",
        name: "Pansear",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [52.66666667, 50, 53, 48, 53, 48, 64],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "514",
        name: "Simisear",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [83, 75, 98, 63, 98, 63, 101],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "515",
        name: "Panpour",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [52.66666667, 50, 53, 48, 53, 48, 64],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "516",
        name: "Simipour",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [83, 75, 98, 63, 98, 63, 101],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "517",
        name: "Munna",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [48.66666667, 76, 25, 45, 67, 55, 24],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "518",
        name: "Musharna",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [81.16666667, 116, 55, 85, 107, 95, 29],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "519",
        name: "Pidove",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [44, 50, 55, 50, 36, 30, 43],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "520",
        name: "Tranquill",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [59.66666667, 62, 77, 62, 50, 42, 65],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "521",
        name: "Unfezant",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [79.66666667, 80, 105, 80, 65, 55, 93],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "522",
        name: "Blitzle",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [49.16666667, 45, 60, 32, 50, 32, 76],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "523",
        name: "Zebstrika",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [82.83333333, 75, 100, 63, 80, 63, 116],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "524",
        name: "Roggenrola",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [46.66666667, 55, 75, 85, 25, 25, 15],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "525",
        name: "Boldore",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [65, 70, 105, 105, 50, 40, 20],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "526",
        name: "Gigalith",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [84.16666667, 85, 135, 130, 60, 70, 25],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "527",
        name: "Woobat",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [52.16666667, 55, 45, 43, 55, 43, 72],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "528",
        name: "Swoobat",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [70.83333333, 67, 57, 55, 77, 55, 114],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "529",
        name: "Drilbur",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [54.66666667, 60, 85, 40, 30, 45, 68],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "530",
        name: "Excadrill",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [84.66666667, 110, 135, 60, 50, 65, 88],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "531",
        name: "Audino",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [74.16666667, 103, 60, 86, 60, 86, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "531.1",
        name: "Mega Audino",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [90.83333333, 103, 60, 126, 80, 126, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: true
    },
    {
        dexNumber: "532",
        name: "Timburr",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50.83333333, 75, 80, 55, 25, 35, 35],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "533",
        name: "Gurdurr",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [67.5, 85, 105, 85, 40, 50, 40],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "534",
        name: "Conkeldurr",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [84.16666667, 105, 140, 95, 55, 65, 45],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "535",
        name: "Tympole",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [49, 50, 50, 40, 50, 40, 64],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "536",
        name: "Palpitoad",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [64, 75, 65, 55, 65, 55, 69],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "537",
        name: "Seismitoad",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [83.16666667, 105, 85, 75, 85, 75, 74],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "538",
        name: "Throh",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [77.5, 120, 100, 85, 30, 85, 45],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "539",
        name: "Sawk",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [77.5, 75, 125, 75, 30, 75, 85],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "540",
        name: "Sewaddle",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [51.66666667, 45, 53, 70, 40, 60, 42],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "541",
        name: "Swadloon",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [63.33333333, 55, 63, 90, 50, 80, 42],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "542",
        name: "Leavanny",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [81.66666667, 75, 103, 80, 70, 70, 92],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "543",
        name: "Venipede",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [43.33333333, 30, 45, 59, 30, 39, 57],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "544",
        name: "Whirlipede",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [60, 40, 55, 99, 40, 79, 47],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "545",
        name: "Scolipede",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [79.16666667, 60, 90, 89, 55, 69, 112],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "546",
        name: "Cottonee",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [46.66666667, 40, 27, 60, 37, 50, 66],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "547",
        name: "Whimsicott",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80, 60, 67, 85, 77, 75, 116],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "548",
        name: "Petilil",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [46.66666667, 45, 35, 50, 70, 50, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "549",
        name: "Lilligant",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80, 70, 60, 75, 110, 75, 90],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "550",
        name: "Basculin - Red-Striped Form",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [76.66666667, 70, 92, 65, 80, 55, 98],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "550.1",
        name: "Basculin - Blue-Striped Form",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [76.66666667, 70, 92, 65, 80, 55, 98],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "551",
        name: "Sandile",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [48.66666667, 50, 72, 35, 35, 35, 65],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "552",
        name: "Krokorok",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [58.5, 60, 82, 45, 45, 45, 74],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "553",
        name: "Krookodile",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [84.83333333, 95, 117, 70, 65, 70, 92],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "554",
        name: "Darumaka",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [52.5, 70, 90, 45, 15, 45, 50],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "554.1",
        name: "Galarian Darumaka",
        gen: 5,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [52.5, 70, 90, 45, 15, 45, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "555",
        name: "Darmanitan - Standard Mode",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80, 105, 140, 55, 30, 55, 95],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "555.1",
        name: "Darmanitan - Zen Mode",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [90, 105, 30, 105, 140, 105, 55],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "555.2",
        name: "Galarian Darmanitan - Standard Mode",
        gen: 5,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [80, 105, 140, 55, 30, 55, 95],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "555.3",
        name: "Galarian Darmanitan - Zen Mode",
        gen: 5,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [90, 105, 160, 55, 30, 55, 135],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "556",
        name: "Maractus",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [76.83333333, 75, 86, 67, 106, 67, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "557",
        name: "Dwebble",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [54.16666667, 50, 65, 85, 35, 35, 55],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "558",
        name: "Crustle",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [79.16666667, 70, 95, 125, 65, 75, 45],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "559",
        name: "Scraggy",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [58, 50, 75, 70, 35, 70, 48],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "560",
        name: "Scrafty",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [81.33333333, 65, 90, 115, 45, 115, 58],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "561",
        name: "Sigilyph",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [81.66666667, 72, 58, 80, 103, 80, 97],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "562",
        name: "Yamask",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50.5, 38, 30, 85, 55, 65, 30],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "562.1",
        name: "Galarian Yamask",
        gen: 5,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [50.5, 38, 55, 85, 30, 65, 30],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "563",
        name: "Cofagrigus",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80.5, 58, 50, 145, 95, 105, 30],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "564",
        name: "Tirtouga",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [59.16666667, 54, 78, 103, 53, 45, 22],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "565",
        name: "Carracosta",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [82.5, 74, 108, 133, 83, 65, 32],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "566",
        name: "Archen",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [66.83333333, 55, 112, 45, 74, 45, 70],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "567",
        name: "Archeops",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [94.5, 75, 140, 65, 112, 65, 110],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "568",
        name: "Trubbish",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [54.83333333, 50, 50, 62, 40, 62, 65],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "569",
        name: "Garbodor",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [79, 80, 95, 82, 60, 82, 75],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "570",
        name: "Zorua",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [55, 40, 65, 40, 80, 40, 65],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "571",
        name: "Zoroark",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [85, 60, 105, 60, 120, 60, 105],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "572",
        name: "Minccino",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50, 55, 50, 40, 40, 40, 75],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "573",
        name: "Cinccino",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [78.33333333, 75, 95, 60, 65, 60, 115],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "574",
        name: "Gothita",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [48.33333333, 45, 30, 50, 55, 65, 45],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "575",
        name: "Gothorita",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [65, 60, 45, 70, 75, 85, 55],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "576",
        name: "Gothitelle",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [81.66666667, 70, 55, 95, 95, 110, 65],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "577",
        name: "Solosis",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [48.33333333, 45, 30, 40, 105, 50, 20],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "578",
        name: "Duosion",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [61.66666667, 65, 40, 50, 125, 60, 30],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "579",
        name: "Reuniclus",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [81.66666667, 110, 65, 75, 125, 85, 30],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "580",
        name: "Ducklett",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50.83333333, 62, 44, 50, 44, 50, 55],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "581",
        name: "Swanna",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [78.83333333, 75, 87, 63, 87, 63, 98],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "582",
        name: "Vanillite",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50.83333333, 36, 50, 50, 65, 60, 44],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "583",
        name: "Vanillish",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [65.83333333, 51, 65, 65, 80, 75, 59],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "584",
        name: "Vanilluxe",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [89.16666667, 71, 95, 85, 110, 95, 79],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "585",
        name: "Deerling",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [55.83333333, 60, 60, 50, 40, 50, 75],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "586",
        name: "Sawsbuck",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [79.16666667, 80, 100, 70, 60, 70, 95],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "587",
        name: "Emolga",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [71.33333333, 55, 75, 60, 75, 60, 103],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "588",
        name: "Karrablast",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [52.5, 50, 75, 45, 40, 45, 60],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "589",
        name: "Escavalier",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [82.5, 70, 135, 105, 60, 105, 20],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "590",
        name: "Foongus",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [49, 69, 55, 45, 55, 55, 15],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "591",
        name: "Amoonguss",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [77.33333333, 114, 85, 70, 85, 80, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "592",
        name: "Frillish",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [55.83333333, 55, 40, 50, 65, 85, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "593",
        name: "Jellicent",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80, 100, 60, 70, 85, 105, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "594",
        name: "Alomomola",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [78.33333333, 165, 75, 80, 40, 45, 65],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "595",
        name: "Joltik",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [53.16666667, 50, 47, 50, 57, 50, 65],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "596",
        name: "Galvantula",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [78.66666667, 70, 77, 60, 97, 60, 108],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "597",
        name: "Ferroseed",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50.83333333, 44, 50, 91, 24, 86, 10],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "598",
        name: "Ferrothorn",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [81.5, 74, 94, 131, 54, 116, 20],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "599",
        name: "Klink",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50, 40, 55, 70, 45, 60, 30],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "600",
        name: "Klang",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [73.33333333, 60, 80, 95, 70, 85, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "601",
        name: "Klinklang",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [86.66666667, 60, 100, 115, 70, 85, 90],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "602",
        name: "Tynamo",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [45.83333333, 35, 55, 40, 45, 40, 60],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "603",
        name: "Eelektrik",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [67.5, 65, 85, 70, 75, 70, 40],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "604",
        name: "Eelektross",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [85.83333333, 85, 115, 80, 105, 80, 50],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "605",
        name: "Elgyem",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [55.83333333, 55, 55, 55, 85, 55, 30],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "606",
        name: "Beheeyem",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80.83333333, 75, 75, 75, 125, 95, 40],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "607",
        name: "Litwick",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [45.83333333, 50, 30, 55, 65, 55, 20],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "608",
        name: "Lampent",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [61.66666667, 60, 40, 60, 95, 60, 55],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "609",
        name: "Chandelure",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [86.66666667, 60, 55, 90, 145, 90, 80],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "610",
        name: "Axew",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [53.33333333, 46, 87, 60, 30, 40, 57],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "611",
        name: "Fraxure",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [68.33333333, 66, 117, 70, 40, 50, 67],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "612",
        name: "Haxorus",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [90, 76, 147, 90, 60, 70, 97],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "613",
        name: "Cubchoo",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50.83333333, 55, 70, 40, 60, 40, 40],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "614",
        name: "Beartic",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80.83333333, 95, 110, 80, 70, 80, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "615",
        name: "Cryogonal",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80.83333333, 70, 50, 30, 95, 135, 105],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "616",
        name: "Shelmet",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50.83333333, 50, 40, 85, 40, 65, 25],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "617",
        name: "Accelgor",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [82.5, 80, 70, 40, 100, 60, 145],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "618",
        name: "Stunfisk",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [78.5, 109, 66, 84, 81, 99, 32],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "618.1",
        name: "Galarian Stunfisk",
        gen: 5,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [78.5, 109, 81, 99, 66, 84, 32],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "619",
        name: "Mienfoo",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [58.33333333, 45, 85, 50, 55, 50, 65],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "620",
        name: "Mienshao",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [85, 65, 125, 60, 95, 60, 105],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "621",
        name: "Druddigon",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80.83333333, 77, 120, 90, 60, 90, 48],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "622",
        name: "Golett",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50.5, 59, 74, 50, 35, 50, 35],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "623",
        name: "Golurk",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80.5, 89, 124, 80, 55, 80, 55],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "624",
        name: "Pawniard",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [56.66666667, 45, 85, 70, 40, 40, 60],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "625",
        name: "Bisharp",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [81.66666667, 65, 125, 100, 60, 70, 70],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "626",
        name: "Bouffalant",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [81.66666667, 95, 110, 95, 40, 95, 55],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "627",
        name: "Rufflet",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [58.33333333, 70, 83, 50, 37, 50, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "628",
        name: "Braviary",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [85, 100, 123, 75, 57, 75, 80],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "629",
        name: "Vullaby",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [61.66666667, 70, 55, 75, 45, 65, 60],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "630",
        name: "Mandibuzz",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [85, 110, 65, 105, 55, 95, 80],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "631",
        name: "Heatmor",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80.66666667, 85, 97, 66, 105, 66, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "632",
        name: "Durant",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [80.66666667, 58, 109, 112, 48, 48, 109],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "633",
        name: "Deino",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [50, 52, 65, 50, 45, 50, 38],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "634",
        name: "Zweilous",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [70, 72, 85, 70, 65, 70, 58],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "635",
        name: "Hydreigon",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [100, 92, 105, 90, 125, 90, 98],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "636",
        name: "Larvesta",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [60, 55, 85, 55, 50, 55, 60],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "637",
        name: "Volcarona",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [91.66666667, 85, 60, 65, 135, 105, 100],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "638",
        name: "Cobalion",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [96.66666667, 91, 90, 129, 90, 72, 108],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "639",
        name: "Terrakion",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [96.66666667, 91, 129, 90, 72, 90, 108],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "640",
        name: "Virizion",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [96.66666667, 91, 90, 72, 90, 129, 108],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "641",
        name: "Tornadus - Incarnate Forme",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [96.66666667, 79, 115, 70, 125, 80, 111],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "641.1",
        name: "Tornadus - Therian Forme",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [96.66666667, 79, 100, 80, 110, 90, 121],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "642",
        name: "Thundurus - Incarnate Forme",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [96.66666667, 79, 115, 70, 125, 80, 111],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "642.1",
        name: "Thundurus - Therian Forme",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [96.66666667, 79, 105, 70, 145, 80, 101],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "643",
        name: "Reshiram",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [113.3333333, 100, 120, 100, 150, 120, 90],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "644",
        name: "Zekrom",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [113.3333333, 100, 150, 120, 120, 100, 90],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "645",
        name: "Landorus - Incarnate Forme",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [100, 89, 125, 90, 115, 80, 101],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "645.1",
        name: "Landorus - Therian Forme",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [100, 89, 145, 90, 105, 80, 91],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "646",
        name: "Kyurem",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [110, 125, 130, 90, 130, 90, 95],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "646.1",
        name: "White Kyurem",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [116.6666667, 125, 120, 90, 170, 100, 95],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "646.2",
        name: "Black Kyurem",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [116.6666667, 125, 170, 100, 120, 90, 95],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "647",
        name: "Keldeo - Ordinary Form",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [96.66666667, 91, 72, 90, 129, 90, 108],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "647.1",
        name: "Keldeo - Resolute Form",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [96.66666667, 91, 72, 90, 129, 90, 108],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "648",
        name: "Meloetta - Aria Forme",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [100, 100, 77, 77, 128, 128, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "648.1",
        name: "Meloetta - Pirouette Forme",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [100, 100, 77, 77, 128, 128, 90],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "649",
        name: "Genesect",
        gen: 5,
        region: REGION_NAMES.indexOf("Unova"),
        baseStats: [100, 71, 120, 95, 120, 95, 99],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "650",
        name: "Chespin",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [52.16666667, 56, 61, 65, 48, 45, 38],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "651",
        name: "Quilladin",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [67.5, 61, 78, 95, 56, 58, 57],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "652",
        name: "Chesnaught",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [88.33333333, 88, 107, 122, 74, 75, 64],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "653",
        name: "Fennekin",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [51.16666667, 40, 45, 40, 62, 60, 60],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "654",
        name: "Braixen",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [68.16666667, 59, 59, 58, 90, 70, 73],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "655",
        name: "Delphox",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [89, 75, 69, 72, 114, 100, 104],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "656",
        name: "Froakie",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [52.33333333, 41, 56, 40, 62, 44, 71],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "657",
        name: "Frogadier",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [67.5, 54, 63, 52, 83, 56, 97],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "658",
        name: "Greninja",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [88.33333333, 72, 95, 67, 103, 71, 122],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "658.1",
        name: "Ash-Greninja",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [106.6666667, 72, 145, 67, 153, 71, 132],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "659",
        name: "Bunnelby",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [39.5, 38, 36, 38, 32, 36, 57],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "660",
        name: "Diggersby",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [70.5, 85, 56, 77, 50, 77, 78],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "661",
        name: "Fletchling",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [46.33333333, 45, 50, 43, 40, 38, 62],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "662",
        name: "Fletchinder",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [63.66666667, 62, 73, 55, 56, 52, 84],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "663",
        name: "Talonflame",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [83.16666667, 78, 81, 71, 74, 69, 126],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "664",
        name: "Scatterbug",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [33.33333333, 38, 35, 40, 27, 25, 35],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "665",
        name: "Spewpa",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [35.5, 45, 22, 60, 27, 30, 29],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "666",
        name: "Vivillon",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [68.5, 80, 52, 50, 90, 50, 89],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "667",
        name: "Litleo",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [61.5, 62, 50, 58, 73, 54, 72],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "668",
        name: "Pyroar",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [84.5, 86, 68, 72, 109, 66, 106],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "669",
        name: "Flabébé",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [50.5, 44, 38, 39, 61, 79, 42],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "670",
        name: "Floette",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [61.83333333, 54, 45, 47, 75, 98, 52],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "671",
        name: "Florges",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [92, 78, 65, 68, 112, 154, 75],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "672",
        name: "Skiddo",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [58.33333333, 66, 65, 48, 62, 57, 52],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "673",
        name: "Gogoat",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [88.5, 123, 100, 62, 97, 81, 68],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "674",
        name: "Pancham",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [58, 67, 82, 62, 46, 48, 43],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "675",
        name: "Pangoro",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [82.5, 95, 124, 78, 69, 71, 58],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "676",
        name: "Furfrou",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [78.66666667, 75, 80, 60, 65, 90, 102],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "677",
        name: "Espurr",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [59.16666667, 62, 48, 54, 63, 60, 68],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "678",
        name: "Meowstic",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [77.66666667, 74, 48, 76, 83, 81, 104],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "679",
        name: "Honedge",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [54.16666667, 45, 80, 100, 35, 37, 28],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "680",
        name: "Doublade",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [74.66666667, 59, 110, 150, 45, 49, 35],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "681",
        name: "Aegislash - Blade Forme",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [86.66666667, 60, 150, 50, 150, 50, 60],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "681.1",
        name: "Aegislash - Shield Forme",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [86.66666667, 60, 50, 150, 50, 150, 60],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "682",
        name: "Spritzee",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [56.83333333, 78, 52, 60, 63, 65, 23],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "683",
        name: "Aromatisse",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [77, 101, 72, 72, 99, 89, 29],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "684",
        name: "Swirlix",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [56.83333333, 62, 48, 66, 59, 57, 49],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "685",
        name: "Slurpuff",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [80, 82, 80, 86, 85, 75, 72],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "686",
        name: "Inkay",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [48, 53, 54, 53, 37, 46, 45],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "687",
        name: "Malamar",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [80.33333333, 86, 92, 88, 68, 75, 73],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "688",
        name: "Binacle",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [51, 42, 52, 67, 39, 56, 50],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "689",
        name: "Barbaracle",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [83.33333333, 72, 105, 115, 54, 86, 68],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "690",
        name: "Skrelp",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [53.33333333, 50, 60, 60, 60, 60, 30],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "691",
        name: "Dragalge",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [82.33333333, 65, 75, 90, 97, 123, 44],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "692",
        name: "Clauncher",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [55, 50, 53, 62, 58, 63, 44],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "693",
        name: "Clawitzer",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [83.33333333, 71, 73, 88, 120, 89, 59],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "694",
        name: "Helioptile",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [48.16666667, 44, 38, 33, 61, 43, 70],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "695",
        name: "Heliolisk",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [80.16666667, 62, 55, 52, 109, 94, 109],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "696",
        name: "Tyrunt",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [60.33333333, 58, 89, 77, 45, 45, 48],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "697",
        name: "Tyrantrum",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [86.83333333, 82, 121, 119, 69, 59, 71],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "698",
        name: "Amaura",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [60.33333333, 77, 59, 50, 67, 63, 46],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "699",
        name: "Aurorus",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [86.83333333, 123, 77, 72, 99, 92, 58],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "700",
        name: "Sylveon",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [87.5, 95, 65, 65, 110, 130, 60],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "701",
        name: "Hawlucha",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [83.33333333, 78, 92, 75, 74, 63, 118],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "702",
        name: "Dedenne",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [71.83333333, 67, 58, 57, 81, 67, 101],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "703",
        name: "Carbink",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [83.33333333, 50, 50, 150, 50, 150, 50],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "704",
        name: "Goomy",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [50, 45, 50, 35, 55, 75, 40],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "705",
        name: "Sliggoo",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [75.33333333, 68, 75, 53, 83, 113, 60],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "706",
        name: "Goodra",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [100, 90, 100, 70, 110, 150, 80],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "707",
        name: "Klefki",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [78.33333333, 57, 80, 91, 80, 87, 75],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "708",
        name: "Phantump",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [51.5, 43, 70, 48, 50, 60, 38],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "709",
        name: "Trevenant",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [79, 85, 110, 76, 65, 82, 56],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "710",
        name: "Pumpkaboo - Average Size",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [55.83333333, 49, 66, 70, 44, 55, 51],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "710.1",
        name: "Pumpkaboo - Small Size",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [55.83333333, 44, 66, 70, 44, 55, 56],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "710.2",
        name: "Pumpkaboo - Large Size",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [55.83333333, 54, 66, 70, 44, 55, 46],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "710.3",
        name: "Pumpkaboo - Super Size",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [55.83333333, 59, 66, 70, 44, 55, 41],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "711",
        name: "Gourgeist - Average Size",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [82.33333333, 65, 90, 122, 58, 75, 84],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "711.1",
        name: "Gourgeist - Small Size",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [82.33333333, 55, 85, 122, 58, 75, 99],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "711.2",
        name: "Gourgeist - Large Size",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [82.33333333, 75, 95, 122, 58, 75, 69],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "711.3",
        name: "Gourgeist -Super Size",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [82.33333333, 85, 100, 122, 58, 75, 54],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "712",
        name: "Bergmite",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [50.66666667, 55, 69, 85, 32, 35, 28],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "713",
        name: "Avalugg",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [85.66666667, 95, 117, 184, 44, 46, 28],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "714",
        name: "Noibat",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [40.83333333, 40, 30, 35, 45, 40, 55],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "715",
        name: "Noivern",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [89.16666667, 85, 70, 80, 97, 80, 123],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "716",
        name: "Xerneas",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [113.3333333, 126, 131, 95, 131, 98, 99],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "717",
        name: "Yveltal",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [113.3333333, 126, 131, 95, 131, 98, 99],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "718",
        name: "Zygarde - 50% Forme",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [100, 108, 100, 121, 81, 95, 95],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "718.1",
        name: "Zygarde - 10% Forme",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [81, 54, 100, 71, 61, 85, 115],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "718.2",
        name: "Zygarde - Complete Forme",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [118, 216, 100, 121, 91, 95, 85],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "719",
        name: "Diancie",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [100, 50, 100, 150, 100, 150, 50],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "719.1",
        name: "Mega Diancie",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [116.6666667, 50, 160, 110, 160, 110, 110],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: true
    },
    {
        dexNumber: "720",
        name: "Hoopa Confined",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [100, 80, 110, 60, 150, 130, 70],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "720.1",
        name: "Hoopa Unbound",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [113.3333333, 80, 160, 60, 170, 130, 80],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "721",
        name: "Volcanion",
        gen: 6,
        region: REGION_NAMES.indexOf("Kalos"),
        baseStats: [100, 80, 110, 120, 130, 90, 70],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "722",
        name: "Rowlet",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [53.33333333, 68, 55, 55, 50, 50, 42],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "723",
        name: "Dartrix",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [70, 78, 75, 75, 70, 70, 52],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "724",
        name: "Decidueye",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [88.33333333, 78, 107, 75, 100, 100, 70],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "725",
        name: "Litten",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [53.33333333, 45, 65, 40, 60, 40, 70],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "726",
        name: "Torracat",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [70, 65, 85, 50, 80, 50, 90],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "727",
        name: "Incineroar",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [88.33333333, 95, 115, 90, 80, 90, 60],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "728",
        name: "Popplio",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [53.33333333, 50, 54, 54, 66, 56, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "729",
        name: "Brionne",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [70, 60, 69, 69, 91, 81, 50],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "730",
        name: "Primarina",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [88.33333333, 80, 74, 74, 126, 116, 60],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "731",
        name: "Pikipek",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [44.16666667, 35, 75, 30, 30, 30, 65],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "732",
        name: "Trumbeak",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [59.16666667, 55, 85, 50, 40, 50, 75],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "733",
        name: "Toucannon",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [80.83333333, 80, 120, 75, 75, 75, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "734",
        name: "Yungoos",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [42.16666667, 48, 70, 30, 30, 30, 45],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "735",
        name: "Gumshoos",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [69.66666667, 88, 110, 60, 55, 60, 45],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "736",
        name: "Grubbin",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [50, 47, 62, 45, 55, 45, 46],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "737",
        name: "Charjabug",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [66.66666667, 57, 82, 95, 55, 75, 36],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "738",
        name: "Vikavolt",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [83.33333333, 77, 70, 90, 145, 75, 43],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Electric"),
        isMega: false
    },
    {
        dexNumber: "739",
        name: "Crabrawler",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [56.33333333, 47, 82, 57, 42, 47, 63],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "740",
        name: "Crabominable",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [79.66666667, 97, 132, 77, 62, 67, 43],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "741",
        name: "Oricorio - Baile Style",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [79.33333333, 75, 70, 70, 98, 70, 93],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "741.1",
        name: "Oricorio - Pom-Pom Style",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [79.33333333, 75, 70, 70, 98, 70, 93],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "741.2",
        name: "Oricorio - Pa'u Style",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [79.33333333, 75, 70, 70, 98, 70, 93],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "741.3",
        name: "Oricorio - Sensu Style",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [79.33333333, 75, 70, 70, 98, 70, 93],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "742",
        name: "Cutiefly",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [50.66666667, 40, 45, 40, 55, 40, 84],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "743",
        name: "Ribombee",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [77.33333333, 60, 55, 60, 95, 70, 124],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "744",
        name: "Rockruff",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [46.66666667, 45, 65, 40, 30, 40, 60],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "745",
        name: "Lycanroc - Midday Form",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [81.16666667, 75, 115, 65, 55, 65, 112],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "745.1",
        name: "Lycanroc - Midnight Form",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [81.16666667, 85, 115, 75, 55, 75, 82],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "745.2",
        name: "Lycanroc - Dusk Form",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [81.16666667, 75, 117, 65, 55, 65, 110],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "746",
        name: "Wishiwashi - Solo Form",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [29.16666667, 45, 20, 20, 25, 25, 40],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "746.1",
        name: "Wishiwashi - School Form",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [103.3333333, 45, 140, 130, 140, 135, 30],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "747",
        name: "Mareanie",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [50.83333333, 50, 53, 62, 43, 52, 45],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "748",
        name: "Toxapex",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [82.5, 50, 63, 152, 53, 142, 35],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "749",
        name: "Mudbray",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [64.16666667, 70, 100, 70, 45, 55, 45],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "750",
        name: "Mudsdale",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [83.33333333, 100, 125, 100, 55, 85, 35],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "751",
        name: "Dewpider",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [44.83333333, 38, 40, 52, 40, 72, 27],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "752",
        name: "Araquanid",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [75.66666667, 68, 70, 92, 50, 132, 42],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "753",
        name: "Fomantis",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [41.66666667, 40, 55, 35, 50, 35, 35],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "754",
        name: "Lurantis",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [80, 70, 105, 90, 80, 90, 45],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "755",
        name: "Morelull",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [47.5, 40, 35, 55, 65, 75, 15],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "756",
        name: "Shiinotic",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [67.5, 60, 45, 80, 90, 100, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "757",
        name: "Salandit",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [53.33333333, 48, 44, 40, 71, 40, 77],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "758",
        name: "Salazzle",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [80, 68, 64, 60, 111, 60, 117],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "759",
        name: "Stufful",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [56.66666667, 70, 75, 50, 45, 50, 50],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "760",
        name: "Bewear",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [83.33333333, 120, 125, 80, 55, 60, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "761",
        name: "Bounsweet",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [35, 42, 30, 38, 30, 38, 32],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "762",
        name: "Steenee",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [48.33333333, 52, 40, 48, 40, 48, 62],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "763",
        name: "Tsareena",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [85, 72, 120, 98, 50, 98, 72],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "764",
        name: "Comfey",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [80.83333333, 51, 52, 90, 82, 110, 100],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "765",
        name: "Oranguru",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [81.66666667, 90, 60, 80, 90, 110, 60],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "766",
        name: "Passimian",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [81.66666667, 100, 120, 90, 40, 60, 80],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "767",
        name: "Wimpod",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [38.33333333, 25, 35, 40, 20, 30, 80],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "768",
        name: "Golisopod",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [88.33333333, 75, 125, 140, 60, 90, 40],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "769",
        name: "Sandygast",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [53.33333333, 55, 55, 80, 70, 45, 15],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "770",
        name: "Palossand",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [80, 85, 75, 110, 100, 75, 35],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Ground"),
        isMega: false
    },
    {
        dexNumber: "771",
        name: "Pyukumuku",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [68.33333333, 55, 60, 130, 30, 130, 5],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "772",
        name: "Type: Null",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [89, 95, 95, 95, 95, 95, 59],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "773",
        name: "Silvally",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 95, 95, 95, 95, 95, 95],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "774",
        name: "Minior - Meteor Form",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [73.33333333, 60, 60, 100, 60, 100, 60],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "774.1",
        name: "Minior - Core Form",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [83.33333333, 60, 100, 60, 100, 60, 120],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "775",
        name: "Komala",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [80, 65, 115, 65, 75, 95, 65],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "776",
        name: "Turtonator",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [80.83333333, 60, 78, 135, 91, 85, 36],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "777",
        name: "Togedemaru",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [72.5, 65, 98, 63, 40, 73, 96],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "778",
        name: "Mimikyu",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [79.33333333, 55, 90, 80, 50, 105, 96],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "779",
        name: "Bruxish",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [79.16666667, 68, 105, 70, 70, 70, 92],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "780",
        name: "Drampa",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [80.83333333, 78, 60, 85, 135, 91, 36],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "781",
        name: "Dhelmise",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [86.16666667, 70, 131, 100, 86, 90, 40],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "782",
        name: "Jangmo-o",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [50, 45, 55, 65, 45, 45, 45],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "783",
        name: "Hakamo-o",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [70, 55, 75, 90, 65, 70, 65],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "784",
        name: "Kommo-o",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [100, 75, 110, 125, 100, 105, 85],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "785",
        name: "Tapu Koko",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 70, 115, 85, 95, 75, 130],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "786",
        name: "Tapu Lele",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 70, 85, 75, 130, 115, 95],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "787",
        name: "Tapu Bulu",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 70, 130, 115, 85, 95, 75],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "788",
        name: "Tapu Fini",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 70, 75, 115, 95, 130, 85],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "789",
        name: "Cosmog",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [33.33333333, 43, 29, 31, 29, 31, 37],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "790",
        name: "Cosmoem",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [66.66666667, 43, 29, 131, 29, 131, 37],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "791",
        name: "Solgaleo",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [113.3333333, 137, 137, 107, 113, 89, 97],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "792",
        name: "Lunala",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [113.3333333, 137, 113, 89, 137, 107, 97],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "793",
        name: "Nihilego",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 109, 53, 47, 127, 131, 103],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "794",
        name: "Buzzwole",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 107, 139, 139, 53, 53, 79],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "795",
        name: "Pheromosa",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 71, 137, 37, 137, 37, 151],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Fighting"),
        isMega: false
    },
    {
        dexNumber: "796",
        name: "Xurkitree",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 83, 89, 71, 173, 71, 83],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "797",
        name: "Celesteela",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 97, 101, 103, 107, 101, 61],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Flying"),
        isMega: false
    },
    {
        dexNumber: "798",
        name: "Kartana",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 59, 181, 131, 59, 31, 109],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "799",
        name: "Guzzlord",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 223, 101, 53, 97, 53, 43],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "800",
        name: "Necrozma",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [100, 97, 107, 101, 127, 89, 79],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "800.1",
        name: "Dusk Mane Necrozma",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [113.3333333, 97, 157, 127, 113, 109, 77],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "800.2",
        name: "Dawn Wings Necrozma",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [113.3333333, 97, 113, 109, 157, 127, 77],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "800.3",
        name: "Ultra Necrozma",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [125.6666667, 97, 167, 97, 167, 97, 129],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "801",
        name: "Magearna",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [100, 80, 95, 115, 130, 115, 65],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "802",
        name: "Marshadow",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [100, 90, 125, 80, 90, 90, 125],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "803",
        name: "Poipole",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [70, 67, 73, 67, 73, 67, 73],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "804",
        name: "Naganadel",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [90, 73, 73, 73, 127, 73, 121],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "805",
        name: "Stakataka",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 61, 131, 211, 53, 101, 13],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "806",
        name: "Blacephalon",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [95, 53, 127, 53, 151, 79, 107],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "807",
        name: "Zeraora",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [100, 88, 112, 75, 102, 80, 143],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "808",
        name: "Meltan",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [50, 46, 65, 65, 55, 35, 34],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "809",
        name: "Melmetal",
        gen: 7,
        region: REGION_NAMES.indexOf("Alola"),
        baseStats: [100, 135, 143, 143, 80, 65, 34],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "810",
        name: "Grookey",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [51.66666667, 50, 65, 50, 40, 40, 65],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "811",
        name: "Thwackey",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [70, 70, 85, 70, 55, 60, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "812",
        name: "Rillaboom",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [88.33333333, 100, 125, 90, 60, 70, 85],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "813",
        name: "Scorbunny",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [51.66666667, 50, 71, 40, 40, 40, 69],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "814",
        name: "Raboot",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [51.66666667, 50, 71, 40, 40, 40, 69],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "815",
        name: "Cinderace",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [88.33333333, 80, 116, 75, 65, 75, 119],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "816",
        name: "Sobble",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [51.66666667, 50, 40, 40, 70, 40, 70],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "817",
        name: "Drizzile",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [70, 65, 60, 55, 95, 55, 90],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "818",
        name: "Inteleon",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [88.33333333, 70, 85, 65, 125, 65, 120],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "819",
        name: "Skwovet",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [45.83333333, 70, 55, 55, 35, 35, 25],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "820",
        name: "Greedent",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [76.66666667, 120, 95, 95, 55, 75, 20],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "821",
        name: "Rookidee",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [40.83333333, 38, 47, 35, 33, 35, 57],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "822",
        name: "Corvisquire",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [60.83333333, 68, 67, 55, 43, 55, 77],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "823",
        name: "Corviknight",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [82.5, 98, 87, 105, 53, 85, 67],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "824",
        name: "Blipbug",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [30, 25, 20, 20, 25, 45, 45],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "825",
        name: "Dottler",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [55.83333333, 50, 35, 80, 50, 90, 30],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "826",
        name: "Orbeetle",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [84.16666667, 60, 45, 110, 80, 120, 90],
        type1: TYPE_NAMES.indexOf("Bug"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "827",
        name: "Nickit",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [40.83333333, 40, 28, 28, 47, 52, 50],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "828",
        name: "Thievul",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [75.83333333, 70, 58, 58, 87, 92, 90],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "829",
        name: "Gossifleur",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [41.66666667, 40, 40, 60, 40, 60, 10],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "830",
        name: "Eldegoss",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [76.66666667, 60, 50, 90, 80, 120, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "831",
        name: "Wooloo",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [45, 42, 40, 55, 40, 45, 48],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "832",
        name: "Dubwool",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [81.66666667, 72, 80, 100, 60, 90, 88],
        type1: TYPE_NAMES.indexOf("Normal"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "833",
        name: "Chewtle",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [47.33333333, 50, 64, 50, 38, 38, 44],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "834",
        name: "Drednaw",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [80.83333333, 90, 115, 90, 48, 68, 74],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Rock"),
        isMega: false
    },
    {
        dexNumber: "835",
        name: "Yamper",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [45, 59, 45, 50, 40, 50, 26],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "836",
        name: "Boltund",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [81.66666667, 69, 90, 60, 90, 60, 121],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "837",
        name: "Rolycoly",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [40, 30, 40, 50, 40, 50, 30],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "838",
        name: "Carkol",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [68.33333333, 80, 60, 90, 60, 70, 50],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "839",
        name: "Coalossal",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [85, 110, 80, 120, 80, 90, 30],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: TYPE_NAMES.indexOf("Fire"),
        isMega: false
    },
    {
        dexNumber: "840",
        name: "Applin",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [43.33333333, 40, 40, 80, 40, 40, 20],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "841",
        name: "Flapple",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [80.83333333, 70, 110, 80, 95, 60, 70],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "842",
        name: "Appletun",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [80.83333333, 110, 85, 80, 100, 80, 30],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "843",
        name: "Silicobra",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [52.5, 52, 57, 75, 35, 50, 46],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "844",
        name: "Sandaconda",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [85, 72, 107, 125, 65, 70, 71],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "845",
        name: "Cramorant",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [79.16666667, 70, 85, 55, 85, 95, 85],
        type1: TYPE_NAMES.indexOf("Flying"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "846",
        name: "Arrokuda",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [46.66666667, 41, 63, 40, 40, 30, 66],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "847",
        name: "Barraskewda",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [81.66666667, 61, 123, 60, 60, 50, 136],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "848",
        name: "Toxel",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [40.33333333, 40, 38, 35, 54, 35, 40],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "849",
        name: "Toxtricity",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [83.66666667, 75, 98, 70, 114, 70, 75],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Poison"),
        isMega: false
    },
    {
        dexNumber: "850",
        name: "Sizzlipede",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [50.83333333, 50, 65, 45, 50, 50, 45],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "851",
        name: "Centiskorch",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [87.5, 100, 115, 65, 90, 90, 65],
        type1: TYPE_NAMES.indexOf("Fire"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "852",
        name: "Clobbopus",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [51.66666667, 50, 68, 60, 50, 50, 32],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "853",
        name: "Grapploct",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [80, 80, 118, 90, 70, 80, 42],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "854",
        name: "Sinistea",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [51.33333333, 40, 45, 45, 74, 54, 50],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "855",
        name: "Polteageist",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [84.66666667, 60, 65, 65, 134, 114, 70],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "856",
        name: "Hatenna",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [44.16666667, 42, 30, 45, 56, 53, 39],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "857",
        name: "Hattrem",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [61.66666667, 57, 40, 65, 86, 73, 49],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "858",
        name: "Hatterene",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [85, 57, 90, 95, 136, 103, 29],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "859",
        name: "Impidimp",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [44.16666667, 45, 45, 30, 55, 40, 50],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "860",
        name: "Morgrem",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [61.66666667, 65, 60, 45, 75, 55, 70],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "861",
        name: "Grimmsnarl",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [85, 95, 120, 65, 95, 75, 60],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Fairy"),
        isMega: false
    },
    {
        dexNumber: "862",
        name: "Obstagoon",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [86.66666667, 93, 90, 101, 60, 81, 95],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "863",
        name: "Perrserker",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [73.33333333, 70, 110, 100, 50, 60, 50],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "864",
        name: "Cursola",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [85, 60, 95, 50, 145, 130, 30],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "865",
        name: "Sirfetch'd",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [84.5, 62, 135, 95, 68, 82, 65],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "866",
        name: "Mr. Rime",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [86.66666667, 80, 85, 75, 110, 100, 70],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Psychic"),
        isMega: false
    },
    {
        dexNumber: "867",
        name: "Runerigus",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [80.5, 58, 95, 145, 50, 105, 30],
        type1: TYPE_NAMES.indexOf("Ground"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "868",
        name: "Milcery",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [45, 45, 40, 40, 50, 61, 34],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "869",
        name: "Alcremie",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [82.5, 65, 60, 75, 110, 121, 64],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "870",
        name: "Falinks",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [78.33333333, 65, 100, 100, 70, 60, 75],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "871",
        name: "Pincurchin",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [72.5, 48, 101, 95, 91, 85, 15],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "872",
        name: "Snom",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [30.83333333, 30, 25, 35, 45, 30, 20],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "873",
        name: "Frosmoth",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [79.16666667, 70, 65, 60, 125, 90, 65],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: TYPE_NAMES.indexOf("Bug"),
        isMega: false
    },
    {
        dexNumber: "874",
        name: "Stonjourner",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [78.33333333, 100, 125, 135, 20, 20, 70],
        type1: TYPE_NAMES.indexOf("Rock"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "875",
        name: "Eiscue - Ice Face",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [78.33333333, 75, 80, 110, 65, 90, 50],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "875.1",
        name: "Eiscue - Noice Face",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [78.33333333, 75, 80, 70, 65, 50, 130],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "876",
        name: "Indeedee - Male",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [79.16666667, 60, 65, 55, 105, 95, 95],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "876.1",
        name: "Indeedee - Female",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [79.16666667, 70, 55, 65, 95, 105, 85],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Normal"),
        isMega: false
    },
    {
        dexNumber: "877",
        name: "Morpeko",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [72.66666667, 58, 95, 58, 70, 58, 97],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "878",
        name: "Cufant",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [55, 72, 80, 49, 40, 49, 40],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "879",
        name: "Copperajah",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [83.33333333, 122, 130, 69, 80, 69, 30],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "880",
        name: "Dracozolt",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [84.16666667, 90, 100, 90, 80, 70, 75],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "881",
        name: "Arctozolt",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [84.16666667, 90, 100, 90, 90, 80, 55],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "882",
        name: "Dracovish",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [84.16666667, 90, 90, 100, 70, 80, 75],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "883",
        name: "Arctovish",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [84.16666667, 90, 90, 100, 80, 90, 55],
        type1: TYPE_NAMES.indexOf("Water"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "884",
        name: "Duraludon",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [89.16666667, 70, 95, 115, 120, 50, 85],
        type1: TYPE_NAMES.indexOf("Steel"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "885",
        name: "Dreepy",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [45, 28, 60, 30, 40, 30, 82],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "886",
        name: "Drakloak",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [68.33333333, 68, 80, 50, 60, 50, 102],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "887",
        name: "Dragapult",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [100, 88, 120, 75, 100, 75, 142],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    },
    {
        dexNumber: "888",
        name: "Zacian - Crowned Sword",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [120, 92, 170, 115, 80, 115, 148],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "888.1",
        name: "Zacian - Hero of Many Battles",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [111.6666667, 92, 130, 115, 80, 115, 138],
        type1: TYPE_NAMES.indexOf("Fairy"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "889",
        name: "Zamazenta - Crowned Shield",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [120, 92, 130, 145, 80, 145, 128],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Steel"),
        isMega: false
    },
    {
        dexNumber: "889.1",
        name: "Zamazenta - Hero of Many Battles",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [111.6666667, 92, 130, 115, 80, 115, 138],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "890",
        name: "Eternatus",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [115, 140, 85, 95, 145, 95, 130],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "890.1",
        name: "Eternamax Eternatus",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [187.5, 255, 115, 250, 125, 250, 130],
        type1: TYPE_NAMES.indexOf("Poison"),
        type2: TYPE_NAMES.indexOf("Dragon"),
        isMega: false
    },
    {
        dexNumber: "891",
        name: "Kubfu",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [64.16666667, 60, 90, 60, 53, 50, 72],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "892",
        name: "Urshifu - Single Strike Style",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [91.66666667, 100, 130, 100, 63, 60, 97],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Dark"),
        isMega: false
    },
    {
        dexNumber: "892.1",
        name: "Urshifu - Rapid Strike Style",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [91.66666667, 100, 130, 100, 63, 60, 97],
        type1: TYPE_NAMES.indexOf("Fighting"),
        type2: TYPE_NAMES.indexOf("Water"),
        isMega: false
    },
    {
        dexNumber: "893",
        name: "Zarude",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [100, 105, 120, 105, 70, 95, 105],
        type1: TYPE_NAMES.indexOf("Dark"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "894",
        name: "Regieleki",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [96.66666667, 80, 100, 50, 100, 50, 200],
        type1: TYPE_NAMES.indexOf("Electric"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "895",
        name: "Regidrago",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [96.66666667, 200, 100, 50, 100, 50, 80],
        type1: TYPE_NAMES.indexOf("Dragon"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "896",
        name: "Glastrier",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [96.66666667, 100, 145, 130, 65, 110, 30],
        type1: TYPE_NAMES.indexOf("Ice"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "897",
        name: "Spectrier",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [96.66666667, 100, 65, 60, 145, 80, 130],
        type1: TYPE_NAMES.indexOf("Ghost"),
        type2: undefined,
        isMega: false
    },
    {
        dexNumber: "898",
        name: "Calyrex",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [83.33333333, 100, 80, 80, 80, 80, 80],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Grass"),
        isMega: false
    },
    {
        dexNumber: "898.1",
        name: "Calyrex - Ice Rider",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [113.3333333, 100, 165, 150, 85, 130, 50],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Ice"),
        isMega: false
    },
    {
        dexNumber: "898.2",
        name: "Calyrex - Shadow Rider",
        gen: 8,
        region: REGION_NAMES.indexOf("Galar"),
        baseStats: [113.3333333, 100, 85, 80, 165, 100, 150],
        type1: TYPE_NAMES.indexOf("Psychic"),
        type2: TYPE_NAMES.indexOf("Ghost"),
        isMega: false
    }
];
