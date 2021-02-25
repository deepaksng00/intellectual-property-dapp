import web3 from './web3';
import RegisteredIPFactory from './build/RegisteredIPFactory.json';

/* --- Creating handle to access factory contract on the blockchain --- */
const factory = new web3.eth.Contract(
	RegisteredIPFactory.abi,
	'0xBfE888722B8a2a30ef303D3dfeb027DA6FdD3BD6'
);

export default factory;
