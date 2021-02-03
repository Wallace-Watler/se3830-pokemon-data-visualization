Chart.defaults.global.defaultFontFamily = "Exo 2";

// Computes a count by applying a function to each element and summing the results.
// `predicate` can either return a boolean to count in the traditional sense
// or can return a number to weight elements differently in the count.
Array.prototype.count = function (predicate) {
	return this.reduce((acc, cur) => acc + predicate(cur), 0);
};

Array.prototype.sum = function () {
	return this.count((val) => val);
};

Array.prototype.mean = function () {
	return this.sum() / this.length;
};

// Round a value to some number of decimal places, given by `precision`.
// If given an array, will return a new array with each element rounded.
function round(value, precision) {
	if(Array.isArray(value)) {
		return value.map(subvalue => round(subvalue, precision));
	}
	let m = Math.pow(10, precision || 0);
	return Math.round(value * m) / m;
}

function truthyOrZero(value) {
	return value || value === 0
}

const TYPE_NAMES = [
    "Normal",
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Steel",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Fairy"
];

const TYPE_COLORS = [
    "#A8A878",
	"#C03028",
	"#A890F0",
	"#A040A0",
	"#E0C068",
	"#B8A038",
	"#A8B820",
	"#705898",
	"#B8B8D0",
	"#F08030",
	"#6890F0",
	"#78C850",
	"#F8D030",
	"#F85888",
	"#98D8D8",
	"#7038F8",
	"#705848",
	"#EE99AC"
];

