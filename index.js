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

const SORT_CONTROL_LABELS = ["'Dex #", "Name", "Average", "HP", "Attack", "Defense", "Sp. Atk.", "Sp. Def.", "Speed"];
const SORT_CONTROLS = ["dex", "name", "average", "hp", "attack", "defense", "sp-atk", "sp-def", "speed"]
    .map(sortControlName => document.getElementById("sort-control-" + sortControlName));
let sortControlActive = 0; // Which control is active
let sortControlAscending = true; // Whether the active control is currently sorting ascending or descending

const TYPE_FILTERS = TYPE_NAMES.map(name => document.getElementById("filter-" + name.toLowerCase()));
const GEN_FILTERS = [...Array(6).keys()].map(i => document.getElementById("filter-gen" + (i + 1)));
const MEGA_FILTER = document.getElementById("filter-megas");
let sliders = [];

// TODO: All species, loaded from external CSV.
const SPECIES = [
    {
        dexNumber: "001",
		gen: 1,
        name: "Bulbasaur",
		baseStats: [53.0, 45, 49, 49, 65, 65, 45],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison")
    },
    {
        dexNumber: "002",
		gen: 1,
        name: "Ivysaur",
		baseStats: [67.5, 60, 62, 63, 80, 80, 60],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison")
    },
    {
        dexNumber: "003",
		gen: 1,
        name: "Venusaur",
		baseStats: [87.5, 80, 82, 83, 100, 100, 80],
        type1: TYPE_NAMES.indexOf("Grass"),
        type2: TYPE_NAMES.indexOf("Poison")
    },
    {
        dexNumber: "004",
		gen: 1,
        name: "Charmander",
		baseStats: [51.5, 39, 52, 43, 60, 50, 65],
        type1: TYPE_NAMES.indexOf("Fire")
    }
];

// Species that are currently being shown in the table.
let displayedSpecies = [];

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

function stringIgnoreCaseComparator(a, b) {
	if(a.toUpperCase() < b.toUpperCase()) {
		return -1;
	}
	if(a.toUpperCase() > b.toUpperCase()) {
		return 1;
	}
	return 0;
};

function comparator(a, b) {
	if(a < b) {
		return -1;
	}
	if(a > b) {
		return 1;
	}
	return 0;
};

function typeEffectiveness(attacking, defending1, defending2) {
    return TYPE_DMG_MUL[attacking][defending1] * (truthyOrZero(defending2) ? TYPE_DMG_MUL[attacking][defending2] : 1.0);
}

// Returns 1 if `species` is type `type` and only that type,
// 0.5 if `species` is type `type` and some other type,
// or 0 if `species` is not type `type`.
function typeMakeup(species, type) {
	let isType = species.type1 === type || species.type2 === type;
	return truthyOrZero(species.type2) ? isType / 2 : isType;
}

// Translates the contents of `displayedSpecies` into the table.
function updateTable() {
	// Update header
	for(let i = 0; i < 9; i++) {
		if(i === sortControlActive) {
			SORT_CONTROLS[i].innerHTML = "<u>" + SORT_CONTROL_LABELS[i] + "</u>" + (sortControlAscending ? " &#x25B4;" : " &#x25BE;");
		} else {
			SORT_CONTROLS[i].innerHTML = SORT_CONTROL_LABELS[i] + " &#x25B4;";
		}
	}
	
	// Insert body
	let htmlText = "";
    let evenRow = true;
    for(const species of displayedSpecies) {
		const resistancesText = [...Array(18).keys()]
		    .map(type => [typeEffectiveness(type, species.type1, species.type2), TYPE_NAMES[type]])
			.filter(eff => eff[0] < 1.0)
			.map(eff => eff[1])
			.join(", ");
		const weaknessesText = [...Array(18).keys()]
		    .map(type => [typeEffectiveness(type, species.type1, species.type2), TYPE_NAMES[type]])
			.filter(eff => eff[0] > 1.0)
			.map(eff => eff[1])
			.join(", ");
		
        htmlText += "<tr class='table-row-" + (evenRow ? "even" : "odd") + "'>";
        htmlText += "<td>" + species.dexNumber + "</td>";
        htmlText += "<td>" + species.name + "</td>";
		for(const stat of species.baseStats) {
			htmlText += "<td>" + stat + "</td>";
		}
		htmlText += "<td>" + TYPE_NAMES[species.type1] + (truthyOrZero(species.type2) ? ("/" + TYPE_NAMES[species.type2]) : "") + "</td>";
        htmlText += "<td>" + resistancesText + "</td>";
        htmlText += "<td>" + weaknessesText + "</td>";
        htmlText += "</tr>";
        evenRow = !evenRow;
    }
	
    let speciesTableTbody = document.getElementById("species-table-tbody");
    if(speciesTableTbody) {
        speciesTableTbody.innerHTML = htmlText;
    }
}

