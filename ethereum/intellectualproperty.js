import web3 from './web3';
import IntellectualProperty from '../build/contracts/IntellectualProperty.json';

const address = "0x7A7F2634D7A27BAf802d6c0C2695d34B10C3D602";
const abi = IntellectualProperty.abi;

const contract = new web3.eth.Contract(
	IntellectualProperty.abi,
	address
);

export default contract;


