const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

/* --- Create new instance of web3 for testing using ganache --- */
const web3 = new Web3(ganache.provider());

/* --- Import compiled contracts for testing --- */
const compiled_factory = require("../ethereum/build/RegisteredIPFactory.json");
const compiled_trademark = require("../ethereum/build/Trademark.json");
const compiled_patent = require("../ethereum/build/Patent.json");
const compiled_design = require("../ethereum/build/Design.json");

/* --- Reusable variables --- */
let accounts;
let factory;
let trademarkAddress;
let parentAddress;
let designAddress;
let trademark;
let patent;
let design;

/* --- Code to run before each test, deploying contracts in the test network within ganache --- */
beforeEach(async () => {
	accounts = await web3.eth.getAccounts();
	factory = await new web3.eth.Contract(compiled_factory.abi)
		.deploy({ data: "0x" + compiled_factory.evm.bytecode.object })
		.send({ from: accounts[0], gasLimit: "5000000" });

	await factory.methods.createTrademark().send({ from: accounts[0], gasLimit: "5000000" }); // creating a trademark
	await factory.methods.createPatent().send({ from: accounts[0], gasLimit: "5000000" }); // create a patent
	await factory.methods.createDesign().send({ from: accounts[0], gasLimit: "5000000" }); // create a design

	[trademarkAddress] = await factory.methods.getTrademarks().call(); // using call as it is a view function
	[patentAddress] = await factory.methods.getPatents().call();
	[designAddress] = await factory.methods.getDesigns().call();

	trademark = await new web3.eth.Contract(compiled_trademark.abi, trademarkAddress); // creating a web3 handler to access the contract on the test network
	patent = await new web3.eth.Contract(compiled_patent.abi, patentAddress);
	design = await new web3.eth.Contract(compiled_design.abi, designAddress);
});

/* --- Test if contracts have deployed on the blockchain --- */
describe("Deployments", () => {
	it("Deploys a factory", () => {
		assert.ok(factory.options.address);
	});

	it("Deploys a trademark", () => {
		assert.ok(trademark.options.address);
	});

	it("Deploys a patent", () => {
		assert.ok(patent.options.address);
	});

	it("Deploys a design", () => {
		assert.ok(design.options.address);
	});
});

/* --- Test if the correct owner address is assigned to the IP --- */
describe("Marks the correct owner address", () => {
	it("Marks the correct owner for the trademark", async () => {
		const owner = await trademark.methods.getOwner().call(); // calling getOwner function in the contract to get the address of the owner
		assert.equal(accounts[0], owner);
	});

	it("Marks the correct owner for the patent", async () => {
		const owner = await patent.methods.getOwner().call();
		assert.equal(accounts[0], owner);
	});

	it("Marks the correct owner for the design", async() => {
		const owner = await design.methods.getOwner().call();
		assert.equal(accounts[0], owner);
	});
});

/* --- Check that num of IP is correct --- */
describe("Returns the correct number of IP", () => {
	it("Returns the correct number of trademarks", async () => {
		const numOfTrademarks = await factory.methods.getNumOfTrademarks().call();
		assert.ok(1, numOfTrademarks);
	});

	it("Returns the correct number of patents", async () => {
		const numOfPatents = await factory.methods.getNumOfPatents().call();
		assert.ok(1, numOfPatents);
	});

	it("Returns the correct number of designs", async() => {
		const numOfDesigns = await factory.methods.getNumOfDesigns().call();
		assert.ok(1, numOfDesigns);
	});
});