// Attacking types are listed vertically, defending types horizontally.
const TYPE_DMG_MUL = [
    [1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 0.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    [2.0, 1.0, 0.5, 0.5, 1.0, 2.0, 0.5, 0.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 0.5],
    [1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0],
    [1.0, 1.0, 0.0, 2.0, 1.0, 2.0, 0.5, 1.0, 2.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    [1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0],
    [1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 2.0, 0.5],
    [0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 2.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 0.5, 0.5, 2.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0],
    [1.0, 1.0, 0.5, 0.5, 2.0, 2.0, 0.5, 1.0, 0.5, 0.5, 2.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0],
    [1.0, 1.0, 2.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 0.5, 1.0, 1.0],
    [1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 0.0, 1.0],
    [1.0, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 2.0, 1.0, 1.0, 0.5, 2.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.0],
    [1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5],
    [1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0]
];

function typeEffectiveness(attacking, defending1, defending2) {
    return TYPE_DMG_MUL[attacking][defending1] * (truthyOrZero(defending2) ? TYPE_DMG_MUL[attacking][defending2] : 1.0);
}

// All species, loaded from external CSV.
const SPECIES = [
    {
        dexNumber: "001",
        name: "Bulbasaur",
        average: 53.0,
        hp: 45,
        attack: 49,
        defense: 49,
        spAtk: 65,
        spDef: 65,
        speed: 45,
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        resistancesText: "Fighting, Water, Grass, Electric, Fairy",
        weaknessesText: "Flying, Fire, Psychic, Ice"
    },
    {
        dexNumber: "002",
        name: "Ivysaur",
        average: 67.5,
        hp: 60,
        attack: 62,
        defense: 63,
        spAtk: 80,
        spDef: 80,
        speed: 60,
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        resistancesText: "Fighting, Water, Grass, Electric, Fairy",
        weaknessesText: "Flying, Fire, Psychic, Ice"
    },
    {
        dexNumber: "003",
        name: "Venusaur",
        average: 87.5,
        hp: 80,
        attack: 82,
        defense: 83,
        spAtk: 100,
        spDef: 100,
        speed: 80,
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison"),
        resistancesText: "Fighting, Water, Grass, Electric, Fairy",
        weaknessesText: "Flying, Fire, Psychic, Ice"
    },
    {
        dexNumber: "004",
        name: "Charmander",
        average: 51.5,
        hp: 39,
        attack: 52,
        defense: 43,
        spAtk: 60,
        spDef: 50,
        speed: 65,
        type1: TYPE_NAMES.indexOf("Fire"),
        resistancesText: "Bug, Steel, Fire, Grass, Ice, Fairy",
        weaknessesText: "Ground, Rock, Water"
    }
];

// Species that are currently being shown in the table.
let displayedSpecies = [];

// Returns 1 if `species` is type `type` and only that type,
// 0.5 if `species` is type `type` and some other type,
// or 0 if `species` is not type `type`.
function typeMakeup(species, type) {
	let isType = species.type1 === type || species.type2 === type;
	return truthyOrZero(species.type2) ? isType / 2 : isType;
}

// Translates the contents of `displayedSpecies` into the table.
function updateTable() {
    let evenRow = true;
    let htmlText = "";
	
    for(const species of displayedSpecies) {
        htmlText += "<tr class='table-row-" + (evenRow ? "even" : "odd") + "'>";
        htmlText += "<td>" + species.dexNumber + "</td>";
        htmlText += "<td>" + species.name + "</td>";
        htmlText += "<td>" + species.average + "</td>";
        htmlText += "<td>" + species.hp + "</td>";
        htmlText += "<td>" + species.attack + "</td>";
        htmlText += "<td>" + species.defense + "</td>";
        htmlText += "<td>" + species.spAtk + "</td>";
        htmlText += "<td>" + species.spDef + "</td>";
        htmlText += "<td>" + species.speed + "</td>";
		htmlText += "<td>" + TYPE_NAMES[species.type1] + (truthyOrZero(species.type2) ? ("/" + TYPE_NAMES[species.type2]) : "") + "</td>";
        htmlText += "<td>" + species.resistancesText + "</td>";
        htmlText += "<td>" + species.weaknessesText + "</td>";
        htmlText += "</tr>";
        evenRow = !evenRow;
    }
	
    let speciesTableTbody = document.getElementById("species-table-tbody");
    if(speciesTableTbody) {
        speciesTableTbody.innerHTML = htmlText;
    }
}

// Redraws the graphs using the contents of `displayedSpecies`.
function updateGraphs() {
	new Chart(document.getElementById("stat-averages"), {
        type: "bar",
        data: {
            labels: ["Average", "HP", "Attack", "Defense", "Sp. Atk.", "Sp. Def.", "Speed"],
            datasets: [{
                data: round([
				    displayedSpecies.map(s => s.average).mean(),
					displayedSpecies.map(s => s.hp).mean(),
					displayedSpecies.map(s => s.attack).mean(),
					displayedSpecies.map(s => s.defense).mean(),
					displayedSpecies.map(s => s.spAtk).mean(),
					displayedSpecies.map(s => s.spDef).mean(),
					displayedSpecies.map(s => s.speed).mean()
				], 1),
                backgroundColor: "#FF0000"
            }]
        },
        options: {
            scales: {
				xAxes: [{
					gridLines: {
						color: "#00000000",
						zeroLineColor: "#00000000"
					}
				}],
                yAxes: [{
					gridLines: {
						color: "#555555",
						zeroLineColor: "#9E9E9E"
					},
                    ticks: {
                        beginAtZero: true,
						max: 256,
						stepSize: 32
                    }
                }]
            },
			legend: {
				display: false
			},
			responsive: false,
			maintainAspectRatio: false
        }
    });
	
	new Chart(document.getElementById("type-diversity"), {
        type: "doughnut",
        data: {
            labels: TYPE_NAMES,
            datasets: [{
                data: round([
				    displayedSpecies.map(s => typeMakeup(s, 00)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 01)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 02)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 03)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 04)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 05)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 06)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 07)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 08)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 09)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 10)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 11)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 12)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 13)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 14)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 15)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 16)).mean() * 100,
					displayedSpecies.map(s => typeMakeup(s, 17)).mean() * 100
				], 1),
                backgroundColor: TYPE_COLORS,
				borderColor: "#424242"
            }]
        },
        options: {
			legend: {
				display: false
			},
			rotation: Math.PI,
			cutoutPercentage: 25,
			responsive: false,
			maintainAspectRatio: false
        }
    });
	
	new Chart(document.getElementById("average-damage"), {
        type: "horizontalBar",
        data: {
            labels: TYPE_NAMES,
            datasets: [{
                data: round([
				    displayedSpecies.map(s => typeEffectiveness(00, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(01, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(02, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(03, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(04, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(05, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(06, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(07, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(08, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(09, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(10, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(11, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(12, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(13, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(14, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(15, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(16, s.type1, s.type2)).mean(),
					displayedSpecies.map(s => typeEffectiveness(17, s.type1, s.type2)).mean()
				], 2),
                backgroundColor: TYPE_COLORS
            }]
        },
        options: {
            scales: {
                xAxes: [{
					gridLines: {
						color: "#555555",
						zeroLineColor: "#858585"
					},
                    ticks: {
                        beginAtZero: true,
						max: 4,
						stepSize: 1
                    }
                }],
				yAxes: [{
					gridLines: {
						color: "#00000000",
						zeroLineColor: "#00000000"
					},
					ticks: {
						display: false
					}
				}]
            },
			legend: {
				display: false
			},
			responsive: false,
			maintainAspectRatio: false
        }
    });
}

// Sorts `displayedSpecies` by the selected category.
function sortSpecies() {
}

// Passes `SPECIES` through the selected filters and stores the result in `displayedSpecies`.
function filterSpecies() {
    displayedSpecies = [];
    for(const species of SPECIES) {
        //TODO: Apply filters
        displayedSpecies.push(species);
    }
}

function main() {
    filterSpecies();
    sortSpecies();
    updateTable();
    updateGraphs();
}

main();
