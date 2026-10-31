import { network } from "hardhat";

// Storage contract deployed to Whitechain Sepolia. Override with STORAGE_ADDRESS=0x...
const address = process.env.STORAGE_ADDRESS ?? "0x639A7Bb8c974489273F702892fCC913dC4e7aA2D";

const { ethers, networkName } = await network.create();

const { chainId } = await ethers.provider.getNetwork();
const storage = await ethers.getContractAt("Storage", address);

console.log(`Network:    ${networkName} (chainId ${chainId})`);
console.log(`Contract:   ${address}`);
console.log(`retrieve(): ${await storage.retrieve()}`);
