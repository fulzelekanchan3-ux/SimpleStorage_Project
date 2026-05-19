const contractAddress = "0x15E5eadb481E462E2Ab8d29D32E1dEfF339B35A6";

const abi = [
	{
		"inputs": [],
		"name": "decrement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "increment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "value",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let web3;
let contract;
let accounts;

window.onload = async () => {

if(window.ethereum){

web3 = new Web3(window.ethereum);

await window.ethereum.request({
method:'eth_requestAccounts'
});

accounts = await web3.eth.getAccounts();

contract = new web3.eth.Contract(
abi,
contractAddress
);

getValue();
}
};

async function getValue(){

const val = await contract.methods
.getValue()
.call();

document.getElementById("value")
.innerText = val;
}

async function increment(){

await contract.methods
.increment()
.send({from:accounts[0]});

await getValue();
}

async function decrement(){

await contract.methods
.decrement()
.send({from:accounts[0]});

await getValue();
}