const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

/* --- Resolve path for build folder to contain compiled contracts --- */
const build_path = path.resolve(__dirname, "build");

/* --- Remove currently compiled files --- */
fs.removeSync(build_path);

/* --- Get Solidity contract source code --- */
const contract_path = path.resolve(__dirname, "contracts", "IntellectualProperty.sol");

/* --- Parse source code of the Solidity contract --- */
const source_code = fs.readFileSync(contract_path, "utf-8");

/* --- Get contract JSON --- */
const contract_json_output = {
	language: "Solidity",
	sources: {
		"IntellectualProperty.sol" : {
			content: source_code
		}
	},
	settings: {
		outputSelection: {
			"IntellectualProperty.sol" : {
				"RegisteredIPFactory" : ["abi", "evm.bytecode"],
				"IntellectualProperty" : ["abi", "evm.bytecode"],
				"Trademark" : ["abi", "evm.bytecode"],
				"Patent" : ["abi", "evm.bytecode"],
				"Design" : ["abi", "evm.bytecode"]
			}
		},
		optimizer: {
			enabled: true,
			runs: 200
		}
	}
}

/* --- Compiling contract using Solidity compiler --- */
const contracts = JSON.parse(solc.compile(JSON.stringify(contract_json_output))).contracts["IntellectualProperty.sol"];

/* --- Ensures that the build folder is existent --- */
fs.ensureDirSync(build_path);

/* --- Extracts contracts and creates JSON files for each --- */
for (let contract in contracts) {
	fs.outputJSONSync(path.resolve(build_path, contract + ".json"), contracts[contract]);
}