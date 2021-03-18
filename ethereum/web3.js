import Web3 from "web3";

let web3;

/* --- Check if metamask is being used / JS is client-side --- */
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// running client-side with metamask
	web3 = new Web3(window.ethereum);
	window.ethereum.enable();
} else {
	// running server-side or without metamask
	const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
	web3 = new Web3(provider);
}

/* --- Exporting the generated web3 instance for use --- */
export default web3;