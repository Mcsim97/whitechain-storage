import { network } from "hardhat";

const { ethers, networkName } = await network.create();

const [deployer] = await ethers.getSigners();
if (!deployer) {
  throw new Error("No deployer account. Put PRIVATE_KEY in .env (see .env.example).");
}

const balance = await ethers.provider.getBalance(deployer.address);
console.log(`Network:  ${networkName}`);
console.log(`Deployer: ${deployer.address}`);
console.log(`Balance:  ${ethers.formatEther(balance)} WBT`);

const storage = await ethers.deployContract("Storage");
await storage.waitForDeployment();
const address = await storage.getAddress();
console.log(`Storage deployed to: ${address}`);

const tx = await storage.store(42n);
await tx.wait();
console.log(`store(42) tx: ${tx.hash}`);
console.log(`retrieve() = ${await storage.retrieve()}`);

if (networkName === "whitechainSepolia") {
  console.log(`Explorer: https://explorer.testnet.whitechain.io/address/${address}`);
  console.log(`Verify:   npx hardhat verify --network whitechainSepolia ${address}`);
}
