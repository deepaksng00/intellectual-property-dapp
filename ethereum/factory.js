import web3 from './web3';
import RegisteredIPFactory from './build/RegisteredIPFactory.json';

/* --- Creating handle to access factory contract on the blockchain --- */
const factory = new web3.eth.Contract(
	RegisteredIPFactory.abi,
	'0x4207F0Fe0545F4d387d80980F0f3ED47898aD2c8'
);

export default factory;