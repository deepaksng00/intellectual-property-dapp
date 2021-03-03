import web3 from './web3';
import RegisteredIPFactory from './build/RegisteredIPFactory.json';

/* --- Creating handle to access factory contract on the blockchain --- */
const factory = new web3.eth.Contract(
	RegisteredIPFactory.abi,
	'0xfC1B58D25e33a9d83f3CeD84601da5E6668Cb6E8'
);

export default factory;
