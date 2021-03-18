// migration of intellectual property contract
const IntellectualProperty = artifacts.require("IntellectualProperty");

module.exports = async function (deployer) {
	await deployer.deploy(IntellectualProperty);
}