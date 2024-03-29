// ---- UTIL ---- //
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
// -------------- //

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
let SORT_CONTROL_ACTIVE = 0; // Which control is active
let SORT_CONTROL_ASCENDING = true; // Whether the active control is currently sorting ascending or descending

const TYPE_FILTERS = TYPE_NAMES.map(name => document.getElementById("filter-" + name.toLowerCase()));
const REGION_FILTERS = REGION_NAMES.map(name => document.getElementById("filter-" + name.toLowerCase()));
const MEGA_FILTER = document.getElementById("filter-megas");
let SLIDERS = [];

// Species that are currently being shown in the table.
let DISPLAYED_SPECIES = [];

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

// Translates the contents of `DISPLAYED_SPECIES` into the table.
function updateTable() {
    // Update header
    for(let i = 0; i < 9; i++) {
        if(i === SORT_CONTROL_ACTIVE) {
            SORT_CONTROLS[i].innerHTML = "<u>" + SORT_CONTROL_LABELS[i] + "</u>" + (SORT_CONTROL_ASCENDING ? " &#x25B4;" : " &#x25BE;");
        } else {
            SORT_CONTROLS[i].innerHTML = SORT_CONTROL_LABELS[i] + " &#x25B4;";
        }
    }
    
    // Insert body
    let htmlText = "";
    let evenRow = true;
    for(const species of DISPLAYED_SPECIES) {
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
            htmlText += "<td>" + round(stat, 1) + "</td>";
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

// Redraws the charts using the contents of `DISPLAYED_SPECIES`.
function updateCharts(statAverageChart, typeDiversityChart, averageDamageChart, msAnimate) {
    statAverageChart.data.datasets = [{
        data: round([
            DISPLAYED_SPECIES.map(s => s.baseStats[0]).mean(),
            DISPLAYED_SPECIES.map(s => s.baseStats[1]).mean(),
            DISPLAYED_SPECIES.map(s => s.baseStats[2]).mean(),
            DISPLAYED_SPECIES.map(s => s.baseStats[3]).mean(),
            DISPLAYED_SPECIES.map(s => s.baseStats[4]).mean(),
            DISPLAYED_SPECIES.map(s => s.baseStats[5]).mean(),
            DISPLAYED_SPECIES.map(s => s.baseStats[6]).mean()
        ], 1),
        backgroundColor: "#EA3322"
    }];
    
    typeDiversityChart.data.datasets = [{
        data: round([
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 00)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 01)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 02)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 03)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 04)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 05)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 06)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 07)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 08)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 09)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 10)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 11)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 12)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 13)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 14)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 15)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 16)).mean() * 100,
            DISPLAYED_SPECIES.map(s => typeMakeup(s, 17)).mean() * 100
        ], 1),
        backgroundColor: TYPE_COLORS,
        borderColor: "#424242"
    }];
    
    averageDamageChart.data.datasets = [{
        data: round([
            DISPLAYED_SPECIES.map(s => typeEffectiveness(00, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(01, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(02, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(03, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(04, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(05, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(06, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(07, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(08, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(09, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(10, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(11, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(12, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(13, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(14, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(15, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(16, s.type1, s.type2)).mean(),
            DISPLAYED_SPECIES.map(s => typeEffectiveness(17, s.type1, s.type2)).mean()
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

// Sorts `DISPLAYED_SPECIES` by the selected category.
function sortSpecies() {
    switch(SORT_CONTROL_ACTIVE) {
        case 0:
            DISPLAYED_SPECIES.sort((a, b) => stringIgnoreCaseComparator(a.dexNumber, b.dexNumber) * (SORT_CONTROL_ASCENDING ? 1 : -1));
            break;
        case 1:
            DISPLAYED_SPECIES.sort((a, b) => stringIgnoreCaseComparator(a.name, b.name) * (SORT_CONTROL_ASCENDING ? 1 : -1));
            break;
        case 2: case 3: case 4: case 5: case 6: case 7: case 8:
            DISPLAYED_SPECIES.sort((a, b) => comparator(a.baseStats[SORT_CONTROL_ACTIVE - 2], b.baseStats[SORT_CONTROL_ACTIVE - 2]) * (SORT_CONTROL_ASCENDING ? 1 : -1));
    }
}

// Passes `SPECIES` through all the filters and stores the result in `DISPLAYED_SPECIES`.
function filterSpecies() {
    DISPLAYED_SPECIES = [];
    for(const species of SPECIES) {
        const statsMatch = [...Array(7).keys()].map(i => {
            const handlePos = SLIDERS[i].noUiSlider.get();
            return species.baseStats[i] >= handlePos[0] && species.baseStats[i] <= handlePos[1];
        }).reduce((acc, cur) => acc && cur, true);

        const typeMatches = TYPE_FILTERS[species.type1].checked || (truthyOrZero(species.type2) && TYPE_FILTERS[species.type2].checked);
        
        if(statsMatch && typeMatches && REGION_FILTERS[species.region].checked && (!species.isMega || MEGA_FILTER.checked)) {
            DISPLAYED_SPECIES.push(species);
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
    SLIDERS = ["average", "hp", "attack", "defense", "sp-atk", "sp-def", "speed"].map(sliderName => {
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
            SORT_CONTROL_ASCENDING = SORT_CONTROL_ACTIVE !== i || !SORT_CONTROL_ASCENDING;
            SORT_CONTROL_ACTIVE = i;
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
    const FILTER_ALL_REGIONS = document.getElementById("filter-all-regions");
    
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

    REGION_FILTERS.forEach(regionFilter => regionFilter.oninput = function (event) {
        if(FILTER_ALL_REGIONS.checked != event.target.checked) {
            if(!event.target.checked) {
                FILTER_ALL_REGIONS.checked = false;
            } else if(event.target.checked && REGION_FILTERS.reduce((acc, cur) => acc && cur.checked, true)) {
                FILTER_ALL_REGIONS.checked = true;
            }
        }
        updateEverything();
    });
    
    FILTER_ALL_TYPES.oninput = function (event) {
        TYPE_FILTERS.forEach(typeFilter => typeFilter.checked = event.target.checked);
        updateEverything();
    };

    FILTER_ALL_REGIONS.oninput = function (event) {
        REGION_FILTERS.forEach(regionFilter => regionFilter.checked = event.target.checked);
        updateEverything();
    };
    
    SLIDERS.forEach(slider =>
        slider.noUiSlider.on("update", (values, handle, unencoded, tap, positions, noUiSlider) =>
            tap ? updateEverything() : updateEverything(0)));
    
    MEGA_FILTER.oninput = function () { updateEverything(); };
    
    updateEverything();
}

main();
