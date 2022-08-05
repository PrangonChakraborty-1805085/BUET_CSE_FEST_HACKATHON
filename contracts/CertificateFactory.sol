// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.1;

contract CertificateFactory {

    

    mapping(address => uint8) private enrolledStudents;
    mapping(string => address) private cidToAddress;
    mapping(string => uint) private cidToTimeStamp;

    function requestCertificate(string memory CID) external payable {
        require(enrolledStudents[msg.sender] > 0, "Not enrolled in any course.");
        cidToAddress[CID] = msg.sender;
        cidToTimeStamp[CID] = block.timestamp;
        enrolledStudents[msg.sender]--;
        payable(msg.sender).transfer(1e15);
    }

    function verifyCertificate(string memory CID, address wallet_address) external view returns (string memory){
        address temp = cidToAddress[CID];
        uint timestamp = cidToTimeStamp[CID];
        if(temp == wallet_address) {
            if(block.timestamp >= (timestamp + 90 days)) {
                return "expired";
            } else {
                return "valid";
            }
        } else {
            return "invalid";
        }
    }

    function depositFund() external payable {
        require(msg.value == 1e15, "You need to deposit 0.001 ETH.");
        enrolledStudents[msg.sender]++;
    }

}
