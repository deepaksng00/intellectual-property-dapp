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
    function createIP(string memory typeOfIP) public {
        if (keccak256(bytes(typeOfIP)) == keccak256(bytes("TRADEMARK"))) {
            string memory code = "TM";
            uint256 number = deployedTrademarks.length + 1;
            string memory id = string(abi.encodePacked(code, number));
            Trademark newTrademark = new Trademark(id, block.timestamp, msg.sender);
            deployedTrademarks.push(newTrademark.getAddress());
        } else if (keccak256(bytes(typeOfIP)) == keccak256(bytes("PATENT"))) {
            string memory code = "PT";
            uint256 number = deployedPatents.length + 1;
            string memory id = string(abi.encodePacked(code, number));
            Patent newPatent = new Patent(id, block.timestamp, msg.sender);
        } else if (keccak256(bytes(typeOfIP)) == keccak256(bytes("DESIGN"))) {
            string memory code = "DS";
            uint256 number = deployedDesigns.length + 1;
            string memory id = string(abi.encodePacked(code, number));
            Design newDesign = new Design(id, block.timestamp, msg.sender);
        }
    }
    
    /* --- Returns all registered intellectual property by type --- */
    function getRegisteredIP(string memory typeOfIP) public view returns (address[] memory) {
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
    address[] private owners;
    
    /* --- Modifier to restrict access only to the owners --- */
    modifier restricted() {
        require(msg.sender == owners, "Access denied. Only the owners can access this function.");
        _;
    }
    
    /* --- Constructor with multiple attributes --- */
    constructor(string memory id, uint256 date, address owner) {
        ip_id = id;
        filingDate = date;
        owners.push(owner);
    }
    
    /* --- SETTERS AND GETTERS --- */

    function getAddress() public view returns (address) {
        return address(this);
    }
    
    function getID() public view returns(string memory) {
        return ip_id;
    }    
    
    function getStatus() public view returns(string memory) {
        return status;
    }
    
    function getFilingDate() public view returns(uint256) {
        return filingDate;
    }
    
    function getPublicationDate() public view returns(uint256) {
        return publicationDate;
    }
    
    function getOwners() public view returns(address[] memory) {
        return owners;
    }
    
    function setStatus(string memory inputStatus) public restricted {
        status = inputStatus;
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

contract Trademark is IntellectualProperty {

}

contract Patent is IntellectualProperty {
    
}

contract Design is IntellectualProperty {
    
}