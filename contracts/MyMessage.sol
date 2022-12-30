// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MyMessage is Ownable {
    
    string public message;

    constructor (string memory _message) {
        message = _message;
    }

    function setMessage(string memory _message) external onlyOwner {
        message = _message;
    }

    function getMessage() external view returns (string memory) {
        return message;
    }

}