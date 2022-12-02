// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface iPrime {
    function isPrime(uint num) external pure returns (bool);
    function printFirstPrime(uint n) external view returns (uint[] memory);

}

contract Prime is iPrime {
    constructor (){}

    function isPrime(uint num) external override pure returns (bool){
        if(num < 2){
            return false;
        }
        for(uint i = 2; i < num; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }

    function printFirstPrime(uint n) external override view returns (uint[] memory){
        uint dem = 0;
        uint i = 2;
        uint[] memory arr = new uint[](n);
        while(dem < n){
            if(this.isPrime(i) == true){
                arr[dem] = i;
                dem++;
            }
            i++;
        }
        return arr;
    }
}
