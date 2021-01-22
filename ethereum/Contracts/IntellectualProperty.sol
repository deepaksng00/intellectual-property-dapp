pragma solidity ^0.8.0;
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
        Trademark newTrademark = new Trademark(block.timestamp, msg.sender);
        deployedTrademarks.push(address(newTrademark));
    }

    /* --- Deploys new patent on the blockchain --- */
    function createPatent() public {
        deployedPatents.push(address(new Patent(block.timestamp, msg.sender)));
    }

    /* --- Deploys new design on the blockchain --- */
    function createDesign() public {
        Design newDesign = new Design(block.timestamp, msg.sender);
        deployedDesigns.push(address(newDesign));
    }
    
    /* --- Returns all trademarks --- */
    function getTrademarks() public view returns (address[] memory) {
        return deployedTrademarks;
    }

    /* --- Returns all trademarks --- */
    function getPatents() public view returns (address[] memory) {
        return deployedPatents;
    }

    /* --- Returns all trademarks --- */
    function getDesigns() public view returns (address[] memory) {
        return deployedDesigns;
    }
}

/* --- Intellectual Property parent contract --- */
contract IntellectualProperty {
    string private status;
    uint256 private filingDate;
    uint256 private publicationDate;
    address private owner;
    
    /* --- Modifier to restrict access only to the owners --- */
    modifier restricted() {
        require(msg.sender == owner, "Access denied. Only the owners can access this function.");
        _;
    }
    
    /* --- Constructor with multiple attributes --- */
    constructor(uint256 date_input, address owner_input) public {
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
}

contract Trademark is IntellectualProperty {
    /* --- Constructor that links to parent contract --- */
    constructor(uint256 date_input, address owner_input) IntellectualProperty(date_input, owner_input) public {
        
    }
}

contract Patent is IntellectualProperty {
    /* --- Constructor that links to parent contract --- */
    constructor(uint256 date_input, address owner_input) IntellectualProperty(date_input, owner_input) public {
        
    }
}

contract Design is IntellectualProperty {
     /* --- Constructor that links to parent contract --- */
    constructor(uint256 date_input, address owner_input) IntellectualProperty(date_input, owner_input) public {
        
    }
}