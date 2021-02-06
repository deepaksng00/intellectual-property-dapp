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
    address private owner;
    mapping (address => bool) private co_owners;

    /* --- Modifier to restrict access only to the owners --- */
    modifier restricted() {
        require(msg.sender == owner || co_owners[msg.sender], "Access denied. Only the owner or co_owners can access this function.");
        _;
    }

    /* --- Constructor with multiple attributes --- */
    constructor(uint256 date_input, address owner_input) {
        filingDate = date_input;
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

    constructor(uint256 date_input, address owner_input) IntellectualProperty(date_input, owner_input) public {

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
    uint256 private grantDate;
    string private title;
    string private addressForService;
    string private inventorAddress;
    string private applicantAddress;
    uint256 private expirationDate;

    /* --- Constructor that links to parent contract --- */
    constructor(uint256 date_input, address owner_input) IntellectualProperty(date_input, owner_input) public {

    }

    function getGrantDate() public view returns(uint256) {
        return grantDate;
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

    function setGrantDate(uint256 date_input) public restricted {
        grantDate = date_input;
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
    string private officeCode;
    string private languageCode;
    uint256 private expirationDate;
    uint256 private statusDate;
    string private comment;
    string private designHash;

     /* --- Constructor that links to parent contract --- */
    constructor(uint256 date_input, address owner_input) IntellectualProperty(date_input, owner_input) public {

    }

    function getOfficeCode() public view returns(string memory) {
        return officeCode;
    }

    function getLanguageCode() public view returns(string memory) {
        return languageCode;
    }

    function getExpirationDate() public view returns(uint256) {
        return expirationDate;
    }

    function getStatusDate() public view returns(uint256) {
        return statusDate;
    }

    function getComment() public view returns(string memory) {
        return comment;
    }

    function getDesignHash() public view returns(string memory) {
        return designHash;
    }

    function setOfficeCode(string memory code_input) public restricted {
        officeCode = code_input;
    }

    function setLanguageCode(string memory code_input) public restricted {
        languageCode = code_input;
    }

    function setExpirationDate(uint256 date_input) public restricted {
        expirationDate = date_input;
    }

    function setStatusDate(uint256 date_input) public restricted {
        statusDate = date_input;
    }

    function setComment(string memory comment_input) public restricted {
        comment = comment_input;
    }

    function setDesignHash(string memory hash_input) public restricted {
        designHash = hash_input;
    }
}
