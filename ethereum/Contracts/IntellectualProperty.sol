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
    
    /* --- Deploys new intellectual property on the blockchain --- */
    function createIP(string typeOfIP) public {
        if (typeOfIP == "TRADEMARK") {
            string code = "TM";
            uint256 number = deployedTrademarks.length + 1;
            string id = string(abi.encodePacked(code, number));
            Trademark newTrademark = new Trademark(id, now, msg.sender);
            deployedTrademarks.push(newTrademark.getAddress());
        } else if (typeOfIP == "PATENT") {
            string code = "PT";
            uint256 number = deployedPatents.length + 1;
            string id = string(abi.encodePacked(code, number));
            Patent newPatent = new Patent(id, now, msg.sender);
        } else if (typeOfIP == "DESIGN") {
            string code = "DS";
            uint256 number = deployedDesigns.length + 1;
            string id = string(abi.encodePacked(code, number));
            Design newDesign = new Design(id, now, msg.sender);
        }
    }
    
    /* --- Returns all registered intellectual property by type --- */
    function getRegisteredIP(string typeOfIP) public view returns (address[] memory) {
        if (typeOfIP == "TRADEMARK") {
            return deployedTrademarks;
        } else if (typeOfIP == "PATENT") {
            return deployedPatents;
        } else if (typeOfIP == "DESIGN") {
            return deployedDesigns;
        }
    }
}

/* --- Intellectual Property parent contract --- */
contract IntellectualProperty {
    string private ip_id;
    string private status;
    uint256 private filingDate;
    uint256 private publicationDate;
    mapping(address => bool) private owners;
    
    /* --- Modifier to restrict access only to the owners --- */
    modifier restricted() {
        require(msg.sender == owners, "Access denied. Only the owners can access this function.");
        _;
    }
    
    /* --- Constructor with multiple attributes --- */
    constructor(string ip_id, uint256 filingDate, address owner) {
        this.ip_id = ip_id;
        this.filingDate = filingDate;
        owners.push(owner);
    }
    
    /* --- Constructor with less attributes --- */
    constructor(string ip_id) {
        this.ip_id = ip_id;
        this.filingDate = now;
        owners.push(msg.sender);
    }
    
    /* --- SETTERS AND GETTERS --- */

    function getAddress() public view returns (address) {
        return address(this);
    }
    
    function getID() public view returns(string) {
        return ip_id;
    }    
    
    function getStatus() public view returns(string) {
        return status;
    }
    
    function getFilingDate() public view returns(uint256) {
        return filingDate;
    }
    
    function getPublicationDate() public view returns(uint256) {
        return publicationDate;
    }
    
    function getOwners() public view returns(address[] memory) {
        // create array to contain mapping addresses
    }
    
    function setStatus(string status) public restricted {
        this.status = status;
    }
    
    function setFilingDate(uint256 date) public restricted {
        this.filingDate = date;
    }
    
    function setPublicationDate(uint256 date) public restricted {
        this.publicationDate = date;
    }
    
    function addOwner(address owner) public restricted {
        this.owners.push(owner);
    }
}