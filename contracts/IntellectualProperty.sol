pragma solidity 0.7.6;
// SPDX-License-Identifier: UNLICENSED;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract IntellectualProperty is ERC721 {
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;
	mapping(string => uint8) IPFS_Hashes;

	constructor() public ERC721("IntellectualProperty", "IP") {

	}

	function awardIP(address _owner, string memory _hash, string memory _metadata) public returns (uint256) {
		require(IPFS_Hashes[_hash] != 1, "Error: Hash Already Registered");
		IPFS_Hashes[_hash] = 1;
		_tokenIds.increment();
		uint256 newItemID = _tokenIds.current();
		_mint(_owner, newItemID);
		_setTokenURI(newItemID, _metadata);
		return newItemID;
	}
}