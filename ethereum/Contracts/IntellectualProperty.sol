pragma solidity ^0.7.4;
// SPDX-License-Identifier: MIT

/* --- Factory contract (manager for deploying new instances of 'IP') --- */
contract RegisteredIPFactory {
  /* --- Stores all deployed trademarks --- */
  mapping(address => address[]) private deployedTrademarks;
  uint256 private numOfTrademarks;

  /* --- Stores all deployed patents --- */
  mapping(address => address[]) private deployedPatents;
  uint256 private numOfPatents;

  /* --- Stores all deployed designs --- */
  mapping(address => address[]) private deployedDesigns;
  uint256 private numOfDesigns;

  /* --- All users --- */
  address[] private users;
  
  /* --- Struct containing details of a hash --- */
  struct Hash {
    address owner;
    uint256 isExist;
  }

  /* --- Stores all deployed hashes --- */
  mapping(string => Hash) private deployedHashes;

  /* --- Deploys new trademark on the blockchain --- */
  function createTrademark(string memory mark_desc, string memory hash_input) public {
    // checks if hash has been previously registered
    if (deployedHashes[hash_input].isExist == 0) {
      address newTrademark = address(new Trademark(address(this), "active", block.timestamp, block.timestamp, msg.sender, mark_desc, hash_input, block.timestamp + 10 * 365 days));
      deployedTrademarks[msg.sender].push(newTrademark);
      addHash(newTrademark, hash_input);
      numOfTrademarks+=1;
      users.push(msg.sender);
    } else {
        require(false, "ERR: 01");
    }
  }
  
  /* --- Creates hash entry --- */
  function addHash(address addressOfIP, string memory hash) private {
    Hash memory newHash = Hash({
        owner: addressOfIP,
        isExist: 1
    });

    deployedHashes[hash] = newHash;
  }

  /* --- Deploys new patent on the blockchain --- */
  function createPatent(string memory title, string memory inventor_address, string memory hash_input) public {
    // checks if hash has been previously registered
    if (deployedHashes[hash_input].isExist == 0) {
      address newPatent = address(new Patent(address(this), "active", block.timestamp, block.timestamp, msg.sender, title, inventor_address, hash_input, block.timestamp + 20 * 365 days));
      deployedPatents[msg.sender].push(newPatent);

      addHash(newPatent, hash_input);

      numOfPatents+=1;
      users.push(msg.sender);
    } else {
      require(false, "ERR: 01");
    }
  }

  /* --- Deploys new design on the blockchain --- */
  function createDesign(string memory comment, string memory hash_input) public {
    // checks if hash has been previously registered
    if (deployedHashes[hash_input].isExist == 0) {
      address newDesign = address(new Design(address(this), "active", block.timestamp, block.timestamp, msg.sender, comment, hash_input, block.timestamp + 5 * 365 days));
      deployedDesigns[msg.sender].push(newDesign);
      
      addHash(newDesign, hash_input);

      numOfDesigns+=1;
      users.push(msg.sender);
    } else {
      require(false, "ERR: 01");
    }
  }

  /* --- Returns a trademark --- */
  function getTrademarks(address owner) public view returns (address[] memory) {
    return deployedTrademarks[owner];
  }

  /* --- Returns all patents --- */
  function getPatents(address owner) public view returns (address[] memory) {
    return deployedPatents[owner];
  }

  /* --- Returns all designs --- */
  function getDesigns(address owner) public view returns (address[] memory) {
    return deployedDesigns[owner];
  }

  /* --- Return length of trademarks --- */
  function getNumOfTrademarks() public view returns (uint256) {
    return numOfTrademarks;
  }

  /* --- Return length of patents --- */
  function getNumOfPatents() public view returns (uint256) {
    return numOfPatents;
  }

  /* --- Return length of designs --- */
  function getNumOfDesigns() public view returns (uint256) {
    return numOfDesigns;
  }

  /* --- Check if hash is already registered --- */
  function checkHash(string memory fileHash) public view returns (address) {
    if (deployedHashes[fileHash].isExist == 1) {
      return deployedHashes[fileHash].owner;
    } else {
      return address(0);
    }
  }

  /* --- Removes hash from the system --- */
  function disableTrademark(string memory fileHash, address contractAddress) public {
    Trademark t = Trademark(contractAddress);
    require(msg.sender == t.getOwner(), 'ERR: 02');
    delete deployedHashes[fileHash];
    t.disableIP();
  }
  
    /* --- Removes hash from the system --- */
  function disablePatent(string memory fileHash, address contractAddress) public {
    Patent p = Patent(contractAddress);
    require(msg.sender == p.getOwner(), 'ERR: 02');
    delete deployedHashes[fileHash];
    p.disableIP();
  }
  
    /* --- Removes hash from the system --- */
  function disableDesign(string memory fileHash, address contractAddress) public {
    Design d = Design(contractAddress);
    require(msg.sender == d.getOwner(), 'ERR: 02');
    delete deployedHashes[fileHash];
    d.disableIP();
  }
}

