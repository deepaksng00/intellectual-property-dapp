import web3 from './web3';
import IntellectualProperty from '../build/contracts/IntellectualProperty.json';

const address = "0x9BBD879555839b96ed39AE0e3e478C3854A67C44";
const abi = IntellectualProperty.abi;

const contract = new web3.eth.Contract(
	IntellectualProperty.abi,
	address
);

export default contract;


