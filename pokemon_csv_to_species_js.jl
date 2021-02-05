#=
pokemon_csv_to_species_mjs: Converts the entries in pokemon.csv to an array in species.js.
- Julia version: 1.4.2
- Author: Wallace Watler
- Date: 2021-02-04
=#

function main()
    println("Reading entries from pokemon.csv...")
    lines = readlines("pokemon.csv")[2:end] # Skip header row

    lines = map(line -> begin
        values::Vector{Any} = split(line, ",")
        values[1] = values[1][2:end] # Remove '#' from dexNumber
        values[13] = lowercase(values[13])
        values
    end, lines)

    output =  "// All species, generated from pokemon.csv.\n"
    output *= "const SPECIES = [\n"
    output *= join(map(line -> begin
              "    {\n"*
              "        dexNumber: \"$(line[1])\",\n"*
              "        gen: $(line[2]),\n"*
              "        name: \"$(line[3])\",\n"*
              "        baseStats: [$(line[4]), $(line[5]), $(line[6]), $(line[7]), $(line[8]), $(line[9]), $(line[10])],\n"*
              "        type1: TYPE_NAMES.indexOf(\"$(line[11])\"),\n"*
              "        type2: " * (isempty(line[12]) ? "undefined" : "TYPE_NAMES.indexOf(\"$(line[12])\")") * ",\n"*
              "        isMega: $(line[13])\n"*
              "    }"
                       end, lines), ",\n")
    output *= "\n];\n"

    open("species.js", "w") do io
        println("Writing entries to species.js...")
        write(io, output)
    end
end

main()
