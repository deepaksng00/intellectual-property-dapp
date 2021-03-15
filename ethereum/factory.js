import web3 from './web3';
import RegisteredIPFactory from './build/RegisteredIPFactory.json';

/* --- Creating handle to access factory contract on the blockchain --- */
const factory = new web3.eth.Contract(
	RegisteredIPFactory.abi,
	'0xfc1Df5F92c22cb023B0F8cbc70F7D58d7a6caDb1'
);

export default factory;
