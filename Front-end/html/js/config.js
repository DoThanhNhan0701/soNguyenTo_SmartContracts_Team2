const Config = {
    Address: "0xD36F8F54830F8821a44C15214f609B271581B33A",
    Abi: [
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "num",
					"type": "uint256"
				}
			],
			"name": "isPrime",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "n",
					"type": "uint256"
				}
			],
			"name": "printFirstPrime",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	],
	boxAddress: "",
	boxABI: "",
}
