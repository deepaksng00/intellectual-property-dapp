import web3 from './web3';
import IntellectualProperty from '../build/contracts/IntellectualProperty.json';

const address = "0xB61cCa4A95c8c5f1744f6Cd436EbE88167d4C6a8";
const abi = IntellectualProperty.abi;

const contract = new web3.eth.Contract(
	IntellectualProperty.abi,
	address
);

export default contract;


