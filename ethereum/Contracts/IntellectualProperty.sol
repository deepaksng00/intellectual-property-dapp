pragma solidity ^0.7.6;
// SPDX-License-Identifier: MIT

/* --- Factory contract (manager for deploying new instances of 'IP') --- */
contract RegisteredIPFactory {
  /* --- Stores all deployed trademarks --- */
  address[] private deployedTrademarks;

  /* --- Stores all deployed patents --- */
  address[] private deployedPatents;

  /* --- Stores all deployed designs --- */
  address[] private deployedDesigns;

  /* --- Deploys new trademark on the blockchain --- */
  function createTrademark() public {
    deployedTrademarks.push(address(new Trademark(block.timestamp, msg.sender)));
  }

  /* --- Deploys new patent on the blockchain --- */
  function createPatent() public {
    deployedPatents.push(address(new Patent(block.timestamp, msg.sender)));
  }

  /* --- Deploys new design on the blockchain --- */
  function createDesign() public {
    deployedDesigns.push(address(new Design(block.timestamp, msg.sender)));
  }

  /* --- Returns all trademarks --- */
  function getTrademarks() public view returns (address[] memory) {
    return deployedTrademarks;
  }

  /* --- Returns all patents --- */
  function getPatents() public view returns (address[] memory) {
    return deployedPatents;
  }

  /* --- Returns all designs --- */
  function getDesigns() public view returns (address[] memory) {
    return deployedDesigns;
  }

  /* --- Return length of trademarks --- */
  function getNumOfTrademarks() public view returns (uint) {
    return deployedTrademarks.length;
  }

  /* --- Return length of patents --- */
  function getNumOfPatents() public view returns (uint) {
    return deployedPatents.length;
  }

  /* --- Return length of designs --- */
  function getNumOfDesigns() public view returns (uint) {
    return deployedDesigns.length;
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
  constructor(string memory status_input, uint256 filing_date, uint256 publish_date, uint256 status_date, address owner_input) {
    status = status_input;
    filingDate = filing_date;
    publicationDate = publish_date;
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
  string private markImageHash;

  constructor(string memory status_input, uint256 filing_date, uint256 publish_date, uint256 status_date, address owner_input, uint256 renewal_date, string memory mark_desc, string memory mark_image_hash) IntellectualProperty(status_input, filing_date, publish_date, status_date, owner_input) public {
    renewalDate = renewal_date;
    markDesc = mark_desc;
    markImageHash = mark_image_hash;
  }

  function getRenewalDate() public view returns(uint256) {
    return renewalDate;
  }

  function getMarkDesc() public view returns(string memory) {
    return markDesc;
  }

  function getImageHash() public view returns(string memory) {
    return markImageHash;
  }

  function setRenewalDate(uint256 renewalDate_input) public restricted {
    renewalDate = renewalDate_input;
  }

  function setMarkDesc(string memory markDesc_input) public restricted {
    markDesc = markDesc_input;
  }

  function setMarkHash(string memory hash_input) public restricted {
    markImageHash = hash_input;
  }
}

contract Patent is IntellectualProperty {
  string private title;
  string private addressForService;
  string private inventorAddress;
  string private applicantAddress;
  uint256 private expirationDate;

  /* --- Constructor that links to parent contract --- */
  constructor(string memory status_input, uint256 filing_date, uint256 publish_date, uint256 status_date, address owner_input, string memory title_input, string memory service_address, string memory inventor_address, string memory applicant_address, uint256 expiration_date) IntellectualProperty(status_input, filing_date, publish_date, status_date, owner_input) public {
    title = title_input;
    addressForService = service_address;
    inventorAddress = inventor_address;
    applicantAddress = applicant_address;
    expirationDate = expiration_date;
  }

  function getTitle() public view returns(string memory) {
    return title;
  }

  function getAddressForService() public view returns(string memory) {
    return addressForService;
  }

  function getInventorAddress() public view returns(string memory) {
    return inventorAddress;
  }

  function getApplicantAddress() public view returns(string memory) {
    return applicantAddress;
  }

  function getExpirationDate() public view returns(uint256) {
    return expirationDate;
  }

  function setTitle(string memory title_input) public restricted {
    title = title_input;
  }

  function setAddressForService(string memory address_input) public restricted {
    addressForService = address_input;
  }

  function setInventorAddress(string memory address_input) public restricted {
    inventorAddress = address_input;
  }

  function setApplicantAddress(string memory address_input) public restricted {
    applicantAddress = address_input;
  }

  function setExpirationDate(uint256 date_input) public restricted {
    expirationDate = date_input;
  }
}

contract Design is IntellectualProperty {
  uint256 private expirationDate;
  string private comment;
  string private designHash;

   /* --- Constructor that links to parent contract --- */
  constructor(uint256 date_input, address owner_input, uint256 expiration_date, string memory comment_input, string memory design_hash) IntellectualProperty(date_input, owner_input) public {
    expirationDate = expiration_date;
    comment = comment_input;
    designHash = design_hash;
  }

  function getExpirationDate() public view returns(uint256) {
    return expirationDate;
  }

  function getComment() public view returns(string memory) {
    return comment;
  }

  function getDesignHash() public view returns(string memory) {
    return designHash;
  }

  function setExpirationDate(uint256 date_input) public restricted {
    expirationDate = date_input;
  }

  function setComment(string memory comment_input) public restricted {
    comment = comment_input;
  }

  function setDesignHash(string memory hash_input) public restricted {
    designHash = hash_input;
  }
}
