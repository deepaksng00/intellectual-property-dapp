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
		assert.equal(1, numOfTrademarks);
	});

	it("Returns the correct number of patents", async () => {
		const numOfPatents = await factory.methods.getNumOfPatents().call();
		assert.equal(1, numOfPatents);
	});

	it("Returns the correct number of designs", async() => {
		const numOfDesigns = await factory.methods.getNumOfDesigns().call();
		assert.equal(1, numOfDesigns);
	});
});

/* --- Intellectual Property Functions --- */

/* --- Trademark --- */

describe("Functions for the trademark contract", () => {
	it("Status sets correctly", async () => {
		await trademark.methods.setStatus("Active").send({ from: accounts[0], gasLimit: "5000000" });
		const status = await trademark.methods.getStatus().call();
		assert.ok(status, "Active");
	});

	it("Filing date sets correctly", async () => {
		const filingDate = await trademark.methods.getFilingDate().call();
		const ip_date = new Date(filingDate * 1000);

		const current_date = new Date();

		const ip_date_complete = ip_date.getFullYear().toString() + "-" + (ip_date.getMonth()+1).toString() + "-" + ip_date.getDate().toString();
		const current_date_complete = current_date.getFullYear().toString() + "-" + (current_date.getMonth()+1).toString() + "-" + current_date.getDate().toString();

		assert.ok(ip_date_complete, current_date_complete);
	});

	it("Publication date sets correctly", async () => {
		const publication_timestamp = new Date("2021-03-01T00:00:00").getTime();
		await trademark.methods.setPublicationDate(publication_timestamp / 1000).send({ from: accounts[0], gasLimit: "5000000" });
		
		const timestamp_from_contract = await trademark.methods.getPublicationDate().call();

		const contract_date = new Date(timestamp_from_contract * 1000);
		const timestamp_contract = contract_date.getTime();

		assert.equal(publication_timestamp, timestamp_contract);
	});

	it("Co-owners set correctly", async () => {
		await trademark.methods.add_co_owner(accounts[1]).send({ from: accounts[0], gasLimit: "5000000" });
		await trademark.methods.add_co_owner(accounts[2]).send({ from: accounts[1], gasLimit: "5000000" });

		const checkAccount1 = await trademark.methods.check_co_owners(accounts[1]).call();
		const checkAccount2 = await trademark.methods.check_co_owners(accounts[2]).call();
		const checkAccount3 = await trademark.methods.check_co_owners(accounts[3]).call();

		assert.equal(checkAccount1, true);
		assert.equal(checkAccount2, true);
		assert.equal(checkAccount3, false);
	});

	it("Co-owners remove correctly", async() => {
		await trademark.methods.add_co_owner(accounts[1]).send({ from: accounts[0], gasLimit: "5000000" });
		await trademark.methods.add_co_owner(accounts[2]).send({ from: accounts[1], gasLimit: "5000000" });

		var checkAccount1 = await trademark.methods.check_co_owners(accounts[1]).call();
		var checkAccount2 = await trademark.methods.check_co_owners(accounts[2]).call();

		assert.equal(checkAccount1, true);
		assert.equal(checkAccount2, true);

		await trademark.methods.remove_co_owner(accounts[2]).send({ from: accounts[1], gasLimit: "5000000" });

		checkAccount1 = await trademark.methods.check_co_owners(accounts[1]).call();
		checkAccount2 = await trademark.methods.check_co_owners(accounts[2]).call();

		assert.equal(checkAccount1, true);
		assert.equal(checkAccount2, false);
	});
});

/* --- Parent --- */

