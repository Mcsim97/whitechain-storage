import "dotenv/config";
import { defineConfig } from "hardhat/config";
import hardhatToolboxMochaEthers from "@nomicfoundation/hardhat-toolbox-mocha-ethers";

const PRIVATE_KEY = process.env.PRIVATE_KEY;

export default defineConfig({
  plugins: [hardhatToolboxMochaEthers],
  solidity: {
    version: "0.8.30",
    settings: {
      optimizer: { enabled: false, runs: 200 },
    },
  },
  networks: {
    whitechainSepolia: {
      type: "http",
      url: "https://rpc.testnet.whitechain.io",
      chainId: 1874,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
  verify: {
    sourcify: {
      enabled: true,
    },
  },
});
