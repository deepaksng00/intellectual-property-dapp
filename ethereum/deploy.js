/* --- Import truffle HD wallet for deploying factory contract --- */
const HDWalletProvider = require("truffle-hdwallet-provider");

/* --- Import Web3 based on JS instance --- */
const Web3 = require("web3");

/* --- Collect compiled information for the factory contract --- */
const factory_contract = require("../ethereum/build/RegisteredIPFactory.json");

/* --- Using Infura node to link with Externally Owned Account (EOA) --- */
const provider = new HDWalletProvider(
    "picture proof bottom exact media possible color law aim coin circle rotate",
    "https://rinkeby.infura.io/v3/b73cfce8d0f14c9580a6f63f5175157d"
);

/* --- Create Web3 instance using provider --- */
const web3 = new Web3(provider);

/* --- Deploy contract in the blockchain using asynchronus processing --- */
const deploy = async () => {
	/* --- Get accounts linked to EOA --- */
	const accounts = await web3.eth.getAccounts();
	/* --- Status update --- */
	console.log("Deploying contract from account: " + accounts[0]);

	/* --- Carry out transaction to deploy the contract in the blockchain --- */
	const result = await new web3.eth.Contract(factory_contract.abi) // initiating new contract with web3
		.deploy({ data: "0x" + factory_contract.evm.bytecode.object }) // defining deployment information (pre-code for contract and bytecode of the contract)
		.send({ from: accounts[0] });

	/* --- Output address of deployed contract --- */
	console.log("Contract deployed at: " + result.options.address);
}

deploy();