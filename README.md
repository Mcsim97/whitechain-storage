# Whitechain Storage

My first smart contract on **Whitechain Sepolia** testnet, built for the Whitechain Builders Ukraine challenge.

`Storage` keeps a single `uint256`: `store(num)` writes it, `retrieve()` reads it.

## Deployed contract

| | |
|---|---|
| Network | Whitechain Sepolia (chainId `1874`) |
| Address | [`0x639A7Bb8c974489273F702892fCC913dC4e7aA2D`](https://explorer.testnet.whitechain.io/address/0x639A7Bb8c974489273F702892fCC913dC4e7aA2D) |
| Source | Verified on the explorer |
| Compiler | Solidity 0.8.30, optimizer off |
| Deploy tx | [`0x6860…2cbd`](https://explorer.testnet.whitechain.io/tx/0x68604c460362718a03e7c788593b10f4a8d4cca31c5d213579fcdd2327842cbd) |
| `store(42)` tx | [`0x0dfe…d728`](https://explorer.testnet.whitechain.io/tx/0x0dfed65830f96345558ce53000e39b8c74f37af8a0680826a1214dd17cd8d728) |

## Project structure

```
contracts/Storage.sol     the contract
test/Storage.test.ts      unit tests (local Hardhat network)
scripts/deploy.ts         deploy + store(42) on Whitechain Sepolia
scripts/read.ts           read retrieve() from the deployed contract
hardhat.config.ts         Whitechain Sepolia network + Sourcify verification
```

Built with [Hardhat 3](https://hardhat.org) and ethers v6.

## Getting started

Requires Node.js 22+.

```bash
npm install
npm test          # compile and run the tests
npm run read      # read the value stored in the deployed contract (no key needed)
```

## Deploy your own copy

1. Get test WBT from the faucet: https://faucet.testnet.whitechain.io
2. Copy `.env.example` to `.env` and set `PRIVATE_KEY` of a **test** wallet.
3. Deploy:

   ```bash
   npm run deploy
   ```

4. Verify the source (submits to Sourcify):

   ```bash
   npx hardhat verify --network whitechainSepolia <deployed_address>
   ```

To read your own deployment: `STORAGE_ADDRESS=<deployed_address> npm run read`.

> Never commit `.env` — it is in `.gitignore`.

## Network

| | |
|---|---|
| RPC | https://rpc.testnet.whitechain.io |
| Chain ID | 1874 |
| Currency | WBT |
| Explorer | https://explorer.testnet.whitechain.io |
| Docs | https://docs.whitechain.io |

## License

MIT
