const IntellectualProperty = artifacts.require("IntellectualProperty");

contract("IntellectualProperty", accounts => {
	it("Deploys correctly", async () => {
		try {
			const instance = await IntellectualProperty.deployed();
			assert.equal(true, true);
		} catch (err) {
			assert.equal(false, true);
		}
	});

	it("Gets the correct amount of tokens assigned to a user", () =>
		IntellectualProperty.deployed()
			.then(instance => {
				instance.awardIP(accounts[0], "hash", "metadata2")
				return instance.balanceOf.call(accounts[0])
			})
			.then(numOfTokens => {
				assert.equal(numOfTokens, 1, "The number of tokens is incorrect")
			})
	)

	it("Creates two new tokens", () =>
		IntellectualProperty.deployed()
			.then(instance => {
				instance.awardIP(accounts[1], "hashexample", "metadata")
				instance.awardIP(accounts[1], "hashexample2", "metadata1")
				return instance.balanceOf.call(accounts[1])
			})
			.then(numOfTokens => {
				assert.equal(numOfTokens, 2, "The token wasn't successfully created")
			})
	);

	it("Can access the metadata of the token", () => 
		IntellectualProperty.deployed()
			.then(instance => {
				return instance.tokenURI.call(2)
			})
			.then(tokenURI => {
				assert.equal(tokenURI, "metadata", "The metadata didn't register correctly")
			})
	);

	it("Blocks multiple registration of the same hash", async () => {
		const instance = await IntellectualProperty.deployed();
    	const balance = await instance.tokenURI.call(2);
    	var passed = false;
	    	
	    try {
	    	const badToken = await instance.awardIP(accounts[0], "hashexample", "metadata");
	    	assert.equal(false, true);
	    } catch (err) {
	    	var error = err.toString().includes("Hash Already Registered");
	    	assert.equal(error, true, "The contract recorded a token with the same hash twice");
	    }
	});

	it("Can retrive the owner of the token", () =>
		IntellectualProperty.deployed()
			.then(instance => {
				return instance.ownerOf(1)
			})
			.then(ownerAddress => {
				assert.equal(ownerAddress, accounts[0])
			})
	)

	it("Allows to transfer IP", async () => {
		const instance = await IntellectualProperty.deployed();
		const ownerOfToken1 = await instance.ownerOf(1);
		await instance.safeTransferFrom(ownerOfToken1, accounts[1], 1);
		const ownerOfToken2 = await instance.ownerOf(1);
		assert.notEqual(ownerOfToken1, ownerOfToken2, "The IP was not transferred")
	});
});