/* --- Intellectual Property parent contract --- */
abstract contract IntellectualProperty {
  address private factoryAddress;
  string private status;
  uint256 private publicationDate;
  uint256 private statusDate;
  uint256 private expirationDate;
  address private owner;
  string private fileHash;
  mapping (address => bool) private co_owners;

  /* --- Modifier to restrict access only to the owners --- */
  modifier restricted() {
    require(msg.sender == owner, "ERR: 02");
    _;
  }

  /* --- Constructor with multiple attributes --- */
  constructor(address factoryAddr, string memory stat, uint256 pDate, uint256 sDate, address own, string memory hash, uint256 eDate) {
    factoryAddress = factoryAddr;
    status = stat;
    publicationDate = pDate;
    statusDate = sDate;
    owner = own;
    fileHash = hash;
    expirationDate = eDate;
  }

  /* --- SETTERS AND GETTERS --- */

  function getFactoryAddress() public view returns(address) {
    return factoryAddress;
  }

  function getStatus() public view returns(string memory) {
    return status;
  }

  function getPublicationDate() public view returns(uint256) {
    return publicationDate;
  }

  function getStatusDate() public view returns(uint256) {
    return statusDate;
  }

  function getOwner() public view returns(address) {
    return owner;
  }
  
  function getHash() public view returns(string memory) {
    return fileHash;
  }
  
  function getExpirationDate() public view returns(uint256) {
    return expirationDate;
  }

  function disableIP() public {
    require(msg.sender == owner || co_owners[msg.sender] || msg.sender == factoryAddress, "ERR: 02");
    status = "disabled";
    statusDate = block.timestamp;
  }

  function setOwner(address owner_input) public restricted {
    owner = owner_input;
  }

  function setExpirationDate(uint256 expiry_date) public restricted {
    expirationDate = expiry_date;
  }
}

contract Trademark is IntellectualProperty {
  /* --- Constructor that links to parent contract --- */
  string private markDesc;

  constructor(address factoryAddress, string memory status, uint256 fDate, uint256 sDate, address owner, string memory markD, string memory hash, uint256 eDate) IntellectualProperty(factoryAddress, status, fDate, sDate, owner, hash, eDate) {
    markDesc = markD;
  }

  function getMarkDesc() public view returns(string memory) {
    return markDesc;
  }

  function setMarkDesc(string memory markDesc_input) public restricted {
    markDesc = markDesc_input;
  }
}

contract Patent is IntellectualProperty {
  string private title;
  string private inventorAddress;

  /* --- Constructor that links to parent contract --- */
  constructor(address factoryAddress, string memory status, uint256 fDate, uint256 sDate, address owner, string memory title_i, string memory addressInv, string memory hash, uint256 eDate) IntellectualProperty(factoryAddress, status, fDate, sDate, owner, hash, eDate) {
    title = title_i;
    inventorAddress = addressInv;
  }

  function getTitle() public view returns(string memory) {
    return title;
  }

  function getInventorAddress() public view returns(string memory) {
    return inventorAddress;
  }

  function setTitle(string memory title_input) public restricted {
    title = title_input;
  }

  function setInventorAddress(string memory address_input) public restricted {
    inventorAddress = address_input;
  }
}

contract Design is IntellectualProperty {
  string private comment;

   /* --- Constructor that links to parent contract --- */
  constructor(address factoryAddress, string memory status, uint256 fDate, uint256 sDate, address owner, string memory com, string memory hash, uint256 eDate) IntellectualProperty(factoryAddress, status, fDate, sDate, owner, hash, eDate) {
    comment = com;
  }

  function getComment() public view returns(string memory) {
    return comment;
  }

  function setComment(string memory com) public restricted {
    comment = com;
  }
}