// Redraws the charts using the contents of `displayedSpecies`.
function updateCharts(statAverageChart, typeDiversityChart, averageDamageChart, msAnimate) {
	statAverageChart.data.datasets = [{
        data: round([
		    displayedSpecies.map(s => s.baseStats[0]).mean(),
			displayedSpecies.map(s => s.baseStats[1]).mean(),
			displayedSpecies.map(s => s.baseStats[2]).mean(),
			displayedSpecies.map(s => s.baseStats[3]).mean(),
			displayedSpecies.map(s => s.baseStats[4]).mean(),
			displayedSpecies.map(s => s.baseStats[5]).mean(),
			displayedSpecies.map(s => s.baseStats[6]).mean()
		], 1),
        backgroundColor: "#FF0000"
    }];
	
	typeDiversityChart.data.datasets = [{
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
    }];
	
	averageDamageChart.data.datasets = [{
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
    }];
	
	if(truthyOrZero(msAnimate)) {
		statAverageChart.update(msAnimate);
		typeDiversityChart.update(msAnimate);
		averageDamageChart.update(msAnimate);
	} else {
		statAverageChart.update();
		typeDiversityChart.update();
		averageDamageChart.update();
	}
}

// Sorts `displayedSpecies` by the selected category.
function sortSpecies() {
	switch(sortControlActive) {
		case 0:
		    displayedSpecies.sort((a, b) => stringIgnoreCaseComparator(a.dexNumber, b.dexNumber) * (sortControlAscending ? 1 : -1));
		    break;
		case 1:
		    displayedSpecies.sort((a, b) => stringIgnoreCaseComparator(a.name, b.name) * (sortControlAscending ? 1 : -1));
		    break;
		case 2: case 3: case 4: case 5: case 6: case 7: case 8:
		    displayedSpecies.sort((a, b) => comparator(a.baseStats[sortControlActive - 2], b.baseStats[sortControlActive - 2]) * (sortControlAscending ? 1 : -1));
	}
}

// Passes `SPECIES` through all the filters and stores the result in `displayedSpecies`.
function filterSpecies() {
	displayedSpecies = [];
    for(const species of SPECIES) {
		const statsMatch = [...Array(7).keys()].map(i => {
			const handlePos = sliders[i].noUiSlider.get();
			return species.baseStats[i] >= handlePos[0] && species.baseStats[i] <= handlePos[1];
		}).reduce((acc, cur) => acc && cur, true);
		
		const typeMatches = TYPE_FILTERS[species.type1].checked || (truthyOrZero(species.type2) && TYPE_FILTERS[species.type2].checked);
		
        if(statsMatch && typeMatches && GEN_FILTERS[species.gen - 1].checked && (!species.isMega || MEGA_FILTER.checked)) {
			displayedSpecies.push(species);
		}
    }
}

