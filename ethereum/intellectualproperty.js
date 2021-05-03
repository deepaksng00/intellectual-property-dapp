import web3 from './web3';
import IntellectualProperty from '../build/contracts/IntellectualProperty.json';

const address = "0x5B0b58054390100625C1D626833D7cc35a436698";
const abi = IntellectualProperty.abi;

const contract = new web3.eth.Contract(
	IntellectualProperty.abi,
	address
);

export default contract;


