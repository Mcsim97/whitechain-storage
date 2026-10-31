import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("Storage", function () {
  async function deploy() {
    return ethers.deployContract("Storage");
  }

  it("returns 0 before anything is stored", async function () {
    const storage = await deploy();
    expect(await storage.retrieve()).to.equal(0n);
  });

  it("stores and retrieves a value", async function () {
    const storage = await deploy();
    await (await storage.store(42n)).wait();
    expect(await storage.retrieve()).to.equal(42n);
  });

  it("overwrites the previous value", async function () {
    const storage = await deploy();
    await (await storage.store(1n)).wait();
    await (await storage.store(2n)).wait();
    expect(await storage.retrieve()).to.equal(2n);
  });

  it("lets any account store a value", async function () {
    const storage = await deploy();
    const [, other] = await ethers.getSigners();
    await (await storage.connect(other).store(7n)).wait();
    expect(await storage.retrieve()).to.equal(7n);
  });
});