describe("Functions for the patent contract", () => {
	it("Status sets correctly", async () => {
		await patent.methods.setStatus("Active").send({ from: accounts[0], gasLimit: "5000000" });
		const status = await patent.methods.getStatus().call();
		assert.ok(status, "Active");
	});

	it("Filing date sets correctly", async () => {
		const filingDate = await patent.methods.getFilingDate().call();
		const ip_date = new Date(filingDate * 1000);

		const current_date = new Date();

		const ip_date_complete = ip_date.getFullYear().toString() + "-" + (ip_date.getMonth()+1).toString() + "-" + ip_date.getDate().toString();
		const current_date_complete = current_date.getFullYear().toString() + "-" + (current_date.getMonth()+1).toString() + "-" + current_date.getDate().toString();

		assert.ok(ip_date_complete, current_date_complete);
	});

	it("Publication date sets correctly", async () => {
		const publication_timestamp = new Date("2021-03-01T00:00:00").getTime();
		await patent.methods.setPublicationDate(publication_timestamp / 1000).send({ from: accounts[0], gasLimit: "5000000" });
		
		const timestamp_from_contract = await patent.methods.getPublicationDate().call();

		const contract_date = new Date(timestamp_from_contract * 1000);
		const timestamp_contract = contract_date.getTime();

		assert.equal(publication_timestamp, timestamp_contract);
	});

	it("Co-owners set correctly", async () => {
		await patent.methods.add_co_owner(accounts[1]).send({ from: accounts[0], gasLimit: "5000000" });
		await patent.methods.add_co_owner(accounts[2]).send({ from: accounts[1], gasLimit: "5000000" });

		const checkAccount1 = await patent.methods.check_co_owners(accounts[1]).call();
		const checkAccount2 = await patent.methods.check_co_owners(accounts[2]).call();
		const checkAccount3 = await patent.methods.check_co_owners(accounts[3]).call();

		assert.equal(checkAccount1, true);
		assert.equal(checkAccount2, true);
		assert.equal(checkAccount3, false);
	});

	it("Co-owners remove correctly", async() => {
		await patent.methods.add_co_owner(accounts[1]).send({ from: accounts[0], gasLimit: "5000000" });
		await patent.methods.add_co_owner(accounts[2]).send({ from: accounts[1], gasLimit: "5000000" });

		var checkAccount1 = await patent.methods.check_co_owners(accounts[1]).call();
		var checkAccount2 = await patent.methods.check_co_owners(accounts[2]).call();

		assert.equal(checkAccount1, true);
		assert.equal(checkAccount2, true);

		await patent.methods.remove_co_owner(accounts[2]).send({ from: accounts[1], gasLimit: "5000000" });

		checkAccount1 = await patent.methods.check_co_owners(accounts[1]).call();
		checkAccount2 = await patent.methods.check_co_owners(accounts[2]).call();

		assert.equal(checkAccount1, true);
		assert.equal(checkAccount2, false);
	});
});

/* --- Design --- */

describe("Functions for the design contract", () => {
	it("Status sets correctly", async () => {
		await design.methods.setStatus("Active").send({ from: accounts[0], gasLimit: "5000000" });
		const status = await design.methods.getStatus().call();
		assert.ok(status, "Active");
	});

	it("Filing date sets correctly", async () => {
		const filingDate = await design.methods.getFilingDate().call();
		const ip_date = new Date(filingDate * 1000);

		const current_date = new Date();

		const ip_date_complete = ip_date.getFullYear().toString() + "-" + (ip_date.getMonth()+1).toString() + "-" + ip_date.getDate().toString();
		const current_date_complete = current_date.getFullYear().toString() + "-" + (current_date.getMonth()+1).toString() + "-" + current_date.getDate().toString();

		assert.ok(ip_date_complete, current_date_complete);
	});

	it("Publication date sets correctly", async () => {
		const publication_timestamp = new Date("2021-03-01T00:00:00").getTime();
		await design.methods.setPublicationDate(publication_timestamp / 1000).send({ from: accounts[0], gasLimit: "5000000" });
		
		const timestamp_from_contract = await design.methods.getPublicationDate().call();

		const contract_date = new Date(timestamp_from_contract * 1000);
		const timestamp_contract = contract_date.getTime();

		assert.equal(publication_timestamp, timestamp_contract);
	});

	it("Co-owners set correctly", async () => {
		await design.methods.add_co_owner(accounts[1]).send({ from: accounts[0], gasLimit: "5000000" });
		await design.methods.add_co_owner(accounts[2]).send({ from: accounts[1], gasLimit: "5000000" });

		const checkAccount1 = await design.methods.check_co_owners(accounts[1]).call();
		const checkAccount2 = await design.methods.check_co_owners(accounts[2]).call();
		const checkAccount3 = await design.methods.check_co_owners(accounts[3]).call();

		assert.equal(checkAccount1, true);
		assert.equal(checkAccount2, true);
		assert.equal(checkAccount3, false);
	});

	it("Co-owners remove correctly", async() => {
		await design.methods.add_co_owner(accounts[1]).send({ from: accounts[0], gasLimit: "5000000" });
		await design.methods.add_co_owner(accounts[2]).send({ from: accounts[1], gasLimit: "5000000" });

		var checkAccount1 = await design.methods.check_co_owners(accounts[1]).call();
		var checkAccount2 = await design.methods.check_co_owners(accounts[2]).call();

		assert.equal(checkAccount1, true);
		assert.equal(checkAccount2, true);

		await design.methods.remove_co_owner(accounts[2]).send({ from: accounts[1], gasLimit: "5000000" });

		checkAccount1 = await design.methods.check_co_owners(accounts[1]).call();
		checkAccount2 = await design.methods.check_co_owners(accounts[2]).call();

		assert.equal(checkAccount1, true);
		assert.equal(checkAccount2, false);
	});
});

