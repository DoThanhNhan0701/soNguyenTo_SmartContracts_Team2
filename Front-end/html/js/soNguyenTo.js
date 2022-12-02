function getContractInstance (abi, address) {
    let contract = new web3.eth.Contract(abi, address);
    return contract;
}

// export async function isPrime(instance, num) {
//     return await instance.methods.isPrime(num).call();
// }

async function printFirstPrime(instance, n) {
    return await instance.methods.printFirstPrime(n).call();
}


