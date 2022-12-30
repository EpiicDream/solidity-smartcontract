import { expect } from "chai";
import { ethers } from "hardhat";

// We use `loadFixture` to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage of Hardhat Network's snapshot functionality.
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("MyMessage contract", function() {

  async function deployContract() {
    const [owner, addr1] = await ethers.getSigners();
    const MyMessage = await ethers.getContractFactory("MyMessage");
    const myMessageContract = await MyMessage.deploy("Hey it's my message!");
    await myMessageContract.deployed();
    return {myMessageContract, owner, addr1};
  }

  describe ("Deployment", function() {

    it ("Should deploy contract with correct message", async function() {
      // We use loadFixture to setup our environment, and then assert that
      // things went well
      const {myMessageContract, owner} = await loadFixture(deployContract);
      expect(await myMessageContract.getMessage()).to.equal("Hey it's my message!");
      expect(await myMessageContract.owner()).to.equal(owner.address);
    });

    it ("Should update message", async function() {
      const {myMessageContract, owner} = await loadFixture(deployContract);
      await myMessageContract.setMessage("A new message!");
      expect(await myMessageContract.getMessage()).to.equal("A new message!");      
    });

  });
});
