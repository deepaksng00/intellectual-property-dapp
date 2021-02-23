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
  
  /* --- All users --- */
  address[] private users;

  uint256 private numOfDesigns;

  /* --- Struct containing details of a hash --- */
  struct Hash {
    address owner;
    bool isExist;
  }

  /* --- Stores all deployed hashes --- */
  mapping(string => Hash) private deployedHashes;

  /* --- Deploys new trademark on the blockchain --- */
  function createTrademark(string memory mark_desc, string memory hash_input) public {
    // checks if hash has been previously registered
    if (!deployedHashes[hash_input].isExist) {
      deployedTrademarks[msg.sender].push(address(new Trademark("disabled", block.timestamp, block.timestamp, msg.sender, mark_desc)));
      
      Hash memory newHash = Hash({
        owner: msg.sender,
        isExist: true
      });

      deployedHashes[hash_input] = newHash;
      numOfTrademarks+=1;
      users.push(msg.sender);
    }
  }

  /* --- Deploys new patent on the blockchain --- */
  function createPatent(string memory title, string memory inventor_address, string memory hash_input) public {
    // checks if hash has been previously registered
    if (!deployedHashes[hash_input].isExist) {
      address newPatent = address(new Patent("disabled", block.timestamp, block.timestamp, msg.sender, title, inventor_address));
      deployedPatents[msg.sender].push(newPatent);

      Hash memory newHash = Hash({
        owner: newPatent,
        isExist: true
      });

      deployedHashes[hash_input] = newHash;
      numOfPatents+=1;
      users.push(msg.sender);
    }
  }

  /* --- Deploys new design on the blockchain --- */
  function createDesign(string memory comment, string memory hash_input) public {
    // checks if hash has been previously registered
    if (!deployedHashes[hash_input].isExist) {
      address newDesign = address(new Design("disabled", block.timestamp, block.timestamp, msg.sender, comment));
      deployedDesigns[msg.sender].push(newDesign);
      
      Hash memory newHash = Hash({
        owner: newDesign,
        isExist: true
      });

      deployedHashes[hash_input] = newHash;
      numOfDesigns+=1;
      users.push(msg.sender);
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
  function getNumOfTrademarks() public view returns (uint) {
    return numOfTrademarks;
  }

  /* --- Return length of patents --- */
  function getNumOfPatents() public view returns (uint) {
    return numOfPatents;
  }

  /* --- Return length of designs --- */
  function getNumOfDesigns() public view returns (uint) {
    return numOfDesigns;
  }

  /* --- Check if hash is already registered --- */
  function checkHash(string memory fileHash) public view returns (address) {
    if (deployedHashes[fileHash].isExist) {
      return deployedHashes[fileHash].owner;
    } else {
      return address(0);
    }
  }
}

/* --- Intellectual Property parent contract --- */
abstract contract IntellectualProperty {
  string private status;
  uint256 private filingDate;
  uint256 private publicationDate;
  uint256 private statusDate;
  address private owner;
  mapping (address => bool) private co_owners;

  /* --- Modifier to restrict access only to the owners --- */
  modifier restricted() {
    require(msg.sender == owner || co_owners[msg.sender], "Access denied. Only the owner or co_owners can access this function.");
    _;
  }

  /* --- Constructor with multiple attributes --- */
  constructor(string memory status_input, uint256 filing_date, uint256 status_date, address owner_input) {
    status = status_input;
    filingDate = filing_date;
    statusDate = status_date;
    owner = owner_input;
  }

  /* --- SETTERS AND GETTERS --- */

  function getStatus() public view returns(string memory) {
    return status;
  }

  function getFilingDate() public view returns(uint256) {
    return filingDate;
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

  function check_co_owners(address co_owner) public view returns(bool) {
    return co_owners[co_owner];
  }

  function setStatus(string memory inputStatus) public restricted {
    status = inputStatus;
  }

  function setFilingDate(uint256 date) public restricted {
    filingDate = date;
  }

  function setPublicationDate(uint256 date) public restricted {
    publicationDate = date;
  }

  function setStatusDate(uint256 date) public restricted {
    statusDate = date;
  }

  function setOwner(address owner_input) public restricted {
    owner = owner_input;
  }

  function add_co_owner(address co_owner) public restricted {
    co_owners[co_owner] = true;
  }

  function remove_co_owner(address co_owner) public restricted {
    delete co_owners[co_owner];
  }
}

contract Trademark is IntellectualProperty {
  /* --- Constructor that links to parent contract --- */
  uint256 private renewalDate;
  string private markDesc;

  constructor(string memory status_input, uint256 filing_date, uint256 status_date, address owner_input, string memory mark_desc) IntellectualProperty(status_input, filing_date, status_date, owner_input) {
    renewalDate = block.timestamp + 10 * 365 days;
    markDesc = mark_desc;
  }

  function getRenewalDate() public view returns(uint256) {
    return renewalDate;
  }

  function getMarkDesc() public view returns(string memory) {
    return markDesc;
  }

  function setRenewalDate(uint256 renewalDate_input) public restricted {
    renewalDate = renewalDate_input;
  }

  function setMarkDesc(string memory markDesc_input) public restricted {
    markDesc = markDesc_input;
  }
}

contract Patent is IntellectualProperty {
  string private title;
  string private inventorAddress;
  uint256 private expirationDate;

  /* --- Constructor that links to parent contract --- */
  constructor(string memory status_input, uint256 filing_date, uint256 status_date, address owner_input, string memory title_input, string memory inventor_address) IntellectualProperty(status_input, filing_date, status_date, owner_input) {
    title = title_input;
    inventorAddress = inventor_address;
    expirationDate = block.timestamp + 20 * 365 days;
  }

  function getTitle() public view returns(string memory) {
    return title;
  }

  function getInventorAddress() public view returns(string memory) {
    return inventorAddress;
  }

  function getExpirationDate() public view returns(uint256) {
    return expirationDate;
  }

  function setTitle(string memory title_input) public restricted {
    title = title_input;
  }

  function setInventorAddress(string memory address_input) public restricted {
    inventorAddress = address_input;
  }

  function setExpirationDate(uint256 date_input) public restricted {
    expirationDate = date_input;
  }
}

contract Design is IntellectualProperty {
  uint256 private expirationDate;
  string private comment;

   /* --- Constructor that links to parent contract --- */
  constructor(string memory status_input, uint256 filing_date, uint256 status_date, address owner_input, string memory comment_input) IntellectualProperty(status_input, filing_date, status_date, owner_input) {
    expirationDate = block.timestamp + 5 * 365 days;
    comment = comment_input;
  }

  function getExpirationDate() public view returns(uint256) {
    return expirationDate;
  }

  function getComment() public view returns(string memory) {
    return comment;
  }

  function setExpirationDate(uint256 date_input) public restricted {
    expirationDate = date_input;
  }

  function setComment(string memory comment_input) public restricted {
    comment = comment_input;
  }
}
