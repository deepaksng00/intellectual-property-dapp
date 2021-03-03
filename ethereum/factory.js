import web3 from './web3';
import RegisteredIPFactory from './build/RegisteredIPFactory.json';

/* --- Creating handle to access factory contract on the blockchain --- */
const factory = new web3.eth.Contract(
	RegisteredIPFactory.abi,
	'0x775ccfB286a0a79AAE0322F3385c4FAb2A3437FC'
);

export default factory;