function main() {
	Chart.defaults.global.defaultFontFamily = "Exo 2";
	Chart.defaults.global.defaultFontColor = "#CCCCCC";
	Chart.defaults.global.tooltips.displayColors = false;
	Chart.defaults.global.animation.duration = 500;
	Chart.defaults.global.animation.easing = "easeOutExpo";
	
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
	
	// Set up sliders
	sliders = ["average", "hp", "attack", "defense", "sp-atk", "sp-def", "speed"].map(sliderName => {
		const slider = document.getElementById("slider-" + sliderName);
		const sliderValue = document.getElementById("slider-value-" + sliderName);
		
		noUiSlider.create(slider, {
			start: [0, 255],
			connect: true,
			range: {
				"min": 0,
				"max": 255
			},
			step: 1
		});
		
		slider.noUiSlider.on("update", (values, handle) => {
			sliderValue.innerHTML = round(values[0]) + " - " + round(values[1]);
		});
		
		return slider;
	});
	
	// Set up charts
	const statAverageChart = new Chart(document.getElementById("stat-averages"), {
        type: "bar",
        data: {
            labels: ["Average", "HP", "Attack", "Defense", "Sp. Atk.", "Sp. Def.", "Speed"]
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
	
	const typeDiversityChart = new Chart(document.getElementById("type-diversity"), {
        type: "doughnut",
        data: {
            labels: TYPE_NAMES
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
	
	const averageDamageChart = new Chart(document.getElementById("average-damage"), {
        type: "horizontalBar",
        data: {
            labels: TYPE_NAMES
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
	
	// Set up sorting controls
	for(let i = 0; i < SORT_CONTROLS.length; i++) {
		SORT_CONTROLS[i].onclick = function(event) {
		    sortControlAscending = sortControlActive !== i || !sortControlAscending;
		    sortControlActive = i;
		    sortSpecies();
		    updateTable();
	    };
	}
	
	// Set up filters
	const updateEverything = function (msAnimate) {
		filterSpecies();
        sortSpecies();
        updateTable();
        updateCharts(statAverageChart, typeDiversityChart, averageDamageChart, msAnimate);
	};
	
	const FILTER_ALL_TYPES = document.getElementById("filter-all-types");
	const FILTER_ALL_GENS = document.getElementById("filter-all-gens");
	
	TYPE_FILTERS.forEach(typeFilter => typeFilter.oninput = function (event) {
		if(FILTER_ALL_TYPES.checked != event.target.checked) {
			if(!event.target.checked) {
		    	FILTER_ALL_TYPES.checked = false;
		    } else if(event.target.checked && TYPE_FILTERS.reduce((acc, cur) => acc && cur.checked, true)) {
		    	FILTER_ALL_TYPES.checked = true;
		    }
		}
		updateEverything();
	});
	
	GEN_FILTERS.forEach(genFilter => genFilter.oninput = function (event) {
		if(FILTER_ALL_GENS.checked != event.target.checked) {
			if(!event.target.checked) {
		    	FILTER_ALL_GENS.checked = false;
		    } else if(event.target.checked && GEN_FILTERS.reduce((acc, cur) => acc && cur.checked, true)) {
		    	FILTER_ALL_GENS.checked = true;
		    }
		}
		updateEverything();
	});
	
	FILTER_ALL_TYPES.oninput = function (event) {
		TYPE_FILTERS.forEach(typeFilter => typeFilter.checked = event.target.checked);
		updateEverything();
	};
	
	FILTER_ALL_GENS.oninput = function (event) {
		GEN_FILTERS.forEach(genFilter => genFilter.checked = event.target.checked);
		updateEverything();
	};
	
	sliders.forEach(slider =>
	    slider.noUiSlider.on("update", (values, handle, unencoded, tap, positions, noUiSlider) =>
		    tap ? updateEverything() : updateEverything(0)));
	
	MEGA_FILTER.oninput = function () { updateEverything(); };
	
    updateEverything();
}

main();
