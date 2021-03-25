import web3 from './web3';
import IntellectualProperty from '../build/contracts/IntellectualProperty.json';

const address = "0xE44604a2bF3418752DD6B4AbeB0692EbD195C1aE";
const abi = IntellectualProperty.abi;

const contract = new web3.eth.Contract(
	IntellectualProperty.abi,
	address
);

export default contract;


