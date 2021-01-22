import Web3 from "web3";

/* --- Instanciating Web3 --- */
let web3;

if (typeof window != "undefined" && window.web3 != "undefined") {
	// JS is running in the browser with Metamask
	web3 = new web3(window.web3.currentProvider);
} else {
	// JS is running in the server without metamask
	const provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/b73cfce8d0f14c9580a6f63f5175157d");
	web3 = new Web3(provider);
}

/* --- Exporting the generated web3 instance for use --- */
export default web3;